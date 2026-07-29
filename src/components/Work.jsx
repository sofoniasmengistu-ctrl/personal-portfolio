import { ArrowUpRight, MoveRight } from 'lucide-react';
import {
  clientDeliveries,
  experienceHighlights,
  githubFeatured,
} from '../data/products';
import { Reveal } from './Reveal';

const Work = () => {
  return (
    <section id="work" className="section section--tight work">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">01 Cloud DevOps and Engineering</p>
            <h2 className="section__title">
              The work hiring managers <span className="text-accent">should see</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Real roles: Gebeya (Safaricom TKG), one year KodeKloud Senior DevOps,
              ~2 years building Git / Jenkins / Linux / Docker / Kubernetes tasks,
              Azure Data Engineer platforms, and 16+ years from networks to cloud.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/sofonias-mengistu-eng/"
            target="_blank"
            rel="noopener noreferrer"
            className="fancy-arrow"
          >
            <span className="fancy-arrow__label">LinkedIn</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <Reveal className="band" delay={60}>
          <div className="band__head">
            <h3 className="band__title">Experience highlights</h3>
            <p className="band__meta mono h-track-hint">Swipe for more</p>
          </div>
          <div className="h-track">
            {experienceHighlights.map((job) => (
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
        </Reveal>

        <Reveal className="band band--next" delay={80}>
          <div className="band__head">
            <h3 className="band__title">Delivery themes</h3>
            <span className="band__meta mono">Production + consulting</span>
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
        </Reveal>

        <Reveal className="band band--next" delay={100}>
          <div className="band__head">
            <h3 className="band__title">GitHub selected engineering</h3>
            <a
              href="https://github.com/Sofoniasm"
              target="_blank"
              rel="noopener noreferrer"
              className="band__link"
            >
              97+ projects <ArrowUpRight size={14} />
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
        </Reveal>
      </div>
    </section>
  );
};

export default Work;
