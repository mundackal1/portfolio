/* =========================================================
   Alan Philip Babu — portfolio
   All site content lives in the data blocks below.
   ========================================================= */

const CONFIG = {
  // Split so the address isn't sitting in the HTML for scrapers.
  emailUser: 'alanbabu94',
  emailDomain: 'gmail.com',
  github: 'https://github.com/mundackal1',
  linkedin: 'https://www.linkedin.com/in/alan-mundackal/',
  cv: ''        // e.g. 'assets/Alan-Philip-Babu-CV.pdf' to show "Download CV"
};

/* ---------- Products ----------
   Keep these high level: what it does and why, never how. */
const PRODUCTS = [
  {
    id: 'room-iq',
    name: 'Room IQ',
    short: 'RM',
    color: '#7aa7ff',
    domain: 'Hospitality · Channel management',
    tagline: 'Hotel distribution and channel management for independent properties.',
    problem: 'Independent hotels sell rooms on several OTAs and their own channels at once. Keeping rates and availability in sync by hand leads to overbookings, lost revenue and long nights at the front desk.',
    does: [
      'One place to manage rates, inventory and availability across channels',
      'Reservations and booking calendar for day-to-day operations',
      'Front desk and housekeeping workflows built for small teams',
      'Daily view of occupancy and performance for owners'
    ],
    role: 'Product lead. I mapped the problems hotel owners and OTAs actually run into, turned them into requirements and workflows, then built and launched the product.',
    platforms: 'Web · Android',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    flow: ['Hotel team', 'Room IQ', 'Channels & OTAs', 'Reports'],
    viz: 'room'
  },
  {
    id: 'rates-iq',
    name: 'Rates IQ',
    short: 'RT',
    color: '#6ef2c4',
    domain: 'Hospitality · Revenue intelligence',
    tagline: 'Rate intelligence that helps hotels win more direct bookings.',
    problem: 'Hotels pay a large commission on every OTA booking and often find out too late that their prices have drifted out of line across channels or against competitors.',
    does: [
      'Tracks room rates across major booking channels',
      'Flags rate-parity issues before they cost bookings',
      'Shows competitor and market movement at a glance',
      'Sends owners and revenue managers a short daily summary'
    ],
    role: 'Product owner and builder, from a problem I dealt with daily as a hotel operations manager. I defined the product and the metrics, and built it through two generations (v1 → v2).',
    platforms: 'Web',
    stack: ['Python', 'FastAPI', 'Playwright', 'PostgreSQL', 'Docker', 'Next.js'],
    flow: ['Market data', 'Analysis', 'Dashboard', 'Alerts'],
    viz: 'rates'
  },
  {
    id: 'salon-iq',
    name: 'Salon IQ',
    short: 'SL',
    color: '#f58fc8',
    domain: 'Retail & services · Salon operations',
    tagline: 'The everyday operating system for salons and spas.',
    problem: 'Salons run appointments, billing, stock and staff pay across paper registers, WhatsApp and spreadsheets, so nothing adds up at the end of the day.',
    does: [
      'Appointments across stylists and chairs',
      'Quick billing with GST invoices and printed receipts',
      'Stock tracking with low-stock alerts',
      'Staff commissions, reports and customer reminders'
    ],
    role: 'Product owner and builder, covering discovery with salon owners, workflows, build and rollout on web and mobile.',
    platforms: 'Web · Android · iOS',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Capacitor'],
    flow: ['Front desk', 'Salon IQ', 'Receipt printer', 'Owner reports'],
    viz: 'salon'
  },
  {
    id: 'chit-iq',
    name: 'Chit IQ',
    short: 'CH',
    color: '#ffc56b',
    domain: 'Finance · Chit funds',
    tagline: 'End-to-end management for chit fund companies.',
    problem: 'Chit companies handle groups, auctions, collections and accounts in separate tools and reconcile them by hand, which is slow and error-prone.',
    does: [
      'Chit groups and subscriber management',
      'Auction day management',
      'Collections and dues tracking',
      'Accounting and financial reports, with a subscriber mobile app'
    ],
    role: 'Product owner and builder. I turned how the company actually runs into the product and prioritised features from staff and customer feedback.',
    platforms: 'Web · Android · iOS',
    stack: ['React', 'TypeScript', 'Vite', 'shadcn/ui', 'Supabase', 'PostgreSQL', 'Capacitor'],
    flow: ['Branch staff', 'Chit IQ', 'Accounts', 'Subscriber app'],
    viz: 'chit'
  },
  {
    id: 'fin-iq',
    name: 'Fin IQ',
    short: 'FN',
    color: '#b69cff',
    domain: 'Finance · Lending operations',
    tagline: 'Lending and finance operations in one system.',
    problem: 'Finance companies track loans, disbursements, repayments and accounts across registers and spreadsheets, with no single source of truth.',
    does: [
      'Loan accounts from application to closure',
      'Disbursement and repayment tracking',
      'Ledger, reconciliation and financial reports',
      'Role-based access for branch and head-office staff'
    ],
    role: 'Product owner and builder, covering requirements with the finance team, workflows, build and rollout.',
    platforms: 'Web',
    stack: ['React', 'TypeScript', 'PostgreSQL'],
    flow: ['Branch staff', 'Fin IQ', 'Ledger', 'Reports'],
    viz: 'fin'
  },
  {
    id: 'build-iq',
    name: 'Build IQ',
    short: 'BD',
    color: '#ff9f6b',
    domain: 'Construction · Site & materials',
    tagline: 'Material and site tracking for construction contractors.',
    problem: 'Contractors running several sites lose track of what was ordered, delivered and used, and find out about overruns after the money is spent.',
    does: [
      'Material inventory per site',
      'Purchase and delivery tracking',
      'Site-wise usage and cost reports',
      'Separate access for site engineers and the office'
    ],
    role: 'Product owner and builder, from discovery with contractors through workflows, build and launch.',
    platforms: 'Web',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    flow: ['Site engineers', 'Build IQ', 'Office', 'Reports'],
    viz: 'build'
  }
];

