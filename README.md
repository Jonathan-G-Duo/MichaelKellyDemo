# Michael Kelly's Bar & Grill - Demo Website

## What this project is
A simple, fast website for a Whitby, Ontario restaurant. It is a **concept/demo**, not the official site. It uses plain HTML, CSS and JavaScript only: no frameworks, no database, no accounts, no tracking.

## How the website works
Think of it in three layers:
- **Content** (what the site says) lives in the `data/` folder.
- **Design** (how it looks) lives in `css/style.css`.
- **Behaviour** (what it does) lives in `js/`.

When a page opens, JavaScript reads the data files and fills in the phone number, hours, menu and buttons. So you change something **once**, and every page updates.

## Folder structure
```
index.html, menu.html, about.html, gallery.html, reviews.html, contact.html, 404.html   <- the pages
data/business.js     phone, address, hours, order link, rating, services
data/menu.js       every menu item and price (also controls "Popular dishes")
data/gallery.js    gallery photos
css/style.css        colours, fonts, layout
js/main.js           header, footer, buttons (nav links are listed at the top)
js/menu.js           builds the menu page
js/gallery.js        builds the gallery and photo viewer
images/              your photos (food/, gallery/, logo/, restaurant/)
favicon/             small browser-tab icon
robots.txt, sitemap.xml   instructions for search engines
```

## How to open and view the website (no server needed)
1. Unzip the download. (Chromebook: in the Files app, right-click the zip and choose **Extract all**. Windows: right-click > **Extract All**. Mac: double-click.)
2. Open the new `michael-kellys-website` **folder** (not the zip) and double-click `index.html`. It opens in your browser.
3. Use the menu at the top to visit the other pages.

**Important:** always open the pages from the extracted folder, never from inside the zip file.

## A few words you will see
- The files in `data/` hold your information as a list of **labels and values**. It looks like `"phone": "(905) 655-5525"`. The text on the left is the label (do not change it). The text on the right, after the colon, is the value (change this).
- **null** (no quotes) means "not known yet".
- **Commas matter.** Every line in a list ends with a comma except the last one. Keep all the quotes `" "`.
- Keep the **first line** of each data file (for example `window.BUSINESS = {`) and the **last line** (`};`) exactly as they are.
- Do not use curly "smart" quotes. Use the plain straight quote `"`.
- If you save a mistake, the site shows "details could not be loaded". That means a comma, quote or bracket is wrong in the data file you just edited. Undo your last change and try again.

## How to edit the files
- **Chromebook:** in the Files app, right-click a file such as `business.js`, choose **Open with**, then **Text**. Save with Ctrl+S, then refresh the page in your browser (Ctrl+R).
- **Windows:** right-click > Open with > Notepad. **Mac:** right-click > Open With > TextEdit (choose Format > Make Plain Text first).
- Free alternative on any computer: Visual Studio Code (code.visualstudio.com).

## How to change restaurant information
Open `data/business.js` in a text editor (see above). Change the value on the right, save, refresh the browser.

### How to change the phone number
In `data/business.js`, edit **two** values under `"phone"`:
- `"display"`: what people see, e.g. `"(905) 655-5525"`
- `"tel"`: the version phones dial, with country code and no spaces, e.g. `"+19056555525"`

### How to change hours
In `data/business.js`, under `"hours"`, replace `null` for each day with text:
```
"monday": "7:00 AM - 10:00 PM",
"tuesday": "Closed",
"wednesday": ["7:00 AM - 2:00 PM", "5:00 PM - 9:00 PM"],
```
- Square brackets `[ ]` = split hours (two time ranges).
- `"notice"` is the sentence under the hours. Delete the text (keep `""`) once hours are confirmed.
- `"specialNotices"` is for holidays, e.g. `["Closed on December 25."]`.

### How to Change the Online Ordering Link
1. **File:** `data/business.js`
2. **Property:** `"orderUrl"`
3. **Format:** a full web address in quotes starting with `https://`, e.g. `"orderUrl": "https://example.com/order",`
4. **Test it:** save, refresh, click Order Online. It opens in a new tab. Test on a phone and in a private/incognito window too.
5. **What updates automatically:** every Order Online button: top navigation, home page, mobile bottom bar, menu page, about page, contact page, footer and the 404 page.

Important notes:
- The current link is a **Google-generated link**, and may stop working or may not work for every visitor. **Check it every few weeks.** If the restaurant gives you an official ordering link, paste it here and nothing else needs to change.
- If you set `"orderUrl": null`, the buttons automatically become **Call to Order** (so there is never a dead button).
- This site does not say which ordering service it is, because that has not been verified.

### How to change the address, map link, rating, review count
All in `data/business.js`. Directions buttons build a Google Maps link from the address automatically. Update the rating and count only when you have checked the current numbers on Google.

