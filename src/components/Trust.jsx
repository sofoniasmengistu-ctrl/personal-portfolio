import { trustMetrics, trustCertifications } from '../data/products';
import { CountUp } from './CountUp';

const Trust = () => {
  return (
    <section className="trust section--tight" aria-label="Credentials at a glance">
      <div className="container">
        <div className="trust__grid">
          {trustMetrics.map((item) => {
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
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="trust__item"
              >
                {Inner}
              </a>
            ) : (
              <div key={item.label} className="trust__item">
                {Inner}
              </div>
            );
          })}
        </div>

        <div className="trust__certs">
          <p className="trust__certs-label mono">Certifications</p>
          <div className="trust__certs-row">
            {trustCertifications.map((cert) => (
              <span key={cert} className="trust__cert">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
