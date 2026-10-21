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
    headline: 'Overbookings across every OTA',
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
    headline: 'Prices drifting out of parity',
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
    headline: 'Salon bills on paper and WhatsApp',
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
    headline: 'Chit auctions reconciled by hand',
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
    headline: 'Loans tracked in spreadsheets',
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
    headline: 'Materials lost between sites',
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
    desc: 'Website for our family homestay near Periyar Tiger Reserve, covering rooms, gallery, location and direct booking enquiries.',
    tags: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    name: 'Akshaya Chits',
    url: 'https://akshayachits.com',
    type: 'Chit fund company',
    desc: 'Company website presenting chit schemes, the company and its branches, with customer enquiries.',
    tags: ['Design', 'Build', 'Launch']
  },
  {
    name: 'Akshaya Fincorp',
    url: 'https://akshayafincorp.com',
    type: 'Finance company',
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


function siteViz() {
  // Wireframe thumbnail drawn in the current text colour.
  return `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" aria-hidden="true">
    <g stroke-opacity=".35">
      <line x1="0" y1="26" x2="320" y2="26"/>
      <rect x="20" y="10" width="44" height="6" rx="3" fill="currentColor" fill-opacity=".5" stroke="none"/>
      <rect x="196" y="10" width="26" height="6" rx="3" fill="currentColor" fill-opacity=".2" stroke="none"/>
      <rect x="230" y="10" width="26" height="6" rx="3" fill="currentColor" fill-opacity=".2" stroke="none"/>
      <rect x="264" y="8" width="38" height="10" rx="5"/>
    </g>
    <rect x="20" y="52" width="160" height="14" rx="2" fill="currentColor" fill-opacity=".75" stroke="none"/>
    <rect x="20" y="72" width="118" height="14" rx="2" fill="currentColor" fill-opacity=".45" stroke="none"/>
    <rect x="20" y="98" width="62" height="18" rx="9" fill="currentColor" fill-opacity=".85" stroke="none"/>
    <rect x="200" y="48" width="100" height="72" rx="2" stroke-opacity=".35"/>
    <path d="M200 120 L236 88 L260 106 L282 82 L300 98" stroke-opacity=".35"/>
    <g stroke-opacity=".3">
      <rect x="20" y="138" width="86" height="48" rx="2"/>
      <rect x="117" y="138" width="86" height="48" rx="2"/>
      <rect x="214" y="138" width="86" height="48" rx="2"/>
    </g>
  </svg>`;
}

/* =========================================================
   Render
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const listJoin = arr => arr.length < 2 ? arr.join('') : `${arr.slice(0, -1).join(', ')} and ${arr[arr.length - 1]}`;

function renderFeatures() {
  // Lead story, two halves, then three thirds.
  const size = i => (i === 0 ? 'lead' : i < 3 ? 'half' : '');
  $('#feature-list').innerHTML = PRODUCTS.map((p, i) => `
    <article class="feature ${size(i)} reveal" data-open="${p.id}" tabindex="0" role="button" aria-label="Read about ${p.name}">
      <div class="feature-art">${viz(p.viz)}</div>
      <div class="feature-text">
        <p class="kicker">No. ${i + 1} · ${esc(p.domain)}</p>
        <h3>${p.name}</h3>
        <p class="feature-dek">${esc(p.tagline)}</p>
        ${i === 0 ? `<p class="feature-problem">${esc(p.problem)}</p>` : ''}
        <span class="read">Read the story</span>
      </div>
    </article>`).join('');
}

function renderSites() {
  $('#site-list').innerHTML = SITES.map(s => {
    const host = s.url.replace(/^https?:\/\//, '');
    return `
    <article class="site reveal">
      <a class="site-thumb" href="${s.url}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">${siteViz()}</a>
      <p class="kicker">${esc(s.type)}</p>
      <h3>${esc(s.name)}</h3>
      <p>${esc(s.desc)}</p>
      <a class="site-link" href="${s.url}" target="_blank" rel="noopener">${host} ↗</a>
    </article>`;
  }).join('');
}

function renderKit() {
  $('#kit-list').innerHTML = TOOL_GROUPS.map(g => `
    <div class="kit-group reveal">
      <h3>${g.title}</h3>
      <p>${g.note}</p>
      <ul>${g.tools.map(t => g.linked
        ? `<li><button class="tool-btn" data-tool="${esc(t)}">${t}</button></li>`
        : `<li>${t}</li>`).join('')}</ul>
    </div>`).join('');

  const note = $('#kit-note');
  const show = tool => {
    $$('.tool-btn.on').forEach(b => b.classList.remove('on'));
    $(`.tool-btn[data-tool="${CSS.escape(tool)}"]`)?.classList.add('on');
    const used = PRODUCTS.filter(p => p.stack.includes(tool)).map(p => p.name);
    note.innerHTML = `<b>${esc(tool)}</b> is used in ${used.length ? listJoin(used) : 'none of the products yet'}.`;
  };
  $$('.tool-btn').forEach(b => {
    b.addEventListener('mouseenter', () => show(b.dataset.tool));
    b.addEventListener('focus', () => show(b.dataset.tool));
    b.addEventListener('click', () => show(b.dataset.tool));
  });
}

function renderStory() {
  $('#story-list').innerHTML = TIMELINE.map(t => `
    <li class="reveal">
      <span class="when">${t.when}</span>
      <div><h3>${esc(t.role)}</h3><p class="where">${esc(t.where)}</p></div>
      ${t.points.length ? `<ul>${t.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
    </li>`).join('');
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
   Cover — problem → product headline swap
   ========================================================= */
function initSwap() {
  if (reduceMotion) return;
  const problem = $('#swap-problem');
  const product = $('#swap-product');
  let i = 0;
  setInterval(() => {
    if (document.hidden) return;
    i = (i + 1) % PRODUCTS.length;
    problem.classList.add('out');
    product.classList.add('out');
    setTimeout(() => {
      problem.textContent = PRODUCTS[i].headline;
      product.textContent = `${PRODUCTS[i].name}.`;
      problem.classList.remove('out');
      product.classList.remove('out');
    }, 450);
  }, 3800);
}

/* =========================================================
   Feature article (drawer) — deep-linkable via #/work/<id>
   ========================================================= */
const panel = $('#article');
const panelBody = $('.article-panel', panel);
let lastFocus = null;
let pushedEntry = false;

function articleHTML(p) {
  const i = PRODUCTS.indexOf(p);
  const prev = PRODUCTS[(i - 1 + PRODUCTS.length) % PRODUCTS.length];
  const next = PRODUCTS[(i + 1) % PRODUCTS.length];
  return `
    <p class="kicker">No. ${i + 1} · ${esc(p.domain)}</p>
    <h2 id="article-title">${p.name}</h2>
    <p class="article-dek">${esc(p.tagline)}</p>
    <p class="article-byline">By Alan Philip Babu · ${esc(p.platforms)}</p>
    <div class="article-art">${viz(p.viz)}</div>
    <div class="article-body">
      <p class="dropcap">${esc(p.problem)}</p>
      <h3>What it does</h3>
      <ul>${p.does.map(d => `<li>${esc(d)}</li>`).join('')}</ul>
      <h3>How it fits together</h3>
      <p class="flow">${p.flow.map(f => esc(f)).join(' <i>→</i> ')}</p>
    </div>
    <aside class="factbox">
      <div class="wide"><span class="label">My role</span><p>${esc(p.role)}</p></div>
      <div><span class="label">Platforms</span><p>${esc(p.platforms)}</p></div>
      <div><span class="label">Built with</span><p>${p.stack.join(', ')}</p></div>
    </aside>
    <div class="article-cta">
      <p>Want to see it working? I'm happy to give a live demo on a call.</p>
      <a class="btn btn-ink" href="#contact" data-close>Request a demo</a>
    </div>
    <nav class="article-nav" aria-label="More products">
      <button data-open="${prev.id}">← ${prev.name}</button>
      <button data-open="${next.id}">${next.name} →</button>
    </nav>`;
}

function openArticle(id, push = true) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  if (panel.hidden) lastFocus = document.activeElement;
  $('#article-body').innerHTML = articleHTML(p);
  panel.hidden = false;
  document.body.classList.add('locked');
  panelBody.scrollTop = 0;
  panelBody.focus();
  if (push && location.hash !== `#/work/${id}`) {
    // First open adds a history entry so Back closes the article; switching products replaces it.
    if (pushedEntry) history.replaceState(null, '', `#/work/${id}`);
    else { history.pushState(null, '', `#/work/${id}`); pushedEntry = true; }
  }
}

