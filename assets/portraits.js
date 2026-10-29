/* 帝王像：优先使用 Wikimedia Commons 历史画像；无可靠传世画像者，以名讳牌位代替 */
(function () {
  'use strict';

  const IMAGES = window.PORTRAIT_IMAGES || {};

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  function shortEra(emp) {
    const era = String(emp.era || '').split(/[—、]/)[0].trim();
    if (!era || /^(秦王|二世|在位|临朝|汉五年)/.test(era)) return '';
    return era.length > 5 ? era.slice(0, 5) : era;
  }

  function nameGlyph(emp) {
    const name = String(emp.name || emp.title || '帝').replace(/[·\s]/g, '');
    return name.slice(-1) || '帝';
  }

  function imageInfo(emp) {
    return emp && emp.id ? IMAGES[emp.id] || null : null;
  }

  function portraitMarkup(emp, opts) {
    opts = opts || {};
    const theme = opts.theme || {};
    const seal = opts.seal || theme.seal || '史';
    const variant = opts.variant || 'medium';
    const info = imageInfo(emp);
    const title = emp.title || '';
    const name = emp.name || '';
    const alt = esc((title + ' ' + name).trim() + (info ? '历史画像' : '名讳'));

    if (info) {
      return `<img class="portrait-img" src="${esc(info.src)}" alt="${alt}" loading="${opts.eager ? 'eager' : 'lazy'}" decoding="async" title="画像来源：Wikimedia Commons">`;
    }

    const era = shortEra(emp);
    const glyph = nameGlyph(emp);
    const isMarker = variant === 'marker' || variant === 'chip' || variant === 'focus';
    const lengthClass = name.length >= 7 ? ' is-xlong' : name.length >= 4 ? ' is-long' : '';
    const style = `--np-seal:${esc(theme.seal || '#9c3a2e')};--np-accent:${esc(theme.accent || '#a8843f')};--np-ink:#2b2118;--np-muted:#7b6a53;--np-paper:#f3e7cf;--np-paper2:#ead9ba`;

    if (isMarker) {
      return `<span class="name-plate name-plate--${variant}" style="${style}" role="img" aria-label="${alt}" title="无可靠传世画像，以名讳为记">
        <span class="np-wash" aria-hidden="true"></span>
        <span class="np-watermark" aria-hidden="true">${esc(seal)}</span>
        <span class="np-glyph" aria-hidden="true">${esc(glyph)}</span>
        <span class="np-stamp" aria-hidden="true">名</span>
      </span>`;
    }

    return `<span class="name-plate name-plate--${variant}${lengthClass}" style="${style}" role="img" aria-label="${alt}" title="无可靠传世画像，以名讳为记">
      <span class="np-wash" aria-hidden="true"></span>
      <span class="np-watermark" aria-hidden="true">${esc(seal)}</span>
      ${title ? `<span class="np-title">${esc(title)}</span>` : ''}
      <span class="np-name">${esc(name)}</span>
      ${era ? `<span class="np-era">${esc(era)}</span>` : ''}
      <span class="np-stamp" aria-hidden="true">名</span>
    </span>`;
  }

  window.portraitMarkup = portraitMarkup;
  window.portraitSVG = portraitMarkup;
  window.portraitImageInfo = imageInfo;
})();
