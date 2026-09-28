/* LSR Services Group demo site: shared icons, chrome and styling.
   Brand colours taken from the LSR logo: navy 102654 and amber E09921. */

const BRAND = {
  ink: '#102654', ink2: '#17306B', ink3: '#4A5A80',
  acc: '#E09921', accD: '#A06B10', accL: '#FDF3E2', teal: '#E09921',
  bad: '#C0392B', badL: '#FBE9E7',
  muted: '#6B7280', line: '#E5E7EB', bg: '#F5F6F8', white: '#FFFFFF',
  green: '#0E8A5F', greenL: '#E4F4EE',
  amber: '#B26A00', amberL: '#FDF0DC',
  blue: '#1E5AA8', blueL: '#E6EEF9',
};

const LOGO = 'assets/logo-navy.png', LOGO_WHITE = 'assets/logo-white.png', ICON = 'assets/icon.png';

/* ---------------- icons ---------------- */
const P = {
  truck: '<path d="M2 6h11v10H2zM13 9h4.5l3.5 3.5V16h-8"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  interlink: '<path d="M1 8h8v7H1zM10 8h7v7h-7zM18 10h2l3 3v2h-5"/><circle cx="4" cy="16.5" r="1.4"/><circle cx="12" cy="16.5" r="1.4"/><circle cx="20" cy="16.5" r="1.4"/>',
  trailer: '<path d="M2 7h15v9H2z"/><path d="M17 16h5M20 16v2"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="12" cy="17.5" r="1.6"/>',
  pallet: '<path d="M3 15h18v4H3zM6 19v2M18 19v2"/><path d="M6 5h12v10H6z"/><path d="M12 5v10"/>',
  warehouse: '<path d="M3 21V9l9-5 9 5v12"/><path d="M7 21v-7h10v7"/><path d="M7 17h10"/>',
  border: '<path d="M6 3v18M6 4h11l-2.5 3.5L17 11H6"/><path d="M18 3v18"/>',
  passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 16h6"/>',
  seal: '<circle cx="12" cy="10" r="5"/><path d="m9 14-1 7 4-2 4 2-1-7"/>',
  weigh: '<path d="M12 3v3M4 7h16M6 7l-2.5 6a3 3 0 0 0 5 0zM18 7l-2.5 6a3 3 0 0 0 5 0z"/><path d="M8 21h8M12 6v15"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  wrench2: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8z"/>',
  flame2: '<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 2 1.5 3 2.5 3-1-3 0-6 0-8z"/>',
  door: '<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18"/><circle cx="15" cy="12" r="1"/>',
  plug: '<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v5"/>',
  droplet2: '<path d="M12 2.7s6 6.4 6 11.3a6 6 0 0 1-12 0c0-4.9 6-11.3 6-11.3z"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 10h6M9 14h6M9 18h3"/>',
  scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10"/>',
  magnet: '<path d="M6 3v8a6 6 0 0 0 12 0V3h-4v8a2 2 0 0 1-4 0V3z"/><path d="M6 7h4M14 7h4"/>',
  drop: '<path d="M12 2.7s6 6.4 6 11.3a6 6 0 0 1-12 0c0-4.9 6-11.3 6-11.3z"/>',
  tanker: '<path d="M2 15V9a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v6M15 10h3l3 3v2M2 15h19"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 18 4-6"/><circle cx="12" cy="18" r="1"/>',
  hard: '<path d="M4 16a8 8 0 0 1 16 0M2 16h20v3H2zM10 8V5h4v3"/>',
  flame: '<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 2 1.5 3 2.5 3-1-3 0-6 0-8z"/>',
  box: '<path d="m3 7 9-4 9 4v10l-9 4-9-4z"/><path d="m3 7 9 4 9-4M12 11v10"/>',
  sofa: '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2z"/><path d="M5 18v2M19 18v2"/>',
  bed2: '<path d="M3 20V6M21 20v-6a3 3 0 0 0-3-3H3M3 16h18"/><rect x="5" y="8" width="5" height="3" rx="1"/>',
  fragile: '<path d="M8 3h8l-1 7a3 3 0 0 1-6 0z"/><path d="M12 13v7M8 21h8"/><path d="m11 3 1 3-1.5 2"/>',
  tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="8" cy="8" r="1.5"/>',
  cube: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 10-3 16-9 16z"/><path d="M4 21c3-6 7-9 12-11"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M15 8l2 2"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  sign: '<path d="M3 17c3-4 5 2 8-1s3-6 5-4-1 5 2 6"/><path d="M3 21h18"/>',
  camera: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  files: '<path d="M8 3h6l4 4v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v4h4"/><path d="M4 7v12a2 2 0 0 0 2 2h9"/>',
  fuel: '<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M4 10h10"/><path d="M14 8h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8z"/>',
  alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>',
  sos: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bed: '<path d="M3 18V7M3 12h13a5 5 0 0 1 5 5v1H3zM21 18v2M3 18v2"/><circle cx="7.5" cy="9.5" r="2"/>',
  pin: '<path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  nav: '<path d="m3 11 18-8-8 18-2-8z"/>',
  gps: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',
  route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M18 13.5A7 7 0 0 1 22 20"/>',
  home: '<path d="M3 11 12 3l9 8M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.8"/><path d="M6 10v4M18 10v4"/>',
  invoice: '<path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><path d="M9 7h6M9 11h6M9 15h3"/>',
  calc: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v3M8 18h4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chev: '<path d="m9 6 6 6-6 6"/>',
  chevd: '<path d="m6 9 6 6 6-6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  dots: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M5 20h14"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  selfie: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><circle cx="12" cy="10" r="2.5"/><path d="M8.5 16a3.5 3.5 0 0 1 7 0"/>',
  cloudOff: '<path d="M3 3l18 18M8 7a5 5 0 0 1 9 3 4 4 0 0 1 3 6.5M16 19H7a4 4 0 0 1-1-7.9"/>',
  cloud: '<path d="M7 19h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.4 2A3.5 3.5 0 0 0 7 19z"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/>',
  star: '<path d="m12 3 2.7 5.6 6.2.9-4.5 4.3 1.1 6.1L12 17l-5.5 2.9 1.1-6.1L3.1 9.5l6.2-.9z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.2"/><path d="M5.5 16a3.5 3.5 0 0 1 7 0M15 10h3M15 13h3"/>',
  inbox: '<path d="M3 13h5l1.5 3h5L16 13h5M5 5h14l2 8v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z"/>',
  list: '<path d="M9 6h12M9 12h12M9 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13 7 4 4"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  play: '<path d="M7 4v16l13-8z"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r=".8"/>',
  battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 10v4"/><rect x="4" y="9" width="11" height="6" rx="1" fill="currentColor" stroke="none"/>',
};
function ic(name, size = 18, cls = '') {
  return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
}

