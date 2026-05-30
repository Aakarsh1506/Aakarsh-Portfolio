import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import profilePhoto from '../Assets/Profile.jpeg';

const NAV = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'];

export default function Portfolio() {
  const [active, setActive] = useState('Home');

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  useEffect(() => {
    const onScroll = () => {
      for (const link of [...NAV].reverse()) {
        const el = document.getElementById(link.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(link);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="bg-wrap" />

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        {NAV.map((link) => (
          <button
            key={link}
            className={`nav-link${active === link ? ' active' : ''}`}
            onClick={() => scrollTo(link)}
          >
            {link}
          </button>
        ))}
      </nav>

      {/* ══════════════════════════════════
          HOME
      ══════════════════════════════════ */}
      <section id="home">
        <div className="home-layout">
          <div>
            <div className="home-tag">
              <span className="home-tag-dot" />
              Available for opportunities
            </div>

            <h1 className="home-name">
              AAKARSH<br />
              <span className="accent">SINGH</span>
            </h1>

            <div className="home-meta">
              <div className="home-meta-line">
                <strong>B.Tech Information Technology</strong>
              </div>
              <div className="home-meta-line">
                SVKM&apos;S NMIMS Mukesh Patel School of Technology Management &amp; Engineering
              </div>
            </div>
          </div>

          <div className="home-photo-col">
            <div className="photo-frame">
              <div className="photo-frame-inner">
                <img src={profilePhoto} alt="Aakarsh Singh" />
              </div>
            </div>

            <div className="home-photo-btns">
              <button className="btn-contact" onClick={() => scrollTo('Contact')}>
                Contact
              </button>
              <a className="btn-resume" href="/Aakarsh_Singh_Resume.pdf" download>
                Resume <span className="btn-arrow">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════
          ABOUT
      ══════════════════════════════════ */}
      <section id="about">
        <div className="sec-header">
          <span className="sec-num">01</span>
          <h2 className="sec-title">About</h2>
          <div className="sec-line" />
        </div>

        <div className="about-body">
          <div className="about-text">
            <p>
              I&apos;m <span className="about-highlight">Aakarsh Singh</span>, an Information Technology
              student at NMIMS MPSTME with a genuine passion for building things on the web. My journey
              into tech started with curiosity about how digital products work — and quickly evolved
              into a craft I take seriously.
            </p>
            <p>
              I work across the full stack — crafting clean frontends with{' '}
              <span className="about-highlight">React.js</span> and building server-side logic with{' '}
              <span className="about-highlight">Node.js</span>. I enjoy problems that sit at the
              intersection of design and engineering.
            </p>
            <p>
              Outside academics, I stay plugged into the tech community through{' '}
              <span className="about-highlight">FOSS</span> and{' '}
              <span className="about-highlight">ACM MPSTME</span>, collaborating and contributing
              alongside brilliant peers. When not coding, I&apos;m likely exploring new frameworks or
              sketching my next side project.
            </p>
          </div>

          <div className="about-stat-col">
            <div className="about-stat">
              <div className="about-stat-num">4+</div>
              <div className="about-stat-label">Years of coding</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">2</div>
              <div className="about-stat-label">Live projects</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">2</div>
              <div className="about-stat-label">Leadership roles</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">Information Technology</div>
              <div className="about-stat-label">B.Tech specialisation</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════
          PROJECTS
      ══════════════════════════════════ */}
      <section id="projects">
        <div className="sec-header">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Projects</h2>
          <div className="sec-line" />
        </div>

        <div className="projects-grid">
          <a
            href="https://fitry-2df38.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-top">
              <div className="project-emoji">🚀</div>
              <div className="project-arrow">↗</div>
            </div>
            <div className="project-name">Fitry</div>
            <p className="project-desc">
              A career-first tech learning platform designed to bridge the gap between academic
              knowledge and industry-ready skills, with practical job-aligned learning paths.
            </p>
            <span className="project-tag">React</span>
            <span className="project-tag">Firebase</span>
          </a>

          <a
            href="https://lumino-show.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-top">
              <div className="project-emoji">🎬</div>
              <div className="project-arrow">↗</div>
            </div>
            <div className="project-name">Lumino.</div>
            <p className="project-desc">
              A sleek web application for browsing and booking tickets for movies and live events,
              with an intuitive interface for discovering shows and securing seats.
            </p>
            <span className="project-tag">React</span>
            <span className="project-tag">Node.js</span>
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════
          EXPERIENCE
      ══════════════════════════════════ */}
      <section id="experience">
        <div className="sec-header">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Experience</h2>
          <div className="sec-line" />
        </div>

        <div className="exp-list">
          <div className="exp-item">
            <div className="exp-period">Apr 2026 — Present</div>
            <div>
              <div className="exp-role">Sub-Head of Technicals</div>
              <div className="exp-org">FOSS MPSTME</div>
            </div>
          </div>

          <div className="exp-item">
            <div className="exp-period">Sep 2025 — May 2026</div>
            <div>
              <div className="exp-role">Executive, Technical Dept.</div>
              <div className="exp-org">ACM MPSTME</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════
          SKILLS
      ══════════════════════════════════ */}
      <section id="skills">
        <div className="sec-header">
          <span className="sec-num">04</span>
          <h2 className="sec-title">Skills</h2>
          <div className="sec-line" />
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-cat">Languages</div>
            <div className="skill-tags">
              {['Java', 'C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS'].map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-cat">Frameworks & Libraries</div>
            <div className="skill-tags">
              {['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'].map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-cat">DevOps & Tools</div>
            <div className="skill-tags">
              {['Git', 'GitHub', 'Firebase'].map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════
          CONTACT
      ══════════════════════════════════ */}
      <section id="contact">
        <div className="sec-header">
          <span className="sec-num">05</span>
          <h2 className="sec-title">Contact</h2>
          <div className="sec-line" />
        </div>

        <div className="contact-inner">
          <p className="contact-headline">
            <span>Let&apos;s build something</span><br />amazing together.
          </p>

          <div className="contact-links">
            <a href="tel:+919833303063" className="contact-item">
              <div className="contact-icon-box">📞</div>
              +91-9833303063
            </a>

            <a href="mailto:singhaakarsh1506@gmail.com" className="contact-item">
              <div className="contact-icon-box">✉️</div>
              singhaakarsh1506@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/aakarsh-singh-173748311"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              LinkedIn — Aakarsh Singh
            </a>

            <a
              href="https://github.com/Aakarsh1506"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              GitHub — Aakarsh Singh
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-text">© 2026 Aakarsh Singh</span>
      </footer>
    </>
  );
}
