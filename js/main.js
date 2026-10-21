/**
 * Alan Philip (@mundackal1) Portfolio — 3D Premium Animated Engine
 * Featuring all 16 production repositories across the IQ Ecosystem & Affiliates
 * Powered by Three.js WebGL, Web Audio API Synthesizer & Modern Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccentPicker();
  initCustomCursor();
  initWebAudio();
  initThreeJSScene();
  initTypewriter();
  initCounters();
  init3DTilt();
  initCardGlare();
  initTerminal();
  initProjectFilters();
  initAllReposDirectory();
  initProjectModals();
  initSkillBars();
  initContactForm();
  initNavbarScroll();
});

/* ==========================================================================
   1. DYNAMIC THEME ACCENT PICKER
   ========================================================================== */
function initAccentPicker() {
  const dots = document.querySelectorAll('.accent-dot');
  const savedAccent = localStorage.getItem('ap-portfolio-accent') || 'cyan';
  
  document.body.setAttribute('data-accent', savedAccent);
  dots.forEach(dot => {
    if (dot.getAttribute('data-theme') === savedAccent) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }

    dot.addEventListener('click', () => {
      const theme = dot.getAttribute('data-theme');
      document.body.setAttribute('data-accent', theme);
      localStorage.setItem('ap-portfolio-accent', theme);
      
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      showToast('Palette Switched', `Active accent glow: ${theme.toUpperCase()}`, '🎨');
      playTone(440, 0.08, 'sine');

      if (window.update3DMaterialColor) {
        window.update3DMaterialColor(theme);
      }
    });
  });
}

/* ==========================================================================
   2. CUSTOM INTERACTIVE CURSOR & FOLLOWER
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const glow = document.getElementById('cursor-glow');
  if (!dot || !glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;
    glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  const hoverTargets = document.querySelectorAll('a, button, .project-card, .terminal-quick-chip, .tech-chip, .geom-btn, .repo-card-mini');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      playTone(587.33, 0.04, 'triangle', 0.03);
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

/* ==========================================================================
   3. WEB AUDIO API SYNTHESIZER
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initWebAudio() {
  const btn = document.getElementById('sound-toggle');
  const label = document.getElementById('sound-label');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      btn.classList.add('sound-on');
      label.textContent = 'AUDIO: ON';
      showToast('Synthesizer Active', 'Interactive audio soundscapes enabled', '🔊');
      playChord([523.25, 659.25, 783.99]);
    } else {
      btn.classList.remove('sound-on');
      label.textContent = 'AUDIO: OFF';
      showToast('Audio Muted', 'Sound effects disabled', '🔇');
    }
  });
}

function playTone(freq, duration = 0.08, type = 'sine', vol = 0.05) {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function playChord(freqs, duration = 0.3, type = 'sine') {
  if (!soundEnabled || !audioCtx) return;
  freqs.forEach(f => playTone(f, duration, type, 0.04));
}

function playWhoosh() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch (e) {}
}

/* ==========================================================================
   4. THREE.JS 3D WEBGL HERO SCENE
   ========================================================================== */
