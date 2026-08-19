import { useState } from 'react';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import {
  clientDeliveries,
  experienceHighlights,
  githubFeatured,
} from '../data/products';
import { Reveal } from './Reveal';

const Work = () => {
  const [activeJob, setActiveJob] = useState(0);
  const featured = experienceHighlights[activeJob];

  return (
    <section id="work" className="work">
      <div className="partition-stage">
        <div
          className="partition-visual"
          style={{ backgroundImage: "url('/work-cloud-bg.png')" }}
          role="img"
          aria-label="Cloud engineering and multi cloud operations background"
        />
        <div className="partition-veil" aria-hidden="true" />

        <div className="container partition-inner work__inner">
          <Reveal className="section-head section-head--row">
            <div className="section-head__copy">
              <p className="section__label">01 Cloud DevOps and Engineering</p>
              <h2 className="section__title">
                The work hiring managers <span className="text-accent">should see</span>
              </h2>
              <p className="section__lead section__lead--tight">
                Real roles: Gebeya (Safaricom TKG), one year building live products
                (WeRemoteIT web + bot + Android, AuraPay, NexusAI, KubeOptimia FinOps —
                core FDE craft), one year KodeKloud Senior DevOps, ~2 years building
                Git / Jenkins / Linux / Docker / Kubernetes tasks, Azure Data Engineer
                platforms, and 16+ years from networks to cloud.
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

          <Reveal className="dossier" delay={60}>
            <div className="dossier__head">
              <h3 className="band__title">Experience highlights</h3>
              <p className="band__meta mono">
                {String(activeJob + 1).padStart(2, '0')} / {String(experienceHighlights.length).padStart(2, '0')}
              </p>
            </div>

            <div className="dossier__layout">
              <article className="dossier__stage" aria-live="polite">
                <span className="dossier__index mono" aria-hidden="true">
                  {String(activeJob + 1).padStart(2, '0')}
                </span>
                <p className="dossier__channel mono">{featured.channel}</p>
                <h3 className="dossier__title">{featured.title}</h3>
                <p className="dossier__body">{featured.outcome}</p>
                <div className="dossier__tags">
                  {featured.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>

              <div className="dossier__rail" role="listbox" aria-label="Experience highlights">
                {experienceHighlights.map((job, i) => {
                  const selected = i === activeJob;
                  return (
                    <button
                      key={job.title}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      className={`dossier__row${selected ? ' is-active' : ''}`}
                      onClick={() => setActiveJob(i)}
                    >
                      <span className="dossier__row-num mono">{String(i + 1).padStart(2, '0')}</span>
                      <span className="dossier__row-copy">
                        <span className="dossier__row-title">{job.title}</span>
                        <span className="dossier__row-meta">{job.channel}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal className="band band--next" delay={80}>
            <div className="band__head">
              <h3 className="band__title">Delivery themes</h3>
              <span className="band__meta mono">Production + consulting</span>
            </div>
            <ul className="stamps">
              {clientDeliveries.map((job) => (
                <li key={job.title} className="stamp">
                  <span className="stamp__stub">
                    <span className="stamp__channel mono">{job.channel}</span>
                  </span>
                  <div className="stamp__body">
                    <h3 className="stamp__title">{job.title}</h3>
                    <p className="stamp__desc">{job.outcome}</p>
                    <div className="stamp__tags">
                      {job.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
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
            <ul className="repolist">
              {githubFeatured.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repolist__row"
                  >
                    <span className="repolist__dot" aria-hidden="true" />
                    <span className="repolist__copy">
                      <span className="repolist__name">{repo.name}</span>
                      <span className="repolist__desc">{repo.description}</span>
                    </span>
                    <span className="repolist__stack mono">{repo.stack}</span>
                    <ArrowUpRight className="repolist__go" size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Work;
