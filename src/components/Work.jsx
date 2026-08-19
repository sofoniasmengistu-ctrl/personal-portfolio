import { ArrowUpRight, MoveRight } from 'lucide-react';
import { experienceHighlights, githubFeatured } from '../data/products';
import { Reveal } from './Reveal';

const Work = () => {
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
                Current job: Cloud Platform Architect at Addis Telco. My companies:
                WeRemoteIT (weremoteit.com) and AuraPay Global (aurapayglobal.com).
                Also Gebeya DevOps, Tefer Cloud DevOps, 11+ Upwork Azure Data
                Engineer projects, JSI, ECX, and Custor Computing PLC.
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

          <Reveal className="path">
            <ol className="path__list">
              {experienceHighlights.map((job) => (
                <li key={job.title} className="path__item">
                  <span className="path__era mono">{job.era}</span>
                  <span className="path__dot" aria-hidden="true" />
                  <div className="path__copy">
                    <p className="path__when">{job.channel}</p>
                    <h3 className="path__title">{job.title}</h3>
                    <p className="path__body">{job.outcome}</p>
                    {job.links ? (
                      <p className="path__links">
                        {job.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        ))}
                      </p>
                    ) : null}
                    <div className="path__tags">
                      {job.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="band band--next" delay={80}>
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
