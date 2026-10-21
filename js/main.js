/**
 * Alan Philip Portfolio — Dynamic Interactive Engine
 * Pure Vanilla JavaScript: High-Performance, Accessible, Zero Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccentPicker();
  initCanvasBackground();
  initTypewriter();
  initCounters();
  init3DTilt();
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
      showToast('Accent Updated', `Theme palette switched to ${theme.toUpperCase()}`, '🎨');
    });
  });
}

/* ==========================================================================
   2. INTERACTIVE CONSTELLATION CANVAS BACKGROUND
   ========================================================================== */
function initCanvasBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
  const particles = [];
  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.8 + 0.6;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interactive repulse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2.5;
          this.y -= (dy / dist) * force * 2.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(79, 172, 254, 0.4)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = (1 - dist / maxDist) * 0.18;
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   3. HERO TYPEWRITER
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const words = [
    'intelligent web',
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
   4. ANIMATED COUNTERS
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
            // Ease out quad
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
   5. 3D CARD TILT EFFECT
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
   6. DEVELOPER TERMINAL WIDGET
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
<div class="term-line">Senior Staff Full-Stack Software Engineer specializing in high-throughput distributed backends (Go, Kafka, Node) and reactive frontend platforms (Next.js, TypeScript). 7+ years of engineering experience with a deep focus on autonomous agent workflows and cloud scalability.</div>
    `,
    skills: () => `
<div class="term-line cyan">Technical Proficiencies:</div>
<div class="term-line"><span class="yellow">Languages:</span> Go (Golang), TypeScript/JavaScript, Python, Rust, SQL</div>
<div class="term-line"><span class="yellow">Frontend:</span> React, Next.js, WebAssembly, Canvas/WebGL, Tailwind, CSS</div>
<div class="term-line"><span class="yellow">Backend & Data:</span> Kafka, Redis, PostgreSQL, TimescaleDB, gRPC, WebSockets</div>
<div class="term-line"><span class="yellow">Cloud & Infra:</span> Kubernetes, Docker, Terraform, Helm, GCP, AWS, CI/CD</div>
    `,
    projects: () => `
<div class="term-line cyan">Featured Production Repositories:</div>
<div class="term-line">1. <span class="green">Nexus AI</span> - Autonomous agent orchestration platform [4.7TB Data, &lt;65ms execution]</div>
<div class="term-line">2. <span class="green">Quantum Edge Flow</span> - High-frequency financial settlement engine [14.2k TPS, 14ms latency]</div>
<div class="term-line">3. <span class="green">DevForge Workspace</span> - Cloud collaborative IDE & real-time CRDT Git lenses</div>
<div class="term-line dim">Type 'open &lt;project-id&gt;' or inspect the cards in the Featured Work section.</div>
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

    // Append input line
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
   7. PROJECT CATEGORY FILTERS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

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
   8. PROJECT DETAIL MODALS
   ========================================================================== */
const projectData = {
  'nexus-ai': {
    title: 'Nexus AI: Autonomous Agent Orchestration Platform',
    category: 'Autonomous Agents & Cloud Infrastructure',
    image: 'assets/images/project-ai-platform.jpg',
    description: `Nexus AI is a next-generation agent orchestration platform engineered to supervise, monitor, and direct autonomous multi-step reasoning models across distributed cloud clusters. Built to process over 4.7 TB of telemetry data with a continuous 99.8% SLA uptime, it features live streaming node graph topology, dynamic agent status tracking, and sub-65ms execution latency.`,
    tags: ['TypeScript', 'Next.js 14', 'FastAPI', 'Redis Streams', 'WebSockets', 'Docker', 'Google Cloud']
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
   9. SKILL BARS ON SCROLL
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
   10. CONTACT FORM & INSTANT TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('btn-submit-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;

    btn.disabled = true;
    btn.innerHTML = 'Transmitting Message... ⏳';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send Direct Message 🚀';
      form.reset();

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
   11. NAVBAR SCROLL EFFECT
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

    // Active link highlighting
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
