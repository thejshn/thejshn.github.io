(function () {

  /* ── About off-canvas panel ─────────────────────────────────── */
  var panel    = document.getElementById('about-panel');
  var backdrop = document.getElementById('about-backdrop');
  var tabBtn   = document.getElementById('about-tab');
  var closeBtn = document.getElementById('about-close');
  var navAbout = document.getElementById('navAboutLink');

  function openPanel() {
    panel.classList.add('open');
    backdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closePanel() {
    panel.classList.remove('open');
    backdrop.classList.remove('visible');
    document.body.style.overflow = '';
  }

  if (tabBtn)   tabBtn.addEventListener('click', openPanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (backdrop) backdrop.addEventListener('click', closePanel);
  if (navAbout) navAbout.addEventListener('click', function (e) {
    e.preventDefault();
    openPanel();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePanel();
  });

  /* ── Scroll reveal ──────────────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Nav: tint on scroll ────────────────────────────────────── */
  var nav = document.getElementById('topnav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ── Mobile nav toggle ──────────────────────────────────────── */
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── Coming-soon card stack ─────────────────────────────────── */
  var stack  = document.querySelector('.coming-stack');
  var scards = stack ? Array.from(stack.querySelectorAll('.scard')) : [];
  if (scards.length) {
    function activateCard(idx) {
      var others = scards.filter(function (_, i) { return i !== idx; });
      scards.forEach(function (c) {
        c.classList.remove('scard-active', 'scard-behind-l', 'scard-behind-r');
      });
      scards[idx].classList.add('scard-active');
      stack.classList.add('has-active');
      others[0].classList.add('scard-behind-l');
      others[1].classList.add('scard-behind-r');
    }
    function resetStack() {
      scards.forEach(function (c) {
        c.classList.remove('scard-active', 'scard-behind-l', 'scard-behind-r');
      });
      stack.classList.remove('has-active');
    }
    scards.forEach(function (card, i) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function () {
        if (card.classList.contains('scard-active')) { resetStack(); }
        else { activateCard(i); }
      });
    });
    document.addEventListener('click', function (e) {
      if (!stack.contains(e.target)) { resetStack(); }
    });
  }

  /* ── Typewriter ─────────────────────────────────────────────── */
  var typedEl  = document.getElementById('hero-typed');
  if (typedEl) {
    var phrases     = ['I find patterns.', 'I identify trends & correlations.', 'I make sense of raw data.', 'I analyse data.'];
    var phraseIdx   = 0;
    var charIdx     = 0;
    var deleting    = false;

    function tick() {
      var phrase = phrases[phraseIdx];
      if (deleting) {
        charIdx--;
        typedEl.textContent = phrase.substring(0, charIdx);
      } else {
        charIdx++;
        typedEl.textContent = phrase.substring(0, charIdx);
      }

      var delay = deleting ? 45 : 80;
      if (!deleting && charIdx === phrase.length) {
        delay    = 2400;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        delay     = 420;
      }
      setTimeout(tick, delay);
    }
    setTimeout(tick, 1000);
  }

  /* ── Stat counters ──────────────────────────────────────────── */
  var statEls = document.querySelectorAll('.hstat b[data-count]');
  if (statEls.length) {
    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1400;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
    }
    var heroStats = document.querySelector('.hero-stats');
    if (heroStats && 'IntersectionObserver' in window) {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            statEls.forEach(animateCounter);
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      statsObserver.observe(heroStats);
    } else {
      statEls.forEach(animateCounter);
    }
  }

  /* ── Smooth scroll (fallback for older browsers) ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      var target = id === '#' ? null : document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