/* ---------- Client websites ---------- */
const SITES = [
  {
    name: 'El Paradiso',
    url: 'https://elparadiso.in',
    type: 'Homestay · Thekkady',
    color: '#5ad08a',
    desc: 'Website for our family homestay near Periyar Tiger Reserve, covering rooms, gallery, location and direct booking enquiries.',
    tags: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    name: 'Akshaya Chits',
    url: 'https://akshayachits.com',
    type: 'Chit fund company',
    color: '#ffc56b',
    desc: 'Company website presenting chit schemes, the company and its branches, with customer enquiries.',
    tags: ['Design', 'Build', 'Launch']
  },
  {
    name: 'Akshaya Fincorp',
    url: 'https://akshayafincorp.com',
    type: 'Finance company',
    color: '#7aa7ff',
    desc: 'Company website presenting loan products and the company, with customer enquiries.',
    tags: ['Design', 'Build', 'Launch']
  }
];

/* ---------- Toolbox ----------
   Tools in a group with `linked: true` highlight the products that use them. */
const TOOL_GROUPS = [
  {
    title: 'Build stack',
    note: 'What my products are built with.',
    linked: true,
    tools: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Supabase', 'PostgreSQL', 'Capacitor', 'Python', 'FastAPI', 'Playwright', 'Docker']
  },
  {
    title: 'AI-assisted development',
    note: 'How I go from idea to working product quickly.',
    tools: ['Claude Code', 'Lovable', 'Antigravity', 'Rapid prototyping', 'Workflow automation']
  },
  {
    title: 'Hospitality & distribution',
    note: 'Tools I used every day running hotels and managing OTA partners.',
    tools: ['OTA extranets', 'Channel managers', 'Djubo', 'Stayflexi', 'PMS', 'Rates & inventory', 'Reservations']
  },
  {
    title: 'Product & business',
    note: 'How I decide what to build.',
    tools: ['Product discovery', 'Requirements & workflows', 'Market & competitor analysis', 'CRM & pipeline', 'Google Workspace', 'MS Office']
  }
];

