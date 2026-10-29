/* 华夏纪年 · 阅读抽屉、搜索与研读进度 */
(function () {
  'use strict';

  const HX = window.HX;
  const {
    esc, fmtYear, fmtYearSpan, fmtDateSeries, yearBadge, typeMeta,
    itemChapter, shortYears, emperorReignText, emperorEventCount,
    ALL_EVENTS, DYNASTIES, INTERLUDES
  } = HX;

  const state = HX.state;
  let drawerCleanup = null;
  let searchCleanup = null;
  let progressCleanup = null;

  /* ---------------- 对话框焦点 ---------------- */

  function activateDialog(container, onEscape) {
    const previous = document.activeElement;
    const focusables = () => Array.from(container.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((node) => !node.disabled && node.offsetParent !== null);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onEscape();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (previous && document.contains(previous) && typeof previous.focus === 'function') {
        try { previous.focus({ preventScroll: true }); } catch (error) { /* ignore */ }
      }
    };
  }

  function bodyLock(kind, enabled) {
    document.body.classList.toggle(kind + '-open', enabled);
  }

  /* ---------------- 事件抽屉 ---------------- */

  function eventRelated(event) {
    const item = event._dyn;
    if (event.emperor) {
      return item.events
        .filter((entry) => entry.id !== event.id && entry.emperor === event.emperor)
        .slice(0, 4);
    }
    return item.events
      .filter((entry) => entry.id !== event.id && entry.context === event.context)
      .slice(0, 4);
  }

  function eventNeighbours(event) {
    const item = event._dyn;
    const sorted = item.events.slice().sort((a, b) => a.year - b.year);
    const index = sorted.findIndex((entry) => entry.id === event.id);
    return {
      prev: index > 0 ? sorted[index - 1] : null,
      next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : null
    };
  }

  function drawerEventMarkup(event) {
    const item = event._dyn;
    const type = typeMeta(event.type);
    const emperor = event.emperor ? HX.getEmperor(event.emperor) : null;
    const read = HX.isRead(event.id);
    const neighbours = eventNeighbours(event);
    const related = eventRelated(event);
    return `<div class="drawer-layer" data-drawer-layer>
      <div class="drawer-backdrop" data-close-drawer></div>
      <aside class="detail-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <div class="drawer-scroll">
          <header class="drawer-head" style="--drawer-seal:${item.theme.seal};--drawer-accent:${item.theme.accent}">
            <div class="drawer-head-art" aria-hidden="true">${HX.motifSVG(item.theme.motif)}</div>
            <span class="drawer-watermark" aria-hidden="true">${esc(item.seal)}</span>
            <button class="drawer-close" data-close-drawer aria-label="关闭事件详情">×</button>
            <p class="drawer-kicker"><span class="drawer-type" style="--tag:${type.color}">${type.label}</span><span>${itemChapter(item)} · ${esc(item.fullName)}</span></p>
            <p class="drawer-date">${esc(event.era)}<span class="date-dot">·</span>${fmtDateSeries(event)}</p>
            <h2 id="drawer-title">${esc(event.title)}</h2>
            <div class="drawer-head-meta">
              ${emperor
                ? `<button class="emperor-chip" data-open-emperor="${emperor.id}">
                    <span class="chip-portrait">${window.portraitMarkup(emperor, { theme: item.theme, seal: item.seal, variant: 'chip' })}</span>
                    <span class="chip-copy"><strong>${esc(emperor.title)} ${esc(emperor.name)}</strong><em>${emperorReignText(emperor)}</em></span>
                    <span class="chip-arrow">→</span>
                  </button>`
                : `<span class="context-chip">${esc(event.context || item.fullName)}</span>`}
              <span class="drawer-read-state ${read ? 'is-read' : ''}">${read ? '已读' : '未读'}</span>
            </div>
          </header>
          <div class="drawer-body">
            <p class="drawer-lead">${esc(event.summary)}</p>
            <div class="drawer-prose">
              <p>${esc(event.detail)}</p>
            </div>
            <div class="impact-block">
              <p class="impact-kicker">历史影响</p>
              <p>${esc(event.significance)}</p>
            </div>
            <div class="drawer-tags">
              ${(event.tags || []).map((tag) => `<span>${esc(tag)}</span>`).join('')}
            </div>
            <div class="drawer-actions">
              <button class="locate-button" data-locate-event="${event.id}"><span>↔</span> ${item.kind === 'dynasty' ? '在横轴上定位' : '定位到纪事'}</button>
              <span class="drawer-hint">${item.kind === 'dynasty' ? '点击帝王头像，读其小传' : '卷外纪事 · 无单一帝王世系'}</span>
            </div>
            ${related.length ? `<div class="related-events">
              <p class="related-title">${emperor ? '同帝纪事' : '同时期纪事'}</p>
              <div class="related-list">
                ${related.map((entry) => `<button data-open-event="${entry.id}" class="related-item">
                  <span>${yearBadge(entry)}</span>
                  <strong>${esc(entry.title)}</strong>
                  <em>→</em>
                </button>`).join('')}
              </div>
            </div>` : ''}
          </div>
        </div>
        <footer class="drawer-foot">
          <button class="read-button ${read ? 'is-read' : ''}" data-read-toggle="${event.id}" aria-pressed="${read}">
            <span class="read-check">✓</span>
            <span data-read-label>${read ? '已读' : '标记已读'}</span>
          </button>
          <div class="drawer-pager">
            ${neighbours.prev ? `<button class="pager-button is-prev" data-open-event="${neighbours.prev.id}" aria-label="上一件：${esc(neighbours.prev.title)}"><span>←</span><em>${esc(neighbours.prev.title)}</em></button>` : '<span class="pager-placeholder"></span>'}
            ${neighbours.next ? `<button class="pager-button is-next" data-open-event="${neighbours.next.id}" aria-label="下一件：${esc(neighbours.next.title)}"><em>${esc(neighbours.next.title)}</em><span>→</span></button>` : '<span class="pager-placeholder"></span>'}
          </div>
        </footer>
      </aside>
    </div>`;
  }

  function openEvent(eventId) {
    const event = HX.getEvent(eventId);
    if (!event) return;
    closeSearchImmediate();
    closeProgressImmediate();
    const root = document.getElementById('drawer-root');
    root.innerHTML = drawerEventMarkup(event);
    const layer = root.querySelector('[data-drawer-layer]');
    const drawer = root.querySelector('.detail-drawer');
    state.currentEvent = event;
    bodyLock('drawer', true);
    requestAnimationFrame(() => {
      layer.classList.add('is-open');
      const close = drawer.querySelector('.drawer-close');
      if (close) close.focus({ preventScroll: true });
    });
    if (drawerCleanup) drawerCleanup();
    drawerCleanup = activateDialog(drawer, () => closeDrawer());
    root.querySelectorAll('[data-close-drawer]').forEach((node) => node.addEventListener('click', closeDrawer));
  }

  function openEventById(eventId) {
    openEvent(eventId);
  }

  function closeDrawer() {
    const root = document.getElementById('drawer-root');
    const layer = root.querySelector('[data-drawer-layer]');
    if (!layer) return;
    layer.classList.remove('is-open');
    if (drawerCleanup) {
      drawerCleanup();
      drawerCleanup = null;
    }
    bodyLock('drawer', false);
    state.currentEvent = null;
    setTimeout(() => {
      if (root.querySelector('[data-drawer-layer]') === layer) root.innerHTML = '';
    }, 300);
  }

  /* ---------------- 帝王抽屉 ---------------- */

  function emperorDrawerMarkup(emp) {
    const dyn = emp._dyn;
    const events = emp._events.slice().sort((a, b) => a.year - b.year);
    const read = events.filter((event) => HX.isRead(event.id)).length;
    const years = Math.max(1, emp.end - emp.start);
    const image = HX.portraitImageInfo(emp.id);
    const licenseLabel = image && /公有领域|public domain/i.test(image.license || '') ? '公有领域' : (image ? image.license : '');
    const credit = image
      ? (image.source
        ? `<a class="portrait-credit" href="${esc(image.source)}" target="_blank" rel="noopener">历史画像来源：Wikimedia Commons${licenseLabel ? ' · ' + esc(licenseLabel) : ''}</a>`
        : '历史画像来源：Wikimedia Commons。')
      : '此帝无可靠传世画像，以名讳牌位作记。';
    return `<div class="drawer-layer emperor-drawer-layer" data-drawer-layer>
      <div class="drawer-backdrop" data-close-drawer></div>
      <aside class="detail-drawer emperor-drawer" role="dialog" aria-modal="true" aria-labelledby="emperor-drawer-title">
        <div class="drawer-scroll">
          <header class="emperor-drawer-head" style="--drawer-seal:${dyn.theme.seal};--drawer-accent:${dyn.theme.accent}">
            <div class="emp-head-art" aria-hidden="true">${HX.motifSVG(dyn.theme.motif)}</div>
            <button class="drawer-close" data-close-drawer aria-label="关闭帝王小传">×</button>
            <p class="drawer-kicker"><span>本卷人物</span><span>${itemChapter(dyn)} · ${esc(dyn.fullName)}</span></p>
            <div class="emperor-portrait-large">${window.portraitMarkup(emp, { theme: dyn.theme, seal: dyn.seal, variant: 'drawer' })}</div>
            <p class="emperor-era">${esc(emp.era)}</p>
            <h2 id="emperor-drawer-title">${esc(emp.title)}</h2>
            <p class="emperor-name">${esc(emp.name)}<span>·</span>${emperorReignText(emp)}</p>
          </header>
          <div class="drawer-body emperor-drawer-body">
            <div class="emperor-facts-row">
              <span><em>在位</em><strong>${years} 年</strong></span>
              <span><em>纪年</em><strong>${esc(emp.era)}</strong></span>
              <span><em>纪事</em><strong>${events.length} 件</strong></span>
              <span><em>已读</em><strong>${read} / ${events.length}</strong></span>
            </div>
            <p class="drawer-lead">${esc(emp.bio)}</p>
            <div class="emperor-events-block">
              <p class="related-title">在位纪事</p>
              ${events.length
                ? `<div class="emperor-event-list">${events.map((event) => `<button data-open-event="${event.id}" class="emperor-event-item ${HX.isRead(event.id) ? 'is-read' : ''}">
                    <span class="ee-year">${yearBadge(event)}</span>
                    <span class="ee-main"><strong>${esc(event.title)}</strong><em>${typeMeta(event.type).label}</em></span>
                    <span class="ee-arrow">→</span>
                  </button>`).join('')}</div>`
                : '<p class="study-empty">本卷未收录这位帝王在位期间的独立纪事。</p>'}
            </div>
            <p class="emperor-note">${credit}</p>
          </div>
        </div>
        <footer class="drawer-foot">
          <button class="locate-button is-wide" data-locate-emperor="${emp.id}"><span>↔</span> 在纪年横轴上定位</button>
        </footer>
      </aside>
    </div>`;
  }

  function openEmperor(empId) {
    const emp = HX.getEmperor(empId);
    if (!emp) return;
    closeSearchImmediate();
    closeProgressImmediate();
    const root = document.getElementById('drawer-root');
    root.innerHTML = emperorDrawerMarkup(emp);
    const layer = root.querySelector('[data-drawer-layer]');
    const drawer = root.querySelector('.detail-drawer');
    state.currentEmperor = emp;
    bodyLock('drawer', true);
    requestAnimationFrame(() => {
      layer.classList.add('is-open');
      const close = drawer.querySelector('.drawer-close');
      if (close) close.focus({ preventScroll: true });
    });
    if (drawerCleanup) drawerCleanup();
    drawerCleanup = activateDialog(drawer, () => closeDrawer());
    root.querySelectorAll('[data-close-drawer]').forEach((node) => node.addEventListener('click', closeDrawer));
  }

  /* ---------------- 搜索 ---------------- */

  function normalize(text) {
    return String(text || '').toLowerCase().replace(/\s+/g, '');
  }

  function scoreText(haystack, query, weight) {
    const value = normalize(haystack);
    const q = normalize(query);
    if (!value || !q) return 0;
    if (value === q) return weight * 1.4;
    if (value.startsWith(q)) return weight * 1.2;
    if (value.includes(q)) return weight;
    return 0;
  }

  function searchAll(rawQuery) {
    const query = rawQuery.trim();
    if (!query) return [];
    const results = [];
    DYNASTIES.concat(INTERLUDES).forEach((item) => {
      let score = scoreText(item.name, query, 120) + scoreText(item.fullName, query, 100) + scoreText(item.tagline, query, 55) + scoreText(item.intro, query, 20);
      if (score > 0) {
        results.push({
          kind: item.kind === 'dynasty' ? 'dynasty' : 'interlude',
          id: item.id,
          title: item.fullName,
          meta: item.kind === 'dynasty' ? '朝代 · ' + shortYears(item) : '卷外 · ' + shortYears(item),
          year: item.start,
          score,
          item
        });
      }
    });
    itemEmperors().forEach((emp) => {
      const dyn = emp._dyn;
      let score = scoreText(emp.title, query, 120) + scoreText(emp.name, query, 120) + scoreText(emp.alias, query, 120) + scoreText(emp.era, query, 40) + scoreText(emp.bio, query, 18) + scoreText(dyn.name, query, 15);
      if (score > 0) {
        results.push({
          kind: 'emperor',
          id: emp.id,
          title: emp.title + ' ' + emp.name,
          meta: dyn.fullName + ' · ' + emperorReignText(emp),
          year: emp.start,
          score,
          emperor: emp
        });
      }
    });
    ALL_EVENTS.forEach((event) => {
      const dyn = event._dyn;
      const emperor = event.emperor ? HX.getEmperor(event.emperor) : null;
      let score = scoreText(event.title, query, 150) + scoreText((event.tags || []).join(' '), query, 60) + scoreText(event.summary, query, 45) + scoreText(event.detail, query, 12) + scoreText(dyn.name, query, 18) + scoreText(emperor ? emperor.name + emperor.title : event.context, query, 15);
      if (score > 0) {
        results.push({
          kind: 'event',
          id: event.id,
          title: event.title,
          meta: dyn.name + ' · ' + yearBadge(event) + (emperor ? ' · ' + emperor.title : ''),
          year: event.year,
          score,
          event
        });
      }
    });
    return results.sort((a, b) => b.score - a.score || a.year - b.year).slice(0, 24);
  }

  function itemEmperors() {
    return HX.EMPERORS;
  }

  function hotEvents() {
    return ['ming-jingnan', 'ming-daliyi', 'ming-three-campaigns', 'tang-anlushan', 'ns-chanyuan', 'ss-yashan']
      .map((id) => HX.getEvent(id))
      .filter(Boolean);
  }

  function highlight(text, query) {
    const source = String(text || '');
    const q = String(query || '').trim();
    if (!q) return esc(source);
    const index = source.toLowerCase().indexOf(q.toLowerCase());
    if (index < 0) return esc(source);
    return esc(source.slice(0, index)) + '<mark>' + esc(source.slice(index, index + q.length)) + '</mark>' + esc(source.slice(index + q.length));
  }

  function searchResultsMarkup(results, query) {
    if (!query.trim()) {
      return `<div class="search-suggest">
        <p class="search-section-title">不妨从这里开始</p>
        ${hotEvents().map((event) => {
          const dyn = event._dyn;
          return `<button class="search-hot" data-open-event="${event.id}">
            <span class="hot-year">${yearBadge(event)}</span>
            <span class="hot-main"><strong>${esc(event.title)}</strong><em>${esc(dyn.name)} · ${typeMeta(event.type).label}</em></span>
            <span class="hot-arrow">→</span>
          </button>`;
        }).join('')}
        <p class="search-tip">也可以搜索“朱元璋”“靖难”“澶渊之盟”“武则天”或某个朝代。</p>
      </div>`;
    }
    if (!results.length) {
      return `<div class="search-empty">
        <span class="search-empty-mark">空</span>
        <p>没有找到与“${esc(query)}”相关的纪事。</p>
        <span>试试更短的关键词，或搜索帝王年号、事件名称。</span>
      </div>`;
    }
    return `<div class="search-group">
      <p class="search-section-title">搜索结果 <em>${results.length}</em></p>
      ${results.map((result, index) => {
        const kindClass = result.kind === 'event' ? 'is-event' : result.kind === 'emperor' ? 'is-emperor' : 'is-dynasty';
        return `<button class="search-result ${kindClass} ${index === state.searchActive ? 'is-active' : ''}" data-result-index="${index}">
          <span class="result-kind">${result.kind === 'event' ? '事' : result.kind === 'emperor' ? '帝' : '卷'}</span>
          <span class="result-main"><strong>${highlight(result.title, query)}</strong><em>${esc(result.meta)}</em></span>
          <span class="result-year">${result.year < 0 ? fmtYear(result.year) : result.year}</span>
          <span class="result-enter">↵</span>
        </button>`;
      }).join('')}
    </div>`;
  }

  function updateSearchActive() {
    document.querySelectorAll('.search-result').forEach((node) => {
      node.classList.toggle('is-active', Number(node.dataset.resultIndex) === state.searchActive);
    });
    const active = document.querySelector('.search-result.is-active');
    if (active) active.scrollIntoView({ block: 'nearest' });
  }

  function renderSearch(query) {
    const results = searchAll(query);
    state.searchResults = results;
    if (state.searchActive >= results.length) state.searchActive = Math.max(0, results.length - 1);
    const host = document.getElementById('search-results');
    if (host) host.innerHTML = searchResultsMarkup(results, query);
    updateSearchActive();
  }

  function openSearch() {
    if (document.getElementById('search-layer')) {
      document.getElementById('search-input').focus();
      return;
    }
    closeDrawer();
    closeProgressImmediate();
    const root = document.getElementById('search-root');
    state.searchActive = 0;
    root.innerHTML = `<div class="search-layer" id="search-layer">
      <div class="search-backdrop" data-close-search></div>
      <div class="search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <div class="search-top">
          <span class="search-glyph" aria-hidden="true">搜</span>
          <label class="sr-only" for="search-input" id="search-title">搜索历史事件、帝王或朝代</label>
          <input id="search-input" type="search" placeholder="搜索事件、帝王、朝代——如「靖难」「大礼议」" autocomplete="off" spellcheck="false">
          <button class="search-escape" data-close-search>ESC</button>
        </div>
        <div class="search-results" id="search-results"></div>
        <div class="search-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> 选择</span>
          <span><kbd>↵</kbd> 打开</span>
          <span><kbd>ESC</kbd> 关闭</span>
          <span class="search-count">全站 ${ALL_EVENTS.length} 件纪事 · ${HX.EMPERORS.length} 位帝王</span>
        </div>
      </div>
    </div>`;
    bodyLock('search', true);
    const layer = document.getElementById('search-layer');
    const dialog = layer.querySelector('.search-dialog');
    const input = document.getElementById('search-input');
    requestAnimationFrame(() => {
      layer.classList.add('is-open');
      input.focus();
    });
    renderSearch('');
    const resultsHost = document.getElementById('search-results');
    resultsHost.addEventListener('click', (event) => {
      const resultNode = event.target.closest('[data-result-index]');
      if (!resultNode) return;
      const result = state.searchResults[Number(resultNode.dataset.resultIndex)];
      if (result) activateSearchResult(result);
    });
    resultsHost.addEventListener('pointerover', (event) => {
      const resultNode = event.target.closest('[data-result-index]');
      if (!resultNode) return;
      state.searchActive = Number(resultNode.dataset.resultIndex);
      document.querySelectorAll('.search-result').forEach((node) => {
        node.classList.toggle('is-active', node === resultNode);
      });
    });
    input.addEventListener('input', () => {
      state.searchActive = 0;
      renderSearch(input.value);
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (!state.searchResults.length) return;
        state.searchActive = Math.min(state.searchResults.length - 1, state.searchActive + 1);
        updateSearchActive();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        state.searchActive = Math.max(0, state.searchActive - 1);
        updateSearchActive();
      } else if (event.key === 'Enter') {
        const result = state.searchResults[state.searchActive];
        if (result) {
          event.preventDefault();
          activateSearchResult(result);
        } else if (input.value.trim()) {
          const results = searchAll(input.value);
          if (results[0]) activateSearchResult(results[0]);
        }
      }
    });
    layer.querySelectorAll('[data-close-search]').forEach((node) => node.addEventListener('click', closeSearch));
    if (searchCleanup) searchCleanup();
    searchCleanup = activateDialog(dialog, () => closeSearch());
  }

  function activateSearchResult(result) {
    if (!result) return;
    const currentItem = HX.state.item;
    closeSearchImmediate();
    if (result.kind === 'event') {
      const event = result.event;
      if (currentItem && currentItem.id === event._dyn.id) {
        openEvent(event.id);
        if (history.replaceState) history.replaceState(null, '', '#/' + event._dyn.kind + '/' + event._dyn.id);
      } else {
        window.location.hash = '#/' + event._dyn.kind + '/' + event._dyn.id + '?event=' + encodeURIComponent(event.id);
      }
    } else if (result.kind === 'emperor') {
      const dyn = result.emperor._dyn;
      if (currentItem && currentItem.id === dyn.id) {
        HX.selectEmperor(result.emperor.id, { scroll: true });
        HX.scrollToSection('timeline-section');
        if (history.replaceState) history.replaceState(null, '', '#/dynasty/' + dyn.id);
      } else {
        window.location.hash = '#/dynasty/' + dyn.id + '?emperor=' + encodeURIComponent(result.emperor.id);
      }
    } else {
      window.location.hash = '#/' + result.kind + '/' + result.id;
    }
  }

  function closeSearchImmediate() {
    const root = document.getElementById('search-root');
    if (root) root.innerHTML = '';
    if (searchCleanup) {
      searchCleanup();
      searchCleanup = null;
    }
    bodyLock('search', false);
  }

  function closeSearch() {
    const layer = document.getElementById('search-layer');
    if (!layer) return;
    layer.classList.remove('is-open');
    bodyLock('search', false);
    if (searchCleanup) {
      searchCleanup();
      searchCleanup = null;
    }
    setTimeout(() => {
      if (layer.isConnected) layer.remove();
    }, 240);
  }

  /* ---------------- 研读进度 ---------------- */

  function progressRowsMarkup(groups) {
    return groups.map((group) => `<div class="progress-group">
      <p class="progress-group-title">${group.label}</p>
      ${group.items.map((item) => {
        const stats = HX.dynastyStats(item);
        const percent = stats.events ? Math.round((stats.read / stats.events) * 100) : 0;
        return `<a class="progress-row" href="#/${item.kind}/${item.id}" data-progress-row="${item.id}">
          <span class="progress-seal" style="--row-seal:${item.theme.seal}">${esc(item.seal)}</span>
          <span class="progress-name"><strong>${esc(item.fullName)}</strong><em>${shortYears(item)}</em></span>
          <span class="progress-track"><span style="width:${percent}%"></span></span>
          <span class="progress-count">${stats.read} / ${stats.events}</span>
        </a>`;
      }).join('')}
    </div>`).join('');
  }

  function renderProgressList(host) {
    if (!host) return;
    host.innerHTML = progressRowsMarkup([
      { label: '十朝纪年', items: DYNASTIES },
      { label: '卷外 · 分裂与融合', items: INTERLUDES }
    ]);
  }

  function openProgress() {
    if (document.getElementById('progress-layer')) return;
    closeDrawer();
    closeSearchImmediate();
    const percent = HX.progressPercent();
    const root = document.getElementById('modal-root');
    root.innerHTML = `<div class="progress-layer" id="progress-layer">
      <div class="progress-backdrop" data-close-progress></div>
      <div class="progress-dialog" role="dialog" aria-modal="true" aria-labelledby="progress-title">
        <button class="drawer-close progress-close" data-close-progress aria-label="关闭研读进度">×</button>
        <div class="progress-head">
          <p class="section-kicker">卷末 · 研读</p>
          <h2 id="progress-title">研读进度</h2>
          <p>记录保存在当前浏览器。读到哪里，长河就亮到哪里。</p>
        </div>
        <div class="progress-summary">
          <div class="big-donut" data-progress-ring style="--p:${percent}">
            <div class="big-donut-inner"><span><strong data-progress-percent>${percent}</strong><small>%</small></span><em>已读</em></div>
          </div>
          <div class="progress-summary-copy">
            <p><strong data-progress-count>${HX.totalRead()}</strong> / <span data-progress-total>${ALL_EVENTS.length}</span> 件大事</p>
            <div class="study-bar" data-progress-bar style="--p:${percent}%"><span></span></div>
            <p class="progress-note">${HX.totalRead() ? '上次读到：' + esc((HX.recentReadEvents(1)[0] || {}).title || '') : '还没有标记已读的事件。打开任意事件，点击「标记已读」即可。'}</p>
          </div>
        </div>
        <div class="progress-list" id="progress-list"></div>
        <div class="progress-actions">
          <button class="btn btn-primary" data-random-event>随机一件大事</button>
          <button class="btn btn-ghost" data-close-progress>继续浏览</button>
          <button class="reset-button" data-reset-progress>清空记录</button>
        </div>
        <p class="progress-footnote">进度仅存于本机，不上传任何数据。</p>
      </div>
    </div>`;
    bodyLock('progress', true);
    renderProgressList(document.getElementById('progress-list'));
    const layer = document.getElementById('progress-layer');
    const dialog = layer.querySelector('.progress-dialog');
    requestAnimationFrame(() => {
      layer.classList.add('is-open');
      const close = dialog.querySelector('.drawer-close');
      if (close) close.focus({ preventScroll: true });
    });
    layer.querySelectorAll('[data-close-progress]').forEach((node) => node.addEventListener('click', closeProgress));
    if (progressCleanup) progressCleanup();
    progressCleanup = activateDialog(dialog, () => closeProgress());
  }

  function closeProgressImmediate() {
    const root = document.getElementById('modal-root');
    if (root) root.innerHTML = '';
    if (progressCleanup) {
      progressCleanup();
      progressCleanup = null;
    }
    bodyLock('progress', false);
  }

  function closeProgress() {
    const layer = document.getElementById('progress-layer');
    if (!layer) return;
    layer.classList.remove('is-open');
    bodyLock('progress', false);
    if (progressCleanup) {
      progressCleanup();
      progressCleanup = null;
    }
    setTimeout(() => { if (layer.isConnected) layer.remove(); }, 260);
  }

  function closeTopOverlay() {
    if (document.getElementById('search-layer')) {
      closeSearch();
      return true;
    }
    if (document.getElementById('progress-layer')) {
      closeProgress();
      return true;
    }
    if (document.querySelector('[data-drawer-layer]')) {
      closeDrawer();
      return true;
    }
    return false;
  }

  function locateEvent(eventId) {
    const event = HX.getEvent(eventId);
    if (!event) return;
    closeDrawer();
    if (!HX.state.item || HX.state.item.id !== event._dyn.id) {
      window.location.hash = '#/' + event._dyn.kind + '/' + event._dyn.id + '?locate=' + encodeURIComponent(eventId);
      return;
    }
    if (HX.state.item.kind !== 'dynasty') {
      const node = document.querySelector('[data-event-id="' + eventId + '"]');
      if (node) node.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (event.emperor) HX.selectEmperor(event.emperor, { scroll: false });
    const timeline = HX.state.timeline;
    const scroll = document.getElementById('chronicle-scroll');
    if (timeline && scroll) {
      const center = timeline.pad + (event.year - timeline.start) * timeline.scale;
      scroll.scrollTo({ left: center - scroll.clientWidth / 2, behavior: 'smooth' });
      setTimeout(() => {
        const card = document.querySelector('.event-card[data-event-id="' + eventId + '"]');
        if (card) {
          card.classList.add('is-flash');
          card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
          setTimeout(() => card.classList.remove('is-flash'), 1600);
        }
      }, 420);
    }
  }

  function locateEmperor(empId) {
    const emp = HX.getEmperor(empId);
    if (!emp) return;
    const dyn = emp._dyn;
    closeDrawer();
    if (HX.state.item && HX.state.item.id === dyn.id) {
      HX.selectEmperor(emp.id, { scroll: true });
      HX.scrollToSection('timeline-section');
    } else {
      window.location.hash = '#/dynasty/' + dyn.id + '?emperor=' + encodeURIComponent(emp.id);
    }
  }

  function resetOverlays() {
    const drawerRoot = document.getElementById('drawer-root');
    const searchRoot = document.getElementById('search-root');
    const modalRoot = document.getElementById('modal-root');
    if (drawerRoot) drawerRoot.innerHTML = '';
    if (searchRoot) searchRoot.innerHTML = '';
    if (modalRoot) modalRoot.innerHTML = '';
    if (drawerCleanup) { drawerCleanup(); drawerCleanup = null; }
    if (searchCleanup) { searchCleanup(); searchCleanup = null; }
    if (progressCleanup) { progressCleanup(); progressCleanup = null; }
    document.body.classList.remove('drawer-open', 'search-open', 'progress-open');
    state.currentEvent = null;
    state.currentEmperor = null;
  }

  HX.openEvent = openEvent;
  HX.openEmperor = openEmperor;
  HX.activateSearchResult = activateSearchResult;
  HX.locateEmperor = locateEmperor;
  HX.resetOverlays = resetOverlays;
  HX.closeDrawer = closeDrawer;
  HX.openSearch = openSearch;
  HX.closeSearch = closeSearch;
  HX.openProgress = openProgress;
  HX.closeProgress = closeProgress;
  HX.closeTopOverlay = closeTopOverlay;
  HX.locateEvent = locateEvent;
  HX.renderProgressList = renderProgressList;
  HX.searchAll = searchAll;
})();
