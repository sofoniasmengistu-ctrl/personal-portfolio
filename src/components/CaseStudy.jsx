import { MoveRight } from 'lucide-react';

const steps = [
  {
    label: '01 The hire',
    title: 'Gebeya hired me for Kubernetes depth',
    body: 'Gebeya Inc. brought me on as a DevOps Engineer because of production Kubernetes and platform skills—not to sit on a generic ticket queue. That is the relationship that matters on my résumé.',
  },
  {
    label: '02 The assignment',
    title: 'Safaricom Ethiopia: TKG project I was assigned',
    body: 'Gebeya assigned me to Safaricom Ethiopia’s Tanzu Kubernetes Grid work: cluster lifecycle, secure access, Terraform, CI/CD, and observability the telco team could trust in production.',
  },
  {
    label: '03 What made it different',
    title: 'End-to-end ownership, not a seat on the bench',
    body: 'I owned the platform path end to end—deploy, harden, observe, document—so Gebeya could staff a live telco client with confidence. Repeatable runbooks, faster changes, clearer incidents, production-grade controls.',
  },
];

const tools = [
  'AWS EKS',
  'GKE',
  'AKS',
  'Infomaniak',
  'Linode',
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
              Hired by Gebeya{' '}
              <span className="text-accent">for Kubernetes that lasts</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Gebeya is who hired me. Safaricom was the client project I was
              assigned to. What set this hire apart: full ownership of a live
              telco TKG platform—not borrowed tickets.
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

        <div className="case-study__meta">
          <div className="case-study__meta-item">
            <p className="case-study__meta-label mono">Employer</p>
            <p className="case-study__meta-value">Gebeya Inc.</p>
          </div>
          <div className="case-study__meta-item">
            <p className="case-study__meta-label mono">Assigned project</p>
            <p className="case-study__meta-value">Safaricom Ethiopia · TKG</p>
          </div>
          <div className="case-study__meta-item">
            <p className="case-study__meta-label mono">Role</p>
            <p className="case-study__meta-value">DevOps Engineer</p>
          </div>
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
