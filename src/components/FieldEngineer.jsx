import { MoveRight } from 'lucide-react';
import { CountUp } from './CountUp';

const ribbon = [
  'Great Britain',
  'USA',
  'Dubai',
  'Singapore',
  'Pakistan',
  'Visa · Ethiopian banks',
  'American Embassy · Ubiquiti',
  'Network Engineer · field support',
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
          <div className="field__copy">
            <p className="field__label mono">Network Engineer · Field support</p>
            <h2 className="field__title">
              Network Engineer for{' '}
              <span className="field__stat">
                <CountUp end={37} suffix="" />
              </span>{' '}
              tech companies across GB, USA, Dubai, Singapore, and Pakistan —
              engaged through managed-source partners for on-site network
              support.
            </h2>
            <p className="field__lead">
              Full Network Engineer delivery: design, install, cutover, and
              stabilize. Field engineer support for enterprise networks — not
              ticket-only work. Two standout projects:
            </p>

            <ul className="field__projects">
              <li>
                <span className="field__project-kicker mono">01 · National banking</span>
                <strong>Visa router deployment across all Ethiopian banks</strong>
                <span>
                  Nationwide rollout so banks could run Visa connectivity on a
                  consistent, production-ready network path.
                </span>
              </li>
              <li>
                <span className="field__project-kicker mono">02 · Diplomatic site</span>
                <strong>American Embassy: Huawei out, Ubiquiti in</strong>
                <span>
                  Full removal of Huawei gear and replacement with Ubiquiti —
                  end-to-end swap without leaving the site half-migrated.
                </span>
              </li>
            </ul>

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
