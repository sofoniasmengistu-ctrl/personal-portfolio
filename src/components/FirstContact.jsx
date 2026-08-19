import { MoveRight, PhoneCall } from 'lucide-react';
import { Reveal } from './Reveal';

const needs = [
  'Cloud Platform Architect',
  'DevOps Engineer',
  'Kubernetes',
  'DevSecOps / SRE',
  'Azure Data Engineer',
  'Consulting or build',
];

const FirstContact = () => {
  return (
    <section id="addis-ababa" className="first-contact" aria-labelledby="first-contact-heading">
      <div className="container first-contact__inner">
        <Reveal className="first-contact__copy">
          <p className="first-contact__label mono">Addis Ababa base · remote worldwide</p>
          <h2 id="first-contact-heading" className="first-contact__title">
            Hire Cloud DevOps from Addis Ababa,{' '}
            <span className="text-accent">for teams anywhere</span>
          </h2>
          <p className="first-contact__lead">
            Cloud Platform Architect and DevOps Engineer for Kubernetes, CI/CD,
            and production platforms. Based in Addis Ababa. Remote worldwide.
            First 15 minutes are free. On-site network work lives on the{' '}
            <a href="/network-engineer-ethiopia/">Network Engineer Ethiopia</a> page.
          </p>
          <div className="first-contact__actions">
            <a
              href="https://wa.me/251912215057?text=Hi%20Sofonias%2C%20I%20want%20a%20free%2015%20minute%20consultation"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free 15 min consult <MoveRight size={16} />
            </a>
            <a href="#pricing" className="btn-dark">
              See pricing
            </a>
            <a href="#location" className="btn-dark">
              Open map
            </a>
            <a
              href="https://wa.me/251912215057"
              className="btn-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneCall size={16} /> WhatsApp now
            </a>
          </div>
        </Reveal>

        <Reveal className="first-contact__needs" delay={120}>
          <p className="first-contact__needs-label mono">What people hire for</p>
          <ul className="first-contact__list">
            {needs.map((need) => (
              <li key={need} className="first-contact__item">
                <span className="first-contact__tick" aria-hidden="true">
                  +
                </span>
                <span>{need}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default FirstContact;
