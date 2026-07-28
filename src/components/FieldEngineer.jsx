import { MoveRight } from 'lucide-react';
import { CountUp } from './CountUp';

const ribbon = [
  'Great Britain',
  'USA',
  'Dubai',
  'Singapore',
  'Pakistan',
  'Visa routers for Ethiopian banks',
  'American Embassy Ubiquiti cutover',
  'Network Engineer field support',
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
            <p className="field__label mono">Network Engineer and field support</p>
            <h2 className="field__title">
              I supported{' '}
              <span className="field__stat">
                <CountUp end={37} suffix="" />
              </span>{' '}
              tech companies as a Network Engineer across Great Britain, the USA,
              Dubai, Singapore, and Pakistan.
            </h2>
            <p className="field__lead">
              Managed source partners engaged me for on site network support. The
              work was full Network Engineer delivery: design, install, cutover,
              and stabilize for enterprise networks. Not ticket only support.
              Two projects stand out.
            </p>

            <ul className="field__projects">
              <li>
                <span className="field__project-kicker mono">National banking</span>
                <strong>Visa router deployment across all Ethiopian banks</strong>
                <span>
                  I rolled out Visa connectivity nationwide so banks shared a
                  consistent production ready network path.
                </span>
              </li>
              <li>
                <span className="field__project-kicker mono">Diplomatic site</span>
                <strong>American Embassy: Huawei removed, Ubiquiti installed</strong>
                <span>
                  I removed the Huawei equipment completely and replaced it with
                  Ubiquiti so the site finished the migration in one pass.
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
