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
      });
    });
  });

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
  if (dotSection && 'IntersectionObserver' in window) {
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
