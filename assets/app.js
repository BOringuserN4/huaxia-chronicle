/* 华夏纪年 · 路由与全局交互 */
(function () {
  'use strict';

  const HX = window.HX;
  const state = HX.state;
  let resetArmed = false;
  let resetTimer = null;

  /* ---------------- 路由 ---------------- */

  function parseHash() {
    let raw = location.hash.replace(/^#/, '');
    try { raw = decodeURIComponent(raw); } catch (error) { /* keep raw */ }
    const [pathPart, queryPart] = raw.split('?');
    return {
      parts: pathPart.split('/').filter(Boolean),
      query: new URLSearchParams(queryPart || '')
    };
  }

  function safeReplace(hash) {
    try {
      if (history.replaceState) history.replaceState(null, '', hash);
    } catch (error) {
      /* Firefox 在本地文件下可能禁止 replaceState，忽略即可 */
    }
  }

  function route() {
    HX.resetOverlays();
    const { parts, query } = parseHash();
    let item = null;
    if (parts[0] === 'dynasty') item = HX.getDynasty(parts[1]);
    else if (parts[0] === 'interlude') item = HX.getInterlude(parts[1]);

    if (!item) {
      HX.renderHome();
      HX.state.pendingSection = null;
      updateHeaderState();
      return;
    }

    if (item.kind === 'dynasty') HX.renderDynasty(item);
    else HX.renderInterlude(item);
    updateHeaderState();

    const eventId = query.get('event');
    const locateId = query.get('locate');
    const emperorId = query.get('emperor');

    if (eventId) {
      setTimeout(() => {
        const event = HX.getEvent(eventId);
        if (!event) return;
        HX.openEvent(eventId);
        safeReplace('#/' + event._dyn.kind + '/' + event._dyn.id);
      }, 160);
    } else if (locateId) {
      setTimeout(() => {
        const event = HX.getEvent(locateId);
        if (!event) return;
        HX.locateEvent(locateId);
        safeReplace('#/' + event._dyn.kind + '/' + event._dyn.id);
      }, 220);
    } else if (emperorId && item.kind === 'dynasty') {
      setTimeout(() => {
        if (!HX.getEmperor(emperorId)) return;
        HX.selectEmperor(emperorId, { scroll: true });
        HX.scrollToSection('timeline-section');
        safeReplace('#/dynasty/' + item.id);
      }, 220);
    }
  }

  /* ---------------- 小工具 ---------------- */

  function isTypingTarget(target) {
    if (!target) return false;
    const tag = target.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
  }

  function goSection(id) {
    if (HX.scrollToSection(id)) return;
    HX.state.pendingSection = id;
    if (location.hash && location.hash !== '#/') {
      location.hash = '#/';
    } else {
      HX.renderHome();
    }
  }

  function randomEvent() {
    if (!HX.ALL_EVENTS.length) return;
    const event = HX.ALL_EVENTS[Math.floor(Math.random() * HX.ALL_EVENTS.length)];
    HX.openEvent(event.id);
  }

  function armResetButton(button) {
    if (!resetArmed) {
      resetArmed = true;
      button.classList.add('is-armed');
      button.textContent = '再点一次，清空全部记录';
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        resetArmed = false;
        button.classList.remove('is-armed');
        button.textContent = '清空记录';
      }, 3600);
      return;
    }
    clearTimeout(resetTimer);
    resetArmed = false;
    button.classList.remove('is-armed');
    button.textContent = '清空记录';
    HX.clearProgress();
    HX.toast('研读记录已清空', 'muted');
    const note = document.querySelector('.progress-note');
    if (note) note.textContent = '还没有标记已读的事件。打开任意事件，点击「标记已读」即可。';
  }

  /* ---------------- 全局点击 ---------------- */

  document.addEventListener('click', (event) => {
    const target = event.target;

    const quickEventNode = target.closest('[data-quick-event]');
    if (quickEventNode) {
      event.preventDefault();
      HX.locateEvent(quickEventNode.dataset.quickEvent);
      return;
    }

    const openEventNode = target.closest('[data-open-event]');
    if (openEventNode) {
      event.preventDefault();
      HX.openEvent(openEventNode.dataset.openEvent);
      return;
    }

    const openEmperorNode = target.closest('[data-open-emperor]');
    if (openEmperorNode) {
      event.preventDefault();
      HX.openEmperor(openEmperorNode.dataset.openEmperor);
      return;
    }

    const selectEmperorNode = target.closest('[data-select-emperor]');
    if (selectEmperorNode) {
      event.preventDefault();
      HX.selectEmperor(selectEmperorNode.dataset.selectEmperor, { scroll: true });
      if (selectEmperorNode.closest('[data-emperor-card]')) HX.scrollToSection('timeline-section');
      return;
    }

    const clearEmperor = target.closest('[data-clear-emperor]');
    if (clearEmperor) {
      event.preventDefault();
      HX.selectEmperor(null);
      return;
    }

    const progressRow = target.closest('[data-progress-row]');
    if (progressRow) {
      HX.closeProgress();
      return;
    }

    const readButton = target.closest('[data-read-toggle]');
    if (readButton) {
      event.preventDefault();
      const nowRead = HX.toggleRead(readButton.dataset.readToggle);
      HX.toast(nowRead ? '已标记为已读' : '已取消已读', nowRead ? 'success' : 'muted');
      return;
    }

    const locateEvent = target.closest('[data-locate-event]');
    if (locateEvent) {
      event.preventDefault();
      HX.locateEvent(locateEvent.dataset.locateEvent);
      return;
    }

    const locateEmperor = target.closest('[data-locate-emperor]');
    if (locateEmperor) {
      event.preventDefault();
      HX.locateEmperor(locateEmperor.dataset.locateEmperor);
      return;
    }

    const scrollButton = target.closest('[data-scroll]');
    if (scrollButton) {
      event.preventDefault();
      goSection(scrollButton.dataset.scroll);
      return;
    }

    const homeButton = target.closest('[data-go-home]');
    if (homeButton) {
      event.preventDefault();
      location.hash = '#/';
      return;
    }

    const searchButton = target.closest('[data-open-search]');
    if (searchButton) {
      event.preventDefault();
      HX.openSearch();
      return;
    }

    const progressButton = target.closest('[data-open-progress]');
    if (progressButton) {
      event.preventDefault();
      HX.openProgress();
      return;
    }

    const randomButton = target.closest('[data-random-event]');
    if (randomButton) {
      event.preventDefault();
      randomEvent();
      return;
    }

    const resetButton = target.closest('[data-reset-progress]');
    if (resetButton) {
      event.preventDefault();
      armResetButton(resetButton);
      return;
    }

    const closeDrawer = target.closest('[data-close-drawer]');
    if (closeDrawer) {
      HX.closeDrawer();
      return;
    }
  });

  /* ---------------- 键盘 ---------------- */

  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      HX.openSearch();
      return;
    }
    if (event.key === '/' && !isTypingTarget(event.target) && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      HX.openSearch();
      return;
    }
    if (event.key === 'Escape') {
      if (HX.closeTopOverlay()) event.preventDefault();
    }
  });

  /* ---------------- 滚动状态 ---------------- */

  let scrollTicking = false;
  function updateHeaderState() {
    const header = document.getElementById('site-header');
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    HX.renderReadingBar();
  }

  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      scrollTicking = false;
      updateHeaderState();
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* ---------------- 启动 ---------------- */

  window.addEventListener('hashchange', route);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', '#efe6d4');

  if (!location.hash) {
    try {
      history.replaceState(null, '', '#/');
    } catch (error) {
      location.hash = '#/';
    }
  }
  route();
  updateHeaderState();

  HX.navigate = (hash) => { location.hash = hash; };
  HX.route = route;
})();
