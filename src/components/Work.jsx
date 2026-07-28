import { ArrowUpRight, Github, MoveRight } from 'lucide-react';
import { clientDeliveries, githubFeatured } from '../data/products';

const Work = () => {
  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">01 Cloud DevOps · Engineering</p>
            <h2 className="section__title">
              The work hiring managers <span className="text-accent">should see</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Production infra, Kubernetes, and platform delivery: open source and
              client work. This is the Cloud DevOps profile.
            </p>
          </div>
          <a
            href="https://github.com/Sofoniasm"
            target="_blank"
            rel="noopener noreferrer"
            className="fancy-arrow"
          >
            <span className="fancy-arrow__label">GitHub</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </div>

        <div className="band">
          <div className="band__head">
            <h3 className="band__title">GitHub · selected engineering</h3>
            <p className="band__meta mono h-track-hint">Swipe for more</p>
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
            <h3 className="band__title">Upwork · consulting delivery</h3>
            <span className="band__meta mono">Hire for the same craft</span>
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
