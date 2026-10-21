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
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const glyph = p => `<span class="suite-glyph" style="--c:${p.color}">${p.short}</span>`;

function renderSuite() {
  $('#suite-list').innerHTML = PRODUCTS.map(p => `
    <li><button class="suite-item" data-open="${p.id}">
      ${glyph(p)}
      <span><span class="suite-name">${p.name}</span><span class="suite-domain">${esc(p.domain)}</span></span>
      <span class="suite-arrow">→</span>
    </button></li>`).join('');
}

function renderWork() {
  $('#work-grid').innerHTML = PRODUCTS.map(p => `
    <button class="card reveal" style="--c:${p.color}" data-open="${p.id}" aria-label="Open ${p.name} brief">
      <div class="card-visual" style="color:${p.color}">${viz(p.viz)}</div>
      <div class="card-body">
        <span class="card-domain mono">${esc(p.domain)}</span>
        <h3>${p.name}</h3>
        <p>${esc(p.tagline)}</p>
        <div class="card-foot">
          <span class="chips">${p.stack.slice(0, 3).map(t => `<span class="chip">${t}</span>`).join('')}</span>
          <span class="card-open">Brief →</span>
        </div>
      </div>
    </button>`).join('');
}

function renderSites() {
  $('#site-grid').innerHTML = SITES.map(s => {
    const host = s.url.replace(/^https?:\/\//, '');
    return `
    <article class="site reveal">
      <div class="browser">
        <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="browser-url">${host}</span></div>
        <div class="browser-view">${siteViz(s.color)}</div>
      </div>
      <div class="site-body">
        <span class="site-type mono">${esc(s.type)}</span>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.desc)}</p>
        <span class="chips">${s.tags.map(t => `<span class="chip">${t}</span>`).join('')}</span>
        <a class="site-link" href="${s.url}" target="_blank" rel="noopener">Visit ${host} ↗</a>
      </div>
    </article>`;
  }).join('');
}

function renderToolbox() {
  $('#tool-groups').innerHTML = TOOL_GROUPS.map(g => `
    <div class="tool-group reveal">
      <h3>${g.title}</h3>
      <p>${g.note}</p>
      <div class="tools">${g.tools.map(t => g.linked
        ? `<button class="tool" data-linked data-tool="${esc(t)}">${t}</button>`
        : `<span class="tool">${t}</span>`).join('')}</div>
    </div>`).join('');

  const list = $('#tool-usage-list');
  const hint = $('#tool-usage-hint');
  const show = tool => {
    document.querySelectorAll('.tool.on').forEach(t => t.classList.remove('on'));
    const btn = document.querySelector(`.tool[data-tool="${CSS.escape(tool)}"]`);
    if (btn) btn.classList.add('on');
    const used = PRODUCTS.filter(p => p.stack.includes(tool));
    list.innerHTML = used.map(p => `<li>${glyph(p)}${p.name}</li>`).join('');
    hint.textContent = used.length ? '' : 'Select a build tool';
  };
  document.querySelectorAll('.tool[data-linked]').forEach(t => {
    t.addEventListener('mouseenter', () => show(t.dataset.tool));
    t.addEventListener('focus', () => show(t.dataset.tool));
    t.addEventListener('click', () => show(t.dataset.tool));
  });
  show('Supabase');
}

function renderTimeline() {
  $('#timeline').innerHTML = TIMELINE.map(t => `
    <li class="reveal">
      <span class="when mono">${t.when}</span>
      <div>
        <h3>${esc(t.role)}</h3>
        <p class="where">${esc(t.where)}</p>
        ${t.points.length ? `<ul>${t.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      </div>
    </li>`).join('');
}

function renderContact() {
  const email = `${CONFIG.emailUser}@${CONFIG.emailDomain}`;
  document.querySelectorAll('[data-email]').forEach(a => { a.href = `mailto:${email}`; });
  document.querySelectorAll('[data-email-text]').forEach(el => { el.textContent = email; });
  document.querySelectorAll('[data-github]').forEach(a => { a.href = CONFIG.github; });
  document.querySelectorAll('[data-linkedin]').forEach(a => {
    if (CONFIG.linkedin) { a.href = CONFIG.linkedin; a.hidden = false; }
  });
  document.querySelectorAll('[data-cv]').forEach(a => {
    if (CONFIG.cv) { a.href = CONFIG.cv; a.setAttribute('download', ''); a.hidden = false; }
  });
  $('#year').textContent = new Date().getFullYear();
}

/* =========================================================
   Product brief (drawer) — deep-linkable via #/work/<id>
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
    <span class="brief-domain mono">${esc(p.domain)}</span>
    <h2 id="brief-title">${p.name}</h2>
    <p class="brief-tag">${esc(p.tagline)}</p>
    <div class="brief-visual" style="color:${p.color}">${viz(p.viz)}</div>

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
      <a class="btn btn-accent btn-small" href="#contact" data-close>Request a demo</a>
    </div>
    <div class="brief-nav">
      <button data-open="${prev.id}">← ${prev.name}</button>
      <button data-open="${next.id}">${next.name} →</button>
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
    // First open adds a history entry so Back closes the brief; switching products replaces it.
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
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

function syncRoute() {
  const m = location.hash.match(/^#\/work\/([\w-]+)/);
  if (m) openBrief(m[1], false); else closeBrief(false);
}

document.addEventListener('click', e => {
  const opener = e.target.closest('[data-open]');
  if (opener) { e.preventDefault(); openBrief(opener.dataset.open); return; }
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
    const f = [...briefPanel.querySelectorAll('a, button')];
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
window.addEventListener('popstate', syncRoute);
window.addEventListener('hashchange', syncRoute);

/* =========================================================
   Ambient effects
   ========================================================= */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  const els = document.querySelectorAll('.reveal, .section-head, .collab-card, .process, .contact-card');
  if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

function initCardGlow() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

function initNav() {
  const nav = $('#nav');
  const links = [...document.querySelectorAll('.nav-links a')];
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(a => { const s = $(a.getAttribute('href')); if (s) io.observe(s); });
}

/* Hero field — drifting nodes that link up and lean toward the cursor */
function initField() {
  const canvas = $('#field');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const colors = PRODUCTS.map(p => p.color);
  let w, h, dpr, nodes = [], raf = null;
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(90, (w * h) / 16000));
    nodes = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: i < colors.length ? 3 : 1.2 + Math.random() * 1.2,
      c: i < colors.length ? colors[i] : null
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    const link = 130;
    for (const n of nodes) {
      const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
      if (d < 180 && d > 1) { n.vx += (dx / d) * 0.012; n.vy += (dy / d) * 0.012; }
      n.vx *= 0.985; n.vy *= 0.985;
      n.vx += (Math.random() - 0.5) * 0.01; n.vy += (Math.random() - 0.5) * 0.01;
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = w + 20; if (n.x > w + 20) n.x = -20;
      if (n.y < -20) n.y = h + 20; if (n.y > h + 20) n.y = -20;
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < link) {
          ctx.strokeStyle = `rgba(160, 200, 220, ${0.14 * (1 - d / link)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      if (n.c) { ctx.fillStyle = n.c; ctx.shadowColor = n.c; ctx.shadowBlur = 14; }
      else { ctx.fillStyle = 'rgba(200, 215, 230, 0.45)'; ctx.shadowBlur = 0; }
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    raf = requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener('resize', resize);
  const hero = canvas.parentElement;
  hero.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });

  if (reduceMotion) { frame(); cancelAnimationFrame(raf); return; }
  // Only animate while the hero is on screen.
  new IntersectionObserver(([en]) => {
    if (en.isIntersecting && !raf) raf = requestAnimationFrame(frame);
    else if (!en.isIntersecting && raf) { cancelAnimationFrame(raf); raf = null; }
  }).observe(hero);
}

/* ---------- Boot ---------- */
renderSuite();
renderWork();
renderSites();
renderToolbox();
renderTimeline();
renderContact();
initReveal();
initCardGlow();
initNav();
initField();
syncRoute();
