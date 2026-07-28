import { ExternalLink } from 'lucide-react';
import { companyChannels } from '../data/products';

const pillars = [
  {
    num: '01',
    title: 'Integrated platforms',
    body: 'Cloud, Kubernetes, CI/CD, and security as one system, not disconnected tickets.',
  },
  {
    num: '02',
    title: 'Production ownership',
    body: 'I run live products myself, so I design infra the way operators actually need it.',
  },
  {
    num: '03',
    title: 'Multi-cloud delivery',
    body: 'AWS, Azure, GCP with Terraform, GitOps, and DevSecOps for teams that ship.',
  },
];

const Approach = () => {
  return (
    <section id="approach" className="section section--tight approach section--muted">
      <div className="container">
        <p className="section__label">03 How I operate</p>
        <h2 className="section__title">
          DevOps craft that <span className="text-accent">stays invisible</span>
        </h2>
        <p className="section__lead">
          Same discipline on client platforms and my own products: secure,
          automated, observable.
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
