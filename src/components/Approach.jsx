import { ExternalLink } from 'lucide-react';
import { companyChannels } from '../data/products';
import { Reveal } from './Reveal';

const pillars = [
  {
    num: '01',
    title: 'Integrated platforms',
    body: 'Cloud, Kubernetes, CI/CD, and security as one system, not disconnected tickets.',
  },
  {
    num: '02',
    title: 'Product build and FDE craft',
    body: 'One year shipping WeRemoteIT (web, bot, Android), AuraPay, NexusAI, and KubeOptimia FinOps — own the product, the mobile app, and the cluster cost loop.',
  },
  {
    num: '03',
    title: 'Production ownership',
    body: 'I run live bots and products myself, including WeRemoteIT AI chat native and Android, so I design infra the way operators actually need it.',
  },
  {
    num: '04',
    title: 'Multi cloud and AI',
    body: 'AWS, Azure, GCP with Terraform, GitOps, and DevSecOps. Open to AI research and initiatives that need real platform craft.',
  },
];

function ChannelMark({ id }) {
  if (id === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" className="presence__mark" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3.05 3.05 0 0 0-2.14-2.16C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.36.44A3.05 3.05 0 0 0 .5 6.2 32.2 32.2 0 0 0 0 12a32.2 32.2 0 0 0 .5 5.8 3.05 3.05 0 0 0 2.14 2.16C4.5 20.4 12 20.4 12 20.4s7.5 0 9.36-.44A3.05 3.05 0 0 0 23.5 17.8 32.2 32.2 0 0 0 24 12a32.2 32.2 0 0 0-.5-5.8zM9.75 15.57V8.43L15.84 12l-6.09 3.57z"
        />
      </svg>
    );
  }

  if (id === 'x') {
    return (
      <svg viewBox="0 0 24 24" className="presence__mark" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-4.71-6.23-5.4 6.23H2.74l7.73-8.83L1.25 2.25h6.83l4.25 5.62 5.91-5.62zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="presence__mark" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.54 12a6.82 6.82 0 0 1-6.77 6.82A6.82 6.82 0 0 1 0 12a6.82 6.82 0 0 1 6.77-6.82A6.82 6.82 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.19 15.54 14.19 12s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12z"
      />
    </svg>
  );
}

const Approach = () => {
  return (
    <section id="approach" className="section section--tight approach section--muted">
      <div className="container">
        <div className="approach__layout">
          <Reveal className="approach__intro">
            <p className="section__label">03 How I operate</p>
            <h2 className="section__title">
              DevOps craft that <span className="text-accent">stays invisible</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Same discipline on client platforms and my own products: secure,
              automated, observable.
            </p>
          </Reveal>

          <ol className="approach__rail">
            {pillars.map((item, i) => (
              <Reveal key={item.num} as="li" className="approach__step" delay={i * 70} variant="up">
                <span className="approach__dot mono" aria-hidden="true">
                  {item.num}
                </span>
                <div className="approach__copy">
                  <h3 className="approach__title">{item.title}</h3>
                  <p className="approach__body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="band band--next" delay={120}>
          <div className="band__head">
            <h3 className="band__title">WeRemoteIT (live) channels</h3>
          </div>
          <div className="split-row split-row--3">
            {companyChannels.map((channel) => (
              <a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`presence__link presence__link--${channel.id}`}
              >
                <span className="presence__brand">
                  <ChannelMark id={channel.id} />
                  <span className="presence__label">{channel.label}</span>
                </span>
                <span className="presence__handle mono">{channel.handle}</span>
                <span className="presence__note">
                  {channel.note} <ExternalLink size={12} />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Approach;
