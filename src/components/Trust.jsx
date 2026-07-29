import {
  trustMetrics,
  trustKubestronautCerts,
  trustPlatformCertifications,
} from '../data/products';
import { CountUp } from './CountUp';
import { Reveal } from './Reveal';

const Trust = () => {
  return (
    <section className="trust section--tight" aria-label="Credentials at a glance">
      <div className="partition-stage">
        <div
          className="partition-visual"
          style={{ backgroundImage: "url('/trust-certs-bg.jpg')" }}
          role="img"
          aria-label="Cloud and networking certifications background"
        />
        <div className="partition-veil" aria-hidden="true" />

        <div className="container partition-inner trust__inner">
          <div className="trust__grid">
            {trustMetrics.map((item, i) => {
              const Inner = (
                <>
                  <p className="trust__value">
                    {item.count != null ? (
                      <CountUp end={item.count} suffix={item.suffix || ''} />
                    ) : (
                      item.value
                    )}
                  </p>
                  <p className="trust__label">{item.label}</p>
                </>
              );
              return (
                <Reveal key={item.label} className="trust__reveal" delay={i * 70} variant="scale">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="trust__item"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div className="trust__item">{Inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal className="trust__certs" delay={180}>
            <p className="trust__certs-label mono">Kubestronaut certifications</p>
            <div className="trust__badge-row" role="list">
              {trustKubestronautCerts.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trust__badge"
                  role="listitem"
                  title={cert.label}
                >
                  <img src={cert.logo} alt={`${cert.label} certification`} className="trust__badge-img" />
                  <span className="trust__badge-label mono">{cert.label}</span>
                </a>
              ))}
            </div>

            <p className="trust__certs-label trust__certs-label--next mono">
              Azure, AWS, and Cisco
            </p>
            <div className="trust__badge-row" role="list">
              {trustPlatformCertifications.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trust__badge trust__badge--platform"
                  role="listitem"
                  title={`${cert.label} · ${cert.note}`}
                >
                  <img src={cert.logo} alt={`${cert.label} certification`} className="trust__badge-img" />
                  <span className="trust__badge-label mono">{cert.label}</span>
                  <span className="trust__badge-note">{cert.note}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Trust;
