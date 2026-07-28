import { ExternalLink } from 'lucide-react';
import { companyChannels } from '../data/products';

const Presence = () => {
  return (
    <section id="presence" className="section section--tight presence">
      <div className="container">
        <p className="section__label">02 — Company</p>
        <h2 className="section__title">
          WeRemoteIT <span className="text-gradient">presence</span>
        </h2>
        <p className="section__lead">
          Official company channels — product news, demos, and long-form writing.
        </p>

        <div className="presence__grid">
          {companyChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="presence__link"
            >
              <span className="presence__label">{channel.label}</span>
              <span className="presence__handle mono">{channel.handle}</span>
              <span className="presence__note">
                {channel.note} <ExternalLink size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presence;
