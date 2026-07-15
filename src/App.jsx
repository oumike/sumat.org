import { useEffect, useState } from 'react'

// TEMPORARY: themes for the trial theme picker. Each theme has `light` and
// `dark` variable maps matching the CSS custom properties in index.css;
// `dots` are just the source palette shown in the swatch.
const themes = [
  {
    id: 'dune',
    name: 'Dune',
    dots: ['#767f9e', '#daa464', '#dec384', '#e8ddb4'],
    light: {
      '--bg-top': '#daa464',
      '--bg-bottom': '#767f9e',
      '--card-bg': '#e8ddb4',
      '--surface': '#f6efda',
      '--border': '#dec384',
      '--text': '#3d4256',
      '--muted': '#6b6a5e',
      '--accent': '#767f9e',
      '--accent-soft': '#eee4c2',
      '--hover-border': '#daa464',
      '--focus-ring': '#dec384',
      '--shadow': '0 18px 45px rgba(118, 127, 158, 0.22)',
    },
    dark: {
      '--bg-top': '#161922',
      '--bg-bottom': '#0c0e13',
      '--card-bg': '#1f232e',
      '--surface': '#2b303d',
      '--border': '#3f4557',
      '--text': '#f2ecd6',
      '--muted': '#cfc8ac',
      '--accent': '#e6cd93',
      '--accent-soft': '#2a2f3c',
      '--hover-border': '#daa464',
      '--focus-ring': '#dec384',
      '--shadow': '0 18px 45px rgba(0, 0, 0, 0.5)',
    },
  },
  {
    id: 'harbor',
    name: 'Harbor',
    dots: ['#e8edf2', '#2c3947', '#547a95', '#c2a56d'],
    light: {
      '--bg-top': '#547a95',
      '--bg-bottom': '#2c3947',
      '--card-bg': '#e8edf2',
      '--surface': '#f4f8fc',
      '--border': '#d3dde6',
      '--text': '#2c3947',
      '--muted': '#547a95',
      '--accent': '#547a95',
      '--accent-soft': '#dbe6ef',
      '--hover-border': '#c2a56d',
      '--focus-ring': '#c2a56d',
      '--shadow': '0 18px 45px rgba(44, 57, 71, 0.2)',
    },
    dark: {
      '--bg-top': '#121820',
      '--bg-bottom': '#090c10',
      '--card-bg': '#1a222c',
      '--surface': '#26303d',
      '--border': '#374757',
      '--text': '#eef2f7',
      '--muted': '#b6c6d4',
      '--accent': '#9dc0d8',
      '--accent-soft': '#24303c',
      '--hover-border': '#c2a56d',
      '--focus-ring': '#c2a56d',
      '--shadow': '0 18px 45px rgba(0, 0, 0, 0.5)',
    },
  },
]

function applyTheme(theme, mode) {
  for (const [key, value] of Object.entries(theme[mode])) {
    document.documentElement.style.setProperty(key, value)
  }
}

function ThemePicker() {
  const [activeId, setActiveId] = useState(themes[0].id)
  const [mode, setMode] = useState('light')

  useEffect(() => {
    const theme = themes.find((t) => t.id === activeId)
    if (theme) applyTheme(theme, mode)
  }, [activeId, mode])

  return (
    <section className="theme-picker" aria-label="Theme picker (temporary)">
      <div className="theme-picker-head">
        <p className="theme-picker-label">Try a theme</p>
        <button
          type="button"
          className="theme-mode-toggle"
          onClick={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
        >
          {mode === 'light' ? '☀ Light' : '☾ Dark'}
        </button>
      </div>
      <div className="theme-picker-options">
        {themes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            className="theme-swatch"
            aria-pressed={theme.id === activeId}
            onClick={() => setActiveId(theme.id)}
          >
            <span className="theme-swatch-dots" aria-hidden="true">
              {theme.dots.map((color, i) => (
                <span
                  key={i}
                  className="theme-swatch-dot"
                  style={{ background: color }}
                />
              ))}
            </span>
            {theme.name}
          </button>
        ))}
      </div>
    </section>
  )
}

const projects = [
  {
    name: 'Indie Books of Detroit',
    url: 'https://www.indiebooksofdetroit.com',
    label: 'www.indiebooksofdetroit.com',
    summary:
      'A photo blog documenting independent bookstores in and around Detroit, with writeups and imagery from visits around Michigan.',
  },
  {
    name: 'Camillia',
    url: 'https://camillia.sumat.org',
    label: 'camillia.sumat.org',
    summary:
      'Meshtastic-compatible firmware for ESP32-S3 handhelds with multi-channel chat, browser setup, YAML import/export, GPS, and direct messages.',
  },
  {
    name: 'Plumeria',
    url: 'https://plumeria.sumat.org',
    label: 'plumeria.sumat.org',
    summary:
      'MeshCore-compatible standalone firmware featuring an LVGL on-device UI, up to 40 channels, contacts, direct messages, GPS, and Wi-Fi config.',
  },
]

