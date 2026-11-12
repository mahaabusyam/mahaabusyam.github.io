import { profile } from '../data/profile'
import './Hero.css'

const stack = ['React', 'TypeScript', 'Redux Toolkit', 'Zustand', 'Material UI', 'Tailwind']

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <div className="badge reveal d1">
          <span className="badge-dot" />
          Open to Frontend junior roles
        </div>

        <h1 className="hero-title reveal d2">
                    Hi, I&apos;m <span className="name-glow">Maha</span>
          <br />
          Front-End Developer crafting scalable &amp; responsive{' '}
          <span className="accent">React</span> applications
          <span className="caret" aria-hidden="true" />
        </h1>

        <p className="hero-desc reveal d3">
          Frontend developer working with React and TypeScript. I care about clean state management,
          data validation and accessible, responsive UI.
        </p>

        <div className="hero-actions reveal d4">
          <a className="btn btn-primary" href="#projects">
            View projects
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="hero-chips reveal d5">
          {stack.map((name) => (
            <span key={name} className="chip">
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-visual reveal d4">
        <div className="code-card">
          <div className="code-bar">
            <span className="dot dot-rose" />
            <span className="dot dot-amber" />
            <span className="dot dot-teal" />
            <span className="code-file">maha.ts</span>
          </div>
          <pre className="code">
            <code>
              <span className="code-line">
                <span className="tk-kw">const</span> maha = {'{'}
              </span>
              <span className="code-line indent">
                role: <span className="tk-str">{'"Frontend Developer"'}</span>,
              </span>
              <span className="code-line indent">
                stack: [<span className="tk-teal">{'"React"'}</span>,{' '}
                <span className="tk-teal">{'"TypeScript"'}</span>],
              </span>
              <span className="code-line indent">
                education: <span className="tk-str">{'"Computer Systems Engineering"'}</span>,
              </span>
              <span className="code-line indent">
                focus: <span className="tk-str">{'"clean state & validation"'}</span>,
              </span>
              <span className="code-line indent">
                location: <span className="tk-str">{`"${profile.location}"`}</span>,
              </span>
              <span className="code-line indent">
                openToWork: <span className="tk-bool">true</span>,
              </span>
              <span className="code-line">{'};'}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}