/* menu.js - builds the menu page from data/menu.js. Text only via textContent. */
(function () {
  'use strict';

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') node.textContent = attrs[k]; else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function money(p) { return typeof p === 'number' ? '$' + p.toFixed(2) : null; }

  function renderItem(item) {
    var sizes = item.sizes && item.sizes.length ? item.sizes : null;
    var head = el('div', { class: 'item-head' }, [el('h3', { class: 'item-name', text: item.name })]);
    var price = money(item.price);
    if (price) head.appendChild(el('span', { class: 'item-price', text: price }));
    else if (!sizes) head.appendChild(el('span', { class: 'item-price pending', text: 'Price to be confirmed' }));

    var tags = el('span', { class: 'tags' });
    if (item.featured) tags.appendChild(el('span', { class: 'tag tag-pop', text: 'Popular' }));
    (item.dietary || []).forEach(function (d) { tags.appendChild(el('span', { class: 'tag', text: d })); });
    if (item.available === false) tags.appendChild(el('span', { class: 'tag tag-off', text: 'Currently unavailable' }));

    var body = el('div', { class: 'item-body' }, [head]);
    if (item.description) body.appendChild(el('p', { class: 'item-desc', text: item.description }));
    if (sizes) {
      var ul = el('ul', { class: 'sizes' });
      sizes.forEach(function (s) {
        var m = money(s.price);
        ul.appendChild(el('li', { text: m ? s.label + ' ' + m : s.label + ' (price to be confirmed)' }));
      });
      body.appendChild(ul);
    }
    if (tags.childNodes.length) body.appendChild(tags);

    var li = el('li', { class: 'item' });
    if (item.image) {
      var img = el('img', { src: 'images/food/' + item.image, alt: item.imageAlt || item.name, width: '96', height: '96', loading: 'lazy' });
      img.addEventListener('error', function () { img.remove(); });   /* a broken image never breaks the layout */
      li.appendChild(img);
    }
    li.appendChild(body);
    return li;
  }

  function render(menu) {
    var host = document.getElementById('menu-root');
    var jump = el('ul', { class: 'jump' });
    var frag = document.createDocumentFragment();

    menu.categories.forEach(function (cat) {
      var id = 'cat-' + cat.id;
      jump.appendChild(el('li', {}, [el('a', { href: '#' + id, text: cat.name })]));
      var section = el('section', { class: 'menu-cat', id: id, 'aria-labelledby': id + '-h' }, [
        el('h2', { id: id + '-h', text: cat.name })
      ]);
      if (cat.note) section.appendChild(el('p', { class: 'note', text: cat.note }));
      (cat.notes || []).forEach(function (n) { section.appendChild(el('p', { class: 'note', text: n })); });
      if (cat.items.length) {
        var ul = el('ul', { class: 'items' });
        cat.items.forEach(function (i) { ul.appendChild(renderItem(i)); });
        section.appendChild(ul);
      }
      frag.appendChild(section);
    });

    host.textContent = '';
    if (menu.notice) host.appendChild(el('p', { class: 'callout', role: 'note', text: menu.notice }));
    host.appendChild(el('nav', { 'aria-label': 'Menu categories' }, [jump]));
    host.appendChild(frag);
  }

  Promise.resolve(window.MENU)
    .then(function (d) { if (!d) throw new Error('data/menu.js is missing or has a mistake'); return d; })
    .then(render)
    .catch(function (err) {
      console.error('Could not read menu data', err);
      var host = document.getElementById('menu-root');
      host.textContent = '';
      host.appendChild(el('p', { class: 'load-error', role: 'alert',
        text: 'Sorry, the menu could not be loaded. Please refresh, or call the restaurant.' }));
    });
})();
