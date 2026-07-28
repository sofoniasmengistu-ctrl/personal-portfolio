import { MoveRight } from 'lucide-react';
import { CountUp } from './CountUp';

const ribbon = [
  'Visa · Ethiopian banks',
  'American Embassy · Ubiquiti',
  'Field engineer · 257+ companies',
  'Network specialist · global delivery',
  'Cisco · LAN/WAN · security',
];

const FieldEngineer = () => {
  return (
    <section id="field" className="field">
      <div className="field__stage">
        <div
          className="field__visual"
          style={{ backgroundImage: "url('/field-engineer-bg.png')" }}
          role="img"
          aria-label="Network racks and field engineering infrastructure"
        />
        <div className="field__veil" aria-hidden="true" />

        <div className="container field__inner">
          <div className="field__copy">
            <p className="field__label mono">Network specialist · Field engineer</p>
            <h2 className="field__title">
              Engaged across{' '}
              <span className="field__stat">
                <CountUp end={257} suffix="+" />
              </span>{' '}
              companies worldwide as a field engineer — deploying what teams
              needed on site, under deadline.
            </h2>
            <p className="field__lead">
              Network Specialist work that goes beyond tickets: design, install,
              cutover, and stabilize. Two of the largest deliveries:
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
              Talk field / network delivery
              <MoveRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="field__ribbon" aria-label="Field delivery themes">
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
