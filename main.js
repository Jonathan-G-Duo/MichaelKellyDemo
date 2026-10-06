/* main.js - shared behaviour for every page.
   Reads data/business.js, then builds the header, footer and mobile action bar,
   and fills in any element marked with data-bind / data-action / data-render.
   All text is inserted with textContent (never innerHTML) so data can't inject code. */
(function () {
  'use strict';

  /* ---- EDIT HERE to change the navigation links ---- */
  var NAV = [
    { label: 'Home', href: 'index.html' },
    { label: 'Menu', href: 'menu.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Gallery', href: 'gallery.html' },
    { label: 'Reviews', href: 'reviews.html' },
    { label: 'Contact', href: 'contact.html' }
  ];
  var DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }
  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
  }
  function logoImg(b, size, cls, px) {
    if (!b.logo || !b.logo[size]) return null;
    return el('img', { class: cls, src: b.logo[size], alt: '', width: String(px), height: String(px) });
  }
  function currentPage() {
    var p = location.pathname.split('/').pop();
    return p === '' ? 'index.html' : p;
  }
  function oneLineAddress(b) {
    var a = b.address;
    return a.street + ', ' + a.city + ', ' + a.province + ' ' + a.postalCode + ', ' + a.country;
  }
  function directionsUrl(b) {
    return b.directionsUrl ||
      'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(oneLineAddress(b));
  }

  /* ---------- Header ---------- */
  function buildHeader(b) {
    var host = document.getElementById('site-header');
    if (!host) return;
    var page = currentPage();

    var links = el('ul', { class: 'nav-list' });
    NAV.forEach(function (n) {
      var a = el('a', { href: n.href, text: n.label });
      if (n.href === page) a.setAttribute('aria-current', 'page');
      links.appendChild(el('li', {}, [a]));
    });

    var order = el('a', { class: 'btn btn-accent nav-order', href: '#', 'data-action': 'order', text: 'Order Online' });
    var toggle = el('button', {
      class: 'nav-toggle', type: 'button', 'aria-expanded': 'false',
      'aria-controls': 'primary-nav', 'aria-label': 'Menu'
    }, [el('span', { class: 'nav-toggle-bars', 'aria-hidden': 'true' })]);
    var nav = el('nav', { id: 'primary-nav', class: 'nav', 'aria-label': 'Main' }, [links]);

    var inner = el('div', { class: 'container header-inner' }, [
      el('a', { class: 'brand', href: 'index.html' }, [logoImg(b, 'small', 'brand-logo', 44), el('span', { text: b.name })]),
      toggle, nav, order
    ]);
    var header = el('header', { class: 'site-header' });
    if (b.demoMode) header.appendChild(el('p', { class: 'demo-bar', text: b.demoNotice }));
    header.appendChild(inner);
    host.replaceWith(header);

    function close(returnFocus) {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (returnFocus) toggle.focus();
    }
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) close(true);
    });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(false); });
    window.matchMedia('(min-width: 56rem)').addEventListener('change', function () { close(false); });
  }

  /* ---------- Footer + mobile action bar ---------- */
  function buildFooter(b) {
    var host = document.getElementById('site-footer');
    if (host) {
      var a = b.address;
      var navList = el('ul', { class: 'footer-list' });
      NAV.forEach(function (n) { navList.appendChild(el('li', {}, [el('a', { href: n.href, text: n.label })])); });
      var actions = el('ul', { class: 'footer-list' }, [
        el('li', {}, [el('a', { href: '#', 'data-action': 'call', text: 'Call' })]),
        el('li', {}, [el('a', { href: '#', 'data-action': 'directions', text: 'Get directions' })]),
        el('li', {}, [el('a', { href: '#', 'data-action': 'order', text: 'Order Online' })])
      ]);
      var footer = el('footer', { class: 'site-footer' }, [
        el('div', { class: 'container footer-grid' }, [
          el('div', {}, [
            logoImg(b, 'small', 'footer-logo', 64),
            el('p', { class: 'footer-name', text: b.name }),
            el('address', {}, [
              el('span', { text: a.street }), el('br'),
              el('span', { text: a.city + ', ' + a.province + ' ' + a.postalCode })
            ]),
            el('p', {}, [el('a', { href: 'tel:' + b.phone.tel, text: b.phone.display })])
          ]),
          el('div', {}, [el('h2', { class: 'footer-h', text: 'Explore' }), navList]),
          el('div', {}, [el('h2', { class: 'footer-h', text: 'Visit' }), actions])
        ]),
        el('div', { class: 'container footer-legal' }, [
          el('p', { text: (b.demoMode ? b.demoNotice + ' ' : '') + '\u00A9 ' + new Date().getFullYear() + ' ' + b.name + '.' })
        ])
      ]);
      host.replaceWith(footer);
    }

    var bar = el('nav', { class: 'action-bar', 'aria-label': 'Quick actions' }, [
      el('a', { href: '#', 'data-action': 'order', text: 'Order' }),
      el('a', { href: 'menu.html', text: 'Menu' }),
      el('a', { href: '#', 'data-action': 'call', text: 'Call' }),
      el('a', { href: '#', 'data-action': 'directions', text: 'Directions' })
    ]);
    document.body.appendChild(bar);
  }

  /* ---------- Actions (order / call / directions) ---------- */
  function setNewTab(a) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
    a.appendChild(el('span', { class: 'sr-only', text: ' (opens in a new tab)' }));
  }
  function wireActions(b) {
    document.querySelectorAll('[data-action]').forEach(function (a) {
      var type = a.getAttribute('data-action');
      if (type === 'call') {
        a.href = 'tel:' + b.phone.tel;
      } else if (type === 'directions') {
        a.href = directionsUrl(b);
        setNewTab(a);
      } else if (type === 'reviews') {
        a.href = (b.rating && b.rating.profileUrl) ||
          'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(b.name + ' ' + oneLineAddress(b));
        setNewTab(a);
      } else if (type === 'order') {
        if (b.orderUrl) {
          a.href = b.orderUrl;
          setNewTab(a);
        } else {
          a.href = 'tel:' + b.phone.tel;           /* fallback: never a dead button */
          a.textContent = 'Call to Order';
        }
      }
    });
  }

  /* ---------- Data-driven content blocks ---------- */
  function bindText(b) {
    document.querySelectorAll('[data-bind]').forEach(function (n) {
      var v = get(b, n.getAttribute('data-bind'));
      if (v != null) n.textContent = v;
    });
    document.querySelectorAll('[data-tel]').forEach(function (n) {
      n.href = 'tel:' + b.phone.tel;
      n.textContent = b.phone.display;
    });
    document.querySelectorAll('[data-logo-slot]').forEach(function (slot) {
      var size = slot.getAttribute('data-logo-slot');
      if (b.logo && b.logo[size]) slot.appendChild(el('img', { src: b.logo[size], alt: '', width: '320', height: '320' }));
    });
    document.querySelectorAll('[data-demo-only]').forEach(function (n) { n.hidden = !b.demoMode; });
  }

  var renderers = {
    featured: function (host) {
      /* "Popular" dishes are every menu item with "featured": true in data/menu.js */
      var m = window.MENU;
      if (!m) { host.appendChild(el('p', { class: 'note', text: 'Popular dishes could not be loaded. Please see the menu page.' })); return; }
      var ul = el('ul', { class: 'board' });
      m.categories.forEach(function (c) {
        c.items.forEach(function (i) { if (i.featured && i.available !== false) ul.appendChild(el('li', { text: i.name })); });
      });
      host.appendChild(ul);
    },
    reviews: function (host, b) {
      (b.reviewExcerpts || []).forEach(function (r) {
        host.appendChild(el('blockquote', { class: 'excerpt' }, [
          el('p', { text: r.text }),
          el('footer', { text: 'Customer review' + (r.author ? ' by ' + r.author : '') + (r.source ? ', ' + r.source : '') })
        ]));
      });
    },
    services: function (host, b) {
      var ul = el('ul', { class: 'chips' });
      b.services.concat(b.mealTimes).forEach(function (s) { ul.appendChild(el('li', { text: s })); });
      host.appendChild(ul);
    },
    goodToKnow: function (host, b) {
      b.goodToKnow.forEach(function (g) {
        var ul = el('ul', { class: 'plain-list' });
        g.items.forEach(function (i) { ul.appendChild(el('li', { text: i })); });
        host.appendChild(el('div', { class: 'know-group' }, [el('h3', { text: g.title }), ul]));
      });
    },
    hours: function (host, b) {
      var h = b.hours;
      var dl = el('dl', { class: 'hours' });
      DAYS.forEach(function (d) {
        var v = h[d];
        var text = v == null ? 'To be confirmed' : (Array.isArray(v) ? v.join(', ') : v);
        dl.appendChild(el('div', {}, [
          el('dt', { text: d.charAt(0).toUpperCase() + d.slice(1) }),
          el('dd', { text: text, class: v == null ? 'is-unknown' : '' })
        ]));
      });
      host.appendChild(dl);
      var notes = (h.notice ? [h.notice] : []).concat(h.specialNotices || []);
      notes.forEach(function (n) { host.appendChild(el('p', { class: 'note', text: n })); });
    }
  };
  function renderBlocks(b) {
    document.querySelectorAll('[data-render]').forEach(function (host) {
      var fn = renderers[host.getAttribute('data-render')];
      if (fn) fn(host, b);
    });
  }

  /* ---------- Structured data (only verified fields) ---------- */
  function addStructuredData(b) {
    var a = b.address;
    var data = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: b.name,
      description: b.description,
      telephone: b.phone.tel,
      address: {
        '@type': 'PostalAddress',
        streetAddress: a.street, addressLocality: a.city,
        addressRegion: a.province, postalCode: a.postalCode, addressCountry: 'CA'
      }
    };
    if (b.siteUrl) { data.url = b.siteUrl; if (b.logo && b.logo.large) data.logo = b.siteUrl.replace(/\/?$/, '/') + b.logo.large; }
    if (b.rating && b.rating.includeInStructuredData) {
      data.aggregateRating = {
        '@type': 'AggregateRating', ratingValue: b.rating.value, reviewCount: b.rating.count
      };
    }
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ---------- Start ---------- */
  function showError() {
    var main = document.getElementById('main');
    if (main) main.prepend(el('p', { class: 'load-error', role: 'alert',
      text: 'Sorry, restaurant details could not be loaded. Please refresh the page.' }));
  }

  window.siteReady = Promise.resolve(window.BUSINESS)
    .then(function (b) {
      if (!b) throw new Error('data/business.js is missing or has a mistake');
      buildHeader(b);
      buildFooter(b);
      bindText(b);
      renderBlocks(b);
      wireActions(b);
      addStructuredData(b);
      document.documentElement.classList.add('is-ready');
      return b;
    })
    .catch(function (err) { console.error('Could not read restaurant data', err); showError(); });
})();
