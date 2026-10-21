/**
 * Alan Philip Portfolio — 3D Premium Animated Engine
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

  const hoverTargets = document.querySelectorAll('a, button, .project-card, .terminal-quick-chip, .tech-chip, .geom-btn');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      playTone(587.33, 0.04, 'triangle', 0.03); // D5 soft blip
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

/* ==========================================================================
   3. WEB AUDIO API SYNTHESIZER (ZERO ASSETS REQUIRED)
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
      playChord([523.25, 659.25, 783.99]); // C Major chord
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

  // Ambient & Directional Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x00f2fe, 3, 20);
  pointLight1.position.set(4, 3, 4);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xa855f7, 3, 20);
  pointLight2.position.set(-4, -3, 3);
  scene.add(pointLight2);

  // 3D Geometries Map
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

  // Wireframe Core Material
  const meshMaterial = new THREE.MeshStandardMaterial({
    color: curColors.primary,
    emissive: curColors.secondary,
    emissiveIntensity: 0.35,
    wireframe: true,
    transparent: true,
    opacity: 0.85
  });

  let currentMesh = new THREE.Mesh(geometries.torus, meshMaterial);
  // Position to the right-center behind the hero card
  currentMesh.position.set(2.4, 0.2, -1);
  scene.add(currentMesh);

  // Floating Particle Field
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

  // Mouse Coordinates for Interactive 3D Parallax
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

  // Switch Geometry Trigger
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

  // Color Update on Palette Switch
  window.update3DMaterialColor = (theme) => {
    const c = themeColors[theme] || themeColors.cyan;
    meshMaterial.color.setHex(c.primary);
    meshMaterial.emissive.setHex(c.secondary);
    particleMat.color.setHex(c.primary);
    pointLight1.color.setHex(c.primary);
    pointLight2.color.setHex(c.secondary);
  };

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Responsive position of 3D object
    if (window.innerWidth < 992) {
      currentMesh.position.set(0, 0, -2);
    } else {
      currentMesh.position.set(2.4, 0.2, -1);
    }
  });

  if (window.innerWidth < 992) {
    currentMesh.position.set(0, 0, -2);
  }

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    // Constant smooth rotation + mouse lerp
    currentMesh.rotation.y += (targetRotY - currentMesh.rotation.y) * 0.05 + 0.2 * delta;
    currentMesh.rotation.x += (targetRotX - currentMesh.rotation.x) * 0.05 + 0.15 * delta;
    currentMesh.rotation.z += 0.08 * delta;

    // Gentle float
    currentMesh.position.y += Math.sin(elapsed * 1.5) * 0.002;

    // Particle field slow drift
    particles.rotation.y = elapsed * 0.03;
    particles.rotation.x = elapsed * 0.015;

    // Camera parallax lerp
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
  const cards = document.querySelectorAll('.hero-card, .project-card');
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
    'intelligent 3D web',
    'distributed microservices',
    'autonomous AI workflows',
    'low-latency engines',
    'cloud-native systems'
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
   9. DEVELOPER TERMINAL WIDGET
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
<div class="term-line">  <span class="green">about</span>        - Summary of Alan's background & focus</div>
<div class="term-line">  <span class="green">skills</span>       - List core technical stack & architectures</div>
<div class="term-line">  <span class="green">projects</span>     - Display featured production repositories</div>
<div class="term-line">  <span class="green">experience</span>   - Summary of career leadership roles</div>
<div class="term-line">  <span class="green">contact</span>      - Direct contact links & details</div>
<div class="term-line">  <span class="green">whoami</span>       - Current session identity</div>
<div class="term-line">  <span class="green">sudo hire</span>     - Trigger fast-track interview pipeline ⚡</div>
<div class="term-line">  <span class="green">clear</span>        - Clear the terminal console</div>
    `,
    about: () => `
<div class="term-line cyan">About Alan Philip:</div>
<div class="term-line">Senior Staff Full-Stack Software Engineer specializing in high-throughput distributed backends (Go, Kafka, Node) and reactive 3D frontend platforms (Three.js, Next.js, TypeScript). 7+ years of engineering experience with a deep focus on autonomous agent workflows and cloud scalability.</div>
    `,
    skills: () => `
<div class="term-line cyan">Technical Proficiencies:</div>
<div class="term-line"><span class="yellow">Languages:</span> Go (Golang), TypeScript/JavaScript, Python, Rust, SQL</div>
<div class="term-line"><span class="yellow">Frontend & 3D:</span> Three.js, WebGL, React, Next.js, WebAssembly, Canvas, CSS</div>
<div class="term-line"><span class="yellow">Backend & Data:</span> Kafka, Redis, PostgreSQL, TimescaleDB, gRPC, WebSockets</div>
<div class="term-line"><span class="yellow">Cloud & Infra:</span> Kubernetes, Docker, Terraform, Helm, GCP, AWS, CI/CD</div>
    `,
    projects: () => `
<div class="term-line cyan">Featured Production Repositories:</div>
<div class="term-line">1. <span class="green">Nexus AI</span> - Autonomous agent orchestration platform [4.7TB Data, &lt;65ms execution]</div>
<div class="term-line">2. <span class="green">Quantum Edge Flow</span> - High-frequency financial settlement engine [14.2k TPS, 14ms latency]</div>
<div class="term-line">3. <span class="green">DevForge Workspace</span> - Cloud collaborative IDE & real-time CRDT Git lenses</div>
<div class="term-line dim">Type 'open &lt;project-id&gt;' or click inspect in Featured Work.</div>
    `,
    experience: () => `
<div class="term-line cyan">Career Highlights:</div>
<div class="term-line">• <span class="yellow">Staff Full-Stack Engineer</span> @ CloudScale Tech (2023 - Present)</div>
<div class="term-line">• <span class="yellow">Senior Systems Engineer</span> @ FinTech Dynamics (2020 - 2023)</div>
<div class="term-line">• <span class="yellow">Full-Stack Engineer</span> @ NextGen Digital Labs (2018 - 2020)</div>
    `,
    whoami: () => `
<div class="term-line cyan">visitor@alan-philip-portfolio:~$ authenticated as prospective collaborator / engineer</div>
    `,
    contact: () => `
<div class="term-line cyan">Contact Coordinates:</div>
<div class="term-line">• Email: <a href="mailto:alan.philip@example.com" class="cyan">alan.philip@example.com</a></div>
<div class="term-line">• GitHub: <a href="https://github.com" target="_blank" class="cyan">github.com/alanphilip</a></div>
<div class="term-line">• LinkedIn: <a href="https://linkedin.com" target="_blank" class="cyan">linkedin.com/in/alanphilip</a></div>
    `,
    'sudo hire': () => {
      showToast('Offer Initiated! 🚀', 'Routing directly to prioritized contact queue...', '✨');
      playTone(880, 0.2, 'sine', 0.1);
      return `
<div class="term-line green">🔥 Access Granted! [CONFIDENTIAL PRIORITY]</div>
<div class="term-line">Initializing interview scheduling channel... Scroll down to the Contact Section or email directly at alan.philip@example.com!</div>
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
    userLine.innerHTML = `<span class="green">alan@portfolio:~$</span> ${escapeHTML(rawCmd)}`;
    output.appendChild(userLine);

    if (commands[cmd]) {
      const result = commands[cmd]();
      if (result) {
        const resDiv = document.createElement('div');
        resDiv.innerHTML = result;
        output.appendChild(resDiv);
      }
    } else if (cmd.startsWith('open ')) {
      const projId = cmd.replace('open ', '').trim();
      openProjectModal(projId);
      const resDiv = document.createElement('div');
      resDiv.className = 'term-line green';
      resDiv.textContent = `Opening modal inspection for [${projId}]...`;
      output.appendChild(resDiv);
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'term-line dim';
      errLine.innerHTML = `zsh: command not found: <span class="yellow">${escapeHTML(cmd)}</span>. Type <span class="cyan">help</span> to list available commands.`;
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
   10. PROJECT CATEGORY FILTERS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

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
   11. PROJECT DETAIL MODALS
   ========================================================================== */
