import { MapPin, MoveRight, Navigation } from 'lucide-react';
import { credentials, location, professionalEmails } from '../data/products';
import { Reveal } from './Reveal';

const Location = () => {
  return (
    <section id="location" className="section section--tight location" aria-labelledby="location-heading">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">Find Sofonias</p>
            <h2 id="location-heading" className="section__title">
              Addis Ababa on the map.{' '}
              <span className="text-accent">Same listing on Google.</span>
            </h2>
            <p className="section__lead section__lead--tight">
              On site in Addis Ababa. Remote worldwide. Open the Google listing
              for directions, call, and WhatsApp.
            </p>
          </div>
          <a
            href={location.mapsQuery}
            className="fancy-arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fancy-arrow__label">Open in Google Maps</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <div className="location__grid">
          <Reveal className="location__map-wrap">
            <iframe
              className="location__map"
              title="Sofonias Mengistu · Africa Avenue, Addis Ababa"
              src={location.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <Reveal className="location__card" delay={80}>
            <p className="location__kicker mono">
              <MapPin size={16} strokeWidth={2.25} />
              Google Business Profile
            </p>
            <h3 className="location__name">{location.name}</h3>
            <p className="location__meta">
              Cloud Platform Architect · {location.street}, {location.city}{' '}
              {location.postalCode}
            </p>
            <p className="location__hours">{location.hours}</p>
            <p className="location__hours">{location.timezone}</p>

            <ul className="location__emails">
              {professionalEmails.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.email}</a>
                  <span className="mono">{item.note}</span>
                </li>
              ))}
            </ul>

            <div className="location__actions">
              <a
                href={location.mapsQuery}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={16} /> Get directions
              </a>
              <a
                href={location.profileSearch}
                className="btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Google profile
              </a>
              <a href={`mailto:${credentials.email}`} className="btn-dark">
                Email Sofonias
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Location;
