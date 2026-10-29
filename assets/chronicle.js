/* 华夏纪年 · 朝代纪年与卷外 */
(function () {
  'use strict';

  const HX = window.HX;
  const {
    esc, fmtYear, fmtYearSpan, DYNASTIES, TYPES, TYPE_ORDER, typeMeta,
    itemChapter, shortYears, dynastyStats, primaryReign, emperorReignText,
    emperorEventCount, clamp, hexToRgba
  } = HX;

  function truncate(text, length) {
    const value = String(text || '');
    return value.length > length ? value.slice(0, length) + '…' : value;
  }

  function portraitFrame(emp, theme, seal, cls, variant) {
    return `<span class="portrait-frame ${cls || ''}">${window.portraitMarkup(emp, { theme, seal, variant: variant || 'medium' })}</span>`;
  }

  function volumeFacts(item) {
    const s = dynastyStats(item);
    const readPct = s.events ? Math.round((s.read / s.events) * 100) : 0;
    return `<div class="volume-facts">
      ${item.kind === 'dynasty'
        ? `<span><em>都城</em><strong>${esc(item.capital || '—')}</strong></span>
           <span><em>帝王</em><strong>${s.emperors} 位</strong></span>`
        : `<span><em>政权</em><strong>${item.periods.length} 个</strong></span>
           <span><em>人物</em><strong>${item.figures.length} 位</strong></span>`}
      <span><em>纪事</em><strong>${s.events} 件</strong></span>
      <span class="volume-progress"><em>研读</em><strong><span data-dyn-progress="${item.id}" style="--p:${readPct}%"><i class="fact-progress"><b></b></i><span data-dyn-progress-text>${s.read} / ${s.events}</span></span></strong></span>
    </div>`;
  }

  function heroPortraitStack(item) {
    if (item.kind === 'dynasty') {
      const heroes = HX.emperorHeroSet(item);
      return `<div class="hero-portrait-stack">
        ${heroes.map((emp, index) => `<button class="hero-portrait-card" style="--i:${index};--rot:${(index - 1) * 5}deg" data-open-emperor="${emp.id}" aria-label="查看${emp.title}${emp.name}小传">
          ${portraitFrame(emp, item.theme, item.seal, '', 'hero')}
          <span class="hero-portrait-meta"><strong>${esc(emp.title)}</strong><em>${esc(emp.name)}</em></span>
        </button>`).join('')}
        <span class="hero-portrait-seal" aria-hidden="true">${esc(item.seal)}</span>
      </div>`;
    }
    return `<div class="hero-portrait-stack figures">
      ${item.figures.slice(0, 3).map((figure, index) => `<div class="hero-portrait-card" style="--i:${index};--rot:${(index - 1) * 5}deg">
        ${portraitFrame(figure, item.theme, item.seal, '', 'hero')}
        <span class="hero-portrait-meta"><strong>${esc(figure.title)}</strong><em>${esc(figure.name)}</em></span>
      </div>`).join('')}
      <span class="hero-portrait-seal" aria-hidden="true">${esc(item.seal)}</span>
    </div>`;
  }

  function volumeHero(item, isInterlude) {
    const kicker = isInterlude ? '卷外 · 分裂与融合' : `${itemChapter(item)} · 大一统王朝`;
    return `<section class="volume-hero ${isInterlude ? 'is-interlude' : ''}">
      <div class="volume-hero-bg" aria-hidden="true">${HX.motifSVG(item.theme.motif)}</div>
      <span class="volume-watermark" aria-hidden="true">${esc(item.seal)}</span>
      <div class="volume-hero-copy">
        <p class="volume-kicker">${kicker}</p>
        <div class="volume-title-row">
          <h1>${esc(item.fullName)}</h1>
          <span class="volume-seal" style="background:${item.theme.seal}">${esc(item.seal)}</span>
        </div>
        <p class="volume-dates">${shortYears(item)}<span class="volume-dot">·</span>${item.capital ? '都 ' + esc(item.capital) : isInterlude ? '政权并立' : ''}</p>
        <p class="volume-tagline">「${esc(item.tagline)}」</p>
        <p class="volume-intro">${esc(item.intro)}</p>
        ${volumeFacts(item)}
      </div>
      ${heroPortraitStack(item)}
    </section>`;
  }

  function volumeJump(item) {
    if (item.kind !== 'dynasty') {
      const index = HX.INTERLUDES.findIndex((entry) => entry.id === item.id);
      const prev = HX.INTERLUDES[index - 1];
      const next = HX.INTERLUDES[index + 1];
      return `<nav class="volume-jump" aria-label="卷外翻页">
        ${prev ? `<a href="#/interlude/${prev.id}" class="jump-prev"><span>← 上一卷外</span><strong>${esc(prev.name)}</strong></a>` : '<span></span>'}
        <a href="#/" class="jump-home"><span>回到长河</span><strong>华夏纪年</strong></a>
        ${next ? `<a href="#/interlude/${next.id}" class="jump-next"><span>下一卷外 →</span><strong>${esc(next.name)}</strong></a>` : '<span></span>'}
      </nav>`;
    }
    const index = DYNASTIES.findIndex((entry) => entry.id === item.id);
    const prev = DYNASTIES[index - 1];
    const next = DYNASTIES[index + 1];
    return `<nav class="volume-jump" aria-label="朝代翻页">
      ${prev ? `<a href="#/dynasty/${prev.id}" class="jump-prev"><span>← 上一卷</span><strong>${esc(prev.name)}</strong></a>` : '<span></span>'}
      <a href="#/" class="jump-home"><span>回到长河</span><strong>华夏纪年</strong></a>
      ${next ? `<a href="#/dynasty/${next.id}" class="jump-next"><span>下一卷 →</span><strong>${esc(next.name)}</strong></a>` : '<span></span>'}
    </nav>`;
  }

  /* ---------------- 帝王纪年时间轴 ---------------- */

  function axisScale(span) {
    return Math.min(150, Math.max(8, 2800 / Math.max(span, 1)));
  }

  function axisStep(scale) {
    const candidates = [1, 2, 5, 10, 20, 25, 50, 100, 200];
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] * scale >= 78) return candidates[i];
    }
    return 200;
  }

  function buildTicks(start, end, scale, pad) {
    const step = axisStep(scale);
    const major = [];
    const first = Math.ceil(start / step) * step;
    for (let year = first; year <= end; year += step) {
      if (year >= start) major.push(year);
    }
    const result = major.filter((year) => {
      const x = pad + (year - start) * scale;
      return x - (pad + (start - start) * scale) > 50 && (pad + (end - start) * scale) - x > 50;
    });
    const minor = [];
    const half = step / 2;
    if (half >= 1 && half * scale >= 24) {
      for (let year = Math.ceil(start / half) * half; year <= end; year += half) {
        if (Math.abs(year - Math.round(year)) > 0.01) continue;
        if (!result.includes(year)) minor.push(year);
      }
    }
    return { step, major: result, minor, start, end };
  }

  function buildTimeline(dyn, options) {
    options = options || {};
    const scroll = document.getElementById('chronicle-scroll');
    const canvas = document.getElementById('chronicle-canvas');
    if (!scroll || !canvas) return;

    let centerYear = null;
    if (options.preserveCenter && HX.state.timeline) {
      const previous = HX.state.timeline;
      centerYear = dyn.start + (scroll.scrollLeft + scroll.clientWidth / 2 - previous.pad) / previous.scale;
    }

    const span = dyn.end - dyn.start;
    const base = axisScale(span);
    const scale = base * HX.state.timelineZoom;
    const pad = window.matchMedia('(max-width: 900px)').matches ? 112 : 170;
    const width = Math.round(pad * 2 + span * scale);
    const stepData = buildTicks(dyn.start, dyn.end, scale, pad);

    const emperorMarkers = dyn.emperors.map((emp) => {
      const reign = primaryReign(emp);
      const x = pad + ((reign[0] + reign[1]) / 2 - dyn.start) * scale;
      return { emp, x, lane: 0 };
    }).sort((a, b) => a.x - b.x);

    const lastX = [-Infinity, -Infinity];
    let maxLane = 0;
    emperorMarkers.forEach((marker) => {
      let lane = 0;
      while (lane < 2 && marker.x - lastX[lane] < 94) lane++;
      if (lane === 2) lane = (lastX[0] < lastX[1]) ? 0 : 1;
      marker.lane = lane;
      lastX[lane] = marker.x;
      maxLane = Math.max(maxLane, lane);
    });
    const emperorHeight = 16 + (maxLane + 1) * 100;

    const palette = [dyn.theme.seal, dyn.theme.accent, '#9c7b45', '#5e7468'];

    const reignSegments = [];
    dyn.emperors.forEach((emp, empIndex) => {
      emp.reigns.forEach((reign, reignIndex) => {
        const left = pad + (reign[0] - dyn.start) * scale;
        const segWidth = Math.max(2, (reign[1] - reign[0]) * scale);
        const color = palette[empIndex % palette.length];
        const labelEra = emp.era ? emp.era.split(/[、—]/)[0] : '';
        reignSegments.push(`<button class="reign-seg" data-select-emperor="${emp.id}" data-emperor-id="${emp.id}" style="left:${left}px;width:${segWidth}px;--seg:${color};--seg-bg:${hexToRgba(color, 0.16)};--seg-bg-strong:${hexToRgba(color, 0.38)}" title="${esc(emp.title + ' ' + emp.name + ' · ' + emperorReignText(emp))}" aria-label="${esc(emp.title + ' ' + emp.name + '，' + emperorReignText(emp))}">
          ${segWidth > 48 ? `<span class="reign-era">${esc(labelEra)}</span>` : ''}
          ${segWidth > 108 ? `<span class="reign-years">${fmtYearSpan(reign[0], reign[1])}</span>` : ''}
        </button>`);
      });
    });

    const eventCards = dyn.events.slice().sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, 'zh'));
    const laneRights = [];
    eventCards.forEach((event) => {
      const x = pad + (event.year - dyn.start) * scale;
      let lane = 0;
      while (lane < laneRights.length && x - 88 < laneRights[lane]) lane++;
      if (lane === laneRights.length) laneRights.push(-Infinity);
      laneRights[lane] = x + 88 + 10;
      event._timelineX = x;
      event._timelineLane = lane;
    });
    const laneCount = Math.max(1, laneRights.length);
    const eventHeight = Math.max(166, 48 + laneCount * 84 + 22);

    const eventMarkup = eventCards.map((event, index) => {
      const meta = typeMeta(event.type);
      const x = event._timelineX;
      const lane = event._timelineLane;
      const top = 18 + lane * 84;
      const stemHeight = eventHeight - top - 78;
      const read = HX.isRead(event.id);
      const emperor = event.emperor ? HX.getEmperor(event.emperor) : null;
      return `<span class="event-stem" style="left:${x}px;top:${top + 78}px;height:${stemHeight}px" aria-hidden="true"></span>
        <button class="event-card type-${event.type} ${read ? 'is-read' : ''}" style="left:${x}px;top:${top}px;--type-color:${meta.color};--delay:${Math.min(index * 35, 420)}ms" data-open-event="${event.id}" data-event-id="${event.id}" data-type="${event.type}" data-emperor="${event.emperor || ''}" title="${esc(event.title + '：' + event.summary)}">
          <span class="event-card-top"><span class="event-year">${HX.yearBadge(event)}</span><span class="event-type">${meta.label}</span></span>
          <strong class="event-title">${esc(event.shortTitle || event.title)}</strong>
          <span class="event-era">${esc(emperor ? emperor.title : event.context || '')}</span>
          <span class="event-read-dot" aria-hidden="true">✓</span>
        </button>
        <span class="event-pin" style="left:${x}px;bottom:2px" aria-hidden="true"></span>`;
    }).join('');

    const emperorMarkup = emperorMarkers.map(({ emp, x, lane }) => {
      return `<button class="emp-marker" style="left:${x}px;top:${14 + lane * 100}px" data-select-emperor="${emp.id}" data-emperor-id="${emp.id}" aria-label="聚焦${emp.title}${emp.name}">
        <span class="emp-portrait">${window.portraitMarkup(emp, { theme: dyn.theme, seal: dyn.seal, variant: 'marker' })}</span>
        <span class="emp-title">${esc(emp.title)}</span>
        <span class="emp-name">${esc(emp.name)}</span>
        <span class="emp-years">${emperorReignText(emp)}</span>
        ${emp.reigns.length > 1 ? '<span class="emp-reign-badge">复</span>' : ''}
      </button>`;
    }).join('');

    const gridMarkup = stepData.major.map((year) => {
      const x = pad + (year - dyn.start) * scale;
      return `<span class="grid-line" style="left:${x}px" aria-hidden="true"></span>`;
    }).join('');

    const minorMarkup = stepData.minor.map((year) => {
      const x = pad + (year - dyn.start) * scale;
      return `<span class="axis-tick is-minor" style="left:${x}px" aria-hidden="true"></span>`;
    }).join('');

    const majorMarkup = stepData.major.map((year) => {
      const x = pad + (year - dyn.start) * scale;
      return `<span class="axis-tick" style="left:${x}px" aria-hidden="true"></span>
        <span class="axis-year" style="left:${x}px">${fmtYear(year)}</span>`;
    }).join('');

    const startX = pad;
    const endX = pad + span * scale;
    const edgeMarkup = `<span class="axis-tick is-edge" style="left:${startX}px" aria-hidden="true"></span>
      <span class="axis-year is-edge is-start" style="left:${startX}px">${fmtYear(dyn.start)}</span>
      <span class="axis-tick is-edge" style="left:${endX}px" aria-hidden="true"></span>
      <span class="axis-year is-edge is-end" style="left:${endX}px">${fmtYear(dyn.end)}</span>`;

    canvas.style.width = width + 'px';
    canvas.innerHTML = `
      <div class="grid-layer" aria-hidden="true">${gridMarkup}</div>
      <div class="emp-track" style="height:${emperorHeight}px">${emperorMarkup}</div>
      <div class="event-field" style="height:${eventHeight}px">${eventMarkup}</div>
      <div class="reign-track">${reignSegments.join('')}</div>
      <div class="axis">
        <span class="axis-line"></span>
        <span class="axis-caption">公元纪年</span>
        ${minorMarkup}
        ${majorMarkup}
        ${edgeMarkup}
      </div>
      <span class="canvas-end" style="left:${width - 96}px">终 · ${esc(dyn.seal)}</span>
    `;

    HX.state.timeline = { dyn, scale, pad, width, start: dyn.start, end: dyn.end, eventHeight, emperorHeight };
    if (centerYear != null) {
      const left = pad + (centerYear - dyn.start) * scale - scroll.clientWidth / 2;
      scroll.scrollLeft = clamp(left, 0, width - scroll.clientWidth);
    }

    const dots = dyn.events.map((event) => {
      const left = ((event.year - dyn.start) / span) * 100;
      return `<span class="mm-dot" style="left:${left}%;--dot:${typeMeta(event.type).color}" data-event-id="${event.id}"></span>`;
    }).join('');
    const minimap = document.getElementById('chronicle-minimap');
    if (minimap) {
      minimap.innerHTML = `<span class="mm-track"></span><span class="mm-dots">${dots}</span><span class="mm-view" id="mm-view"></span><span class="mm-labels"><em>${fmtYear(dyn.start)}</em><em>${fmtYear(dyn.end)}</em></span>`;
    }

    applyTypeFilter();
    syncTimelineSelection();
    updateTimelineMinimap();
    updateZoomLabel();
    HX.initReveal(canvas.parentElement);
  }

  function applyTypeFilter() {
    const type = HX.state.eventFilter;
    document.querySelectorAll('.event-card').forEach((card) => {
      card.classList.toggle('is-muted', type !== 'all' && card.dataset.type !== type);
    });
    document.querySelectorAll('[data-filter-type]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.filterType === type);
      button.setAttribute('aria-pressed', String(button.dataset.filterType === type));
    });
    document.querySelectorAll('.event-index-item').forEach((item) => {
      item.classList.toggle('is-muted', type !== 'all' && item.dataset.type !== type);
    });
  }

  function syncTimelineSelection() {
    const selected = HX.state.selectedEmperor;
    document.querySelectorAll('.emp-marker, .reign-seg').forEach((node) => {
      node.classList.toggle('is-selected', !!selected && node.dataset.emperorId === selected);
    });
    document.querySelectorAll('.event-card').forEach((node) => {
      const dim = !!selected && node.dataset.emperor !== selected;
      node.classList.toggle('is-dim', dim);
      node.classList.toggle('is-read', HX.isRead(node.dataset.eventId));
    });
    document.querySelectorAll('[data-emperor-card]').forEach((node) => {
      node.classList.toggle('is-selected', node.dataset.emperorCard === selected);
    });
    document.querySelectorAll('.event-index-item').forEach((node) => {
      node.classList.toggle('is-read', HX.isRead(node.dataset.eventId));
    });
  }

  function renderEmperorFocus() {
    const host = document.getElementById('emperor-focus');
    if (!host) return;
    const dyn = HX.state.item;
    const id = HX.state.selectedEmperor;
    if (!dyn || dyn.kind !== 'dynasty' || !id) {
      host.innerHTML = '';
      host.classList.remove('is-visible');
      return;
    }
    const emp = HX.getEmperor(id);
    if (!emp) return;
    const s = HX.dynastyStats(dyn);
    host.innerHTML = `<div class="focus-portrait">${window.portraitMarkup(emp, { theme: dyn.theme, seal: dyn.seal, variant: 'marker' })}</div>
      <div class="focus-copy">
        <p class="focus-kicker">${esc(emp.title)} · ${esc(emp.name)} · ${emperorReignText(emp)}</p>
        <p class="focus-bio">${esc(emp.bio)}</p>
      </div>
      <div class="focus-actions">
        <span class="focus-count">${emperorEventCount(emp)} 件纪事 · 已读 ${emp._events.filter((event) => HX.isRead(event.id)).length}</span>
        <button class="text-button" data-open-emperor="${emp.id}">读小传</button>
        <button class="icon-button" data-clear-emperor aria-label="取消帝王聚焦">×</button>
      </div>`;
    host.classList.add('is-visible');
  }

  function selectEmperor(id, options) {
    options = options || {};
    const dyn = HX.state.item;
    if (!dyn || dyn.kind !== 'dynasty') return;
    HX.state.selectedEmperor = id || null;
    renderEmperorFocus();
    syncTimelineSelection();
    const jump = document.getElementById('emperor-jump');
    if (jump) jump.value = id || '';
    if (id && options.scroll !== false) {
      const emp = HX.getEmperor(id);
      const timeline = HX.state.timeline;
      const scroll = document.getElementById('chronicle-scroll');
      if (emp && timeline && scroll) {
        const reign = primaryReign(emp);
        const center = timeline.pad + ((reign[0] + reign[1]) / 2 - timeline.start) * timeline.scale;
        const left = clamp(center - scroll.clientWidth / 2, 0, timeline.width - scroll.clientWidth);
        scroll.scrollTo({ left, behavior: 'smooth' });
      }
    }
  }

  function updateZoomLabel() {
    const label = document.querySelector('[data-zoom-label]');
    if (label) label.textContent = Math.round(HX.state.timelineZoom * 100) + '%';
  }

  function updateTimelineMinimap() {
    const scroll = document.getElementById('chronicle-scroll');
    const view = document.getElementById('mm-view');
    if (!scroll || !view) return;
    const total = scroll.scrollWidth || 1;
    const widthPct = (scroll.clientWidth / total) * 100;
    const leftPct = (scroll.scrollLeft / total) * 100;
    view.style.width = widthPct + '%';
    view.style.left = leftPct + '%';
  }

  function bindTimelineChrome() {
    const scroll = document.getElementById('chronicle-scroll');
    if (!scroll || scroll.dataset.bound === '1') return;
    scroll.dataset.bound = '1';
    scroll.addEventListener('scroll', updateTimelineMinimap, { passive: true });
    if (!HX._resizeBound) {
      window.addEventListener('resize', updateTimelineMinimap, { passive: true });
      HX._resizeBound = true;
    }

    const minimap = document.getElementById('chronicle-minimap');
    if (minimap) {
      minimap.addEventListener('click', (event) => {
        const rect = minimap.getBoundingClientRect();
        const ratio = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        scroll.scrollTo({ left: ratio * scroll.scrollWidth - scroll.clientWidth / 2, behavior: 'smooth' });
      });
    }

    document.querySelectorAll('[data-scroll-timeline]').forEach((button) => {
      button.addEventListener('click', () => {
        const direction = Number(button.dataset.scrollTimeline);
        scroll.scrollBy({ left: direction * scroll.clientWidth * 0.72, behavior: 'smooth' });
      });
    });

    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    scroll.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || event.target.closest('button, a')) return;
      dragging = true;
      startX = event.clientX;
      startLeft = scroll.scrollLeft;
      scroll.classList.add('is-dragging');
      scroll.setPointerCapture(event.pointerId);
    });
    scroll.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      scroll.scrollLeft = startLeft - (event.clientX - startX);
    });
    const stopDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      scroll.classList.remove('is-dragging');
      if (event && event.pointerId != null && scroll.hasPointerCapture(event.pointerId)) scroll.releasePointerCapture(event.pointerId);
    };
    scroll.addEventListener('pointerup', stopDrag);
    scroll.addEventListener('pointercancel', stopDrag);
    scroll.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        scroll.scrollBy({ left: 240, behavior: 'smooth' });
        event.preventDefault();
      } else if (event.key === 'ArrowLeft') {
        scroll.scrollBy({ left: -240, behavior: 'smooth' });
        event.preventDefault();
      } else if (event.key === 'Home') {
        scroll.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (event.key === 'End') {
        scroll.scrollTo({ left: scroll.scrollWidth, behavior: 'smooth' });
      }
    });
  }

  function bindTimelineToolbar(dyn) {
    const select = document.getElementById('emperor-jump');
    if (select) {
      select.addEventListener('change', () => {
        if (select.value) selectEmperor(select.value);
        else selectEmperor(null);
      });
    }
    document.querySelectorAll('[data-filter-type]').forEach((button) => {
      button.addEventListener('click', () => {
        HX.state.eventFilter = button.dataset.filterType;
        applyTypeFilter();
      });
    });
    document.querySelectorAll('[data-zoom]').forEach((button) => {
      button.addEventListener('click', () => {
        const direction = Number(button.dataset.zoom);
        const next = clamp(HX.state.timelineZoom + direction * 0.2, 0.6, 2);
        if (next === HX.state.timelineZoom) return;
        HX.state.timelineZoom = next;
        buildTimeline(dyn, { preserveCenter: true });
      });
    });
    document.querySelectorAll('[data-select-emperor]').forEach((node) => {
      if (node.closest('#chronicle-canvas')) return;
    });
  }

  function bindGallery() {
    document.querySelectorAll('[data-emperor-card]').forEach((card) => {
      const activate = () => {
        selectEmperor(card.dataset.emperorCard, { scroll: true });
        HX.scrollToSection('timeline-section');
      };
      card.addEventListener('click', (event) => {
        if (event.target.closest('[data-open-emperor]')) return;
        activate();
      });
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          if (event.target.closest('[data-open-emperor]')) return;
          event.preventDefault();
          activate();
        }
      });
    });
  }

  function eventIndexMarkup(dyn) {
    return dyn.events.slice().sort((a, b) => a.year - b.year).map((event) => {
      const meta = typeMeta(event.type);
      const emperor = event.emperor ? HX.getEmperor(event.emperor) : null;
      return `<button class="event-index-item type-${event.type} ${HX.isRead(event.id) ? 'is-read' : ''}" data-open-event="${event.id}" data-event-id="${event.id}" data-type="${event.type}" style="--type-color:${meta.color}">
        <span class="index-year">${HX.yearBadge(event)}</span>
        <span class="index-main">
          <span class="index-top"><strong>${esc(event.shortTitle || event.title)}</strong><em>${meta.label}</em></span>
          <span class="index-summary">${esc(event.summary)}</span>
          <span class="index-meta">${emperor ? esc(emperor.title + ' ' + emperor.name) : esc(event.context || '')}</span>
        </span>
        <span class="index-read" aria-hidden="true">✓</span>
      </button>`;
    }).join('');
  }

  function emperorGalleryMarkup(dyn) {
    return dyn.emperors.map((emp) => {
      const count = emperorEventCount(emp);
      const read = emp._events.filter((event) => HX.isRead(event.id)).length;
      return `<article class="emperor-card" data-emperor-card="${emp.id}" tabindex="0" role="group" aria-label="聚焦${emp.title}${emp.name}">
        <div class="ec-portrait">${window.portraitMarkup(emp, { theme: dyn.theme, seal: dyn.seal, variant: 'gallery' })}</div>
        <div class="ec-body">
          <p class="ec-era">${esc(emp.era)}</p>
          <h3>${esc(emp.title)}<span>${esc(emp.name)}</span></h3>
          <p class="ec-years">${emperorReignText(emp)}</p>
          <p class="ec-bio">${esc(truncate(emp.bio, 64))}</p>
          <div class="ec-foot"><span>${count ? count + ' 件纪事' : '无纪事'}</span><span>${read > 0 ? '已读 ' + read : '未读'}</span></div>
        </div>
        <button class="ec-link" data-open-emperor="${emp.id}">小传 <span>→</span></button>
      </article>`;
    }).join('');
  }

  const FEATURED = {
    qin: ['qin-unify', 'qin-greatwall', 'qin-shaqiu', 'qin-daze', 'qin-julu'],
    'western-han': ['wh-found', 'wh-baideng', 'wh-zhangqian', 'wh-mobei', 'wh-wugu'],
    'eastern-han': ['eh-banchao', 'eh-paper', 'eh-partisan', 'eh-yellowturban', 'eh-chibi'],
    sui: ['sui-unify', 'sui-canal', 'sui-keju', 'sui-goguryeo', 'sui-fall'],
    tang: ['tang-xuanwu', 'tang-tujue', 'tang-wuzhou', 'tang-kaiyuan', 'tang-anlushan', 'tang-huangchao'],
    'northern-song': ['ns-chenqiao', 'ns-chanyuan', 'ns-wanganshi', 'ns-jingkang'],
    'southern-song': ['ss-yuefei', 'ss-caishi', 'ss-mongol', 'ss-yashan'],
    yuan: ['yuan-mongol', 'yuan-founded', 'yuan-unify', 'yuan-redturban', 'yuan-fall'],
    ming: ['ming-jingnan', 'ming-zhenghe', 'ming-daliyi', 'ming-three-campaigns', 'ming-sarhu', 'ming-fall'],
    qing: ['qing-enter', 'qing-sanfan', 'qing-junji', 'qing-opiumwar', 'qing-jiawu', 'qing-xinhai']
  };

  function quickJumpMarkup(dyn) {
    const ids = FEATURED[dyn.id] || dyn.events.slice(0, 5).map((event) => event.id);
    return `<div class="timeline-quickjump">
      <span class="quickjump-label">本卷大事</span>
      <div class="quickjump-list">
        ${ids.map((id) => {
          const event = HX.getEvent(id);
          if (!event) return '';
          return `<button class="quickjump-chip" data-quick-event="${event.id}">
            <span>${HX.yearBadge(event)}</span>${esc(event.shortTitle || event.title)}
          </button>`;
        }).join('')}
      </div>
      <span class="quickjump-hint">点击定位</span>
    </div>`;
  }

  function renderDynasty(dyn) {
    HX.applyItemTheme(dyn);
    HX.state.selectedEmperor = null;
    HX.state.eventFilter = 'all';
    HX.state.timelineZoom = 1;
    HX.state.currentEvent = null;
    HX.state.currentEmperor = null;
    HX.renderHeader('dynasty', dyn);
    HX.renderFooter();
    const presentTypes = TYPE_ORDER.filter((type) => dyn.events.some((event) => event.type === type));
    const typeCounts = {};
    dyn.events.forEach((event) => { typeCounts[event.type] = (typeCounts[event.type] || 0) + 1; });
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="volume-page dynasty-page">
        ${volumeHero(dyn, false)}
        <section class="timeline-section" id="timeline-section">
          <div class="section-head">
            <div>
              <p class="section-kicker">本卷 · 纪年</p>
              <h2>帝王纪年</h2>
            </div>
            <p class="section-desc">横轴以公元纪年为准，按帝王在位划分。点击帝王聚焦一朝天子的纪事，点击事件展开细读。</p>
          </div>
          <div class="timeline-panel">
            <div class="timeline-toolbar">
              <div class="toolbar-jump">
                <label for="emperor-jump">定位帝王</label>
                <div class="select-wrap">
                  <select id="emperor-jump">
                    <option value="">全部帝王</option>
                    ${dyn.emperors.map((emp) => `<option value="${emp.id}">${esc(emp.title)} · ${esc(emp.name)}（${emperorReignText(emp)}）</option>`).join('')}
                  </select>
                  <span class="select-arrow">⌄</span>
                </div>
              </div>
              <div class="toolbar-filters" role="group" aria-label="按事件类型筛选">
                <button class="filter-chip is-active" data-filter-type="all" aria-pressed="true">全部 <em>${dyn.events.length}</em></button>
                ${presentTypes.map((type) => {
                  const meta = TYPES[type];
                  return `<button class="filter-chip" data-filter-type="${type}" style="--chip:${meta.color}" aria-pressed="false">${meta.label} <em>${typeCounts[type]}</em></button>`;
                }).join('')}
              </div>
              <div class="toolbar-zoom" aria-label="时间轴缩放">
                <button class="zoom-button" data-zoom="-1" aria-label="缩小时间轴">−</button>
                <span class="zoom-label" data-zoom-label>100%</span>
                <button class="zoom-button" data-zoom="1" aria-label="放大时间轴">＋</button>
              </div>
            </div>
            ${quickJumpMarkup(dyn)}
            <div class="swipe-hint"><span>←</span>左右滑动，查看整卷<span>→</span></div>
            <div class="emperor-focus" id="emperor-focus"></div>
            <div class="chronicle-shell">
              <button class="chronicle-arrow is-left" data-scroll-timeline="-1" aria-label="向左滚动时间轴">←</button>
              <button class="chronicle-arrow is-right" data-scroll-timeline="1" aria-label="向右滚动时间轴">→</button>
              <div class="chronicle-scroll" id="chronicle-scroll" tabindex="0" aria-label="帝王纪年时间轴，可横向滚动">
                <div class="chronicle-canvas" id="chronicle-canvas"></div>
              </div>
              <div class="chronicle-minimap" id="chronicle-minimap" aria-label="时间轴缩略图"></div>
              <div class="chronicle-hint"><span>按住拖动横轴</span><span>滚轮横向浏览</span><span>点击帝王聚焦</span><span>点击事件细读</span></div>
            </div>
          </div>
        </section>

        <section class="emperor-gallery-section" id="emperor-gallery">
          <div class="section-head">
            <div>
              <p class="section-kicker">本卷 · 人物</p>
              <h2>帝王一览</h2>
            </div>
            <p class="section-desc">有可靠传世画像者，用历史画像；无画像者，在同样大小的牌位上以名讳、庙号与纪年作记。</p>
          </div>
          <div class="emperor-grid">${emperorGalleryMarkup(dyn)}</div>
        </section>

        <section class="event-index-section" id="event-index">
          <div class="section-head">
            <div>
              <p class="section-kicker">本卷 · 纪事</p>
              <h2>纪事索引</h2>
            </div>
            <p class="section-desc">按时间顺序陈列本卷大事。点击任意一条，展开背景、经过与影响。</p>
          </div>
          <div class="event-index-grid">${eventIndexMarkup(dyn)}</div>
        </section>

        ${volumeJump(dyn)}
      </div>
    `;

    buildTimeline(dyn);
    bindTimelineChrome();
    bindTimelineToolbar(dyn);
    bindGallery();
    HX.initReveal(app);
    document.title = dyn.fullName + ' · ' + shortYears(dyn) + ' · 华夏纪年';
    window.scrollTo({ top: 0, behavior: 'auto' });
    HX.renderReadingBar();
  }

  /* ---------------- 卷外 ---------------- */

  function periodRibbon(item) {
    const periods = item.periods || [];
    const start = item.start;
    const end = item.end;
    const total = Math.max(1, end - start);
    const maxLane = Math.max(...periods.map((p) => p.lane || 0));
    const lanes = maxLane + 1;
    const rowHeight = 48;
    const ticks = [];
    const step = total > 160 ? 50 : total > 90 ? 25 : 20;
    for (let year = Math.ceil((start + 1) / step) * step; year < end; year += step) ticks.push(year);
    return `<div class="period-board" style="--lanes:${lanes};--row-height:${rowHeight}px">
      <div class="period-axis">
        ${ticks.map((year) => {
          const left = ((year - start) / total) * 100;
          return `<span class="period-tick" style="left:${left}%"></span><span class="period-year" style="left:${left}%">${fmtYear(year)}</span>`;
        }).join('')}
        <span class="period-year is-start" style="left:0">${fmtYear(start)}</span>
        <span class="period-year is-end" style="left:100%">${fmtYear(end)}</span>
      </div>
      <div class="period-track" style="height:${lanes * rowHeight + 10}px">
        ${periods.map((period) => {
          const clippedStart = Math.max(start, period.start);
          const clippedEnd = Math.min(end, period.end);
          const left = ((clippedStart - start) / total) * 100;
          const width = Math.max(((clippedEnd - clippedStart) / total) * 100, 0.5);
          return `<div class="period-seg" style="left:${left}%;width:${width}%;top:${(period.lane || 0) * rowHeight}px;--period:${period.color}" title="${esc(period.name)}：${fmtYearSpan(period.start, period.end)}">
            <span>${esc(period.name)}</span>
            <em>${fmtYearSpan(clippedStart, clippedEnd)}</em>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }

  function interludeEventsMarkup(item) {
    return item.events.slice().sort((a, b) => a.year - b.year).map((event) => {
      const meta = typeMeta(event.type);
      return `<button class="vertical-event ${HX.isRead(event.id) ? 'is-read' : ''}" data-open-event="${event.id}" data-event-id="${event.id}" style="--type-color:${meta.color}">
        <span class="ve-year"><strong>${HX.yearBadge(event)}</strong><em>${esc(event.era)}</em></span>
        <span class="ve-rail"><i></i></span>
        <span class="ve-body">
          <span class="ve-top"><span class="type-tag" style="--tag:${meta.color}">${meta.label}</span><span class="ve-context">${esc(event.context || '')}</span></span>
          <strong class="ve-title">${esc(event.title)}</strong>
          <span class="ve-summary">${esc(event.summary)}</span>
          <span class="ve-tags">${(event.tags || []).map((tag) => `<em>${esc(tag)}</em>`).join('')}</span>
          <span class="ve-read">已读 ✓</span>
        </span>
      </button>`;
    }).join('');
  }

  function renderInterlude(item) {
    HX.applyItemTheme(item);
    HX.state.selectedEmperor = null;
    HX.state.currentEvent = null;
    HX.state.currentEmperor = null;
    HX.renderHeader('interlude', item);
    HX.renderFooter();
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="volume-page interlude-page">
        ${volumeHero(item, true)}
        <section class="period-section" id="period-ribbon">
          <div class="section-head">
            <div>
              <p class="section-kicker">卷外 · 政权</p>
              <h2>政权并立</h2>
            </div>
            <p class="section-desc">分裂时期的政权兴替并非一线相承。色条并列，表示同时存在的不同政权。</p>
          </div>
          ${periodRibbon(item)}
        </section>

        <section class="figures-section" id="interlude-figures">
          <div class="section-head">
            <div>
              <p class="section-kicker">卷外 · 人物</p>
              <h2>关键人物</h2>
            </div>
            <p class="section-desc">每个过渡时代，都有几个人物决定了它的方向。</p>
          </div>
          <div class="figure-grid">
            ${item.figures.map((figure, index) => `<article class="figure-card reveal" style="--card-delay:${index * 70}ms">
              <div class="figure-portrait">${window.portraitMarkup(figure, { theme: item.theme, seal: item.seal, variant: 'figure' })}</div>
              <div class="figure-body">
                <p class="figure-title">${esc(figure.title)}</p>
                <h3>${esc(figure.name)}</h3>
                <p>${esc(figure.bio)}</p>
              </div>
            </article>`).join('')}
          </div>
        </section>

        <section class="interlude-events-section" id="interlude-events">
          <div class="section-head">
            <div>
              <p class="section-kicker">卷外 · 纪事</p>
              <h2>纪年大事</h2>
            </div>
            <p class="section-desc">按时间顺序，读这一时期的转折与余波。</p>
          </div>
          <div class="vertical-events">${interludeEventsMarkup(item)}</div>
        </section>

        ${volumeJump(item)}
      </div>
    `;
    HX.initReveal(app);
    document.title = item.fullName + ' · ' + shortYears(item) + ' · 华夏纪年';
    window.scrollTo({ top: 0, behavior: 'auto' });
    HX.renderReadingBar();
  }

  HX.buildTimeline = buildTimeline;
  HX.selectEmperor = selectEmperor;
  HX.renderEmperorFocus = renderEmperorFocus;
  HX.renderDynasty = renderDynasty;
  HX.renderInterlude = renderInterlude;
})();
