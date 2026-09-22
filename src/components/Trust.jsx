import { useState } from 'react';
import {
  trustMetrics,
  trustKubestronautCerts,
  trustAzureCertifications,
  trustAzureProfileHref,
  trustAwsAndCiscoCertifications,
} from '../data/products';
import { CountUp } from './CountUp';
import { Reveal } from './Reveal';

const Trust = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="trust trust--loud" aria-label="Credentials at a glance">
      <div className="partition-stage">
        <div
          className="partition-visual"
          style={{ backgroundImage: "url('/trust-certs-bg.jpg')" }}
          role="img"
          aria-label="Cloud and networking certifications background"
        />
        <div className="partition-veil partition-veil--deep" aria-hidden="true" />

        <div className="container partition-inner trust__inner">
          <Reveal className="trust__intro">
            <p className="section__label section__label--on-dark">Proof</p>
            <h2 className="section__title section__title--display section__title--on-dark">
              Credentials that hire for{' '}
              <span className="text-accent">confidence</span>
            </h2>
          </Reveal>

          <div className="trust__grid trust__grid--on-dark">
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

          <Reveal className="trust__certs trust__certs--on-dark" delay={180}>
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

            <div
              id="trust-more-creds"
              className={`trust__more${showAll ? ' is-open' : ''}`}
              hidden={!showAll}
            >
              <div className="trust__creds-head">
                <p className="trust__certs-label trust__certs-label--next mono">
                  Microsoft Azure credentials
                </p>
                <a
                  href={trustAzureProfileHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trust__creds-link mono"
                >
                  View on Microsoft Learn
                </a>
              </div>
              <div className="trust__cred-track" role="list">
                {trustAzureCertifications.map((cert) => (
                  <a
                    key={cert.id}
                    href={trustAzureProfileHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trust__cred"
                    role="listitem"
                  >
                    <img
                      src={cert.logo}
                      alt=""
                      className="trust__cred-badge"
                      aria-hidden="true"
                    />
                    <span className="trust__cred-copy">
                      <span className="trust__cred-level mono">{cert.level}</span>
                      <span className="trust__cred-title">{cert.title}</span>
                    </span>
                  </a>
                ))}
              </div>

              <p className="trust__certs-label trust__certs-label--next mono">
                AWS Solutions Architect and Cisco
              </p>
              <div className="trust__badge-row" role="list">
                {trustAwsAndCiscoCertifications.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`trust__badge trust__badge--wide${cert.id === 'aws-sa' ? ' trust__badge--aws' : ''}`}
                    role="listitem"
                    title={cert.title}
                  >
                    <img src={cert.logo} alt="" className="trust__badge-img" aria-hidden="true" />
                    <span className="trust__badge-label mono">{cert.title}</span>
                    <span className="trust__badge-note">{cert.note}</span>
                  </a>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="trust__toggle trust__toggle--on-dark mono"
              aria-expanded={showAll}
              aria-controls="trust-more-creds"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? 'Hide Azure, AWS, Cisco' : 'All credentials'}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Trust;
