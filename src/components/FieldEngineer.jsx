import { Check, MoveRight, Plus } from 'lucide-react';
import { CountUp } from './CountUp';

const regions = [
  'Great Britain',
  'USA',
  'Dubai',
  'Singapore',
  'Pakistan',
];

const scope = [
  'Design',
  'Install',
  'Cutover',
  'Stabilize',
];

const projects = [
  {
    kicker: '01 National banking',
    title: 'Visa routers across all Ethiopian banks',
    body: 'Nationwide Visa connectivity so banks shared one production ready network path.',
  },
  {
    kicker: '02 Diplomatic site',
    title: 'American Embassy Huawei to Ubiquiti',
    body: 'Removed Huawei completely and installed Ubiquiti so the site finished in one pass.',
  },
];

const ribbon = [
  ...regions,
  'Visa routers for Ethiopian banks',
  'American Embassy Ubiquiti cutover',
  'Managed source partners',
];

const FieldEngineer = () => {
  return (
    <section id="field" className="field">
      <div className="field__stage">
        <div
          className="field__visual"
          style={{ backgroundImage: "url('/field-engineer-bg.png')" }}
          role="img"
          aria-label="Network engineering infrastructure background"
        />
        <div className="field__veil" aria-hidden="true" />

        <div className="container field__inner">
          <p className="field__label mono">Network Engineer and field support</p>

          <div className="field__layout">
            <div className="field__intro">
              <div className="field__metric" aria-label="37 tech companies">
                <span className="field__metric-value">
                  <CountUp end={37} suffix="" />
                </span>
                <span className="field__metric-label">tech companies</span>
              </div>

              <div className="field__intro-copy">
                <h2 className="field__title">
                  Network Engineer for on site support across five regions
                </h2>
                <p className="field__lead">
                  Managed source partners engaged me for enterprise network work.
                  Full Network Engineer delivery, not ticket only support.
                </p>
              </div>
            </div>

            <div className="field__blocks">
              <div className="field__block">
                <p className="field__block-label mono">Regions covered</p>
                <ul className="field__checks">
                  {regions.map((region) => (
                    <li key={region} className="field__check">
                      <span className="field__check-mark" aria-hidden="true">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span>{region}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="field__block">
                <p className="field__block-label mono">What I delivered</p>
                <ul className="field__pluses">
                  {scope.map((item) => (
                    <li key={item} className="field__plus">
                      <span className="field__plus-mark" aria-hidden="true">
                        <Plus size={14} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="field__projects-wrap">
              <p className="field__block-label mono">Standout projects</p>
              <div className="field__projects">
                {projects.map((project) => (
                  <article key={project.kicker} className="field__project">
                    <p className="field__project-kicker mono">{project.kicker}</p>
                    <h3 className="field__project-title">{project.title}</h3>
                    <p className="field__project-body">{project.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <a href="#contact" className="btn-primary field__cta">
              Talk network engineering
              <MoveRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="field__ribbon" aria-label="Regions and delivery themes">
        <div className="field__ribbon-track">
          {[...ribbon, ...ribbon].map((item, i) => (
            <span key={`${item}-${i}`} className="field__ribbon-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldEngineer;
