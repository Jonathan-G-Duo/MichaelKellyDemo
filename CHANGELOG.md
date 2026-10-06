# Changelog

Add a new entry at the top each time you make a meaningful change.

## 1.2.0 - Logo, new theme, story
- Added the restaurant logo (header, home page, footer, browser-tab icon)
- New black, red and white theme to match the logo
- Removed the typical price per person detail
- About page: added the restaurant's story (sourced: pizza started in 1972, Brooklin location, family owned and operated)
- Menu: added notes from the DoorDash menu (burgers, sandwiches, pizza recipe note, weekend and holiday breakfast)
- Removed the menu accuracy sentence, the Google comments paragraph on Reviews, and the menu "last updated" line

## 1.1.0 - Real hours, new menu, security hardening
- Opening hours added (11:00 AM - 10:00 PM daily, from the restaurant's Google listing)
- Menu rebuilt from photos of the printed menu: Wings, Poutines, Salads, Wraps, M.K. Favourites, Pizza, Sides with prices and sizes
- Sections not on the new photos kept without prices ("Price to be confirmed")
- Removed breakfast wording from site copy until breakfast service is confirmed (hours start at 11 a.m.)
- Menu page shows "last updated" and an allergy reminder
- Security: Content Security Policy and referrer policy on every page, inline styles removed, _headers file for Cloudflare Pages
- README: security and long-term care guide, monthly checklist

## 1.0.1 - Works by double-clicking
- Data files changed from .json to .js (data/business.js, data/menu.js, data/gallery.js) so the site opens directly from a folder, with no local server
- README updated to match (Chromebook, Windows and Mac steps)

## 1.0.0 - Initial demo version
- Home, Menu, About, Gallery, Reviews, Contact and 404 pages
- Restaurant details in one file: data/business.json
- Menu in one file: data/menu.json (prices and descriptions to be confirmed)
- Gallery photos in one file: data/gallery.json (placeholders until real photos are added)
- One online-ordering link (orderUrl) controls every Order Online button
- Mobile menu, mobile bottom action bar, keyboard-accessible gallery viewer
- Demo notice on every page; search engines blocked (noindex + robots.txt) while this is a concept
- robots.txt, sitemap.xml (domain placeholder), favicon