/* ---------- Experience ---------- */
const TIMELINE = [
  {
    when: 'Apr 2026 — Present',
    role: 'Product & Business Development Manager',
    where: 'Akshaya Group',
    points: [
      'Built and launched Room IQ, a hotel distribution and channel management platform.',
      'Built Chit IQ, Fin IQ and internal SaaS tools, and turned customer feedback into product and go-to-market priorities.',
      'Shipped quickly with AI-assisted development, rapid prototyping and workflow automation.'
    ]
  },
  {
    when: 'Jan 2025 — Apr 2026',
    role: 'Market Manager, Idukki',
    where: 'Cleartrip (Flipkart Travel)',
    points: [
      'Managed 380+ accommodation partners across Idukki and Kumarakom, covering pricing, availability, content and competitiveness.',
      'Owned the partner lifecycle from acquisition and onboarding through to business reviews and retention.',
      'Worked with product, policy and support teams on connectivity, inventory sync and reservation issues.'
    ]
  },
  {
    when: 'Jun 2016 — Dec 2024',
    role: 'Operations Manager',
    where: 'Hotel Elephant Route · 34 rooms',
    points: [
      'Ran pricing, inventory, occupancy and distribution across OTA and direct channels.',
      'Oversaw reservations, guest communication and service recovery.',
      'Used Djubo and Stayflexi daily for rates, inventory and OTA distribution.'
    ]
  },
  {
    when: 'Before 2016',
    role: 'Helped build and run the family homestay',
    where: 'El Paradiso · Thekkady',
    points: [
      'Helped develop El Paradiso into a homestay, from setting it up to welcoming the first guests.',
      'Set up and managed online listings, pricing and availability calendars.',
      'Learned first-hand what small hosts need: visibility, pricing, reviews and simple tools.'
    ]
  },
  {
    when: '2013 — 2016',
    role: 'B.Com, Travel & Tourism',
    where: 'Sacred Heart College, Kochi',
    points: []
  }
];

/* =========================================================
   Visuals — abstract product glyphs (no real UI is shown)
   ========================================================= */
