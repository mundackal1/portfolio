# Alan Philip — Full-Stack Software Engineer Portfolio

A modern, high-performance developer portfolio website built with clean semantic HTML5, vanilla CSS3 glassmorphism, and vanilla JavaScript.

## 🚀 Key Features

- **Aesthetic**: Modern Dark Glassmorphic with vibrant glowing accents (`cyan`, `purple`, `emerald`, `amber`), fluid micro-interactions, and frosted glass cards.
- **Hero & Identity**: Interactive 3D tilt card, live counter metrics (7+ years, 99.99% SLA, 50M+ requests), and dynamic typewriter headings.
- **Interactive Developer Terminal**: Embedded command line (`help`, `skills`, `projects`, `whoami`, `sudo hire-alan`, `clear`) simulating a real developer environment.
- **Project Showcase & Deep Dive**: Categorized project filter tabs and full modal inspection for architectural breakdowns:
  - **Nexus AI Platform**: Autonomous agent orchestration engine.
  - **Quantum Edge Flow**: Low-latency distributed settlement engine (14.2k TPS).
  - **DevForge Workspace**: Collaborative web runtime & Git lenses.
- **Live Theme Palette Switcher**: Real-time accent glow selector persisted to `localStorage`.
- **Skills Matrix**: Dynamic animated progress bars triggered via `IntersectionObserver`.
- **Interactive Contact Form**: Client-side validation with rich animated toast alerts.
- **Zero Dependencies**: Lightning-fast load times, no build steps, and zero external runtime dependencies.

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML5 structure with SEO & OpenGraph tags
├── css/
│   └── styles.css          # Design system tokens, glassmorphism, responsive grid
├── js/
│   └── main.js             # Terminal logic, particle canvas, modals, form handlers
└── assets/
    └── images/             # High-res generated profile avatar & project previews
        ├── avatar.jpg
        ├── project-ai-platform.jpg
        ├── project-cloud-engine.jpg
        └── project-devflow.jpg
```

## 💻 Local Preview

Run any lightweight local static HTTP server:

```bash
# Using Python
python3 -m http.server 8080

# Or using npx serve
npx -y serve .
```

Then navigate to `http://localhost:8080`.
