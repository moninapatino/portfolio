import { useState } from "react";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M14 5l-4 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AudioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 14v-4M8 17V7M12 20V4M16 16V8M20 14v-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const projects = [
  {
    number: "01",
    title: "MotorPH",
    subtitle: "Payroll Management System",
    description:
      "A Java-based desktop payroll system designed in NetBeans to streamline employee records, attendance, salary calculations, and payroll processing.",
    tags: ["Java", "NetBeans", "Desktop App"],
    tone: "coral",
    visual: (
      <div className="payroll-visual" aria-hidden="true">
        <div className="visual-window">
          <div className="visual-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="visual-body">
            <div className="visual-sidebar">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="visual-content">
              <div className="visual-heading" />
              <div className="stat-row">
                <b />
                <b />
                <b />
              </div>
              <div className="data-lines">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Kabaranggay Connect",
    subtitle: "Centralized Barangay Web App",
    description:
      "A capstone web application that makes local services more accessible through centralized document requests and incident reporting.",
    tags: ["Web Development", "UX Design", "Capstone"],
    tone: "blue",
    visual: (
      <div className="barangay-visual" aria-hidden="true">
        <div className="map-grid" />
        <div className="map-pin">
          <span />
        </div>
        <div className="request-card">
          <small>REQUEST STATUS</small>
          <strong>In progress</strong>
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Tray Tayo",
    subtitle: "Collaborative Web Application",
    description:
      "A team-built web application that turns a shared idea into a simple, approachable digital experience with an emphasis on usability.",
    tags: ["Web App", "Team Project", "UI Design"],
    tone: "yellow",
    visual: (
      <div className="tray-visual" aria-hidden="true">
        <div className="tray-circle">
          <div className="tray-plate">
            <span />
            <span />
            <span />
          </div>
          <div className="tray-handle" />
        </div>
        <div className="tray-copy">
          <b>TRAY</b>
          <span>TAYO</span>
        </div>
      </div>
    ),
  },
];

const experience = [
  {
    company: "The Sound Team",
    role: "Audiobook Editor",
    date: "May 2023 — Present",
    detail:
      "Edit and quality-check audiobook recordings in Reaper while balancing multiple projects, deadlines, and team coordination. Maintain consistent audio quality and narration style through a keen attention to detail.",
    skills: ["Reaper", "Audio Editing", "Quality Control"],
  },
  {
    company: "MyMenu",
    role: "Support Executive",
    date: "Feb 2021 — Jul 2021",
    detail:
      "Handled office administration across Outlook, HubSpot, and Gmail; supported basic website SEO; and maintained accurate data for the company’s products and services.",
    skills: ["HubSpot", "SEO", "Data Entry"],
  },
  {
    company: "Upwork",
    role: "Freelance Social Media Assistant",
    date: "Apr 2018 — Oct 2018",
    detail:
      "Managed four Instagram and Facebook accounts, tracked daily tasks, and handled customer conversations through Instagram messages and Facebook chats.",
    skills: ["Social Media", "Task Management", "Client Support"],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Portfolio home">
          MP<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-kicker">
            <span /> PORTFOLIO / 2025
          </div>
          <h1>
            I bring <em>clarity</em>
            <br />
            to sound &amp; screens.
          </h1>
          <div className="hero-footer">
            <p>
              Aspiring developer and experienced audio editor crafting digital work with care,
              curiosity, and a sharp eye for detail.
            </p>
            <a className="circle-link" href="#work" aria-label="View selected work">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14m0 0 6-6m-6 6-6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="hero-mark mark-code">
            <CodeIcon />
          </div>
          <div className="hero-mark mark-audio">
            <AudioIcon />
          </div>
          <div className="hero-orbit" />
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2>
                Projects built with
                <br />
                purpose.
              </h2>
            </div>
            <p>
              Academic and collaborative projects that turn real needs into practical,
              people-focused digital tools.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual ${project.tone}`}>{project.visual}</div>
                <div className="project-info">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <h4>{project.subtitle}</h4>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading light-heading">
            <div>
              <span className="eyebrow">02 / EXPERIENCE</span>
              <h2>
                Where I've
                <br />
                made an impact.
              </h2>
            </div>
            <p>
              Remote work has taught me to be resourceful, organized, and dependable across
              different teams and disciplines.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-row" key={item.company}>
                <span className="timeline-index">0{index + 1}</span>
                <div className="timeline-title">
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <div className="timeline-detail">
                  <time>{item.date} · Remote</time>
                  <p>{item.detail}</p>
                  <div className="tag-list dark-tags">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-intro">
            <span className="eyebrow">03 / ABOUT ME</span>
            <h2>
              Technical thinking.
              <br />
              <em>Human touch.</em>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-portrait" aria-hidden="true">
              <div className="portrait-shape">
                <CodeIcon />
              </div>
              <span className="portrait-note">
                BASED IN THE
                <br />
                PHILIPPINES
              </span>
            </div>
            <div className="about-copy">
              <p className="lead">
                I’m an aspiring tech professional with a background that moves between precise audio
                work, customer support, and hands-on software development.
              </p>
              <p>
                Whether I’m cleaning up a narration, organizing product data, or building a web
                application with a team, I care about making the end result clear, reliable, and
                useful.
              </p>
              <div className="skills-block">
                <h3>TOOLS &amp; STRENGTHS</h3>
                <div className="skills-cloud">
                  {[
                    "Java",
                    "NetBeans",
                    "Web Development",
                    "Reaper",
                    "Audio Editing",
                    "SEO",
                    "HubSpot",
                    "Data Entry",
                    "Social Media",
                    "Team Collaboration",
                  ].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">04 / GET IN TOUCH</span>
          <h2>
            Have an opportunity
            <br />
            in mind? <em>Let's talk.</em>
          </h2>
          <p>
            I’m currently open to internship opportunities where I can contribute, learn, and grow
            with a great team.
          </p>
          <a className="contact-button" href="mailto:lr.mapatino@mmdc.mcl.edu.ph">
            lr.mapatino@mmdc.mcl.edu.ph <ArrowUpRight />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          MP<span>.</span>
        </a>
        <p>Designed with intention. Built with React.</p>
        <div className="social-links">
          <a href="https://github.com/moninapatino" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}
