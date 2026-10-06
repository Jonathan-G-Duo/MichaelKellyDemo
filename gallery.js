/* gallery.js - builds the gallery and an accessible lightbox from data/gallery.js */
(function () {
  'use strict';
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { if (k === 'text') n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]); });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  var root = document.getElementById('gallery-root');
  var photos = [], visible = [], current = 0, opener = null, dlg, dImg, dCap;

  function placeholder(p) {
    return el('div', { class: 'ph', role: 'img', 'aria-label': 'Placeholder: ' + p.caption }, [
      el('span', { class: 'ph-cat', text: p.category }),
      el('span', { text: 'Photo coming soon' })
    ]);
  }

  function card(p, idx) {
    var fig = el('figure', { class: 'shot', 'data-cat': p.category });
    if (!p.file) { fig.appendChild(placeholder(p)); }
    else {
      var img = el('img', { src: 'images/gallery/' + p.file, alt: p.alt || p.caption, width: String(p.width || 1200), height: String(p.height || 900), loading: 'lazy' });
      img.addEventListener('error', function () { btn.replaceWith(placeholder(p)); });   /* failed image -> tidy placeholder */
      var btn = el('button', { type: 'button', class: 'shot-btn', 'data-i': String(idx), 'aria-label': 'View larger: ' + (p.alt || p.caption) }, [img]);
      btn.addEventListener('click', function () { openBox(idx, btn); });
      fig.appendChild(btn);
    }
    fig.appendChild(el('figcaption', { text: p.caption }));
    return fig;
  }

  function filterTo(cat, pressedBtn) {
    document.querySelectorAll('.filters button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === pressedBtn)); });
    document.querySelectorAll('.shot').forEach(function (f) { f.hidden = !(cat === 'All' || f.getAttribute('data-cat') === cat); });
    var live = document.getElementById('gallery-status');
    live.textContent = 'Showing ' + (cat === 'All' ? 'all photos' : cat + ' photos') + '.';
  }

  function buildDialog() {
    dlg = el('dialog', { class: 'lightbox', 'aria-label': 'Photo viewer' });
    dImg = el('img', { alt: '' }); dCap = el('p', { class: 'lb-cap' });
    var close = el('button', { type: 'button', class: 'lb-btn lb-close', text: 'Close' });
    var prev = el('button', { type: 'button', class: 'lb-btn', text: 'Previous' });
    var next = el('button', { type: 'button', class: 'lb-btn', text: 'Next' });
    dlg.appendChild(el('div', { class: 'lb-bar' }, [prev, next, close]));
    dlg.appendChild(dImg); dlg.appendChild(dCap);
    document.body.appendChild(dlg);
    close.addEventListener('click', function () { dlg.close(); });
    prev.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });     /* click backdrop */
    dlg.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
    dlg.addEventListener('close', function () { if (opener) opener.focus(); });             /* Escape also closes (built in) */
  }
  function realVisible() {
    return photos.map(function (p, i) { return i; }).filter(function (i) {
      var f = document.querySelectorAll('.shot')[i];
      return photos[i].file && f && !f.hidden;
    });
  }
  function show(i) {
    var p = photos[i]; current = i;
    dImg.src = 'images/gallery/' + p.file; dImg.alt = p.alt || p.caption; dCap.textContent = p.caption;
  }
  function step(d) {
    var list = realVisible(); if (!list.length) return;
    var pos = list.indexOf(current); show(list[(pos + d + list.length) % list.length]);
  }
  function openBox(i, btn) { opener = btn; if (!dlg) buildDialog(); show(i); dlg.showModal(); }

  Promise.resolve(window.GALLERY).then(function (d) { if (!d) throw new Error('data/gallery.js is missing or has a mistake'); return d; }).then(function (d) {
    photos = d.photos; root.textContent = '';
    var cats = ['All']; photos.forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });
    var bar = el('div', { class: 'filters', role: 'group', 'aria-label': 'Filter photos by category' });
    cats.forEach(function (c) {
      var b = el('button', { type: 'button', 'aria-pressed': String(c === 'All'), text: c });
      b.addEventListener('click', function () { filterTo(c, b); }); bar.appendChild(b);
    });
    var grid = el('div', { class: 'shots' }); photos.forEach(function (p, i) { grid.appendChild(card(p, i)); });
    root.appendChild(bar); root.appendChild(el('p', { id: 'gallery-status', class: 'sr-only', 'aria-live': 'polite' })); root.appendChild(grid);
    if (!photos.some(function (p) { return p.file; })) root.appendChild(el('p', { class: 'note', text: 'Restaurant photos have not been added yet. The boxes above are placeholders.' }));
  }).catch(function (e) {
    console.error('Could not read gallery data', e);
    root.textContent = ''; root.appendChild(el('p', { class: 'load-error', role: 'alert', text: 'Sorry, the gallery could not be loaded. Please refresh the page.' }));
  });
})();