## How to update the menu (`data/menu.js`)
### How to add a menu item
Copy an existing item block (from `{` to `}`) inside the right category's `"items"` list, paste it after a comma, and edit it:
```
{ "name": "Fish and Chips", "description": "Haddock with fries.", "price": 16.5, "featured": false, "available": true, "dietary": [], "image": null }
```
### How to change prices
Change `"price": null` to a number with no dollar sign, e.g. `"price": 12.5`. The site shows `$12.50`. A `null` price shows "Price to be confirmed".
### How to remove a menu item
Delete its whole `{ ... }` block and make sure the neighbouring items are still separated by commas (no comma after the last item).
### Other item settings
- `"featured": true` adds a **Popular** tag and puts the dish in the home page "Popular dishes" list.
- `"available": false` shows "Currently unavailable" (and hides it from Popular dishes).
- `"dietary": ["Vegetarian"]` only if the restaurant has confirmed it.
- `"sizes"` is for items sold in sizes. Leave `"price": null` and list them: `"sizes": [{"label": "Small", "price": 7.95}, {"label": "Large", "price": 13.95}]`.
- A category can have a `"note"` (one sentence) and `"notes"` (a list of sentences) shown under its heading.
- `"notice"` at the top is the "menu to be confirmed" banner. **Delete its text (`""`) once everything is verified.**
- To add a category, copy a whole category block and give it a new `"id"` (lowercase, no spaces) and `"name"`.

## Photos
### How to add a food photo
1. Use only photos the restaurant owns or has permission to use. Do **not** use Google Maps photos.
2. Shrink to about 1200 px wide, under 300 KB (free tool: squoosh.app). Use a clear file name like `poutine.jpg`.
3. Put it in `images/food/`, then in `data/menu.js` set `"image": "poutine.jpg"` for that item (add `"imageAlt": "A plate of poutine"` for screen-reader users).
### How to add or replace a gallery photo
1. Put the file in `images/gallery/`.
2. In `data/gallery.js`, set `"file": "name.jpg"`, write a short `"alt"` description and a `"caption"`. To replace one, change the file name (or overwrite the file with the same name). To add more, copy a photo line.
### How to change the logo
The logo files are in `images/logo/`: `logo-128.png` (header and footer) and `logo-320.png` (home page). To change the logo, replace those two files with new square images of the same names (about 128 and 320 pixels), or change the two paths under `"logo"` in `data/business.js`. The browser-tab icon is in `favicon/` (`favicon-32.png` and `apple-touch-icon.png`). The original supplied file is kept as `images/logo/logo-original.jpg`.

## Design
### How to change colours
Top of `css/style.css`, the `:root { ... }` block. Change the hex codes (e.g. `--red: #cc131a;`). `--dark` is the black used for the header, hero and footer, `--red` is the logo red used for buttons and lines, and `--accent` is a lighter red used for text on dark backgrounds. Keep text/background pairs high contrast.
### How to change fonts
Same block: `--font-head` (headings) and `--font-body` (text). The site uses fonts already on visitors' devices, so it loads fast and sends no data to others.
### How to change navigation
Top of `js/main.js`, the `NAV` list. Each line has a `label` and a `href` (page name).

## How to update SEO information
- Page titles and descriptions: in the `<head>` of each `.html` file (`<title>` and `<meta name="description">`).
- Search listing data (structured data) is generated from `business.js`. Rating is excluded until you set `"includeInStructuredData": true` for a verified rating.
- **Going live:** (1) delete the `noindex` line in every page, (2) in `robots.txt` change `Disallow: /` to `Allow: /` and add your Sitemap line, (3) replace `YOUR-DOMAIN` in `sitemap.xml`, (4) set `"siteUrl"` in `business.js`, (5) set `"demoMode": false`. Only do this with the restaurant's approval.