function viz(kind) {
  const open = '<svg class="viz" viewBox="0 0 300 160" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">';
  const close = '</svg>';
  let body = '';

  if (kind === 'room') {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const on = (r * 4 + c) % 3 !== 0;
        body += `<rect x="${20 + c * 30}" y="${22 + r * 30}" width="22" height="22" rx="4" ${on ? 'fill="currentColor" fill-opacity=".25"' : 'stroke-opacity=".35"'} ${(r + c) % 5 === 0 ? 'class="blink"' : ''}/>`;
      }
    }
    const ys = [30, 64, 98, 132];
    ys.forEach((y, i) => {
      body += `<path class="draw" style="animation-delay:${i * 0.2}s" d="M150 80 C 190 80, 190 ${y}, 220 ${y}"/>`;
      body += `<rect x="222" y="${y - 10}" width="60" height="20" rx="10" fill="currentColor" fill-opacity=".12"/>`;
    });
    body += '<circle cx="150" cy="80" r="6" fill="currentColor"/>';
  }

  if (kind === 'rates') {
    body += '<rect x="20" y="62" width="260" height="30" fill="currentColor" fill-opacity=".07" stroke="none"/>';
    body += '<path class="draw" stroke-opacity=".4" d="M20 40 L70 52 L120 34 L170 70 L220 60 L280 76"/>';
    body += '<path class="draw" style="animation-delay:.3s" stroke-opacity=".6" d="M20 120 L70 108 L120 116 L170 92 L220 86 L280 80"/>';
    body += '<path class="draw" style="animation-delay:.6s" stroke-width="2.5" d="M20 90 L70 84 L120 88 L170 78 L220 74 L280 77"/>';
    body += '<circle class="blink" cx="170" cy="70" r="5" fill="currentColor"/>';
    body += '<line x1="20" y1="140" x2="280" y2="140" stroke-opacity=".2"/>';
  }

  if (kind === 'salon') {
    const blocks = [[0, 10, 40], [0, 60, 30], [1, 24, 50], [1, 90, 30], [2, 14, 30], [2, 56, 44], [3, 40, 36], [3, 100, 30]];
    for (let c = 0; c < 4; c++) body += `<line x1="${40 + c * 65}" y1="10" x2="${40 + c * 65}" y2="150" stroke-opacity=".15"/>`;
    blocks.forEach(([c, y, h], i) => {
      body += `<rect class="float" style="animation-delay:${i * 0.3}s" x="${18 + c * 65}" y="${y + 10}" width="44" height="${h}" rx="6" fill="currentColor" fill-opacity="${0.12 + (i % 3) * 0.08}"/>`;
    });
    body += '<line class="blink" x1="10" y1="78" x2="290" y2="78" stroke-width="2"/>';
  }

  if (kind === 'chit') {
    const cx = 150, cy = 80, r = 58, n = 12;
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2 - Math.PI / 2 + 0.04;
      const a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2 - 0.04;
      const p = (a, rr) => `${(cx + Math.cos(a) * rr).toFixed(1)} ${(cy + Math.sin(a) * rr).toFixed(1)}`;
      const win = i === 4;
      body += `<path ${win ? 'class="blink" fill="currentColor" fill-opacity=".5"' : 'fill="currentColor" fill-opacity=".1"'} d="M${p(a0, r)} A${r} ${r} 0 0 1 ${p(a1, r)} L${p(a1, r - 18)} A${r - 18} ${r - 18} 0 0 0 ${p(a0, r - 18)} Z"/>`;
    }
    body += `<text x="${cx}" y="${cy + 8}" text-anchor="middle" fill="currentColor" stroke="none" font-size="22" font-family="Space Grotesk, sans-serif">₹</text>`;
  }

  if (kind === 'fin') {
    const left = [34, 20, 46, 28], right = [40, 52, 36];
    let y = 16;
    left.forEach((w, i) => { body += `<rect class="float" style="animation-delay:${i * .25}s" x="${130 - w * 2}" y="${y}" width="${w * 2}" height="18" rx="4" fill="currentColor" fill-opacity=".18"/>`; y += 26; });
    y = 16;
    right.forEach((w, i) => { body += `<rect class="float" style="animation-delay:${i * .25 + .1}s" x="170" y="${y}" width="${w * 2}" height="18" rx="4" fill="currentColor" fill-opacity=".32"/>`; y += 26; });
    body += '<line x1="150" y1="10" x2="150" y2="122" stroke-opacity=".3"/>';
    body += '<line x1="40" y1="136" x2="260" y2="136" stroke-width="2"/><line x1="40" y1="144" x2="260" y2="144" stroke-width="2"/>';
  }

  if (kind === 'build') {
    const bars = [[0, 20, 140], [1, 60, 160], [2, 40, 110], [3, 100, 120]];
    bars.forEach(([r, x, w], i) => {
      body += `<rect x="20" y="${22 + r * 30}" width="260" height="16" rx="4" stroke-opacity=".12"/>`;
      body += `<rect class="draw" style="animation-delay:${i * .2}s" x="${x}" y="${22 + r * 30}" width="${w}" height="16" rx="4" fill="currentColor" fill-opacity=".22"/>`;
    });
    body += '<line class="blink" x1="190" y1="12" x2="190" y2="148" stroke-dasharray="4 4"/>';
  }

  return open + body + close;
}