/* ---------------- shared styling ---------------- */
function injectStyles() {
  const s = document.createElement('style');
  s.textContent = `
  :root{
    --ink:${BRAND.ink};--ink2:${BRAND.ink2};--ink3:${BRAND.ink3};
    --acc:${BRAND.acc};--accD:${BRAND.accD};--accL:${BRAND.accL};--teal:${BRAND.teal};--bad:${BRAND.bad};--badL:${BRAND.badL};
    --muted:${BRAND.muted};--line:${BRAND.line};--bg:${BRAND.bg};
    --green:${BRAND.green};--greenL:${BRAND.greenL};
    --amber:${BRAND.amber};--amberL:${BRAND.amberL};
    --blue:${BRAND.blue};--blueL:${BRAND.blueL};
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:Inter,system-ui,-apple-system,sans-serif;color:var(--ink);background:var(--bg);line-height:1.55;-webkit-font-smoothing:antialiased}
  .ic{flex:none;vertical-align:middle}
  .mono{font-variant-numeric:tabular-nums;letter-spacing:-.005em}

  /* pill / status chips */
  .pill{display:inline-flex;align-items:center;gap:5px;border-radius:999px;padding:3px 9px;font-size:11.5px;font-weight:600;white-space:nowrap}
  .pill.ok{background:var(--greenL);color:var(--green)}
  .pill.warn{background:var(--amberL);color:var(--amber)}
  .pill.bad{background:var(--badL);color:var(--bad)}
  .pill.acc{background:var(--accL);color:var(--accD)}
  .pill.info{background:var(--blueL);color:var(--blue)}
  .pill.mut{background:#EEF0F3;color:var(--muted)}
  .pill.dark{background:var(--ink);color:#fff}

  /* phone shell */
  .phones{display:flex;flex-wrap:wrap;gap:34px;justify-content:center;padding:34px 20px 90px}
  .phone{width:340px;flex:none}
  .phone .glass{background:#fff;border-radius:34px;overflow:hidden;border:9px solid #111;box-shadow:0 18px 46px rgba(0,0,0,.24);position:relative;height:712px;display:flex;flex-direction:column}
  .phone.ios .glass{border-radius:44px}
  .phone .cap{text-align:center;font-size:12.5px;color:var(--muted);margin-top:11px;font-weight:500}
  .statusbar{display:flex;justify-content:space-between;align-items:center;padding:7px 16px 3px;font-size:11.5px;font-weight:600;color:#fff;background:var(--ink);flex:none}
  .statusbar.light{background:#fff;color:var(--ink)}
  .statusbar .rt{display:flex;gap:5px;align-items:center}
  .notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:132px;height:26px;background:#111;border-radius:0 0 16px 16px;z-index:5}
  .scr{flex:1;overflow:hidden;display:flex;flex-direction:column;position:relative}
  .scr.pad{padding:14px}
  .scroll{flex:1;overflow:hidden}

  /* app bars */
  .appbar{background:var(--ink);color:#fff;padding:11px 14px;display:flex;align-items:center;gap:10px;flex:none}
  .appbar .t{font-weight:600;font-size:15px;flex:1;line-height:1.25}
  .appbar .t small{display:block;font-weight:400;font-size:11.5px;opacity:.68}
  .appbar .redline{height:3px;background:var(--teal)}
  .tabbar{display:flex;border-top:1px solid var(--line);background:#fff;flex:none}
  .tabbar div{flex:1;text-align:center;padding:8px 2px 9px;font-size:10.5px;color:var(--muted);display:flex;flex-direction:column;align-items:center;gap:3px}
  .tabbar div.on{color:var(--acc);font-weight:600}

  /* generic bits */
  .card{background:#fff;border:1px solid var(--line);border-radius:13px;padding:13px}
  .card + .card{margin-top:10px}
  .row{display:flex;align-items:center;gap:10px}
  .row.sb{justify-content:space-between}
  .lab{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;font-weight:600}
  .big{font-size:22px;font-weight:700;letter-spacing:-.02em}
  .btn{display:flex;align-items:center;justify-content:center;gap:8px;background:var(--acc);color:#fff;border:0;border-radius:11px;padding:13px;font:600 14.5px Inter,sans-serif;width:100%}
  .btn.dark{background:var(--ink)}
  .btn.ghost{background:#fff;color:var(--ink);border:1.5px solid var(--line)}
  .btn.sm{padding:9px 14px;width:auto;font-size:13px;border-radius:9px}
  .fld{background:#fff;border:1.5px solid var(--line);border-radius:11px;padding:10px 12px;margin-top:6px}
  .fld .v{font-size:14.5px;font-weight:500}
  .fld .v.ph{color:#9AA1AA;font-weight:400}
  .sep{height:1px;background:var(--line);margin:11px 0}
  .muted{color:var(--muted)}
  .xs{font-size:11.5px}
  .sm2{font-size:13px}
  .b{font-weight:600}

  /* desktop shell */
  .desk{width:1440px;margin:0 auto 46px;background:#fff;border:1px solid #D5D9DE;border-radius:12px;overflow:hidden;box-shadow:0 14px 40px rgba(0,0,0,.13)}
  .browser{background:#E9ECEF;border-bottom:1px solid #D5D9DE;padding:9px 13px;display:flex;align-items:center;gap:9px;flex:none}
  .browser i{width:11px;height:11px;border-radius:50%;background:#C9CED4;display:block}
  .browser .url{flex:1;background:#fff;border-radius:7px;padding:5px 12px;font-size:12px;color:var(--muted);border:1px solid #DCE0E5}
  .deskbody{display:flex;min-height:812px}
  .side{width:214px;background:var(--ink);color:#fff;padding:0 0 16px;flex:none;display:flex;flex-direction:column}
  .side .brandbox{padding:16px 16px 14px;border-bottom:1px solid rgba(255,255,255,.1)}
  .side .brandbox img{height:26px}
  .side nav{padding:10px 9px;flex:1;overflow:hidden}
  .side a{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:8px;color:rgba(255,255,255,.7);text-decoration:none;font-size:13px;margin-bottom:1px}
  .side a.on{background:var(--acc);color:#fff;font-weight:600}
  .side .grp{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.35);padding:13px 10px 5px;font-weight:700}
  .main{flex:1;background:var(--bg);display:flex;flex-direction:column;min-width:0}
  .topbar{background:#fff;border-bottom:1px solid var(--line);padding:12px 22px;display:flex;align-items:center;gap:14px;flex:none}
  .topbar h1{font-size:17px;font-weight:700;letter-spacing:-.01em}
  .topbar .sub{font-size:12px;color:var(--muted);font-weight:400;margin-top:1px}
  .content{padding:20px 22px;flex:1;overflow:hidden}
  .kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
  .kpi{background:#fff;border:1px solid var(--line);border-radius:12px;padding:13px 14px}
  .kpi .n{font-size:25px;font-weight:700;letter-spacing:-.02em;margin-top:2px}
  .kpi .d{font-size:11.5px;color:var(--muted);margin-top:2px}

  table{width:100%;border-collapse:collapse;background:#fff;font-size:13px}
  thead th{text-align:left;font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);
    padding:9px 12px;border-bottom:1px solid var(--line);font-weight:700;background:#FAFBFC;white-space:nowrap}
  tbody td{padding:10px 12px;border-bottom:1px solid #F1F3F5;vertical-align:middle}
  tbody tr:last-child td{border-bottom:0}
  .tbl{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff}
  .tbl h3{font-size:13.5px;font-weight:700;padding:12px 14px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center}
  .av{width:26px;height:26px;border-radius:50%;background:var(--ink);color:#fff;font-size:10.5px;font-weight:700;display:flex;align-items:center;justify-content:center;flex:none}
  .panel{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden}
  .panel h3{font-size:13.5px;font-weight:700;padding:12px 14px;border-bottom:1px solid var(--line)}
  .panel .in{padding:14px}
  .g2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
  .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .gsb{display:grid;grid-template-columns:1fr 340px;gap:14px}

  /* timeline */
  .tl{position:relative;padding-left:22px}
  .tl:before{content:'';position:absolute;left:6px;top:5px;bottom:5px;width:2px;background:var(--line)}
  .tl .ev{position:relative;padding-bottom:13px}
  .tl .ev:last-child{padding-bottom:0}
  .tl .ev:before{content:'';position:absolute;left:-19px;top:4px;width:11px;height:11px;border-radius:50%;background:#fff;border:2.5px solid var(--line)}
  .tl .ev.done:before{background:var(--green);border-color:var(--green)}
  .tl .ev.now:before{background:var(--acc);border-color:var(--acc);box-shadow:0 0 0 4px var(--accL)}
  `;
  document.head.appendChild(s);
}

