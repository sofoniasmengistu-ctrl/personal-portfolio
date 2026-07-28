import { ExternalLink } from 'lucide-react';
import { companyChannels } from '../data/products';

const pillars = [
  {
    num: '01',
    title: 'Mini Apps + bots',
    body: 'Telegram-native surfaces with wallets, hiring flows, and AI.',
  },
  {
    num: '02',
    title: 'Owned communities',
    body: 'Channels and groups per product — updates and support in-chat.',
  },
  {
    num: '03',
    title: 'Operated end-to-end',
    body: 'Cloud, Kubernetes, CI/CD, security — the stack that keeps them live.',
  },
];

const Approach = () => {
  return (
    <section id="approach" className="section section--tight approach section--muted">
      <div className="container">
        <p className="section__label">03 — Approach</p>
        <h2 className="section__title">
          Built where people <span className="text-gradient">already are</span>
        </h2>
        <p className="section__lead">
          Chat is the interface. Infrastructure stays invisible.
        </p>

        <div className="split-row">
          {pillars.map((item) => (
            <div key={item.num} className="pillar">
              <span className="pillar__num mono">{item.num}</span>
              <h3 className="pillar__title">{item.title}</h3>
              <p className="pillar__body">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="band band--next">
          <div className="band__head">
            <h3 className="band__title">WeRemoteIT channels</h3>
          </div>
          <div className="split-row split-row--3">
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
      </div>
    </section>
  );
};

export default Approach;