const projectData = {
  'nexus-ai': {
    title: 'Nexus AI: Autonomous Agent Orchestration Platform',
    category: 'Autonomous Agents & Cloud Infrastructure',
    image: 'assets/images/project-ai-platform.jpg',
    description: `Nexus AI is a next-generation agent orchestration platform engineered to supervise, monitor, and direct autonomous multi-step reasoning models across distributed cloud clusters. Built to process over 4.7 TB of telemetry data with a continuous 99.8% SLA uptime, it features live streaming node graph topology, dynamic agent status tracking, and sub-65ms execution latency.`,
    tags: ['TypeScript', 'Three.js', 'Next.js 14', 'FastAPI', 'Redis Streams', 'WebSockets', 'Docker', 'Google Cloud']
  },
  'quantum-edge': {
    title: 'Quantum Edge Flow: High-Frequency Settlement Engine',
    category: 'Distributed Systems & Fintech Core',
    image: 'assets/images/project-cloud-engine.jpg',
    description: `Quantum Edge Flow provides sub-14 millisecond transaction clearance and settlement telemetry for high-volume market operators. Designed using Go worker pools and partitioned Kafka queues, the engine reliably absorbs 14,200 peak transactions per second with live fraud scoring pipelines and automatic failover replication.`,
    tags: ['Go (Golang)', 'Apache Kafka', 'TimescaleDB', 'Kubernetes', 'Microservices', 'React', 'Prometheus']
  },
  'devforge': {
    title: 'DevForge: Cloud Collaborative IDE & Git Lenses',
    category: 'Collaborative DevTools & Web Runtime',
    image: 'assets/images/project-devflow.jpg',
    description: `DevForge is a browser-based distributed coding platform providing conflict-free replicated data type (CRDT) document collaboration, visual Git graph diffing, and WebAssembly compiler sandboxes. It handles multi-user real-time typing with under 8ms synchronization jitter.`,
    tags: ['TypeScript', 'WebAssembly', 'WebRTC', 'Rust', 'Docker', 'CSS Architecture']
  }
};

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
  const data = projectData[projectId];
  if (!data) return;

  playWhoosh();
  const modal = document.getElementById('project-modal');
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-tag').textContent = data.category;
  document.getElementById('modal-desc').textContent = data.description;
  document.getElementById('modal-project-img').src = data.image;

  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = '';
  data.tags.forEach(t => {
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
   12. SKILL BARS ON SCROLL
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
   13. CONTACT FORM & INSTANT TOAST
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
   14. NAVBAR SCROLL EFFECT
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