function siteViz(color) {
  return `<svg viewBox="0 0 300 150" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><linearGradient id="g${color.slice(1)}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${color}" stop-opacity=".35"/><stop offset="1" stop-color="${color}" stop-opacity=".05"/>
    </linearGradient></defs>
    <rect width="300" height="150" fill="url(#g${color.slice(1)})"/>
    <rect x="18" y="14" width="40" height="6" rx="3" fill="${color}" opacity=".8"/>
    <rect x="190" y="14" width="22" height="6" rx="3" fill="#fff" opacity=".2"/>
    <rect x="218" y="14" width="22" height="6" rx="3" fill="#fff" opacity=".2"/>
    <rect x="246" y="14" width="36" height="8" rx="4" fill="${color}" opacity=".7"/>
    <rect x="18" y="46" width="150" height="12" rx="4" fill="#fff" opacity=".75"/>
    <rect x="18" y="64" width="110" height="12" rx="4" fill="#fff" opacity=".45"/>
    <rect x="18" y="88" width="56" height="16" rx="8" fill="${color}"/>
    <rect x="190" y="44" width="92" height="62" rx="8" fill="#fff" opacity=".08"/>
    <rect x="18" y="120" width="82" height="40" rx="6" fill="#fff" opacity=".06"/>
    <rect x="109" y="120" width="82" height="40" rx="6" fill="#fff" opacity=".06"/>
    <rect x="200" y="120" width="82" height="40" rx="6" fill="#fff" opacity=".06"/>
  </svg>`;
}


/* =========================================================
   Render
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const roomNo = p => 101 + PRODUCTS.indexOf(p);

function renderMarquee() {
  const words = ['Hospitality', 'Product', 'Distribution', 'SaaS', 'Revenue', 'Operations'];
  $('#marquee').innerHTML = [...words, ...words].map(w => `<span>${w} ·</span>`).join('');
}

function renderCorridor() {
  $('#corridor').innerHTML = PRODUCTS.map(p => `
    <div class="room reveal" style="--c:${p.color}">
      <div class="door-frame" style="--c:${p.color}">
        <div class="door-inside">${viz(p.viz)}</div>
        <div class="door">
          <span class="plate">${roomNo(p)}</span>
          <span class="reader"></span>
          <span class="handle"></span>
          <span class="hanger">${esc(p.name)}</span>
        </div>
        <button class="door-btn" data-open="${p.id}" aria-label="Open room ${roomNo(p)}: ${p.name}"></button>
      </div>
      <span class="threshold"></span>
      <div class="room-plaque">
        <h3>${p.name}</h3>
        <span class="room-type mono">${esc(p.domain)}</span>
        <p>${esc(p.tagline)}</p>
      </div>
    </div>`).join('');

  // Keyboard focus swings the door open the same way hover does.
  $$('.door-btn').forEach(b => {
    const room = b.closest('.room');
    b.addEventListener('focus', () => room.classList.add('focus'));
    b.addEventListener('blur', () => room.classList.remove('focus'));
  });
}

function renderGallery() {
  $('#gallery-wall').innerHTML = SITES.map(s => {
    const host = s.url.replace(/^https?:\/\//, '');
    return `
    <figure class="artwork reveal">
      <div class="frame"><div class="canvas">
        <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="browser-url">${host}</span></div>
        <div class="browser-view">${siteViz(s.color)}</div>
      </div></div>
      <figcaption class="museum-plaque">
        <span class="site-type mono">${esc(s.type)}</span>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.desc)}</p>
        <span class="chips">${s.tags.map(t => `<span class="chip">${t}</span>`).join('')}</span>
        <a class="site-link" href="${s.url}" target="_blank" rel="noopener">Visit ${host} ↗</a>
      </figcaption>
    </figure>`;
  }).join('');
}

function renderRack() {
  $('#rack').innerHTML = TOOL_GROUPS.map(g => `
    <div class="rack-row reveal">
      <h3>${g.title}</h3>
      <p>${g.note}</p>
      <div class="hooks">${g.tools.map(t => g.linked
        ? `<button class="key" data-linked data-tool="${esc(t)}">${t}</button>`
        : `<span class="key">${t}</span>`).join('')}</div>
    </div>`).join('');

  const show = tool => {
    $$('.key.on').forEach(k => k.classList.remove('on'));
    $(`.key[data-tool="${CSS.escape(tool)}"]`)?.classList.add('on');
    const used = PRODUCTS.filter(p => p.stack.includes(tool));
    $('#desk-q').innerHTML = `Which rooms use <b>${esc(tool)}</b>?`;
    $('#desk-rooms').innerHTML = used.length
      ? used.map(p => `<li><span class="rn">${roomNo(p)}</span>${p.name}</li>`).join('')
      : '<li class="empty">None of the suites, yet.</li>';
  };
  $$('.key[data-linked]').forEach(k => {
    k.addEventListener('mouseenter', () => show(k.dataset.tool));
    k.addEventListener('focus', () => show(k.dataset.tool));
    k.addEventListener('click', () => show(k.dataset.tool));
  });
  show('Supabase');
}

function renderLedger() {
  $('#ledger').innerHTML = `
    <li class="ledger-head mono" aria-hidden="true"><span>Dates</span><span>Stay</span><span>Notes</span></li>
    ${TIMELINE.map((t, i) => `
    <li class="entry reveal${i === 0 ? ' current' : ''}">
      <span class="when mono">${t.when}</span>
      <div><h3>${esc(t.role)}</h3><p class="where">${esc(t.where)}</p></div>
      ${t.points.length ? `<ul>${t.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '<span></span>'}
    </li>`).join('')}`;
}

function renderContact() {
  const email = `${CONFIG.emailUser}@${CONFIG.emailDomain}`;
  $$('[data-email]').forEach(a => { a.href = `mailto:${email}`; });
  $$('[data-email-text]').forEach(el => { el.textContent = email; });
  $$('[data-github]').forEach(a => { a.href = CONFIG.github; });
  $$('[data-linkedin]').forEach(a => { if (CONFIG.linkedin) { a.href = CONFIG.linkedin; a.hidden = false; } });
  $$('[data-cv]').forEach(a => { if (CONFIG.cv) { a.href = CONFIG.cv; a.setAttribute('download', ''); a.hidden = false; } });
  $('#year').textContent = new Date().getFullYear();
}

/* =========================================================
   Lift — floor indicator that follows the scroll
   ========================================================= */