/* ---------------- phone + desktop frames ---------------- */
function phone(caption, inner, { ios = false, light = false, time = '07:12' } = {}) {
  return `<div class="phone ${ios ? 'ios' : ''}">
    <div class="glass">
      ${ios ? '<div class="notch"></div>' : ''}
      <div class="statusbar ${light ? 'light' : ''}">
        <span class="mono">${time}</span>
        <span class="rt">${ic('wifi', 13)}${ic('battery', 15)}</span>
      </div>
      <div class="scr">${inner}</div>
    </div>
    <div class="cap">${caption}</div>
  </div>`;
}

function appbar(title, sub, { back = false, right = '' } = {}) {
  return `<div class="appbar">
    ${back ? `<span data-nav="back">${ic('back', 20)}</span>` : ''}
    <div class="t">${title}${sub ? `<small>${sub}</small>` : ''}</div>${right}
  </div><div class="redline"></div>`;
}

function tabbar(active) {
  const t = [['start', 'check', 'Start-up'], ['weights', 'weigh', 'Checks'], ['hold', 'alert', 'Hold'], ['handover', 'users', 'Handover']];
  return `<div class="tabbar">${t.map(([id, i, l]) =>
    `<div class="${active === id ? 'on' : ''}" data-nav="${id}">${ic(i, 19)}<span>${l}</span></div>`).join('')}</div>`;
}

