import { useEffect, useRef, useState } from 'react';
import { trustMetrics, trustCertifications } from '../data/products';

function CountUp({ end, suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    let frame = 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(end * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

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
