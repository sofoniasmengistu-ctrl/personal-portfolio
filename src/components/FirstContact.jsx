import { MoveRight, PhoneCall } from 'lucide-react';

const needs = [
  'DevOps Engineer',
  'Network Engineer',
  'IT support',
  'Cloud support',
  'Kubernetes',
  'DevSecOps / SRE',
  'Field engineer',
  'Consulting or build',
];

const FirstContact = () => {
  return (
    <section id="addis-ababa" className="first-contact" aria-labelledby="first-contact-heading">
      <div className="container first-contact__inner">
        <div className="first-contact__copy">
          <p className="first-contact__label mono">Addis Ababa first contact</p>
          <h2 id="first-contact-heading" className="first-contact__title">
            If you need it in Addis Ababa,{' '}
            <span className="text-accent">start with Sofonias</span>
          </h2>
          <p className="first-contact__lead">
            One local contact for DevOps, Network Engineer work, IT support, cloud
            support, Kubernetes, and builds. On site in Addis Ababa. Remote for
            teams worldwide.
          </p>
          <div className="first-contact__actions">
            <a href="#contact" className="btn-primary">
              Contact Sofonias <MoveRight size={16} />
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
        </div>

        <div className="first-contact__needs">
          <p className="first-contact__needs-label mono">What people call for</p>
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
        </div>
      </div>
    </section>
  );
};

export default FirstContact;