function desktop(url, side, title, sub, content, { topright = '' } = {}) {
  return `<div class="desk">
    <div class="browser"><i></i><i></i><i></i><div class="url">${url}</div></div>
    <div class="deskbody">
      <div class="side">
        <div class="brandbox"><img src="${LOGO_WHITE}" alt="LSR Services Group"></div>
        <nav>${side}</nav>
      </div>
      <div class="main">
        <div class="topbar"><div style="flex:1"><h1>${title}</h1>${sub ? `<div class="sub">${sub}</div>` : ''}</div>${topright}</div>
        <div class="content">${content}</div>
      </div>
    </div></div>`;
}

function sideNav(active) {
  const groups = [
    ['Content', [['pages', 'files', 'Pages'], ['services', 'grid', 'Services'], ['sectors', 'users', 'Sectors'], ['work', 'camera', 'Completed works']]],
    ['Enquiries', [['enquiries', 'inbox', 'Enquiries'], ['tracking', 'chart', 'Traffic and conversions']]],
    ['Settings', [['seo', 'search', 'SEO defaults'], ['team', 'settings', 'Users']]],
  ];
  return groups.map(([g, items]) => `<div class="grp">${g}</div>` + items.map(([id, i, l]) =>
    `<a class="${active === id ? 'on' : ''}" data-nav="${id}">${ic(i, 16)}${l}</a>`).join('')).join('');
}