function initLift() {
  const lift = $('#lift');
  const floors = $$('[data-floor]');
  const order = floors.map(f => f.dataset.floor);
  $('#lift-buttons').innerHTML = floors.slice().reverse().map(f => `
    <li><button class="lift-btn" data-goto="${f.id}" aria-label="${f.dataset.floorName}">
      ${f.dataset.floor}<span class="tip">${f.dataset.floorName}</span>
    </button></li>`).join('');

  const display = $('#lift-display');
  const floorEl = $('#lift-floor');
  let current = 'L';

  const setFloor = f => {
    if (f.dataset.floor === current) return;
    const goingDown = order.indexOf(f.dataset.floor) > order.indexOf(current);
    current = f.dataset.floor;
    floorEl.textContent = current;
    $('#lift-label').textContent = f.dataset.floorName;
    $('#lift-arrow').classList.toggle('down', goingDown);
    floorEl.classList.remove('ding'); void floorEl.offsetWidth; floorEl.classList.add('ding');
    $$('.lift-btn').forEach(b => b.classList.toggle('on', b.dataset.goto === f.id));
  };
  $$('.lift-btn')[floors.length - 1].classList.add('on');

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) setFloor(en.target); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  floors.forEach(f => io.observe(f));

  lift.addEventListener('click', e => {
    const b = e.target.closest('.lift-btn');
    if (b) { $('#' + b.dataset.goto).scrollIntoView(); lift.classList.remove('open'); display.setAttribute('aria-expanded', 'false'); }
  });
  display.addEventListener('click', () => {
    const open = lift.classList.toggle('open');
    display.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', e => {
    if (!lift.contains(e.target)) { lift.classList.remove('open'); display.setAttribute('aria-expanded', 'false'); }
  });
}

