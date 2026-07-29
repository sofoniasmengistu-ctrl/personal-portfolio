import { MoveRight } from 'lucide-react';
import { Reveal } from './Reveal';

const proofs = [
  {
    label: '01 Gebeya hire',
    title: 'Hired for Kubernetes depth, assigned to Safaricom TKG',
    body: 'Gebeya Inc. hired me as a DevOps Engineer for production Kubernetes and platform skills, then assigned me to Safaricom Ethiopia Tanzu Kubernetes Grid: cluster lifecycle, Terraform, CI/CD, RBAC, and observability.',
  },
  {
    label: '02 KodeKloud, one year',
    title: 'Senior DevOps on KodeKloud for a full year',
    body: 'One year on KodeKloud as Senior DevOps: Project Nautilus style delivery, daily engineering tasks, Ansible, Terraform, Linux, and cross team handoffs that mirrored real production work.',
  },
  {
    label: '03 Two years building the craft',
    title: 'Two years building Git, Jenkins, Linux, Docker, Kubernetes tasks',
    body: 'Beyond any single employer I spent about two years building and completing hands on DevOps tasks across Git, Jenkins, Linux, Docker, Kubernetes, CI/CD, and the wider DevOps toolchain so the hire was already battle tested.',
  },
];

const tools = [
  'Git',
  'Jenkins',
  'Linux',
  'Docker',
  'Kubernetes',
  'AWS EKS',
  'GKE',
  'AKS',
  'Infomaniak',
  'Linode',
  'Akamai',
  'Tanzu TKG',
  'Terraform',
  'Ansible',
  'CI/CD',
  'RBAC',
  'NetworkPolicy',
  'Prometheus',
  'Grafana',
];

const CaseStudy = () => {
  return (
    <section id="case-study" className="section section--tight case-study">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">Flagship proof</p>
            <h2 className="section__title">
              Not only Gebeya.{' '}
              <span className="text-accent">KodeKloud and years of DevOps tasks</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Gebeya hired me for live Safaricom TKG work. I also spent one year on
              KodeKloud as Senior DevOps, and about two years building real tasks
              across Git, Jenkins, Linux, Docker, Kubernetes, and the full DevOps
              toolchain.
            </p>
          </div>
          <a href="#contact" className="fancy-arrow">
            <span className="fancy-arrow__label">Discuss similar work</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <Reveal className="case-study__meta" delay={80}>
          <div className="case-study__meta-item">
            <p className="case-study__meta-label mono">Production hire</p>
            <p className="case-study__meta-value">Gebeya · Safaricom TKG</p>
          </div>
          <div className="case-study__meta-item">
            <p className="case-study__meta-label mono">KodeKloud</p>
            <p className="case-study__meta-value">1 year · Senior DevOps</p>
          </div>
          <div className="case-study__meta-item">
            <p className="case-study__meta-label mono">Hands on build time</p>
            <p className="case-study__meta-value">2 years · DevOps tools</p>
          </div>
        </Reveal>

        <div className="case-study__steps">
          {proofs.map((step, i) => (
            <Reveal key={step.label} as="article" className="case-study__step" delay={i * 100} variant="up">
              <p className="case-study__step-label mono">{step.label}</p>
              <h3 className="case-study__step-title">{step.title}</h3>
              <p className="case-study__step-body">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="case-study__tools" delay={120}>
          <p className="case-study__tools-label mono">Stack</p>
          <div className="skills__chips">
            {tools.map((tool) => (
              <span key={tool} className="skill-chip">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudy;
