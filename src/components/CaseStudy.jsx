import { MoveRight } from 'lucide-react';

const steps = [
  {
    label: '01 Problem',
    title: 'Production Kubernetes at telco scale',
    body: 'Safaricom Ethiopia needed reliable Tanzu Kubernetes Grid operations: cluster lifecycle, secure access, and delivery pipelines teams could trust.',
  },
  {
    label: '02 What I built',
    title: 'TKG platform engineering via Gebeya',
    body: 'Owned cluster deployment and lifecycle, Terraform provisioning, CI/CD integration, RBAC and network policies, plus Prometheus/Grafana observability.',
  },
  {
    label: '03 Outcome',
    title: 'Operable, auditable, ready to ship',
    body: 'A repeatable TKG path with documented runbooks, faster change delivery, clearer incident response, and security controls aligned to production expectations.',
  },
];

const tools = [
  'Tanzu TKG',
  'Kubernetes',
  'Terraform',
  'CI/CD',
  'RBAC',
  'NetworkPolicy',
  'Prometheus',
  'Grafana',
];

const CaseStudy = () => {
  return (
    <section id="case-study" className="section case-study">
      <div className="container">
        <div className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">Flagship case study</p>
            <h2 className="section__title">
              Safaricom TKG via Gebeya{' '}
              <span className="text-accent">Kubernetes that lasts</span>
            </h2>
            <p className="section__lead section__lead--tight">
              One deep delivery story for hiring managers: problem, build, and
              outcome from real telco Kubernetes work in Ethiopia.
            </p>
          </div>
          <a href="#contact" className="fancy-arrow">
            <span className="fancy-arrow__label">Discuss similar work</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </div>

        <div className="case-study__steps">
          {steps.map((step) => (
            <article key={step.label} className="case-study__step">
              <p className="case-study__step-label mono">{step.label}</p>
              <h3 className="case-study__step-title">{step.title}</h3>
              <p className="case-study__step-body">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="case-study__tools">
          <p className="case-study__tools-label mono">Stack</p>
          <div className="skills__chips">
            {tools.map((tool) => (
              <span key={tool} className="skill-chip">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