const meshRelated = [
    {name: 'WWMeshGroup', url: 'https://wwmeshgroup.ddns.net/index.html', label: 'wwmeshgroup.org', summary: 'A fantastic group of people!'},
  {
    name: 'Potato',
    url: 'https://potato.sumat.org',
    label: 'potato.sumat.org',
    summary:
      'A live Potato Mesh dashboard for WWMeshGroup showing real-time mesh chat activity, recent traffic, and currently heard nodes.',
  },
  {
    name: 'MichMesh',
    url: 'https://michmesh.com',
    label: 'michmesh.com',
    summary:
      'A volunteer-run Michigan off-grid LoRa mesh community focused on free communications, emergency resilience, and local node hosting.',
  },
  {
    name: 'MeshCore',
    url: 'https://meshcore.io',
    label: 'meshcore.io',
    summary:
      'An open-source encrypted off-grid messaging system using LoRa mesh networking, companion apps, and hardware profiles for nodes and repeaters.',
  },
  {
    name: 'Meshtastic',
    url: 'https://meshtastic.org',
    label: 'meshtastic.org',
    summary:
      'The core open-source off-grid mesh platform for low-power LoRa devices, designed for decentralized communication without cellular or internet.',
  }
]

const awesomeProjects = [
    {
        name: 'WADAMESH',
        url: 'https://www.wadamesh.com',
        label: 'wadamesh.com',
        summary:
          'MeshCore Meshcomod firmware with a full touchscreen experience for supported devices, including on-device maps, chat, channels, and contacts.',
    },
    {
        name: 'SigurdOS',
        url: 'https://www.sigurdos.dev',
        label: 'www.sigurdos.dev',
        summary:
          'A fully open-source T-Deck firmware with multi-channel mesh chat, offline tile maps, diagnostics, and regular community-driven releases.',
    },
    {
        name: 'Ratspeak',
        url: 'https://ratspeak.org',
        label: 'ratspeak.org',
        summary:
          'A privacy-first decentralized mesh network stack built for multiple transports and devices, with no accounts and open-source code.',
    },
    {
        name: 'Plai (for Cardputer)',
        url: 'https://github.com/d4rkmen/plai',
        label: 'github.com/d4rkmen/plai',
        summary:
          'A standalone Meshtastic communicator for M5Stack CardPuter that runs without phone tethering and includes offline maps and robust on-device tools.',
    }
]

const linkedInUrl = 'https://www.linkedin.com/in/michael-cojocari-83b1495/'
const blueskyUrl = 'https://bsky.app/profile/oumike.bsky.social'
const mastodonUrl = 'https://mastodon.social/@oumike'
const gmailUrl = 'mailto:michael.cojocari@gmail.com'

const aboutMeSummary =
  'I am a senior full stack developer with more than two decades of experience across enterprise and startup work. I build and support end-to-end systems using TypeScript (Angular, NestJS), Node.js, PHP, Python, C#, and SQL, with strong CI/CD automation and cloud delivery practices. I enjoy learning new technologies, collaborating closely with clients and teams, and turning complex requirements into practical software. Outside of software, I am a photographer, writer, and artist.'

function App() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="projects-heading">
        <header className="site-header">
          <h1>Sumat</h1>
          <nav className="top-nav" aria-label="Jump to sections">
            <a className="top-nav-link" href="#about-me-heading">About Me</a>
            <a className="top-nav-link" href="#projects-heading">Projects</a>
            <a className="top-nav-link" href="#awesome-projects-heading">Awesome Projects</a>
            <a className="top-nav-link" href="#mesh-related-heading">Mesh Related</a>
          </nav>
        </header>
        <section className="awesome-projects-section" aria-labelledby="about-me-heading">
          <h2 id="about-me-heading" className="section-title">About Me</h2>
          <p className="intro">{aboutMeSummary}</p>
        </section>
      <section className="awesome-projects-section" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="section-title">Projects</h2>
        <p className="intro">Some recent projects I've been working on.</p>

        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.url} className="project-item">
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="project-header">
                  <span className="project-name">{project.name}</span>
                  <span className="project-url">{project.label}</span>
                </span>
                <span className="project-summary">{project.summary}</span>
              </a>
            </li>
          ))}
        </ul>
        <section className="awesome-projects-section" aria-labelledby="awesome-projects-heading">
          <h2 id="awesome-projects-heading" className="section-title">
            Awesome Projects
          </h2>
        <p className="intro">Some excellent projects that I use.</p>

          <ul className="project-list mesh-list">
            {awesomeProjects.map((project) => (
              <li key={project.url} className="project-item">
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-header">
                    <span className="project-name">{project.name}</span>
                    <span className="project-url">{project.label}</span>
                  </span>
                  <span className="project-summary">{project.summary}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="mesh-section" aria-labelledby="mesh-related-heading">
          <h2 id="mesh-related-heading" className="section-title">
            Mesh Related
          </h2>
          <p className="intro">Mesh related links.</p>

          <ul className="project-list mesh-list">
            {meshRelated.map((project) => (
              <li key={project.url} className="project-item">
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-header">
                    <span className="project-name">{project.name}</span>
                    <span className="project-url">{project.label}</span>
                  </span>
                  <span className="project-summary">{project.summary}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="site-footer" aria-label="Footer">
          <p className="footer-label">Find me on</p>
          <div className="footer-links">
            <a
              className="footer-link"
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="footer-link"
              href={blueskyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Bluesky
            </a>
            <a
              className="footer-link"
              href={mastodonUrl}
              target="_blank"
              rel="me noreferrer"
            >
              Mastodon
            </a>
            <a
              className="footer-link"
              href={gmailUrl}
            >
              Gmail
            </a>
          </div>
        </footer>
        <ThemePicker />
      </section>
      </section>
    </main>
  )
}

export default App
