import { ArrowUpRight, Github } from 'lucide-react';
import { clientDeliveries, githubFeatured } from '../data/products';

const Work = () => {
  return (
    <section id="work" className="section work">
      <div className="container">
        <p className="section__label">02 — Work</p>
        <h2 className="section__title">
          Engineering &amp; <span className="text-gradient">client delivery</span>
        </h2>
        <p className="section__lead">
          Same craft, two surfaces — open-source builds and remote consulting.
        </p>

        <div className="band">
          <div className="band__head">
            <h3 className="band__title">GitHub · selected</h3>
            <a
              href="https://github.com/Sofoniasm"
              target="_blank"
              rel="noopener noreferrer"
              className="band__link"
            >
              <Github size={16} /> All projects
            </a>
          </div>
          <div className="h-track">
            {githubFeatured.map((repo) => (
              <a
                key={repo.href}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card h-track__item"
              >
                <span className="work-card__stack">{repo.stack}</span>
                <h3 className="work-card__title">{repo.name}</h3>
                <p className="work-card__desc">{repo.description}</p>
                <span className="work-card__cta mono">
                  View repo <ArrowUpRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="band band--next">
          <div className="band__head">
            <h3 className="band__title">Upwork · consulting</h3>
            <span className="band__meta mono">Cloud · Kubernetes · platforms</span>
          </div>
          <div className="h-track">
            {clientDeliveries.map((job) => (
              <article key={job.title} className="work-card h-track__item">
                <span className="work-card__channel">{job.channel}</span>
                <h3 className="work-card__title">{job.title}</h3>
                <p className="work-card__desc">{job.outcome}</p>
                <div className="work-card__tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="work-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