/* =========================================================
   Room brief (drawer) — deep-linkable via #/work/<id>
   ========================================================= */
const brief = $('#brief');
const briefPanel = $('.brief-panel', brief);
let lastFocus = null;
let pushedEntry = false;

function briefHTML(p) {
  const i = PRODUCTS.indexOf(p);
  const prev = PRODUCTS[(i - 1 + PRODUCTS.length) % PRODUCTS.length];
  const next = PRODUCTS[(i + 1) % PRODUCTS.length];
  return `
    <div class="brief-room"><span class="plate">${roomNo(p)}</span><span class="brief-domain mono">${esc(p.domain)}</span></div>
    <h2 id="brief-title">${p.name}</h2>
    <p class="brief-tag">${esc(p.tagline)}</p>
    <div class="brief-visual">${viz(p.viz)}</div>

    <section class="brief-section"><h3>The problem</h3><p>${esc(p.problem)}</p></section>
    <section class="brief-section"><h3>What it does</h3>
      <ul class="brief-list">${p.does.map(d => `<li>${esc(d)}</li>`).join('')}</ul>
    </section>
    <section class="brief-section"><h3>How it fits together</h3>
      <div class="flow">${p.flow.map((f, k) => `${k ? '<span class="flow-arrow">→</span>' : ''}<span class="flow-node">${esc(f)}</span>`).join('')}</div>
    </section>
    <section class="brief-section">
      <dl class="brief-meta">
        <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Platforms</dt><dd>${esc(p.platforms)}</dd></div>
      </dl>
    </section>
    <section class="brief-section"><h3>Built with</h3>
      <div class="chips">${p.stack.map(t => `<span class="chip">${t}</span>`).join('')}</div>
    </section>

    <div class="brief-note">
      <p>I'm happy to give a live demo and walk through the product on a call.</p>
      <a class="btn btn-gold btn-small" href="#rooftop" data-close>Request a demo</a>
    </div>
    <div class="brief-nav">
      <button data-open="${prev.id}">← ${roomNo(prev)} ${prev.name}</button>
      <button data-open="${next.id}">${roomNo(next)} ${next.name} →</button>
    </div>`;
}

function openBrief(id, push = true) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  if (brief.hidden) lastFocus = document.activeElement;
  briefPanel.style.setProperty('--c', p.color);
  $('#brief-body').innerHTML = briefHTML(p);
  brief.hidden = false;
  document.body.classList.add('locked');
  briefPanel.scrollTop = 0;
  briefPanel.focus();
  if (push && location.hash !== `#/work/${id}`) {
    // First open adds a history entry so Back closes the brief; switching rooms replaces it.
    if (pushedEntry) history.replaceState(null, '', `#/work/${id}`);
    else { history.pushState(null, '', `#/work/${id}`); pushedEntry = true; }
  }
}

