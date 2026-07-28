import { trustMetrics, trustCertifications } from '../data/products';
import { CountUp } from './CountUp';
import { Reveal } from './Reveal';

const Trust = () => {
  return (
    <section className="trust section--tight" aria-label="Credentials at a glance">
      <div className="container">
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
          <p className="trust__certs-label mono">Certifications</p>
          <div className="trust__certs-row">
            {trustCertifications.map((cert) => (
              <span key={cert} className="trust__cert">
                {cert}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Trust;
