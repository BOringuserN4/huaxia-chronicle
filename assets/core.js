/* 华夏纪年 · 核心数据、主题与通用组件 */
(function () {
  'use strict';

  const HX = (window.HX = {});
  document.documentElement.classList.add('js');

  const DATA = (window.HISTORY_DATA || []).slice();
  DATA.sort((a, b) => a.riverStart - b.riverStart);

  const DYNASTIES = DATA.filter((d) => d.kind === 'dynasty');
  const INTERLUDES = DATA.filter((d) => d.kind === 'interlude');
  DYNASTIES.forEach((item, index) => { item._chapterIndex = index; });
  const ALL_EVENTS = [];
  const EMPERORS = [];
  const eventById = new Map();
  const emperorById = new Map();
  const itemById = new Map();

  DATA.forEach((item, index) => {
    item._index = index;
    itemById.set(item.id, item);
    item.events.forEach((event, eventIndex) => {
      event._dyn = item;
      event._index = eventIndex;
      ALL_EVENTS.push(event);
      eventById.set(event.id, event);
    });
    if (item.emperors) {
      item.emperors.forEach((emp) => {
        emp._dyn = item;
        emp._events = item.events.filter((event) => event.emperor === emp.id);
        EMPERORS.push(emp);
        emperorById.set(emp.id, emp);
      });
    }
  });
  ALL_EVENTS.sort((a, b) => a.year - b.year || (a._dyn.riverStart - b._dyn.riverStart));

  const TYPES = {
    politics: { label: '政治', glyph: '政', color: '#9e3b2f' },
    war: { label: '军事', glyph: '兵', color: '#40566b' },
    culture: { label: '文教', glyph: '文', color: '#5f7b64' },
    diplomacy: { label: '邦交', glyph: '交', color: '#9a7736' },
    society: { label: '民生', glyph: '民', color: '#8b5f3f' },
    disaster: { label: '灾异', glyph: '灾', color: '#6c6257' }
  };
  const TYPE_ORDER = ['politics', 'war', 'culture', 'diplomacy', 'society', 'disaster'];

  const HOME_THEME = {
    bg: '#efe6d4',
    panel: '#f7eedd',
    paper: '#f3e9d6',
    ink: '#241d16',
    muted: '#776a57',
    seal: '#9c3a2e',
    accent: '#a8843f',
    line: 'rgba(120,95,60,.24)',
    wash: 'rgba(156,58,46,.06)',
    dark: false,
    motif: 'home'
  };

  const THEME_VARS = {
    '--d-bg': 'bg',
    '--d-panel': 'panel',
    '--d-paper': 'paper',
    '--d-ink': 'ink',
    '--d-muted': 'muted',
    '--d-seal': 'seal',
    '--d-accent': 'accent',
    '--d-line': 'line',
    '--d-wash': 'wash'
  };

  const state = {
    mode: 'home',
    item: null,
    selectedEmperor: null,
    eventFilter: 'all',
    timelineZoom: 1,
    timeline: null,
    lastFocused: null,
    searchResults: [],
    searchActive: 0,
    currentEvent: null,
    currentEmperor: null,
    pendingSection: null
  };

  /* ---------------- 通用工具 ---------------- */

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  function fmtYear(year) {
    if (year == null) return '';
    return year < 0 ? '前' + Math.abs(year) : String(year);
  }

  function fmtYearSpan(start, end) {
    if (end == null || end === start) return fmtYear(start);
    return fmtYear(start) + '—' + fmtYear(end);
  }

  function fmtDateSeries(event) {
    const formatOne = (year) => (year < 0 ? '公元前' + Math.abs(year) : '公元' + year) + '年';
    if (event.endYear != null && event.endYear !== event.year) {
      return formatOne(event.year) + '—' + formatOne(event.endYear);
    }
    return formatOne(event.year);
  }

  function yearBadge(event) {
    return event.endYear != null && event.endYear !== event.year
      ? fmtYear(event.year) + '–' + fmtYear(event.endYear)
      : fmtYear(event.year);
  }

  function duration(start, end) {
    return Math.max(1, end - start);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function hexToRgba(hex, alpha) {
    if (!hex) return 'rgba(0,0,0,' + alpha + ')';
    let value = hex.replace('#', '');
    if (value.length === 3) value = value.split('').map((c) => c + c).join('');
    if (value.length !== 6) return hex;
    const num = parseInt(value, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  function typeMeta(type) {
    return TYPES[type] || { label: '纪事', glyph: '史', color: '#8a7358' };
  }

  function itemLabel(item) {
    return item.kind === 'dynasty' ? item.fullName : item.fullName;
  }

  function itemChapter(item) {
    if (item.kind === 'interlude') return '卷外';
    return '卷' + (['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'][item._chapterIndex] || '纪年');
  }

  function shortYears(item) {
    return fmtYearSpan(item.start, item.end);
  }

  function emperorReignText(emp) {
    return emp.reigns && emp.reigns.length > 1
      ? emp.reigns.map((r) => fmtYearSpan(r[0], r[1])).join('、')
      : fmtYearSpan(emp.start, emp.end);
  }

  function emperorEventCount(emp) {
    return emp._events ? emp._events.length : 0;
  }

  function readCountFor(item) {
    return item.events.filter((event) => readSet.has(event.id)).length;
  }

  function dynastyStats(item) {
    return {
      emperors: item.emperors ? item.emperors.length : 0,
      events: item.events.length,
      read: readCountFor(item)
    };
  }

  function primaryReign(emp) {
    if (!emp.reigns || !emp.reigns.length) return [emp.start, emp.end];
    return emp.reigns.reduce((best, reign) => {
      return (reign[1] - reign[0]) > (best[1] - best[0]) ? reign : best;
    }, emp.reigns[0]);
  }

  const HERO_IDS = {
    qin: ['qin-shihuang', 'qin-ershi', 'qin-ziying'],
    'western-han': ['han-gaozu', 'han-wendi', 'han-wudi'],
    'eastern-han': ['eh-guangwu', 'eh-zhangdi', 'eh-xiandi'],
    sui: ['sui-wendi', 'sui-yangdi'],
    tang: ['tang-gaozu', 'tang-taizong', 'tang-suzong'],
    'northern-song': ['ns-taizu', 'ns-zhenzong', 'ns-huizong'],
    'southern-song': ['ss-gaozong', 'ss-lizong', 'ss-bingdi'],
    yuan: ['yuan-taizu', 'yuan-shizu', 'yuan-wenzong'],
    ming: ['ming-taizu', 'ming-chengzu', 'ming-shenzong'],
    qing: ['qing-shengzu', 'qing-shizong', 'qing-gaozong']
  };
  const REPRESENTATIVE_IDS = {
    qin: 'qin-shihuang',
    'western-han': 'han-wudi',
    'eastern-han': 'eh-zhangdi',
    sui: 'sui-wendi',
    tang: 'tang-taizong',
    'northern-song': 'ns-taizu',
    'southern-song': 'ss-gaozong',
    yuan: 'yuan-shizu',
    ming: 'ming-taizu',
    qing: 'qing-shengzu'
  };

  function emperorHeroSet(item) {
    if (!item.emperors || !item.emperors.length) return [];
    const ids = HERO_IDS[item.id];
    if (ids) {
      const chosen = ids.map((id) => emperorById.get(id)).filter(Boolean);
      if (chosen.length) return chosen;
    }
    if (item.emperors.length <= 3) return item.emperors.slice();
    const middle = Math.floor(item.emperors.length / 2);
    return [item.emperors[0], item.emperors[middle], item.emperors[item.emperors.length - 1]];
  }

  function representativeEmperor(item) {
    if (!item.emperors || !item.emperors.length) return null;
    const id = REPRESENTATIVE_IDS[item.id];
    if (id && emperorById.get(id)) return emperorById.get(id);
    const images = window.PORTRAIT_IMAGES || {};
    return item.emperors.find((emp) => images[emp.id]) || item.emperors[0];
  }

  /* ---------------- 本地研读记录 ---------------- */

  const STORAGE_KEY = 'huaxia-chronicle-read-v1';
  let progressStore = loadProgress();
  let readSet = new Set(progressStore.read);

  function loadProgress() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(raw)) {
        return { read: raw.filter((id) => eventById.has(id)), order: raw.filter((id) => eventById.has(id)) };
      }
      if (raw && Array.isArray(raw.read)) {
        const read = raw.read.filter((id) => eventById.has(id));
        const order = (raw.order || read).filter((id) => eventById.has(id));
        return { read, order };
      }
    } catch (error) {
      /* 本地存储不可用时，仍可正常浏览 */
    }
    return { read: [], order: [] };
  }

  function saveProgress() {
    progressStore.read = Array.from(readSet);
    progressStore.order = progressStore.order.filter((id) => readSet.has(id));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressStore));
    } catch (error) {
      /* ignore */
    }
  }

  function isRead(id) {
    return readSet.has(id);
  }

  function setRead(id, value) {
    if (value) {
      readSet.add(id);
      progressStore.order = progressStore.order.filter((eventId) => eventId !== id);
      progressStore.order.push(id);
    } else {
      readSet.delete(id);
      progressStore.order = progressStore.order.filter((eventId) => eventId !== id);
    }
    saveProgress();
    updateProgressUI();
    return value;
  }

  function toggleRead(id) {
    return setRead(id, !isRead(id));
  }

  function totalRead() {
    return readSet.size;
  }

  function progressPercent() {
    return ALL_EVENTS.length ? Math.round((readSet.size / ALL_EVENTS.length) * 100) : 0;
  }

  function recentReadEvents(limit) {
    return progressStore.order
      .slice()
      .reverse()
      .map((id) => eventById.get(id))
      .filter(Boolean)
      .slice(0, limit || 3);
  }

  function clearProgress() {
    readSet.clear();
    progressStore = { read: [], order: [] };
    saveProgress();
    updateProgressUI();
  }

  /* ---------------- 主题 ---------------- */

  function applyTheme(theme, mode) {
    const active = theme || HOME_THEME;
    Object.keys(THEME_VARS).forEach((cssVar) => {
      const key = THEME_VARS[cssVar];
      document.body.style.setProperty(cssVar, active[key] || HOME_THEME[key]);
    });
    document.body.style.setProperty('--page-bg', active.bg || HOME_THEME.bg);
    document.body.style.setProperty('--page-ink', active.ink || HOME_THEME.ink);
    document.body.classList.toggle('theme-dark', !!active.dark);
    document.body.dataset.mode = mode || 'home';
    document.body.dataset.motif = active.motif || 'home';
    state.mode = mode || 'home';
    state.item = null;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', active.bg || HOME_THEME.bg);
  }

  function applyItemTheme(item) {
    applyTheme(item.theme, item.kind);
    state.item = item;
  }

  /* ---------------- 页头 / 页脚 ---------------- */

  function progressDonut(extraClass) {
    const percent = progressPercent();
    return `<span class="mini-donut ${extraClass || ''}" data-progress-ring style="--p:${percent}"><span data-progress-percent>${percent}</span></span>`;
  }

  function renderHeader(mode, item) {
    const header = document.getElementById('site-header');
    if (!header) return;
    state.mode = mode;
    const isHome = mode === 'home';
    const homeNav = `<nav class="main-nav" aria-label="主导航">
      <button class="nav-link" data-scroll="river">朝代长河</button>
      <button class="nav-link" data-scroll="dynasty-index">纪年一览</button>
      <button class="nav-link" data-scroll="interludes">卷外</button>
      <button class="nav-link" data-scroll="study">研读</button>
    </nav>`;
    const volumeNav = `<nav class="main-nav volume-nav" aria-label="本卷导航">
      ${mode === 'dynasty'
        ? `<button class="nav-link" data-scroll="timeline-section">帝王纪年</button>
           <button class="nav-link" data-scroll="emperor-gallery">帝王一览</button>
           <button class="nav-link" data-scroll="event-index">纪事索引</button>`
        : `<button class="nav-link" data-scroll="period-ribbon">政权并立</button>
           <button class="nav-link" data-scroll="interlude-figures">关键人物</button>
           <button class="nav-link" data-scroll="interlude-events">纪事</button>`}
    </nav>`;
    const context = isHome ? '' : `<div class="header-context">
      <span class="context-seal" style="background:${item.theme.seal}">${esc(item.seal)}</span>
      <span class="context-name">${esc(item.fullName)}</span>
      <span class="context-years">${shortYears(item)}</span>
    </div>`;

    header.dataset.state = mode;
    header.innerHTML = `
      <div class="header-inner">
        <div class="header-left">
          ${isHome ? '' : `<button class="back-button" data-go-home aria-label="返回朝代长河"><span>←</span><span class="back-text">长河</span></button>`}
          <a class="brand" href="#/" aria-label="华夏纪年首页">
            <span class="brand-seal">纪</span>
            <span class="brand-word">
              <strong>华夏纪年</strong>
              <small>CHRONICLES OF CHINA</small>
            </span>
          </a>
          ${context}
        </div>
        ${isHome ? homeNav : volumeNav}
        <div class="header-right">
          <button class="icon-button search-trigger" data-open-search aria-label="搜索历史事件">
            <span class="search-icon" aria-hidden="true"></span>
            <span class="search-label">搜索</span>
            <kbd>⌘K</kbd>
          </button>
          <button class="progress-trigger" data-open-progress aria-label="查看研读进度">
            ${progressDonut()}
            <span class="progress-trigger-text">研读</span>
          </button>
        </div>
      </div>
    `;
  }

  function renderFooter(item) {
    const footer = document.getElementById('site-footer');
    if (!footer) return;
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-seal">纪</span>
          <div>
            <strong>华夏纪年</strong>
            <p>一条可以漫游的中国历史长河</p>
          </div>
        </div>
        <div class="footer-meta">
          <p>${DYNASTIES.length} 个朝代 · ${INTERLUDES.length} 段卷外 · ${EMPERORS.length} 位帝王 · ${ALL_EVENTS.length} 件大事</p>
          <p class="footer-note">年份依据通行历史系年；帝王在位跨年、并立与复辟处，以主要纪年排列。事件叙述为学习性梳理，非学术定本。历史画像来自 Wikimedia Commons 公有领域藏品；无可靠画像者以名讳作记。</p>
        </div>
        <div class="footer-nav">
          <button data-scroll="river">朝代长河</button>
          <button data-scroll="dynasty-index">纪年一览</button>
          <button data-open-search>搜索</button>
          <button data-open-progress>研读进度</button>
        </div>
      </div>
      <div class="footer-bottom">
        <span>以史为镜，可以知兴替。</span>
        <span>${new Date().getFullYear()} · 为学习而作</span>
      </div>
    `;
  }

  /* ---------------- 进度 UI 同步 ---------------- */

  function updateProgressUI() {
    const percent = progressPercent();
    const count = totalRead();
    document.querySelectorAll('[data-progress-percent]').forEach((node) => {
      node.textContent = percent;
    });
    document.querySelectorAll('[data-progress-ring]').forEach((node) => {
      node.style.setProperty('--p', percent);
    });
    document.querySelectorAll('[data-progress-count]').forEach((node) => {
      node.textContent = count;
    });
    document.querySelectorAll('[data-progress-total]').forEach((node) => {
      node.textContent = ALL_EVENTS.length;
    });
    document.querySelectorAll('[data-progress-label]').forEach((node) => {
      node.textContent = `已读 ${count} / ${ALL_EVENTS.length}`;
    });
    document.querySelectorAll('[data-progress-bar]').forEach((node) => {
      node.style.setProperty('--p', percent + '%');
    });
    document.querySelectorAll('[data-event-id]').forEach((node) => {
      const read = isRead(node.dataset.eventId);
      node.classList.toggle('is-read', read);
    });
    document.querySelectorAll('[data-dyn-progress]').forEach((node) => {
      const item = itemById.get(node.dataset.dynProgress);
      if (!item) return;
      const stats = dynastyStats(item);
      const pct = stats.events ? Math.round((stats.read / stats.events) * 100) : 0;
      node.style.setProperty('--p', pct + '%');
      const label = node.querySelector('[data-dyn-progress-text]');
      if (label) label.textContent = `${stats.read} / ${stats.events}`;
    });
    document.querySelectorAll('[data-read-toggle]').forEach((button) => {
      const read = isRead(button.dataset.readToggle);
      button.classList.toggle('is-read', read);
      const label = button.querySelector('[data-read-label]');
      if (label) label.textContent = read ? '已读' : '标记已读';
      button.setAttribute('aria-pressed', String(read));
    });
    if (state.currentEvent) {
      const stateBadge = document.querySelector('.drawer-read-state');
      if (stateBadge) {
        stateBadge.classList.toggle('is-read', isRead(state.currentEvent.id));
        stateBadge.textContent = isRead(state.currentEvent.id) ? '已读' : '未读';
      }
    }
    document.querySelectorAll('.emperor-event-item').forEach((node) => {
      node.classList.toggle('is-read', isRead(node.dataset.openEvent));
    });
    document.querySelectorAll('.emperor-card').forEach((card) => {
      const emp = HX.getEmperor(card.dataset.emperorCard);
      if (!emp) return;
      const foot = card.querySelector('.ec-foot');
      if (foot && foot.children[1]) {
        const read = emp._events.filter((event) => isRead(event.id)).length;
        foot.children[1].textContent = read > 0 ? '已读 ' + read : '未读';
      }
    });
    if (state.item && state.item.kind === 'dynasty' && state.selectedEmperor && HX.renderEmperorFocus) {
      HX.renderEmperorFocus();
    }
    const studyRecent = document.getElementById('study-recent');
    if (studyRecent) HX.renderStudyRecent(studyRecent);
    const progressList = document.getElementById('progress-list');
    if (progressList) HX.renderProgressList(progressList);
    renderReadingBar();
  }

  /* ---------------- 动效 / 提示 / 阅读进度条 ---------------- */

  let revealObserver = null;
  function initReveal(root) {
    const scope = root || document;
    const nodes = Array.from(scope.querySelectorAll('.reveal:not(.in-view)'));
    if (!nodes.length) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('in-view'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    }
    nodes.forEach((node) => revealObserver.observe(node));
  }

  let toastTimer = null;
  function toast(message, kind) {
    const root = document.getElementById('toast-root');
    if (!root) return;
    root.innerHTML = `<div class="toast ${kind ? 'toast-' + kind : ''}">${esc(message)}</div>`;
    requestAnimationFrame(() => root.firstElementChild.classList.add('is-visible'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      const node = root.firstElementChild;
      if (node) node.classList.remove('is-visible');
      setTimeout(() => { root.innerHTML = ''; }, 260);
    }, 2400);
  }

  function renderReadingBar() {
    const bar = document.getElementById('reading-bar');
    if (!bar) return;
    if (state.mode === 'home') {
      bar.style.transform = 'scaleX(0)';
      return;
    }
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? clamp(window.scrollY / scrollable, 0, 1) : 0;
    bar.style.transform = 'scaleX(' + ratio + ')';
  }

  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
      const offset = state.mode === 'home' ? 70 : 120;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      return true;
    }
    return false;
  }

  /* ---------------- 导出 ---------------- */

  HX.DATA = DATA;
  HX.DYNASTIES = DYNASTIES;
  HX.INTERLUDES = INTERLUDES;
  HX.ALL_EVENTS = ALL_EVENTS;
  HX.EMPERORS = EMPERORS;
  HX.TYPES = TYPES;
  HX.TYPE_ORDER = TYPE_ORDER;
  HX.HOME_THEME = HOME_THEME;
  HX.state = state;
  HX.stats = {
    dynasties: DYNASTIES.length,
    interludes: INTERLUDES.length,
    emperors: EMPERORS.length,
    events: ALL_EVENTS.length,
    years: 1912 - (-221) - 1
  };
  HX.esc = esc;
  HX.fmtYear = fmtYear;
  HX.fmtYearSpan = fmtYearSpan;
  HX.fmtDateSeries = fmtDateSeries;
  HX.yearBadge = yearBadge;
  HX.duration = duration;
  HX.clamp = clamp;
  HX.hexToRgba = hexToRgba;
  HX.typeMeta = typeMeta;
  HX.itemLabel = itemLabel;
  HX.itemChapter = itemChapter;
  HX.shortYears = shortYears;
  HX.emperorReignText = emperorReignText;
  HX.emperorEventCount = emperorEventCount;
  HX.readCountFor = readCountFor;
  HX.dynastyStats = dynastyStats;
  HX.primaryReign = primaryReign;
  HX.emperorHeroSet = emperorHeroSet;
  HX.representativeEmperor = representativeEmperor;
  HX.getEvent = (id) => eventById.get(id);
  HX.getEmperor = (id) => emperorById.get(id);
  HX.getItem = (id) => itemById.get(id);
  HX.getDynasty = (id) => DYNASTIES.find((d) => d.id === id);
  HX.getInterlude = (id) => INTERLUDES.find((d) => d.id === id);
  HX.isRead = isRead;
  HX.setRead = setRead;
  HX.toggleRead = toggleRead;
  HX.totalRead = totalRead;
  HX.progressPercent = progressPercent;
  HX.recentReadEvents = recentReadEvents;
  HX.clearProgress = clearProgress;
  HX.updateProgressUI = updateProgressUI;
  HX.applyTheme = applyTheme;
  HX.applyItemTheme = applyItemTheme;
  HX.renderHeader = renderHeader;
  HX.renderFooter = renderFooter;
  HX.progressDonut = progressDonut;
  HX.portraitMarkup = (emp, opts) => window.portraitMarkup(emp, opts);
  HX.portraitImageInfo = (id) => (typeof id === 'string' ? (window.PORTRAIT_IMAGES || {})[id] || null : window.portraitImageInfo(id));
  HX.initReveal = initReveal;
  HX.toast = toast;
  HX.renderReadingBar = renderReadingBar;
  HX.scrollToSection = scrollToSection;
})();