function closeBrief(push = true) {
  if (brief.hidden) return;
  brief.hidden = true;
  document.body.classList.remove('locked');
  if (push && location.hash.startsWith('#/work/')) {
    if (pushedEntry) history.back();
    else history.replaceState(null, '', location.pathname + location.search);
  }
  pushedEntry = false;
  $$('.room.opening').forEach(r => r.classList.remove('opening'));
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

function syncRoute() {
  const m = location.hash.match(/^#\/work\/([\w-]+)/);
  if (m) openBrief(m[1], false); else closeBrief(false);
}

document.addEventListener('click', e => {
  const opener = e.target.closest('[data-open]');
  if (opener) {
    e.preventDefault();
    const room = opener.closest('.room');
    // Swing the door fully open before the brief slides in.
    if (room && !reduceMotion) {
      room.classList.add('opening');
      setTimeout(() => openBrief(opener.dataset.open), 420);
    } else {
      openBrief(opener.dataset.open);
    }
    return;
  }
  const closer = e.target.closest('[data-close]');
  if (closer && !brief.hidden) {
    const href = closer.getAttribute('href');
    closeBrief();
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      $(href)?.scrollIntoView();
    }
  }
});
document.addEventListener('keydown', e => {
  if (brief.hidden) return;
  if (e.key === 'Escape') closeBrief();
  if (e.key === 'Tab') {
    const f = $$('a, button', briefPanel);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
window.addEventListener('popstate', syncRoute);
window.addEventListener('hashchange', syncRoute);

/* =========================================================
   Lobby effects
   ========================================================= */
function initCheckin() {
  const el = $('#checkin');
  let seen = false;
  try { seen = sessionStorage.getItem('checked-in') === '1'; } catch (_) { /* storage blocked */ }
  if (reduceMotion || seen || location.hash.startsWith('#/work/')) { el.classList.add('done'); return; }
  try { sessionStorage.setItem('checked-in', '1'); } catch (_) { /* storage blocked */ }
  const open = () => {
    if (el.classList.contains('open')) return;
    el.classList.add('open');
    setTimeout(() => el.classList.add('done'), 1050);
  };
  setTimeout(open, 1300);
  el.addEventListener('click', open);
}

function initKeycard() {
  const card = $('#keycard');
  const stage = $('.lobby');
  const light = $('#lobby-light');
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;

  stage.addEventListener('pointermove', e => {
    const s = stage.getBoundingClientRect();
    light.style.transform = `translate3d(${e.clientX - s.left - 320}px, ${e.clientY - s.top - 320}px, 0)`;
    const r = card.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (s.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (s.height / 2);
    card.style.transform = `rotateY(${(dx * 14).toFixed(2)}deg) rotateX(${(-dy * 12).toFixed(2)}deg)`;
    card.style.setProperty('--gx', `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty('--gy', `${((e.clientY - r.top) / r.height) * 100}%`);
    $$('.glare', card).forEach(g => {
      g.style.setProperty('--gx', `${30 + ((e.clientX - r.left) / r.width) * 40}%`);
      g.style.setProperty('--gy', `${30 + ((e.clientY - r.top) / r.height) * 40}%`);
    });
  });
  stage.addEventListener('pointerleave', () => { card.style.transform = ''; });
}

function initSky() {
  const canvas = $('#sky');
  const ctx = canvas.getContext('2d');
  let w, h, stars = [], raf = null;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: Math.round((w * h) / 5000) }, () => ({
      x: Math.random() * w, y: Math.random() * h * 0.75,
      r: Math.random() * 1.2 + 0.2, p: Math.random() * Math.PI * 2, s: 0.5 + Math.random() * 1.5
    }));
  };
  const frame = t => {
    ctx.clearRect(0, 0, w, h);
    for (const st of stars) {
      const a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(st.p + (t / 1000) * st.s));
      ctx.fillStyle = `rgba(255, 244, 220, ${a * (1 - st.y / h)})`;
      ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2); ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  };
  resize();
  window.addEventListener('resize', resize);
  if (reduceMotion) { frame(0); cancelAnimationFrame(raf); return; }
  new IntersectionObserver(([en]) => {
    if (en.isIntersecting && !raf) raf = requestAnimationFrame(frame);
    else if (!en.isIntersecting && raf) { cancelAnimationFrame(raf); raf = null; }
  }).observe(canvas);
}

function initReveal() {
  const els = $$('.reveal, .floor-head, .meeting, .itinerary, .reservation');
  if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

function initNav() {
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Boot ---------- */
renderMarquee();
renderCorridor();
renderGallery();
renderRack();
renderLedger();
renderContact();
initCheckin();
initLift();
initKeycard();
initSky();
initReveal();
initNav();
syncRoute();