function initThreeJSScene() {
  const canvas = document.getElementById('webgl-bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 7;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x00f2fe, 3, 20);
  pointLight1.position.set(4, 3, 4);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xa855f7, 3, 20);
  pointLight2.position.set(-4, -3, 3);
  scene.add(pointLight2);

  const geometries = {
    torus: new THREE.TorusKnotGeometry(1.6, 0.45, 120, 24),
    icosahedron: new THREE.IcosahedronGeometry(2.1, 2),
    sphere: new THREE.SphereGeometry(2.0, 36, 36)
  };

  const themeColors = {
    cyan: { primary: 0x00f2fe, secondary: 0x4facfe },
    purple: { primary: 0xa855f7, secondary: 0xec4899 },
    emerald: { primary: 0x10b981, secondary: 0x34d399 },
    amber: { primary: 0xf59e0b, secondary: 0xfbbf24 }
  };

  let activeTheme = document.body.getAttribute('data-accent') || 'cyan';
  let curColors = themeColors[activeTheme] || themeColors.cyan;

  const meshMaterial = new THREE.MeshStandardMaterial({
    color: curColors.primary,
    emissive: curColors.secondary,
    emissiveIntensity: 0.35,
    wireframe: true,
    transparent: true,
    opacity: 0.85
  });

  let currentMesh = new THREE.Mesh(geometries.torus, meshMaterial);
  currentMesh.position.set(2.4, 0.2, -1);
  scene.add(currentMesh);

  const particleCount = 750;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 22;
    positions[i + 1] = (Math.random() - 0.5) * 22;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: curColors.primary,
    size: 0.045,
    transparent: true,
    opacity: 0.6
  });

  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  let targetRotX = 0;
  let targetRotY = 0;
  let targetCameraX = 0;
  let targetCameraY = 0;

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;

    targetRotY = x * 0.8;
    targetRotX = -y * 0.8;
    targetCameraX = x * 0.4;
    targetCameraY = y * 0.4;
  });

  const geomBtns = document.querySelectorAll('.geom-btn');
  geomBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const gType = btn.getAttribute('data-geom');
      if (geometries[gType]) {
        currentMesh.geometry = geometries[gType];
        geomBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        playWhoosh();
        showToast('3D Geometry Changed', `Active Wireframe: ${gType.toUpperCase()}`, '💎');
      }
    });
  });

  window.update3DMaterialColor = (theme) => {
    const c = themeColors[theme] || themeColors.cyan;
    meshMaterial.color.setHex(c.primary);
    meshMaterial.emissive.setHex(c.secondary);
    particleMat.color.setHex(c.primary);
    pointLight1.color.setHex(c.primary);
    pointLight2.color.setHex(c.secondary);
  };

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (window.innerWidth < 992) {
      currentMesh.position.set(0, 0, -2);
    } else {
      currentMesh.position.set(2.4, 0.2, -1);
    }
  });

  if (window.innerWidth < 992) {
    currentMesh.position.set(0, 0, -2);
  }

  let clock = new THREE.Clock();

  function animate() {
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    currentMesh.rotation.y += (targetRotY - currentMesh.rotation.y) * 0.05 + 0.2 * delta;
    currentMesh.rotation.x += (targetRotX - currentMesh.rotation.x) * 0.05 + 0.15 * delta;
    currentMesh.rotation.z += 0.08 * delta;

    currentMesh.position.y += Math.sin(elapsed * 1.5) * 0.002;

    particles.rotation.y = elapsed * 0.03;
    particles.rotation.x = elapsed * 0.015;

    camera.position.x += (targetCameraX - camera.position.x) * 0.05;
    camera.position.y += (targetCameraY - camera.position.y) * 0.05;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   5. SPECULAR CARD GLARE TRACKING
   ========================================================================== */
function initCardGlare() {
  const cards = document.querySelectorAll('.hero-card, .project-card, .repo-card-mini');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   6. HERO TYPEWRITER
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const words = [
    'the IQ SaaS Ecosystem',
    'enterprise operating systems',
    'automated rate scrapers',
    'financial ledger platforms',
    'native AI voice engines'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const holdTime = 2000;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, holdTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 300);
      return;
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  type();
}

/* ==========================================================================
   7. ANIMATED COUNTERS
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const duration = 1800;
          const isDecimal = target % 1 !== 0;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const current = easeProgress * target;

            counter.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = isDecimal ? target.toFixed(2) : target;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsRow = document.querySelector('.hero-stats-row');
  if (statsRow) observer.observe(statsRow);
}

/* ==========================================================================
   8. 3D CARD TILT EFFECT
   ========================================================================== */
function init3DTilt() {
  const card = document.getElementById('tilt-card');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 10;
    const rotY = (x / (rect.width / 2)) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* ==========================================================================
   9. COMPLETE 16 REPOSITORIES DATA STORE
   ========================================================================== */
const allRepositories = [
  {
    id: 'salon-iq',
    name: 'salon-iq',
    title: 'Salon IQ — The Enterprise Salon Operating System',
    category: 'SaaS & Operations',
    language: 'TypeScript / Next.js 16',
    url: 'https://github.com/mundackal1/salon-iq',
    desc: 'Multi-tenant cloud-native operating system for luxury salons and spas. Next.js 16, React 19, Supabase PostgreSQL RLS, multi-chair appointment scheduler, POS billing with 18% GST, ESC/POS thermal printing, and WhatsApp API CRM.',
    tags: ['Next.js 16', 'React 19', 'Supabase RLS', 'Tailwind v4', 'Capacitor', 'ESC/POS']
  },
  {
    id: 'hotelzifyv2',
    name: 'Hotelzifyv2',
    title: 'Hotelzify v2 — Direct Revenue Management & Rate Intelligence',
    category: 'Hospitality',
    language: 'Python & Playwright',
    url: 'https://github.com/mundackal1/Hotelzifyv2',
    desc: 'Multi-property revenue management & rate defense platform for boutique hotels in India (Goa, Munnar, Manali). Real-time Playwright scraping with proxy rotation, rate parity alerts, commission loss calculator, and Aurora RDS telemetry.',
    tags: ['Python FastAPI', 'Playwright', 'PostgreSQL', 'Docker', 'Nginx', 'Next.js']
  },
  {
    id: 'nexhazroomiqpms',
    name: 'nexhazroomiqpms',
    title: 'Room IQ — Property Management System (PMS)',
    category: 'Hospitality',
    language: 'TypeScript / React',
    url: 'https://github.com/mundackal1/nexhazroomiqpms',
    desc: 'End-to-end hotel and resort property management system. Features automated night audit, interactive room booking calendar, mobile-first housekeeping task dispatch, guest profile CRM, and maintenance tracking.',
    tags: ['React', 'Supabase', 'DND-Kit', 'Android', 'Radix UI', 'Tailwind']
  },
  {
    id: 'chitiq',
    name: 'chitiq',
    title: 'ChitIQ — Financial Chit Lifecycle & Double-Entry Accounting Core',
    category: 'Fintech & Wealth',
    language: 'TypeScript / React 18',
    url: 'https://github.com/atcafc/chitiq',
    desc: 'Full-featured chit fund management platform for Kerala financial institutions. Includes auction bidding countdowns, subscriber KYC, collections tracking, loan advances, and an audited mathematical double-entry general ledger.',
    tags: ['React 18', 'TypeScript', 'shadcn/ui', 'TanStack Query', 'Supabase RLS', 'Capacitor']
  },
  {
    id: 'voxiq',
    name: 'voxiq',
    title: 'VoxIQ — AI Voice Studio & Immersive Performance Engine',
    category: 'AI & Native',
    language: 'Kotlin / Android Native',
    url: 'https://github.com/mundackal1/voxiq',
    desc: 'AI voice studio engineered for expressive virtual characters, emotional storytelling, romance, and immersive voice performance rendering on native Android and mobile platforms.',
    tags: ['Kotlin', 'Android Native', 'AI Voice', 'Audio Synthesis', 'Mobile Engine']
  },
  {
    id: 'nest-iq',
    name: 'Nest-iq',
    title: 'Nest iQ — Family Wealth & Bento Workspace HUD',
    category: 'Fintech & Wealth',
    language: 'TypeScript / Gradle',
    url: 'https://github.com/mundackal1/Nest-iq',
    desc: 'Family finance planning suite and life horizon workspace HUD. Features Memento Mori life tracking, 9 bento widgets, dock customizer, Lumen Glass themes, desktop ultrawide wallpapers, and mobile companion app.',
    tags: ['TypeScript', 'Gradle', 'Supabase', 'Bento UI', 'Android', 'Browser Extension']
  },
  {
    id: 'elparadisoin',
    name: 'elparadisoin',
    title: 'El Paradiso — Luxury Villa & Resort Booking Experience',
    category: 'Hospitality',
    language: 'TypeScript / React',
    url: 'https://github.com/mundackal1/elparadisoin',
    desc: 'Flagship digital hospitality portal and direct reservation engine for luxury boutique retreats. Implements interactive availability calendars, rate parity guarantees, and direct checkout.',
    tags: ['Next.js', 'React', 'Tailwind', 'Direct Booking', 'PostgreSQL']
  },
  {
    id: 'aura',
    name: 'Aura',
    title: 'Aura — Portable Studio Launcher & Web-to-PC Bridge',
    category: 'AI & Native',
    language: 'JavaScript / Desktop',
    url: 'https://github.com/mundackal1/Aura',
    desc: 'Portable studio launcher scripts and Web-to-PC bridge architecture with dynamic local AI model detection endpoints, fail-safe lock screen authentication, and desktop dock widgets.',
    tags: ['JavaScript', 'Desktop Bridge', 'Model Detection', 'Local AI', 'IPC Bridge']
  },
  {
    id: 'hotelzify',
    name: 'hotelzify',
    title: 'Hotelzify v1 — Rate & Availability Engine',
    category: 'Hospitality',
    language: 'Python',
    url: 'https://github.com/mundackal1/hotelzify',
    desc: 'Hotel revenue and market intelligence engine for India and US markets. OTA rate and availability tracking, demand calendar forecasting, automated threshold alerts, and reporting pipelines.',
    tags: ['Python', 'Web Scraping', 'Rate Tracking', 'Data Pipelines', 'Reporting']
  },
  {
    id: 'nexhaz-finiq',
    name: 'nexhaz-finiq',
    title: 'FinIQ — Enterprise Financial Operations Ledger',
    category: 'Fintech & Wealth',
    language: 'TypeScript',
    url: 'https://github.com/atcafc/nexhaz-finiq',
    desc: 'Financial ledger infrastructure and commercial banking operations platform built to support automated reconciliation, disbursement pipelines, and corporate financial accounting.',
    tags: ['TypeScript', 'Fintech', 'General Ledger', 'Reconciliation', 'Postgres']
  },
  {
    id: 'build-iq-in',
    name: 'build-iq-in',
    title: 'Build IQ — Construction & Real Estate Material Tracking SaaS',
    category: 'SaaS & Operations',
    language: 'TypeScript / Next.js',
    url: 'https://github.com/mundackal1/build-iq-in',
    desc: 'Specialized enterprise operating software for construction contractors, site engineers, and material inventory logistics across multi-site infrastructure projects.',
    tags: ['TypeScript', 'Next.js', 'Supply Chain', 'Material Tracking', 'Supabase']
  },
  {
    id: 'eventiq',
    name: 'Eventiq',
    title: 'EventIQ — Event Management & Guest Orchestration SaaS',
    category: 'SaaS & Operations',
    language: 'TypeScript',
    url: 'https://github.com/mundackal1/Eventiq',
    desc: 'Comprehensive event ticketing, attendee check-in with QR code scanners, multi-stage session orchestration, and VIP guest management platform.',
    tags: ['TypeScript', 'QR Scanner', 'Ticketing', 'Guest CRM', 'Next.js']
  },
  {
    id: 'd4decor',
    name: 'd4decor',
    title: 'D4 Decor — Interior Architecture & Catalog Commerce',
    category: 'SaaS & Operations',
    language: 'TypeScript',
    url: 'https://github.com/mundackal1/d4decor',
    desc: 'Interactive architectural interior design catalog, commercial finishings showcase, and quoting portal for luxury residential and commercial developments.',
    tags: ['TypeScript', 'E-Commerce', 'Catalog', 'React', 'Tailwind']
  },
  {
    id: 'roomiq-website',
    name: 'roomiq-Website',
    title: 'Room IQ — Commercial Product Portal & Marketing Web',
    category: 'Holdings & Portals',
    language: 'TypeScript / React',
    url: 'https://github.com/mundackal1/roomiq-Website',
    desc: 'High-conversion product showcase and marketing website for the Room IQ Property Management System, featuring interactive feature tours and pricing calculators.',
    tags: ['Next.js', 'Marketing UI', 'React', 'Animations', 'Tailwind']
  },
  {
    id: 'nexhaz-global',
    name: 'nexhaz-global',
    title: 'Nexhaz Global — Technology Holdings Corporate Portal',
    category: 'Holdings & Portals',
    language: 'TypeScript',
    url: 'https://github.com/mundackal1/nexhaz-global',
    desc: 'Corporate parent portal and governance interface uniting the Nexhaz Global portfolio of software ventures, technology subsidiaries, and enterprise client partnerships.',
    tags: ['TypeScript', 'Corporate', 'Enterprise', 'Next.js']
  },
  {
    id: 'atcmain',
    name: 'atcmain',
    title: 'ATC Main — Corporate Core Architecture',
    category: 'Holdings & Portals',
    language: 'TypeScript',
    url: 'https://github.com/atcafc/atcmain',
    desc: 'Core architecture and identity management portal anchoring ATC financial operations and affiliate platform integrations.',
    tags: ['TypeScript', 'Core Platform', 'Identity', 'React']
  }
];

/* ==========================================================================
   10. POPULATE & FILTER 16 REPOSITORIES DIRECTORY
   ========================================================================== */
function initAllReposDirectory() {
  const grid = document.getElementById('full-repos-grid');
  const searchInput = document.getElementById('repo-search-input');
  const catSelect = document.getElementById('repo-category-select');

  if (!grid) return;

  function renderRepos(repos) {
    grid.innerHTML = '';
    if (repos.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No repositories matched your search criteria.</div>';
      return;
    }

    repos.forEach(r => {
      const card = document.createElement('article');
      card.className = 'project-card repo-card-mini';
      card.setAttribute('data-id', r.id);
      card.innerHTML = `
        <div class="card-glare"></div>
        <div class="project-content" style="padding: 22px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span class="project-category">${r.category}</span>
            <span class="p-tag" style="background: rgba(255, 255, 255, 0.08); font-size: 0.7rem;">${r.language}</span>
          </div>
          <h3 class="project-title" style="font-size: 1.15rem; margin-bottom: 8px;">
            ${r.name}
          </h3>
          <p class="project-desc" style="font-size: 0.85rem; margin-bottom: 16px; line-height: 1.5;">
            ${r.desc}
          </p>
          <div class="project-tags" style="margin-bottom: 18px;">
            ${r.tags.slice(0, 4).map(t => `<span class="p-tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions" style="margin-top: auto; display: flex; gap: 8px;">
            <button class="btn btn-primary btn-sm" onclick="openRepoModal('${r.id}')" style="flex: 1; padding: 7px 12px; font-size: 0.8rem;">Inspect ↗</button>
            <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="padding: 7px 12px; font-size: 0.8rem;">GitHub ↗</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    initCardGlare();
  }

  function filterRepos() {
    const q = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const cat = catSelect ? catSelect.value : 'all';

    const filtered = allRepositories.filter(r => {
      const matchCat = cat === 'all' || r.category === cat;
      const matchText = !q || 
        r.name.toLowerCase().includes(q) || 
        r.title.toLowerCase().includes(q) || 
        r.desc.toLowerCase().includes(q) ||
        r.tags.some(t => t.toLowerCase().includes(q)) ||
        r.language.toLowerCase().includes(q);
      return matchCat && matchText;
    });

    renderRepos(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterRepos);
  if (catSelect) catSelect.addEventListener('change', () => {
    playWhoosh();
    filterRepos();
  });

  renderRepos(allRepositories);
}

/* ==========================================================================
   11. DEVELOPER TERMINAL WIDGET
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById('terminal-cmd-input');
  const output = document.getElementById('term-output');
  const body = document.getElementById('term-body');
  const chips = document.querySelectorAll('.terminal-quick-chip');

  if (!input || !output) return;

  const commands = {
    help: () => `
<div class="term-line cyan">Available Commands:</div>
<div class="term-line">  <span class="green">repos</span>       - List all 16 production repositories on GitHub</div>
<div class="term-line">  <span class="green">iq-suite</span>    - Inspect the complete IQ Enterprise Software Suite</div>
<div class="term-line">  <span class="green">skills</span>      - Inspect core technical proficiencies & stack</div>
<div class="term-line">  <span class="green">whoami</span>      - Developer profile & GitHub handles (@mundackal1)</div>
<div class="term-line">  <span class="green">contact</span>     - Direct contact coordinates & links</div>
<div class="term-line">  <span class="green">sudo hire</span>    - Fast-track engineering interview channel ⚡</div>
<div class="term-line">  <span class="green">clear</span>       - Clear the terminal console</div>
    `,
    repos: () => `
<div class="term-line cyan">All 16 Repositories (@mundackal1 & Affiliates):</div>
<div class="term-line"><span class="yellow">[Hospitality & Booking]</span></div>
<div class="term-line">  1. <span class="green">mundackal1/Hotelzifyv2</span> - Direct Revenue Management & Rate Scraper (Python/Playwright)</div>
<div class="term-line">  2. <span class="green">mundackal1/nexhazroomiqpms</span> - Room IQ Property Management System (PMS)</div>
<div class="term-line">  3. <span class="green">mundackal1/elparadisoin</span> - Luxury Villa & Resort Booking Experience</div>
<div class="term-line">  4. <span class="green">mundackal1/hotelzify</span> - Hotel Revenue & Market Scraper v1</div>
<div class="term-line"><span class="yellow">[Enterprise SaaS & Operations]</span></div>
<div class="term-line">  5. <span class="green">mundackal1/salon-iq</span> - Enterprise Salon Operating System (Next.js 16/RLS)</div>
<div class="term-line">  6. <span class="green">mundackal1/build-iq-in</span> - Construction & Material Tracking Management SaaS</div>
<div class="term-line">  7. <span class="green">mundackal1/Eventiq</span> - Event Management & Guest Orchestration Platform</div>
<div class="term-line">  8. <span class="green">mundackal1/d4decor</span> - Interior Architecture & Catalog Commerce</div>
<div class="term-line"><span class="yellow">[Fintech & Wealth]</span></div>
<div class="term-line">  9. <span class="green">atcafc/chitiq</span> - Chit Lifecycle & Double-Entry Accounting Core</div>
<div class="term-line"> 10. <span class="green">atcafc/nexhaz-finiq</span> - Enterprise Financial Operations Ledger</div>
<div class="term-line"> 11. <span class="green">mundackal1/Nest-iq</span> - Family Finance Planning & Bento Workspace HUD</div>
<div class="term-line"><span class="yellow">[AI & Native Systems]</span></div>
<div class="term-line"> 12. <span class="green">mundackal1/voxiq</span> - AI Voice Studio & Immersive Storytelling (Kotlin)</div>
<div class="term-line"> 13. <span class="green">mundackal1/Aura</span> - Portable Studio Launcher & Web-to-PC Bridge</div>
<div class="term-line"><span class="yellow">[Holdings & Portals]</span></div>
<div class="term-line"> 14. <span class="green">mundackal1/roomiq-Website</span> - Room IQ Marketing & Product Showcase</div>
<div class="term-line"> 15. <span class="green">mundackal1/nexhaz-global</span> - Nexhaz Global Technology Holdings Suite</div>
<div class="term-line"> 16. <span class="green">atcafc/atcmain</span> - ATC Main Corporate Core Architecture</div>
<div class="term-line dim">Click 'All 16 Repositories' in navigation or type 'open &lt;repo-name&gt;' for details.</div>
    `,
    'iq-suite': () => `
<div class="term-line cyan">The IQ Product Ecosystem:</div>
<div class="term-line">• <span class="green">Salon IQ:</span> The enterprise OS for luxury salons (Next.js 16, Supabase, POS, WhatsApp).</div>
<div class="term-line">• <span class="green">Room IQ PMS:</span> Cloud hospitality PMS with night audit & housekeeping.</div>
<div class="term-line">• <span class="green">ChitIQ:</span> Audited chit fund lifecycle with verified double-entry accounting.</div>
<div class="term-line">• <span class="green">Nest iQ:</span> Family finance planning HUD with 9 customizable bento widgets.</div>
<div class="term-line">• <span class="green">VoxIQ:</span> AI voice performance studio for expressive character speech.</div>
<div class="term-line">• <span class="green">Build IQ:</span> Real estate construction & material tracking logistics.</div>
<div class="term-line">• <span class="green">EventIQ:</span> Event ticketing, QR check-in & attendee orchestration.</div>
<div class="term-line">• <span class="green">FinIQ:</span> Corporate ledger & banking operations infrastructure.</div>
    `,
    skills: () => `
<div class="term-line cyan">Core Technical Competencies:</div>
<div class="term-line"><span class="yellow">Languages & Frameworks:</span> TypeScript/JavaScript, Python, Next.js 16, React 19, Kotlin, Vite</div>
<div class="term-line"><span class="yellow">Data & Security:</span> PostgreSQL, Supabase Row-Level Security (RLS), AWS Aurora RDS</div>
<div class="term-line"><span class="yellow">Automation & Scraping:</span> Playwright, Residential Proxy Pools, Nginx, Docker Compose</div>
<div class="term-line"><span class="yellow">Mobile & Peripherals:</span> Capacitor (iOS/Android), ESC/POS Thermal Printers, WebSockets</div>
    `,
    whoami: () => `
<div class="term-line cyan">Alan Philip (@mundackal1)</div>
<div class="term-line">Senior Full-Stack Software Engineer & SaaS Product Architect behind the IQ Ecosystem. 16 active repositories across hospitality revenue management, multi-tenant SaaS, fintech ledgers, and AI voice engines.</div>
<div class="term-line">GitHub Profile: <a href="https://github.com/mundackal1" target="_blank" class="cyan">https://github.com/mundackal1</a></div>
    `,
    contact: () => `
<div class="term-line cyan">Contact Coordinates:</div>
<div class="term-line">• GitHub: <a href="https://github.com/mundackal1" target="_blank" class="cyan">github.com/mundackal1</a></div>
<div class="term-line">• Email: <a href="mailto:alanphilip@example.com" class="cyan">alanphilip@example.com</a></div>
<div class="term-line">• Direct Message: Use the contact form below on this page.</div>
    `,
    'sudo hire': () => {
      showToast('Interview Offer Initiated! 🚀', 'Direct routing to priority contact queue...', '✨');
      playTone(880, 0.2, 'sine', 0.1);
      return `
<div class="term-line green">🔥 Access Granted! [CONFIDENTIAL PRIORITY]</div>
<div class="term-line">Initializing interview scheduling channel... Reach out directly via the Contact section below or at https://github.com/mundackal1!</div>
      `;
    },
    'sudo hire-alan': () => commands['sudo hire'](),
    clear: () => {
      output.innerHTML = '';
      return '';
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    playTone(400, 0.05, 'square', 0.02);

    const userLine = document.createElement('div');
    userLine.className = 'term-line';
    userLine.innerHTML = `<span class="green">alan@mundackal1:~$</span> ${escapeHTML(rawCmd)}`;
    output.appendChild(userLine);

    if (commands[cmd]) {
      const result = commands[cmd]();
      if (result) {
        const resDiv = document.createElement('div');
        resDiv.innerHTML = result;
        output.appendChild(resDiv);
      }
    } else if (cmd === 'projects') {
      const result = commands['repos']();
      const resDiv = document.createElement('div');
      resDiv.innerHTML = result;
      output.appendChild(resDiv);
    } else if (cmd.startsWith('open ')) {
      const projId = cmd.replace('open ', '').trim();
      openRepoModal(projId);
      const resDiv = document.createElement('div');
      resDiv.className = 'term-line green';
      resDiv.textContent = `Opening modal inspection for [${projId}]...`;
      output.appendChild(resDiv);
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'term-line dim';
      errLine.innerHTML = `zsh: command not found: <span class="yellow">${escapeHTML(cmd)}</span>. Type <span class="cyan">help</span> or <span class="cyan">repos</span>.`;
      output.appendChild(errLine);
    }

    body.scrollTop = body.scrollHeight;
    input.value = '';
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.value);
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   12. PROJECT CATEGORY FILTERS (FLAGSHIP SECTION)
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filters .filter-btn');
  const cards = document.querySelectorAll('#projects-grid .project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      playWhoosh();

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || filter === cat) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   13. PROJECT & REPOSITORY DETAIL MODALS
   ========================================================================== */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', closeProjectModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

window.openProjectModal = function(projectId) {
  openRepoModal(projectId);
};

window.openRepoModal = function(repoId) {
  // Find in allRepositories or fallback to specific mapped assets
  const repo = allRepositories.find(r => r.id === repoId || r.name.toLowerCase() === repoId.toLowerCase()) || allRepositories[0];

  playWhoosh();
  const modal = document.getElementById('project-modal');
  document.getElementById('modal-title').textContent = repo.title;
  document.getElementById('modal-tag').textContent = `${repo.category} • ${repo.language}`;
  document.getElementById('modal-desc').innerText = repo.desc;

  // Use appropriate screenshot image if available, else standard project asset
  const imageMap = {
    'salon-iq': 'assets/images/salon-iq.jpg',
    'hotelzifyv2': 'assets/images/hotelzify.jpg',
    'hotelzify': 'assets/images/hotelzify.jpg',
    'chitiq': 'assets/images/chitiq.jpg',
    'nexhazroomiqpms': 'assets/images/hotelzify.jpg',
    'elparadisoin': 'assets/images/hotelzify.jpg',
    'nest-iq': 'assets/images/chitiq.jpg',
    'voxiq': 'assets/images/salon-iq.jpg'
  };

  document.getElementById('modal-project-img').src = imageMap[repo.id] || 'assets/images/salon-iq.jpg';

  const repoBtn = document.getElementById('modal-repo-btn');
  if (repoBtn) {
    repoBtn.href = repo.url;
  }

  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = '';
  repo.tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'p-tag';
    span.textContent = t;
    tagsContainer.appendChild(span);
  });

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

/* ==========================================================================
   14. SKILL BARS ON SCROLL
   ========================================================================== */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        fills.forEach(fill => {
          const prog = fill.getAttribute('data-progress');
          fill.style.width = prog;
        });
      }
    });
  }, { threshold: 0.25 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) observer.observe(skillsSection);
}

/* ==========================================================================
   15. CONTACT FORM & INSTANT TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('btn-submit-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;

    btn.disabled = true;
    btn.innerHTML = 'Transmitting Message... ⏳';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send Direct Message 🚀';
      form.reset();

      playTone(523.25, 0.25, 'sine');
      setTimeout(() => playTone(659.25, 0.25, 'sine'), 100);
      setTimeout(() => playTone(783.99, 0.4, 'sine'), 200);

      showToast(
        'Message Delivered!',
        `Thank you ${name}. Your message has been routed to Alan's priority inbox.`,
        '📬'
      );
    }, 900);
  });
}

function showToast(title, message, icon = '✨') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-body">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ==========================================================================
   16. NAVBAR SCROLL EFFECT
   ========================================================================== */
function initNavbarScroll() {
  const nav = document.getElementById('main-nav');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