function closeArticle(push = true) {
  if (panel.hidden) return;
  panel.hidden = true;
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
  if (m) openArticle(m[1], false); else closeArticle(false);
}

document.addEventListener('click', e => {
  const opener = e.target.closest('[data-open]');
  if (opener) { e.preventDefault(); openArticle(opener.dataset.open); return; }
  const closer = e.target.closest('[data-close]');
  if (closer && !panel.hidden) {
    const href = closer.getAttribute('href');
    closeArticle();
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      $(href)?.scrollIntoView();
    }
  }
});
document.addEventListener('keydown', e => {
  const card = e.target.closest?.('.feature[data-open]');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openArticle(card.dataset.open); return; }
  if (panel.hidden) return;
  if (e.key === 'Escape') closeArticle();
  if (e.key === 'Tab') {
    const f = $$('a, button', panelBody);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
window.addEventListener('popstate', syncRoute);
window.addEventListener('hashchange', syncRoute);

/* =========================================================
   Page effects
   ========================================================= */
function initReveal() {
  const els = $$('.reveal, .section-head, .pull, .ways article, .letter');
  if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

function initNav() {
  const links = $$('.mast-nav a');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(a => { const s = $(a.getAttribute('href')); if (s) io.observe(s); });
}

/* ---------- Boot ---------- */
renderFeatures();
renderSites();
renderKit();
renderStory();
renderContact();
initSwap();
initReveal();
initNav();
syncRoute();
