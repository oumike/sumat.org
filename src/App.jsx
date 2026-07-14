const projects = [
  {
    name: 'Indie Books of Detroit',
    url: 'https://www.indiebooksofdetroit.com',
    label: 'www.indiebooksofdetroit.com',
  },
  {
    name: 'Camillia',
    url: 'https://camillia.sumat.org',
    label: 'camillia.sumat.org',
  },
  {
    name: 'Plumeria',
    url: 'https://plumeria.sumat.org',
    label: 'plumeria.sumat.org',
  },
]

const meshRelated = [
  {
    name: 'Potato',
    url: 'https://potato.sumat.org',
    label: 'potato.sumat.org',
  },
  {
    name: 'MichMesh',
    url: 'https://michmesh.com',
    label: 'michmesh.com',
  },
  {
    name: 'MeshCore',
    url: 'https://meshcore.io',
    label: 'meshcore.io'
  },
  {
    name: "Meshtastic",
    url: 'https://meshtastic.org',
    label: 'meshtastic.org',
  }
]

const awesomeProjects = [
    {
        name: 'WADAMESH',
        url: 'https://www.wadamesh.com',
        label: 'wadamesh.com'
    },
    {
        name: 'SigurdOS',
        url: 'https://www.sigurdos.dev',
        label: 'www.sigurdos.dev',
    },
    {
        name: 'Ratspeak',
        url: 'https://ratspeak.org',
        label: 'ratspeak.org',
    },
    {
        name: 'Plai (for Cardputer)',
        url: 'https://github.com/d4rkmen/plai',
        label: 'github.com/d4rkmen/plai'
    }
]

function App() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="projects-heading">
        <h1><p className="eyebrow">Sumat.Org</p></h1>
        <h2 id="projects-heading">Projects</h2>
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
                <span className="project-name">{project.name}</span>
                <span className="project-url">{project.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <section className="awesome-projects-section" aria-labelledby="awesome-projects-heading">
          <h2 id="awesome-projects-heading" className="section-title">
            Awesome Projects
          </h2>
          <ul className="project-list mesh-list">
            {awesomeProjects.map((project) => (
              <li key={project.url} className="project-item">
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-name">{project.name}</span>
                  <span className="project-url">{project.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="mesh-section" aria-labelledby="mesh-related-heading">
          <h2 id="mesh-related-heading" className="section-title">
            Mesh Related
          </h2>
          <ul className="project-list mesh-list">
            {meshRelated.map((project) => (
              <li key={project.url} className="project-item">
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-name">{project.name}</span>
                  <span className="project-url">{project.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  )
}

export default App
