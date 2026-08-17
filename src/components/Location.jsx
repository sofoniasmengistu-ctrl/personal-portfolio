import {
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  MoveRight,
  Navigation,
} from 'lucide-react';
import { credentials, location, professionalEmails } from '../data/products';
import { Reveal } from './Reveal';

const ticker = [
  { icon: MapPin, label: 'On site · Addis Ababa' },
  { icon: Globe, label: 'Remote worldwide' },
  { icon: Clock, label: location.timezone },
  { icon: Navigation, label: 'By appointment' },
];

const Location = () => {
  return (
    <section id="location" className="section location" aria-labelledby="location-heading">
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

        <Reveal className="location__stage" variant="scale">
          <div className="location__hud" aria-hidden="true">
            <span className="location__hud-coords mono">
              <span className="location__crosshair" />
              {location.latLabel}
              <span className="location__hud-sep">·</span>
              {location.lngLabel}
            </span>
            <span className="location__live">
              <span className="location__live-dot" />
              Live on Google
            </span>
            <span className="location__hud-city mono">
              {location.street} · {location.iata}
            </span>
          </div>

          <div className="location__viewport">
            <div className="location__map-frame">
              <span className="location__corner location__corner--tl" aria-hidden="true" />
              <span className="location__corner location__corner--tr" aria-hidden="true" />
              <span className="location__corner location__corner--bl" aria-hidden="true" />
              <span className="location__corner location__corner--br" aria-hidden="true" />
              <span className="location__scan" aria-hidden="true" />
              <span className="location__vignette" aria-hidden="true" />
              <iframe
                className="location__map"
                title="Sofonias Mengistu · Africa Avenue, Addis Ababa"
                src={location.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <article className="location__card">
              <div className="location__card-top">
                <p className="location__kicker mono">
                  <MapPin size={15} strokeWidth={2.25} />
                  Google Business Profile
                </p>
                <span className="location__avail">
                  <span className="location__avail-dot" aria-hidden="true" />
                  Available now
                </span>
              </div>

              <h3 className="location__name">{location.name}</h3>
              <p className="location__role">
                Cloud Platform Architect · DevOps · Data · Network
              </p>
              <p className="location__meta">
                {location.street}, {location.city} {location.postalCode},{' '}
                {location.country}
              </p>
              <p className="location__hours">{location.hours}</p>

              <ul className="location__emails">
                {professionalEmails.map((item) => (
                  <li key={item.id}>
                    <Mail size={14} strokeWidth={2.25} aria-hidden="true" />
                    <div>
                      <a href={item.href}>{item.email}</a>
                      <span className="mono">{item.note}</span>
                    </div>
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
                  href={location.whatsapp}
                  className="btn-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} /> WhatsApp
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
            </article>
          </div>

          <ul className="location__ticker">
            {ticker.map((item) => (
              <li key={item.label}>
                <item.icon size={14} strokeWidth={2.25} aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Location;