## How to deploy (publish for free)
### One-time setup
1. **Create a GitHub account** at github.com (GitHub stores your files and keeps a history of changes).
2. Click **New repository**, name it `michael-kellys-website`, keep it Public, create it.
3. Click **uploading an existing file**, drag in **everything inside** the project folder (keep folders), and click **Commit changes**. (Commit = save a snapshot with a note. Use a clear note like "Add restaurant menu page".)
### Option A: GitHub Pages
Repository **Settings > Pages** > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`, Save. After a minute your address appears (like `yourname.github.io/michael-kellys-website`).
### Option B: Cloudflare Pages
Sign up at pages.cloudflare.com > Create project > Connect to Git > pick the repository > build command: leave empty; output directory: leave empty (or `/`) > Deploy.
### Test the live site
Open the address on a phone and a computer. Click every Order, Call and Directions button.
### Add a custom domain later
Buy a domain (about $15-25/year) from a registrar. In your host's settings, add the domain. The host shows the DNS records to enter. (DNS is the system that points your domain name at your site; a CNAME record is a setting that says "this name points to that host".) Copy the values exactly. Wait up to a few hours.
### HTTPS
GitHub Pages and Cloudflare Pages turn on HTTPS (the padlock) automatically. In GitHub Pages, tick "Enforce HTTPS".
### The 404 page
GitHub Pages uses `404.html` automatically. It works best when the site is at a domain's root; on a `/repo-name/` address, very deep wrong URLs may show it unstyled.

## Safe change workflow
Working site > save a snapshot (commit) > make one change > test locally > commit with a clear message > deploy.

## How to troubleshoot common problems
- **"Details could not be loaded" or blank sections:** you probably have a typo in a file in `data/` (a missing comma, quote or bracket). Undo your last edit. Also make sure you opened the page from the extracted folder, not from inside the zip.
- **Changes do not appear:** hard-refresh (Ctrl+Shift+R / Cmd+Shift+R).
- **A menu item vanished:** check commas and brackets around it in `menu.js`.
- **Order button says "Call to Order":** `orderUrl` is `null` or empty.
- **Order link does not work:** see the ordering section above.
- **Photo missing:** check the file name, spelling, capital letters and folder.

## How to roll back a bad change
- **GitHub website:** open the repository > **Commits** > click the last good one > **Browse files** to see it. Or open the bad commit and click the "..." menu > **Revert**.
- **Uploaded a wrong file?** Re-upload the previous version of that file.
- Cloudflare Pages: **Deployments** tab > on an older deployment choose **Rollback**.

## How to safely use AI to modify the website
Give Claude the project (or the file you changed) and ask for one small change at a time. Good request: "Update the hours in data/business.js: Monday to Friday 7 AM-9 PM." Ask it to: (1) look at the existing files first, (2) say what it will change, (3) change as little as possible, (4) tell you how to check the result. Never ask it to "rewrite the whole site." Do not paste passwords or private keys into any chat. Always commit before and after an AI change.

## Security and long-term care
This site is static (plain files). It has no database, no logins and no forms, so there is very little for an attacker to break into. The real risks are people getting into your accounts, and out-of-date information. Here is what protects it.

### Already built in
- **Content Security Policy (CSP):** a line in every page's `<head>` that tells the browser to run code and load images only from this site. Even if someone tried to sneak in a script, the browser refuses it. (Tested.)
- **No third-party code:** no ads, trackers, chat widgets, fonts or maps from other companies. Each one would be a way in.
- **Safe links:** every link that opens another site uses `rel="noopener noreferrer"`, and no data is typed into the page as raw HTML.
- **No personal data collected:** no forms, cookies or analytics.
- **`_headers` file:** extra browser protections (such as blocking the site from being framed by other sites). Cloudflare Pages uses it automatically. As far as I know GitHub Pages does not, so the CSP line inside each page is the fallback. If security matters most, choose Cloudflare Pages.
- **Demo protection:** the concept notice and the search-engine block keep the demo from being mistaken for the real site.

### What you should do
1. **Protect your GitHub account.** Whoever can edit your repository controls the site, including where **Order Online** and **Call** go. Use a long, unique password (Chrome's password manager can make one) and turn on **two-factor authentication** (GitHub: Settings > Password and authentication). Save the recovery codes somewhere safe.
2. **Keep your email private on GitHub:** Settings > Emails > "Keep my email addresses private".
3. **Only add collaborators you trust**, and remove them when they no longer need access.
4. **Protect your domain** (when you buy one): turn on two-factor at the registrar, turn on auto-renew (an expired domain can be taken over), and use the registrar's privacy option so your personal details are not public. Delete any DNS records you no longer use.
5. **Never put passwords or keys in the files.** This site needs none. If a future feature asks for one, ask Claude first. Secrets must live on a server, never in a page.
6. **Be careful with new features.** If you add an embedded map, analytics, web fonts, a reservation widget or a form, the CSP will block them until it is updated. Ask Claude to do that safely and explain what the new service can see.

### Monthly checklist (5 minutes)
- Open the live site on your phone. Click **Order Online**, **Call** and **Get Directions**.
- Compare hours, prices and the menu with the restaurant's Google listing or printed menu. Update the `data/` files if anything changed.
- Make sure the order link still reaches the restaurant.
- Download a backup: on GitHub, Code > Download ZIP.

### Every few months
- Review who has access to the repository and domain.
- Check the domain expiry date.
- Update the Google rating and review count if you show them.

### Menu accuracy is a safety issue too
Wrong prices annoy customers, and wrong allergen or gluten-free information can harm them. Keep the "please ask about allergies" notes. Do not add allergen or dietary claims (for example "nut-free") unless the restaurant confirms them in writing.

## Things this site deliberately does not have
No contact form (no verified email or service to receive it), no analytics or tracking, no embedded map or third-party scripts. The only external services are optional links you click: Google Maps (directions, reviews) and the order link.

## Future upgrades
- **Free/simple:** real photos, confirmed hours and prices, a Google reviews link, a privacy-friendly analytics tool.
- **Paid/advanced (only if useful):** a website editor/CMS so staff can edit without touching files, the restaurant's own ordering or reservation system, a contact form service.
