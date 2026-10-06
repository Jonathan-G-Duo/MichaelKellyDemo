/* data/business.js - restaurant information. Edit the values only. Keep the first line (window.BUSINESS = {) and the last line (};) exactly as they are. */
window.BUSINESS = {
  "_readme": "EDIT THIS FILE to change restaurant info. Keep the quotes, commas and brackets. Use null (no quotes) for 'not known yet'. Never invent information.",

  "name": "Michael Kelly's Bar & Grill",
  "tagline": "Casual, cozy dining in Whitby.",
  "description": "A neighbourhood bar and grill on Winchester Road East in Whitby, serving lunch and dinner.",

  "demoMode": true,
  "demoNotice": "Concept website. This is not the official website of Michael Kelly's Bar & Grill.",
  "siteUrl": null,

  "_logo_note": "LOGO. To change the logo, replace these two image files (keep the same file names) or point to new files. small = header and footer, large = home page.",
  "logo": { "small": "images/logo/logo-128.png", "large": "images/logo/logo-320.png" },

  "address": {
    "street": "93 Winchester Rd E",
    "city": "Whitby",
    "province": "ON",
    "postalCode": "L1M 1B4",
    "country": "Canada"
  },
  "phone": {
    "display": "(905) 655-5525",
    "tel": "+19056555525"
  },
  "email": null,

  "_orderUrl_note": "ORDER LINK. This is a Google-generated link and may stop working or may not work for every visitor. Check it every few weeks (also in a private window and on a phone). If the restaurant gives you an official ordering link, paste it here and nothing else needs to change. If this is null, Order buttons become 'Call to Order'.",
  "orderUrl": "https://www.google.com/searchviewer/42?cvd=CLw_EiUKI-ICIDIeEhciFdLX29IPDwoLL2cvMXR4bnFmc3cYADoDCPAN&hl=en-CA&gl=ca&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=VmzCaoLlIv2aptQPvouT6Qo&ei=VmzCaoLlIv2aptQPvouT6Qo&fo_s=OA&opi=79508299&ebb=1&cs=0&foub=mcpp",

  "_directionsUrl_note": "Leave null to build a Google Maps directions link from the address automatically.",
  "directionsUrl": null,
  "mapPlusCode": "X24W+2J Whitby, Ontario",

  "social": [],

  "_hours_note": "Hours were taken from the restaurant's Google listing. Replace any day with text such as \"7:00 AM - 10:00 PM\", \"Closed\", or a list for split hours: [\"7:00 AM - 2:00 PM\", \"5:00 PM - 9:00 PM\"].",
  "hours": {
    "monday": "11:00 AM - 10:00 PM",
    "tuesday": "11:00 AM - 10:00 PM",
    "wednesday": "11:00 AM - 10:00 PM",
    "thursday": "11:00 AM - 10:00 PM",
    "friday": "11:00 AM - 10:00 PM",
    "saturday": "11:00 AM - 10:00 PM",
    "sunday": "11:00 AM - 10:00 PM",
    "notice": "Hours as shown on the restaurant's Google listing. Holiday hours may differ, so please call to confirm.",
    "specialNotices": []
  },

  "rating": {
    "value": 4.4,
    "count": 414,
    "source": "Google",
    "profileUrl": null,
    "includeInStructuredData": false
  },

  "_reviewExcerpts_note": "Optional. Add short, properly sourced customer quotes as {\"text\": \"...\", \"author\": \"...\", \"source\": \"Google\"}. Leave as [] if you have permission for none. Never invent reviews.",
  "reviewExcerpts": [],

  "services": ["Dine-in", "Takeout", "Delivery", "Outdoor seating", "Table service"],
  "mealTimes": ["Lunch", "Dinner", "Dessert"],

  "goodToKnow": [
    { "title": "Families", "items": ["Good for kids", "High chairs", "Kids' menu", "Good for groups"] },
    { "title": "Parking", "items": ["Free parking lot", "Free street parking"] },
    { "title": "Accessibility", "items": ["Wheelchair-accessible entrance", "Wheelchair-accessible parking lot", "Wheelchair-accessible washroom"] },
    { "title": "Payment", "items": ["Credit cards", "Debit cards", "Mobile payments (NFC)"] }
  ]
};