/* ---------------- corridor map (a drawing, not a real map) ---------------- */
function corridorMap({ w = 900, h = 460, stops = [], progress = 0.5, label = '', trucks = [], onRoute = [] } = {}) {
  const path = `M${w * .17} ${h * .86} C${w * .3} ${h * .72} ${w * .3} ${h * .5} ${w * .45} ${h * .42} S${w * .62} ${h * .3} ${w * .74} ${h * .16}`;
  // exact point on the two cubic segments of the corridor path, so pins sit on the line
  const bez = (a, b, c, d, u) => {
    const v = 1 - u;
    return v * v * v * a + 3 * v * v * u * b + 3 * v * u * u * c + u * u * u * d;
  };
  const SEG = [
    [[.17, .86], [.3, .72], [.3, .5], [.45, .42]],
    [[.45, .42], [.6, .34], [.62, .3], [.74, .16]],
  ];
  const pt = (t) => {
    const [seg, u] = t <= .5 ? [SEG[0], t * 2] : [SEG[1], (t - .5) * 2];
    return [w * bez(seg[0][0], seg[1][0], seg[2][0], seg[3][0], u),
            h * bez(seg[0][1], seg[1][1], seg[2][1], seg[3][1], u)];
  };
  const [tx, ty] = pt(progress);
  return `<div style="position:relative;width:100%;height:100%"><svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" style="display:block">
    <rect width="${w}" height="${h}" fill="#EDEFF2"/>
    <path d="M0 ${h * .78} C${w * .25} ${h * .7} ${w * .5} ${h * .9} ${w} ${h * .74} L${w} ${h} L0 ${h}Z" fill="#E3E7EB"/>
    <path d="M0 ${h * .3} C${w * .3} ${h * .22} ${w * .55} ${h * .4} ${w} ${h * .26}" stroke="#DCE1E6" stroke-width="2" fill="none"/>
    <path d="M${w * .82} ${h * .9} L${w * .95} ${h * .5}" stroke="#DCE1E6" stroke-width="2" fill="none"/>
    <path d="${path}" stroke="#fff" stroke-width="13" fill="none" stroke-linecap="round"/>
    <path d="${path}" stroke="${BRAND.ink}" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-dasharray="1 0"/>
    <path d="${path}" pathLength="1000" stroke="${BRAND.acc}" stroke-width="3.5" fill="none" stroke-linecap="round"
      stroke-dasharray="${1000 * progress} 2000"/>
    ${stops.map(([t, name, kind]) => {
      const [x, y] = pt(t);
      const c = kind === 'border' ? BRAND.amber : kind === 'done' ? BRAND.green : BRAND.ink;
      return `<g transform="translate(${x} ${y})">
        <circle r="7" fill="#fff" stroke="${c}" stroke-width="3"/>
        <rect x="12" y="-12" rx="6" width="${name.length * 6.6 + 16}" height="23" fill="#fff" stroke="#DCE1E6"/>
        <text x="20" y="4" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="600" fill="${BRAND.ink}">${name}</text>
      </g>`;
    }).join('')}
    <g transform="translate(${tx} ${ty})">
      <circle r="21" fill="${BRAND.acc}" opacity=".16"/>
      <circle r="13" fill="${BRAND.acc}"/>
      <path d="M-6 -3.5h6.5v6H-6zM.5 -1H3l2 2v2.5H.5" stroke="#fff" stroke-width="1.5" fill="none"/>
    </g>
    ${trucks.map(([x, y, l]) => `<g transform="translate(${w * x} ${h * y})">
      <circle r="11" fill="${BRAND.ink}"/>
      <path d="M-5 -3h5.5v5H-5zM.5 -1h2l1.7 1.7V2H.5" stroke="#fff" stroke-width="1.4" fill="none"/>
      <rect x="15" y="-10" rx="5" width="${l.length * 6.6 + 14}" height="20" fill="#fff" stroke="#DCE1E6"/>
      <text x="22" y="4" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="700" fill="${BRAND.ink}">${l}</text>
    </g>`).join('')}
    ${onRoute.map(([t, l]) => { const [x, y] = pt(t); return `<g transform="translate(${x} ${y})">
      <circle r="11" fill="${BRAND.ink}" stroke="#fff" stroke-width="2.5"/>
      <path d="M-5 -3h5.5v5H-5zM.5 -1h2l1.7 1.7V2H.5" stroke="#fff" stroke-width="1.4" fill="none"/>
      <rect x="-${l.length * 6.6 + 30}" y="-10" rx="5" width="${l.length * 6.6 + 14}" height="20" fill="#fff" stroke="#DCE1E6"/>
      <text x="-${l.length * 6.6 + 23}" y="4" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="700" fill="${BRAND.ink}">${l}</text>
    </g>`; }).join('')}
  </svg>${label ? `<span style="position:absolute;left:12px;top:12px;background:#fff;border:1px solid #DCE1E6;border-radius:7px;
    padding:4px 10px;font:600 11.5px Inter,sans-serif;color:${BRAND.ink}">${label}</span>` : ''}</div>`;
}

