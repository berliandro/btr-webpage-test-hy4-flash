document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.mainnav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var buttons = group.querySelectorAll('.filter');
    var targetSelector = group.getAttribute('data-filter-group');
    var items = document.querySelectorAll(targetSelector);
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        button.setAttribute('aria-pressed', 'true');
        var value = button.getAttribute('data-value');
        items.forEach(function (item) {
          var categories = (item.getAttribute('data-category') || '').split(/\s+/);
          var match = value === 'all' || categories.indexOf(value) !== -1;
          item.hidden = !match;
        });
        document.querySelectorAll('.match-group').forEach(function (groupSection) {
          groupSection.hidden = groupSection.querySelectorAll('.match-row:not([hidden])').length === 0;
        });
      });
    });
  });

  var matchRows = document.querySelectorAll('.match-row');
  if (matchRows.length) {
    if ('IntersectionObserver' in window) {
      var rowWatcher = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            rowWatcher.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      matchRows.forEach(function (row) { rowWatcher.observe(row); });
    } else {
      matchRows.forEach(function (row) { row.classList.add('is-in'); });
    }
  }

  var hero = document.querySelector('.hero-champions');
  if (hero) {
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window) {
      var watcher = new IntersectionObserver(function (entries) {
        hero.classList.toggle('is-visible', entries[0].isIntersecting);
      }, { threshold: 0.05 });
      watcher.observe(hero);
    } else {
      hero.classList.add('is-visible');
    }

    if (!reduced && hero.addEventListener) {
      var px = 0, py = 0, frame = null;
      var paint = function () {
        hero.style.setProperty('--px', px.toFixed(3));
        hero.style.setProperty('--py', py.toFixed(3));
        frame = null;
      };
      var queue = function () { if (!frame) { frame = window.requestAnimationFrame(paint); } };
      hero.addEventListener('pointermove', function (event) {
        if (event.pointerType === 'touch') { return; }
        var box = hero.getBoundingClientRect();
        px = ((event.clientX - box.left) / box.width - 0.5) * 2;
        py = ((event.clientY - box.top) / box.height - 0.5) * 2;
        queue();
      });
      hero.addEventListener('pointerleave', function () { px = 0; py = 0; queue(); });
    }
  }

  var strip = document.querySelector('.strip');
  if (strip && 'IntersectionObserver' in window) {
    var stripWatcher = new IntersectionObserver(function (entries) {
      strip.classList.toggle('is-visible', entries[0].isIntersecting);
    }, { threshold: 0.01 });
    stripWatcher.observe(strip);
  } else if (strip) {
    strip.classList.add('is-visible');
  }

  var dotSection = document.querySelector('.section--dots');
  var halftone = dotSection ? dotSection.querySelector('.halftone') : null;
  if (halftone && halftone.getContext) {
    var htCtx = halftone.getContext('2d');
    var htMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var htReduced = htMotion ? htMotion.matches : false;
    var htVisible = false;
    var htFrame = 0;
    var htDots = [];
    var htBlobs = [];
    var htW = 0, htH = 0, htGap = 20, htBase = 1.3, htLast = 0;

    var htSpawn = function (blob) {
      var angle = Math.random() * Math.PI * 2;
      var speed = 0.006 + Math.random() * 0.014;
      blob.x = Math.random() * htW;
      blob.y = Math.random() * htH;
      blob.vx = Math.cos(angle) * speed;
      blob.vy = Math.sin(angle) * speed;
      blob.radius = Math.min(htW, htH) * (0.10 + Math.random() * 0.13);
      blob.age = 0;
      blob.life = 7000 + Math.random() * 9000;
      blob.phase = Math.random() * Math.PI * 2;
      blob.strength = 0;
      blob.curRadius = blob.radius;
    };

    var htMeasure = function () {
      var rect = halftone.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      htW = Math.max(1, Math.round(rect.width));
      htH = Math.max(1, Math.round(rect.height));
      halftone.width = Math.round(htW * dpr);
      halftone.height = Math.round(htH * dpr);
      htCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      htCtx.fillStyle = getComputedStyle(halftone).color;
      htGap = htW < 640 ? 22 : 20;
      htBase = htGap * 0.065;
      htDots = [];
      for (var y = htGap / 2; y < htH; y += htGap) {
        for (var x = htGap / 2; x < htW; x += htGap) {
          htDots.push({ x: x, y: y });
        }
      }
      htBlobs = [];
      var count = htW < 640 ? 2 : 4;
      for (var b = 0; b < count; b++) {
        var blob = {};
        htSpawn(blob);
        htBlobs.push(blob);
      }
    };

    var htDraw = function (t) {
      htCtx.clearRect(0, 0, htW, htH);
      htCtx.beginPath();
      for (var i = 0; i < htDots.length; i++) {
        var d = htDots[i];
        var swell = 0;
        for (var b = 0; b < htBlobs.length; b++) {
          var bl = htBlobs[b];
          if (bl.strength <= 0) continue;
          var dx = d.x - bl.x;
          var dy = d.y - bl.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= bl.curRadius) continue;
          var f = 1 - dist / bl.curRadius;
          swell += f * f * (3 - 2 * f) * bl.strength;
        }
        if (swell > 1) swell = 1;
        var r = htReduced ? htBase : htBase * (1 + swell * 2.4);
        htCtx.moveTo(d.x + r, d.y);
        htCtx.arc(d.x, d.y, r, 0, Math.PI * 2);
      }
      htCtx.fill();

      if (htReduced) return;
      var dt = htLast ? Math.min(t - htLast, 50) : 16;
      htLast = t;
      for (var j = 0; j < htBlobs.length; j++) {
        var cur = htBlobs[j];
        cur.age += dt;
        var p = cur.age / cur.life;
        if (p >= 1) { htSpawn(cur); p = 0; }
        cur.x += cur.vx * dt;
        cur.y += cur.vy * dt;
        if (cur.x < -cur.radius) cur.x = htW + cur.radius;
        if (cur.x > htW + cur.radius) cur.x = -cur.radius;
        if (cur.y < -cur.radius) cur.y = htH + cur.radius;
        if (cur.y > htH + cur.radius) cur.y = -cur.radius;
        cur.strength = Math.sin(Math.PI * p);
        cur.curRadius = cur.radius * (0.82 + 0.22 * Math.sin(t * 0.0006 + cur.phase));
      }
    };

    var htLoop = function (t) {
      htDraw(t);
      htFrame = window.requestAnimationFrame(htLoop);
    };

    var htSync = function () {
      var run = htVisible && !htReduced && !document.hidden;
      if (run && !htFrame) {
        htFrame = window.requestAnimationFrame(htLoop);
      } else if (!run && htFrame) {
        window.cancelAnimationFrame(htFrame);
        htFrame = 0;
        htDraw(0);
      }
    };

    htMeasure();
    htDraw(0);
    htSync();

    if ('IntersectionObserver' in window) {
      var htWatcher = new IntersectionObserver(function (entries) {
        htVisible = entries[0].isIntersecting;
        dotSection.classList.toggle('is-visible', htVisible);
        htSync();
      }, { threshold: 0.01 });
      htWatcher.observe(dotSection);
    } else {
      htVisible = true;
      dotSection.classList.add('is-visible');
      htSync();
    }

    var htRemeasure = function () { htMeasure(); htDraw(0); };
    if ('ResizeObserver' in window) {
      new ResizeObserver(htRemeasure).observe(dotSection);
    } else {
      var htTimer;
      window.addEventListener('resize', function () {
        window.clearTimeout(htTimer);
        htTimer = window.setTimeout(htRemeasure, 120);
      }, { passive: true });
    }
    window.addEventListener('load', htRemeasure);

    document.addEventListener('visibilitychange', htSync);

    if (htMotion && htMotion.addEventListener) {
      htMotion.addEventListener('change', function (e) {
        htReduced = e.matches;
        htDraw(0);
        htSync();
      });
    }
  } else if (dotSection && 'IntersectionObserver' in window) {
    var dotWatcher = new IntersectionObserver(function (entries) {
      dotSection.classList.toggle('is-visible', entries[0].isIntersecting);
    }, { threshold: 0.01 });
    dotWatcher.observe(dotSection);
  } else if (dotSection) {
    dotSection.classList.add('is-visible');
  }

  var detail = document.getElementById('player-detail');
  var cards = detail ? Array.prototype.slice.call(document.querySelectorAll('.selector-card')) : [];
  if (detail && cards.length) {
    var portrait = document.getElementById('detail-portrait');
    var mono = document.getElementById('detail-mono');
    var closeButton = document.getElementById('detail-close');
    var showPlayer = function (card) {
      if (card.classList.contains('is-selected')) {
        detail.hidden = true;
        cards.forEach(function (item) {
          item.classList.remove('is-selected');
          item.setAttribute('aria-pressed', 'false');
        });
        return;
      }
      cards.forEach(function (item) {
        var active = item === card;
        item.classList.toggle('is-selected', active);
        item.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      document.getElementById('detail-flag').textContent = card.dataset.flag || '';
      document.getElementById('detail-name').textContent = card.dataset.name || '';
      document.getElementById('detail-role').textContent = card.dataset.role || '';
      document.getElementById('detail-real').textContent = card.dataset.real || '';
      var stats = document.getElementById('detail-stats');
      stats.innerHTML = '<span><b>' + card.dataset.games + '</b>Games</span><span><b>' + card.dataset.code + '</b>Role</span>';
      if (card.dataset.portrait) {
        portrait.src = card.dataset.portrait;
        portrait.alt = card.dataset.name + ' in the Bigetron by Vitality jersey';
        portrait.hidden = false;
        mono.hidden = true;
      } else {
        portrait.hidden = true;
        mono.textContent = card.dataset.name === 'Miguel' ? '06' : card.dataset.name.slice(0, 2).toUpperCase();
        mono.hidden = false;
      }
      detail.hidden = false;
      detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
    cards.forEach(function (card) {
      card.addEventListener('click', function () { showPlayer(card); });
      card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          showPlayer(card);
        }
      });
    });
    closeButton.addEventListener('click', function () {
      detail.hidden = true;
      cards.forEach(function (item) {
        item.classList.remove('is-selected');
        item.setAttribute('aria-pressed', 'false');
      });
    });
  }

  document.querySelectorAll('[data-copy-link]').forEach(function (button) {
    button.addEventListener('click', function () {
      var url = button.getAttribute('data-copy-link');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          var old = button.textContent;
          button.textContent = 'Link copied';
          setTimeout(function () { button.textContent = old; }, 1600);
        });
      } else {
        window.prompt('Copy this link:', url);
      }
    });
  });
});
