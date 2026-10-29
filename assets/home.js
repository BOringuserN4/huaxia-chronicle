/* 华夏纪年 · 首页 */
(function () {
  'use strict';

  const HX = window.HX;
  const {
    esc, fmtYear, fmtYearSpan, DYNASTIES, INTERLUDES, ALL_EVENTS,
    TYPES, TYPE_ORDER, HOME_THEME, stats, typeMeta, itemChapter, shortYears,
    dynastyStats, primaryReign, emperorReignText
  } = HX;

  function truncate(text, length) {
    const value = String(text || '');
    return value.length > length ? value.slice(0, length) + '…' : value;
  }

  function motifSVG(motif) {
    const open = '<svg class="card-motif" viewBox="0 0 200 200" fill="none" aria-hidden="true">';
    const close = '</svg>';
    switch (motif) {
      case 'qin':
        return `${open}
          <path d="M20 150 L180 40 M20 168 L180 58 M20 132 L180 22" stroke="currentColor" stroke-width="1.2" opacity=".8"/>
          <path d="M36 38 L36 162 M164 38 L164 162" stroke="currentColor" stroke-width="1" opacity=".5"/>
          <g stroke="currentColor" stroke-width="1.2" opacity=".8">
            <path d="M36 66 L54 66 L54 56 L72 56 L72 68 L90 68 L90 58 L108 58 L108 70 L126 70 L126 60 L144 60 L144 72 L164 72"/>
            <path d="M36 126 L54 126 L54 116 L72 116 L72 128 L90 128 L90 118 L108 118 L108 130 L126 130 L126 120 L144 120 L144 132 L164 132"/>
          </g>
          <circle cx="100" cy="100" r="18" stroke="currentColor" stroke-width="1.4" opacity=".8"/>
          <path d="M86 100 L114 100 M100 86 L100 114" stroke="currentColor" stroke-width="1" opacity=".6"/>${close}`;
      case 'han':
      case 'han-east':
        return `${open}
          <path d="M6 146 C34 110 54 112 72 132 C92 154 112 156 134 126 C150 104 168 102 194 126" stroke="currentColor" stroke-width="1.2" opacity=".8"/>
          <path d="M8 170 C36 138 60 140 78 158 C98 178 118 178 138 152 C156 128 174 130 196 152" stroke="currentColor" stroke-width="1.1" opacity=".55"/>
          <path d="M24 74 C40 52 62 52 78 66 C90 76 104 76 116 64 C130 50 148 52 160 68 C170 80 184 82 194 74" stroke="currentColor" stroke-width="1.1" opacity=".6"/>
          <circle cx="100" cy="108" r="40" stroke="currentColor" stroke-width=".8" opacity=".3"/>${close}`;
      case 'sui':
        return `${open}
          <path d="M10 94 C52 62 92 126 132 92 C156 72 176 82 194 98" stroke="currentColor" stroke-width="1.2" opacity=".75"/>
          <path d="M10 120 C52 88 92 152 132 118 C156 98 176 108 194 124" stroke="currentColor" stroke-width="1.1" opacity=".55"/>
          <path d="M10 146 C52 114 92 178 132 144 C156 124 176 134 194 150" stroke="currentColor" stroke-width="1" opacity=".4"/>
          <path d="M44 16 L44 184 M100 16 L100 184 M156 16 L156 184" stroke="currentColor" stroke-width="1" opacity=".35"/>
          <circle cx="100" cy="48" r="22" stroke="currentColor" stroke-width="1.1" opacity=".6"/>${close}`;
      case 'tang':
        return `${open}
          <g transform="translate(100 100)" stroke="currentColor" fill="none" opacity=".7">
            <circle r="54" stroke-width="1"/>
            <circle r="38" stroke-width=".8"/>
            <path d="M0 -54 C18 -28 18 28 0 54 C-18 28 -18 -28 0 -54Z" stroke-width="1"/>
            <path d="M-54 0 C-28 -18 28 -18 54 0 C28 18 -28 18 -54 0Z" stroke-width="1"/>
            <path d="M-38 -38 C-12 -18 12 18 38 38 M38 -38 C12 -18 -12 18 -38 38" stroke-width=".8"/>
            <circle r="8" fill="currentColor" stroke="none" opacity=".8"/>
          </g>
          <path d="M0 164 C24 150 42 156 58 166 M142 166 C158 156 176 150 200 164" stroke="currentColor" stroke-width="1" opacity=".45"/>${close}`;
      case 'song-north':
        return `${open}
          <path d="M4 140 C30 108 54 114 74 134 C96 156 116 150 138 126 C156 106 176 112 196 132" stroke="currentColor" stroke-width="1.1" opacity=".65"/>
          <path d="M16 164 C44 138 66 142 86 158 C108 176 132 174 152 152 C166 136 182 138 196 148" stroke="currentColor" stroke-width="1" opacity=".45"/>
          <g stroke="currentColor" stroke-width=".7" opacity=".3">
            <path d="M48 32 L34 82 L58 68 L70 104 L82 62 L98 84 L108 38"/>
            <path d="M118 32 L132 82 L148 56 L160 92 L174 60 L188 76"/>
          </g>
          <circle cx="100" cy="104" r="44" stroke="currentColor" stroke-width=".8" opacity=".25"/>${close}`;
      case 'song-south':
        return `${open}
          <path d="M0 150 C28 120 50 126 70 144 C92 164 114 162 136 138 C156 116 176 118 200 138" stroke="currentColor" stroke-width="1.1" opacity=".6"/>
          <path d="M0 176 C30 148 54 152 76 170 C98 188 122 184 144 162 C162 144 182 146 200 158" stroke="currentColor" stroke-width="1" opacity=".45"/>
          <path d="M54 118 C54 82 74 58 100 58 C126 58 146 82 146 118" stroke="currentColor" stroke-width="1" opacity=".6"/>
          <path d="M48 118 L152 118 M60 118 L60 162 M140 118 L140 162" stroke="currentColor" stroke-width="1" opacity=".45"/>
          <path d="M76 162 L76 118 M124 162 L124 118 M100 58 L100 162" stroke="currentColor" stroke-width=".8" opacity=".32"/>${close}`;
      case 'yuan':
        return `${open}
          <circle cx="100" cy="100" r="50" stroke="currentColor" stroke-width="1" opacity=".55"/>
          <circle cx="100" cy="100" r="22" stroke="currentColor" stroke-width="1" opacity=".6"/>
          <g stroke="currentColor" stroke-width="1" opacity=".5">
            <path d="M100 8 L100 192 M8 100 L192 100 M35 35 L165 165 M165 35 L35 165"/>
            <path d="M100 50 L134 100 L100 150 L66 100Z"/>
          </g>
          <g fill="currentColor" opacity=".55">
            <circle cx="100" cy="8" r="2.5"/><circle cx="192" cy="100" r="2.5"/><circle cx="100" cy="192" r="2.5"/><circle cx="8" cy="100" r="2.5"/>
          </g>${close}`;
      case 'ming':
        return `${open}
          <circle cx="138" cy="62" r="28" stroke="currentColor" stroke-width="1.1" opacity=".7"/>
          <path d="M8 112 C34 88 54 96 74 112 C96 130 118 128 142 106 C158 92 178 92 194 108" stroke="currentColor" stroke-width="1.2" opacity=".65"/>
          <path d="M8 136 C34 112 54 120 74 136 C96 154 118 152 142 130 C158 116 178 116 194 132" stroke="currentColor" stroke-width="1.1" opacity=".5"/>
          <path d="M8 160 C34 136 54 144 74 160 C96 178 118 176 142 154 C158 140 178 140 194 156" stroke="currentColor" stroke-width="1" opacity=".35"/>
          <path d="M18 58 C34 40 50 44 60 56 C70 68 82 68 92 56 C102 44 114 44 126 56" stroke="currentColor" stroke-width="1" opacity=".5"/>${close}`;
      case 'qing':
        return `${open}
          <rect x="22" y="22" width="156" height="156" rx="78" stroke="currentColor" stroke-width="1" opacity=".35"/>
          <g stroke="currentColor" stroke-width="1" opacity=".45">
            <path d="M40 40 L160 40 L160 72 M40 40 L40 160 L72 160 M160 40 L160 160 L128 160 M72 160 L72 128 M128 160 L128 128"/>
            <path d="M84 84 L116 84 L116 116 L84 116Z"/>
          </g>
          <path d="M58 126 C78 104 94 112 108 124 C122 136 140 132 154 118" stroke="currentColor" stroke-width="1.1" opacity=".6"/>
          <circle cx="100" cy="100" r="8" stroke="currentColor" stroke-width="1" opacity=".6"/>${close}`;
      case 'three':
        return `${open}
          <circle cx="66" cy="86" r="32" stroke="currentColor" stroke-width="1.1" opacity=".55"/>
          <circle cx="126" cy="86" r="32" stroke="currentColor" stroke-width="1.1" opacity=".45"/>
          <circle cx="96" cy="134" r="32" stroke="currentColor" stroke-width="1.1" opacity=".6"/>
          <path d="M66 118 L96 134 L126 118" stroke="currentColor" stroke-width="1" opacity=".4"/>${close}`;
      case 'jin':
        return `${open}
          <path d="M12 168 C34 138 56 144 76 164 C98 186 124 182 148 160 C166 144 184 146 196 158" stroke="currentColor" stroke-width="1.1" opacity=".55"/>
          <path d="M28 44 C44 30 60 32 70 46 C80 60 94 60 106 46" stroke="currentColor" stroke-width="1.1" opacity=".55"/>
          <path d="M86 34 C102 20 118 22 128 36 C138 50 152 50 164 36" stroke="currentColor" stroke-width="1" opacity=".4"/>
          <path d="M42 98 C58 84 74 86 84 100 C94 114 108 114 120 100 C130 88 144 88 158 100" stroke="currentColor" stroke-width="1" opacity=".65"/>${close}`;
      case 'north-south':
        return `${open}
          <path d="M44 46 L44 156 M44 74 L78 74 M44 104 L78 104 M44 134 L78 134" stroke="currentColor" stroke-width="1" opacity=".5"/>
          <path d="M156 46 L156 156 M122 74 L156 74 M122 104 L156 104 M122 134 L156 134" stroke="currentColor" stroke-width="1" opacity=".5"/>
          <path d="M30 132 C50 108 66 112 82 130 C96 144 108 144 122 130 C138 112 154 108 172 132" stroke="currentColor" stroke-width="1.1" opacity=".55"/>
          <circle cx="100" cy="64" r="14" stroke="currentColor" stroke-width="1" opacity=".55"/>${close}`;
      case 'five':
        return `${open}
          <g stroke="currentColor" stroke-width="1" opacity=".55">
            <path d="M34 54 L100 54 M34 78 L100 78 M34 102 L100 102 M34 126 L100 126 M34 150 L100 150"/>
            <path d="M100 54 L166 78 L100 102 L166 126 L100 150"/>
          </g>
          <circle cx="100" cy="54" r="3" fill="currentColor" opacity=".7"/>
          <circle cx="100" cy="150" r="3" fill="currentColor" opacity=".7"/>${close}`;
      case 'xin':
        return `${open}
          <circle cx="100" cy="100" r="52" stroke="currentColor" stroke-width="1.1" opacity=".55"/>
          <circle cx="100" cy="100" r="42" stroke="currentColor" stroke-width=".8" opacity=".4" stroke-dasharray="4 5"/>
          <rect x="82" y="82" width="36" height="36" stroke="currentColor" stroke-width="1.1" opacity=".6"/>
          <path d="M100 64 L100 136 M64 100 L136 100" stroke="currentColor" stroke-width=".8" opacity=".4"/>${close}`;
      default:
        return `${open}<circle cx="100" cy="100" r="58" stroke="currentColor" stroke-width="1" opacity=".4"/>${close}`;
    }
  }

  function portraitFrame(emp, theme, seal, cls, variant) {
    return `<span class="portrait-frame ${cls || ''}">${window.portraitMarkup(emp, { theme, seal, variant: variant || 'medium' })}</span>`;
  }

  function heroScroll() {
    return `
    <div class="hero-art">
      <div class="hero-scroll">
        <span class="scroll-cord cord-left"></span>
        <span class="scroll-cord cord-right"></span>
        <span class="scroll-roller roller-top"></span>
        <div class="scroll-paper">
          <svg class="scroll-landscape" viewBox="0 0 360 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="scroll-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#f4ead5"/>
                <stop offset=".55" stop-color="#eee2ca"/>
                <stop offset="1" stop-color="#e3d5b9"/>
              </linearGradient>
              <radialGradient id="scroll-sun" cx="50%" cy="45%" r="50%">
                <stop offset="0" stop-color="#c05a45"/>
                <stop offset=".7" stop-color="#a64030"/>
                <stop offset="1" stop-color="#8e3327"/>
              </radialGradient>
              <linearGradient id="mist-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#f4ead6" stop-opacity="0"/>
                <stop offset=".5" stop-color="#f4ead6" stop-opacity=".85"/>
                <stop offset="1" stop-color="#f4ead6" stop-opacity="0"/>
              </linearGradient>
              <filter id="soft-mist"><feGaussianBlur stdDeviation="7"/></filter>
            </defs>
            <rect width="360" height="500" fill="url(#scroll-sky)"/>
            <text x="84" y="350" font-family="'Songti SC','STSong',serif" font-size="190" fill="#6f8274" opacity=".055">山</text>
            <circle class="hero-sun" cx="252" cy="106" r="45" fill="url(#scroll-sun)" opacity=".88"/>
            <g class="scroll-birds" stroke="#4b5148" stroke-width="1.2" fill="none" opacity=".6">
              <path d="M198 152 C202 148 206 148 210 152 C214 148 218 148 222 152"/>
              <path d="M231 137 C234 134 237 134 240 137 C243 134 246 134 249 137"/>
              <path d="M178 176 C181 173 184 173 187 176 C190 173 193 173 196 176"/>
            </g>
            <path d="M0 302 L34 266 L60 282 L92 230 L120 258 L152 214 L186 252 L218 232 L248 260 L282 238 L312 260 L340 244 L360 262 L360 500 L0 500Z" fill="#b9c3b3" opacity=".62"/>
            <path d="M0 344 C26 324 48 330 72 306 C96 282 116 304 140 288 C166 270 188 300 214 288 C242 274 264 300 292 292 C316 284 338 294 360 306 L360 500 L0 500Z" fill="#8a9d8f" opacity=".76"/>
            <g class="scroll-mist mist-one" filter="url(#soft-mist)">
              <rect x="-40" y="312" width="440" height="24" fill="url(#mist-grad)"/>
              <rect x="-60" y="354" width="480" height="18" fill="url(#mist-grad)" opacity=".8"/>
            </g>
            <path d="M0 410 C32 386 58 398 86 374 C114 350 142 378 170 360 C200 340 230 366 260 356 C290 346 324 364 360 350 L360 500 L0 500Z" fill="#53695c" opacity=".92"/>
            <path d="M0 444 C38 420 64 432 96 414 C128 396 154 418 186 406 C218 394 244 414 274 404 C306 394 334 406 360 396 L360 500 L0 500Z" fill="#3d5046"/>
            <path d="M20 412 C70 392 112 394 156 374 C198 356 232 366 270 356 C302 348 330 356 352 348" fill="none" stroke="#2d3c33" stroke-width="1.3" opacity=".6"/>
            <g fill="#33453b" opacity=".85">
              <path d="M236 352 L246 338 L256 352 Z"/>
              <rect x="241" y="350" width="10" height="12"/>
              <path d="M235 350 L257 350" stroke="#33453b" stroke-width="1.4"/>
              <path d="M78 382 L86 370 L94 382 Z"/>
              <rect x="82" y="380" width="8" height="10"/>
            </g>
            <path d="M118 500 C142 464 154 438 176 416 C192 400 208 390 224 386" fill="none" stroke="#e9dfc9" stroke-width="7" opacity=".38"/>
            <path d="M126 500 C148 468 160 442 182 420 C198 404 212 396 226 392" fill="none" stroke="#f4ead6" stroke-width="2" opacity=".55"/>
            <g class="scroll-mist mist-two" filter="url(#soft-mist)">
              <rect x="-30" y="394" width="420" height="16" fill="url(#mist-grad)" opacity=".75"/>
              <rect x="-50" y="426" width="460" height="12" fill="url(#mist-grad)" opacity=".55"/>
            </g>
            <g font-family="'Songti SC','STSong',serif" fill="#3a3931" opacity=".82">
              <text x="318" y="188" font-size="14" letter-spacing="6" writing-mode="vertical-rl">究天人之际</text>
              <text x="296" y="188" font-size="14" letter-spacing="6" writing-mode="vertical-rl">通古今之变</text>
              <text x="274" y="188" font-size="14" letter-spacing="6" writing-mode="vertical-rl">成一家之言</text>
            </g>
            <g transform="translate(280 388)">
              <rect width="22" height="22" fill="#9c3a2e" opacity=".9"/>
              <text x="11" y="16" text-anchor="middle" font-family="'Songti SC','STSong',serif" font-size="11" fill="#f4ead6">史</text>
            </g>
          </svg>
          <span class="scroll-stamp">华夏</span>
          <span class="scroll-caption">江山无尽图 · 意笔</span>
        </div>
        <span class="scroll-roller roller-bottom"></span>
      </div>
      <div class="hero-art-meta">
        <span>立轴 · 设色纸本</span>
        <span>纵五百 · 横三百六十</span>
      </div>
    </div>`;
  }

  function riverSegments() {
    const totalStart = -221;
    const totalEnd = 1912;
    const total = totalEnd - totalStart;
    return HX.DATA.map((item, index) => {
      const start = item.riverStart;
      const end = item.riverEnd;
      const left = ((start - totalStart) / total) * 100;
      const width = Math.max(((end - start) / total) * 100, 0.55);
      const label = width > 1.2 || item.id === 'qin';
      const labelSide = index % 2 === 0 ? 'above' : 'below';
      const edgeClass = item.id === 'qin' ? 'is-edge-start' : '';
      return `<a class="river-seg ${labelSide} ${item.theme.dark ? 'is-dark' : ''}" href="#/${item.kind}/${item.id}" data-river-id="${item.id}" style="left:${left}%;width:${width}%;--seg:${item.theme.river || item.theme.seal};--seg-accent:${item.theme.accent}" aria-label="${esc(item.fullName)}，${fmtYearSpan(item.riverStart, item.riverEnd)}">
        <span class="river-seg-inner"></span>
        ${label ? `<span class="river-seg-label ${edgeClass}"><strong>${esc(item.name)}</strong><em>${fmtYearSpan(item.riverStart, item.riverEnd)}</em></span>` : ''}
      </a>`;
    }).join('');
  }

  function riverReadout(item) {
    if (!item) {
      return `<div class="river-readout-inner" data-river-default>
        <div>
          <p class="readout-kicker">公元前二二一 · 公元一九一二</p>
          <h3>一条长河，十五个时代</h3>
          <p class="readout-text">秦、汉、唐、宋、元、明、清，与五段分裂融合的卷外时光。把光标停在色块上，阅读一个时代的起止与性格。</p>
        </div>
        <div class="readout-side">
          <span><strong>${stats.dynasties}</strong> 朝代</span>
          <span><strong>${stats.interludes}</strong> 卷外</span>
          <span><strong>${stats.years}</strong> 年</span>
        </div>
      </div>`;
    }
    const s = dynastyStats(item);
    return `<div class="river-readout-inner" data-river-item="${item.id}">
      <div>
        <p class="readout-kicker">${itemChapter(item)} · ${item.kind === 'interlude' ? '分裂与融合' : '帝王纪年'} · ${fmtYearSpan(item.riverStart, item.riverEnd)}</p>
        <h3>${esc(item.fullName)} <span class="readout-tagline">${esc(item.tagline)}</span></h3>
        <p class="readout-text">${esc(truncate(item.intro, 92))}</p>
      </div>
      <div class="readout-side">
        <span><strong>${s.events}</strong> 件大事</span>
        ${item.kind === 'dynasty' ? `<span><strong>${s.emperors}</strong> 位帝王</span>` : `<span><strong>${item.figures.length}</strong> 位人物</span>`}
        <a class="readout-enter" href="#/${item.kind}/${item.id}">入卷 <span>→</span></a>
      </div>
    </div>`;
  }

  function dynastyCard(item) {
    const first = HX.representativeEmperor(item) || item.emperors[0];
    const s = dynastyStats(item);
    const pct = s.events ? Math.round((s.read / s.events) * 100) : 0;
    return `<a class="dynasty-card reveal ${item.theme.dark ? 'is-dark' : ''}" href="#/dynasty/${item.id}" style="--c-bg:${item.theme.bg};--c-panel:${item.theme.panel};--c-ink:${item.theme.ink};--c-muted:${item.theme.muted};--c-seal:${item.theme.seal};--c-accent:${item.theme.accent};--c-line:${item.theme.line};--c-wash:${item.theme.wash};--card-delay:${item._chapterIndex * 45}ms">
      <span class="card-texture" aria-hidden="true"></span>
      <span class="card-motif-wrap" aria-hidden="true">${motifSVG(item.theme.motif)}</span>
      <div class="card-head">
        <span class="card-chapter">${itemChapter(item)}</span>
        <span class="card-years">${fmtYearSpan(item.start, item.end)}</span>
      </div>
      <div class="card-body">
        <div class="card-copy">
          <div class="card-heading">
            <span class="card-seal">${esc(item.seal)}</span>
            <div>
              <h3>${esc(item.fullName)}</h3>
              <p class="card-tagline">${esc(item.tagline)}</p>
            </div>
          </div>
          <p class="card-intro">${esc(truncate(item.intro, 62))}</p>
          <div class="card-foot">
            <span class="card-capital">${esc(item.capital)}</span>
            <span class="card-count">${s.emperors} 帝 · ${s.events} 事</span>
          </div>
          <div class="card-progress" data-dyn-progress="${item.id}" style="--p:${pct}%">
            <span class="card-progress-track"><i></i></span>
            <span data-dyn-progress-text>${s.read} / ${s.events}</span>
          </div>
        </div>
        <div class="card-portrait">
          ${portraitFrame(first, item.theme, item.seal, 'portrait-small', 'card')}
          <span class="card-portrait-caption">${esc(first.title)}</span>
        </div>
      </div>
      <span class="card-enter">入卷 <i>→</i></span>
    </a>`;
  }

  function interludeCard(item) {
    const s = dynastyStats(item);
    return `<a class="interlude-card reveal" href="#/interlude/${item.id}" style="--c-bg:${item.theme.bg};--c-panel:${item.theme.panel};--c-ink:${item.theme.ink};--c-muted:${item.theme.muted};--c-seal:${item.theme.seal};--c-accent:${item.theme.accent};--c-line:${item.theme.line}">
      <span class="interlude-seal">${esc(item.seal)}</span>
      <span class="interlude-years">${shortYears(item)}</span>
      <h3>${esc(item.name)}</h3>
      <p>${esc(item.tagline)}</p>
      <span class="interlude-meta">${s.events} 件大事 · ${item.figures.length} 位人物</span>
      <span class="interlude-arrow">→</span>
    </a>`;
  }

  function studyRecentMarkup() {
    const recent = HX.recentReadEvents(3);
    if (!recent.length) {
      const suggestion = HX.getEvent('ming-jingnan') || ALL_EVENTS[0];
      return `<p class="study-empty">还没有标记已读。打开任意事件，点击「标记已读」，它会留在这里。</p>
        <button class="inline-event" data-event-id="${suggestion.id}" data-open-event="${suggestion.id}">
          <span>${HX.yearBadge(suggestion)}</span>
          <strong>${esc(suggestion.title)}</strong>
          <em>从这里开始 →</em>
        </button>`;
    }
    return `<p class="study-recent-title">最近读过</p>
      <div class="study-recent-list">
        ${recent.map((event) => {
          const dyn = event._dyn;
          return `<button class="study-recent-item" data-event-id="${event.id}" data-open-event="${event.id}">
            <span class="recent-year">${HX.yearBadge(event)}</span>
            <span class="recent-title">${esc(event.title)}</span>
            <span class="recent-dyn">${esc(dyn.name)}</span>
          </button>`;
        }).join('')}
      </div>`;
  }

  function renderStudyRecent(node) {
    if (!node) return;
    node.innerHTML = studyRecentMarkup();
  }

  function renderHome() {
    HX.applyTheme(HOME_THEME, 'home');
    HX.state.item = null;
    HX.state.currentEvent = null;
    HX.state.currentEmperor = null;
    HX.renderHeader('home');
    HX.renderFooter();
    const app = document.getElementById('app');
    const percent = HX.progressPercent();
    const recent = HX.recentReadEvents(1)[0];
    const pick = ALL_EVENTS[Math.floor(Math.random() * ALL_EVENTS.length)];
    app.innerHTML = `
      <div class="home-page" data-motif="home">
        <section class="hero">
          <div class="hero-copy">
            <p class="hero-eyebrow"><span class="eyebrow-rule"></span>中国历史大事记 · 自秦统一</p>
            <h1 class="hero-title"><span>华夏</span><span class="hero-title-accent">纪年</span></h1>
            <p class="hero-sub">自秦一统，至清帝退位。<br>把两千一百三十二年的兴亡、战争与思想，铺成一条可以漫游的长河。</p>
            <div class="hero-actions">
              <button class="btn btn-primary" data-scroll="river">展开长河 <span class="btn-arrow">↓</span></button>
              <button class="btn btn-ghost" data-open-search>搜索一件大事 <kbd>⌘K</kbd></button>
            </div>
            <div class="hero-stats" aria-label="全站统计">
              <span><strong>${stats.dynasties}</strong><em>朝代</em></span>
              <span><strong>${stats.emperors}</strong><em>帝王</em></span>
              <span><strong>${stats.events}</strong><em>大事</em></span>
              <span><strong>${stats.years}</strong><em>年</em></span>
            </div>
            <button class="hero-random" data-random-event>
              <span class="random-mark">偶</span>
              <span>随便翻开一页</span>
              <em>${esc(pick._dyn.name)} · ${esc(pick.title)}</em>
            </button>
          </div>
          ${heroScroll()}
          <span class="hero-watermark" aria-hidden="true">史</span>
          <div class="hero-scroll-hint" aria-hidden="true"><span></span>向下展开</div>
        </section>

        <section class="river-section reveal" id="river">
          <div class="section-head">
            <div>
              <p class="section-kicker">卷一 · 总览</p>
              <h2>朝代长河</h2>
            </div>
            <p class="section-desc">按时间比例铺开的两千余年。色块的长度，就是一个时代的长短；把光标停在上面，读它的起止与性格。</p>
          </div>
          <div class="river-readout" id="river-readout" aria-live="polite">${riverReadout(null)}</div>
          <div class="river-board">
            <div class="river-axis">
              <span style="left:0%">前221</span>
              <span style="left:20.8%">220</span>
              <span style="left:39.4%">618</span>
              <span style="left:55.4%">960</span>
              <span style="left:70%">1271</span>
              <span style="left:87.5%">1644</span>
              <span style="left:100%">1912</span>
            </div>
            <div class="river-track" id="river-track">
              <span class="river-line"></span>
              ${riverSegments()}
            </div>
            <div class="river-foot">
              <span><i class="legend-swatch is-spectrum"></i>十朝纪年</span>
              <span><i class="legend-swatch is-gap"></i>卷外 · 分裂与融合</span>
              <span class="river-hint">点击色块，进入该卷纪年</span>
            </div>
          </div>
        </section>

        <section class="dynasty-section reveal" id="dynasty-index">
          <div class="section-head">
            <div>
              <p class="section-kicker">卷二 · 纪年</p>
              <h2>十朝纪年</h2>
            </div>
            <p class="section-desc">每一卷都以帝王在位时间划分横轴。点进去，从开国走到终局，再把感兴趣的瞬间逐一打开。</p>
          </div>
          <div class="dynasty-grid">
            ${DYNASTIES.map(dynastyCard).join('')}
            <a class="outlined-card reveal" href="#/interlude/three-kingdoms" style="--card-delay:450ms">
              <span class="outlined-kicker">卷外 · 分裂与融合</span>
              <h3>三国 · 两晋 · 南北朝 · 五代十国</h3>
              <p>大一统之间，还有五段群雄并立、制度重生的时光。它们不被写进十朝，却决定了十朝的走向。</p>
              <span class="outlined-link">翻到卷外 <i>→</i></span>
            </a>
          </div>
        </section>

        <section class="interlude-section reveal" id="interludes">
          <div class="section-head">
            <div>
              <p class="section-kicker">卷外 · 过渡</p>
              <h2>分裂与融合</h2>
            </div>
            <p class="section-desc">没有一条单一的帝王世系，却同样塑造了中国。按政权并立的线索，读五个过渡时代。</p>
          </div>
          <div class="interlude-grid">
            ${INTERLUDES.map(interludeCard).join('')}
          </div>
        </section>

        <section class="study-section reveal" id="study">
          <div class="study-panel">
            <div class="study-copy">
              <p class="section-kicker">卷末 · 研读</p>
              <h2>把读过的，留在这条长河里</h2>
              <p>标记已读的事件会存入本机。进度不催促你，只在你回来时，告诉你走到了哪里。</p>
              <div class="study-actions">
                <button class="btn btn-primary" data-open-progress>${recent ? '继续研读' : '查看研读进度'}</button>
                <button class="btn btn-ghost" data-random-event>随机一件大事</button>
              </div>
              ${recent ? `<p class="study-continue">上次读到：<button class="text-link" data-open-event="${recent.id}">${esc(recent.title)}</button></p>` : ''}
            </div>
            <div class="study-meter">
              <div class="big-donut" data-progress-ring style="--p:${percent}">
                <div class="big-donut-inner">
                  <span><strong data-progress-percent>${percent}</strong><small>%</small></span>
                  <em>已读</em>
                </div>
              </div>
              <p class="study-meter-label" data-progress-label>已读 ${HX.totalRead()} / ${stats.events}</p>
              <div class="study-bar" data-progress-bar style="--p:${percent}%"><span></span></div>
            </div>
            <div class="study-recent" id="study-recent">${studyRecentMarkup()}</div>
          </div>
        </section>

        <section class="quote-section reveal">
          <p class="quote-mark">“</p>
          <blockquote>究天人之际，通古今之变，成一家之言。</blockquote>
          <cite>—— 司马迁《报任安书》</cite>
          <p class="quote-note">愿这条长河，成为你理解今天的一把旧尺。</p>
        </section>
      </div>
    `;

    bindRiver();
    HX.initReveal(app);
    document.title = '华夏纪年 · 中国历史大事记';
    window.scrollTo({ top: 0, behavior: 'auto' });
    HX.renderReadingBar();
    if (HX.state.pendingSection) {
      const section = HX.state.pendingSection;
      HX.state.pendingSection = null;
      setTimeout(() => HX.scrollToSection(section), 80);
    }
  }

  function bindRiver() {
    const track = document.getElementById('river-track');
    const readout = document.getElementById('river-readout');
    if (!track || !readout) return;
    let current = null;
    const show = (id) => {
      if (id === current) return;
      current = id;
      track.querySelectorAll('.river-seg').forEach((node) => {
        node.classList.toggle('is-active', node.dataset.riverId === id);
      });
      readout.innerHTML = riverReadout(id ? HX.getItem(id) : null);
    };
    track.addEventListener('pointerover', (event) => {
      const seg = event.target.closest('[data-river-id]');
      if (seg) show(seg.dataset.riverId);
    });
    track.addEventListener('focusin', (event) => {
      const seg = event.target.closest('[data-river-id]');
      if (seg) show(seg.dataset.riverId);
    });
  }

  HX.motifSVG = motifSVG;
  HX.portraitFrame = portraitFrame;
  HX.renderStudyRecent = renderStudyRecent;
  HX.renderHome = renderHome;
})();