/* a small signature scribble for proof-of-delivery screens */
function signature(w = 240, h = 68, c = '#111') {
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}">
    <path d="M14 ${h - 18} C40 ${h - 52} 52 ${h - 4} 76 ${h - 30} S108 ${h - 58} 124 ${h - 26}
             S150 ${h - 8} 168 ${h - 34} S196 ${h - 54} 224 ${h - 24}"
      stroke="${c}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M96 ${h - 10} C120 ${h - 16} 150 ${h - 12} 188 ${h - 18}" stroke="${c}" stroke-width="1.6" fill="none" opacity=".6"/>
  </svg>`;
}

/* a placeholder photo tile that reads as "a photo the driver took" */
function photoTile(src, tag, h = 78) {
  return `<div style="position:relative;border-radius:9px;overflow:hidden;height:${h}px;background:#DDE1E6">
    <img src="${src}" style="width:100%;height:100%;object-fit:cover" alt="">
    ${tag ? `<span style="position:absolute;left:5px;bottom:5px;background:rgba(17,17,17,.82);color:#fff;
      font-size:9.5px;font-weight:600;padding:2px 6px;border-radius:5px">${tag}</span>` : ''}
  </div>`;
}

/* ---------------- click-through navigation ---------------- */
function screenFromUrl(def) {
  return new URLSearchParams(location.search).get('s') || def;
}
const OS_SUFFIX = (new URLSearchParams(location.search).get('s') || '').includes('@ios') ? '@ios' : '';

function goTo(target) {
  if (!target) return;
  if (target.startsWith('http') || target.includes('.html')) { location.href = target; return; }
  location.href = location.pathname + '?s=' + target + (target.includes('@') ? '' : OS_SUFFIX);
}

function wireNav({ text = {}, selectors = [] } = {}) {
  const keys = Object.fromEntries(Object.entries(text).map(([k, v]) => [k.trim().toLowerCase(), v]));
  document.querySelectorAll('#app *').forEach((el) => {
    if (el.dataset.nav || el.children.length > 2) return;
    const label = (el.textContent || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (label && keys[label] && !el.querySelector('[data-nav]')) el.dataset.nav = keys[label];
  });
  selectors.forEach(([sel, target]) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.dataset.nav = typeof target === 'function' ? target(i, el) : target;
    });
  });
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-nav]');
    if (!el) return;
    e.preventDefault();
    const dest = el.dataset.nav;
    if (dest === 'back') history.back(); else goTo(dest);
  });
  addShell();
}

function addShell() {
  const bar = document.createElement('div');
  bar.id = 'mocknav';
  bar.innerHTML = `<a href="index.html">&#8592; All pages</a><span></span><button type="button">&#8592; Back</button>`;
  document.body.appendChild(bar);
  bar.querySelector('button').onclick = () => history.back();
  const css = document.createElement('style');
  css.textContent = `
  [data-nav]{cursor:pointer}
  [data-nav]:hover{filter:brightness(.97)}
  #mocknav{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9999;
    display:flex;align-items:center;gap:10px;background:rgba(17,17,17,.93);color:#fff;
    padding:7px 8px 7px 14px;border-radius:999px;font:500 12.5px/1 Inter,system-ui,sans-serif;
    box-shadow:0 6px 22px rgba(0,0,0,.3);opacity:.34;transition:opacity .15s}
  #mocknav:hover{opacity:1}
  #mocknav a{color:#fff;text-decoration:none}
  #mocknav span{width:1px;height:14px;background:rgba(255,255,255,.3)}
  #mocknav button{background:${BRAND.acc};color:#fff;border:0;border-radius:999px;padding:6px 12px;font:inherit;cursor:pointer}
  @media print{#mocknav{display:none}}`;
  document.head.appendChild(css);
}

injectStyles();
