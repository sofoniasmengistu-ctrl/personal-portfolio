import { ArrowUpRight, Github } from 'lucide-react';
import { githubFeatured } from '../data/products';

const Engineering = () => {
  return (
    <section id="engineering" className="section">
      <div className="container">
        <p className="section__label">02 — Engineering</p>
        <h2 className="section__title">
          GitHub work, <span className="text-gradient">selected</span>
        </h2>
        <p className="section__lead">
          97+ public projects. Here are the ones that show how I build —
          Terraform, Kubernetes, data platforms, and production AWS.
        </p>

        <div className="work-grid work-grid--3">
          {githubFeatured.map((repo) => (
            <a
              key={repo.href}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card"
            >
              <span className="work-card__stack">{repo.stack}</span>
              <h3 className="work-card__title">{repo.name}</h3>
              <p className="work-card__desc">{repo.description}</p>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-teal)' }}>
                View repo <ArrowUpRight size={12} style={{ display: 'inline', verticalAlign: '-1px' }} />
              </span>
            </a>
          ))}
        </div>

        <div className="work-footer">
          <a
            href="https://github.com/Sofoniasm"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={18} /> All projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
