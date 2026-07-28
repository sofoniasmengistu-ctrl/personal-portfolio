import { ArrowUpRight, MoveRight } from 'lucide-react';
import { credentials } from '../data/products';

const timeline = [
  {
    year: 'Now',
    role: 'DevOps · Gebeya / Safaricom TKG',
    description:
      'Tanzu Kubernetes Grid for Safaricom Ethiopia: clusters, Terraform, CI/CD, security, Prometheus/Grafana. Open to remote DevSecOps/SRE roles.',
  },
  {
    year: '2018 to 23',
    role: 'Cloud / DevOps · multi client',
    description:
      'AWS, Azure, GCP, KodeKloud Senior DevOps, GIZ cloud trainer, consulting and managed services delivery.',
  },
  {
    year: '2010 to 18',
    role: 'Network & systems · ECX + field',
    description:
      'Ethiopia Commodity Exchange and field engineer for 35+ technology companies across networking and infrastructure.',
  },
];

const highlights = [
  'Kubestronaut (KCNA KCSA CKA CKAD CKS)',
  'Azure — all certifications',
  'AWS Cloud Engineer',
  'CCNA · CCNP · CCNA Security',
  'Tanzu TKG',
  'AWS EKS',
  'GKE',
  'AKS',
  'Infomaniak',
  'Linode Kubernetes',
  'Kubernetes',
  'Terraform',
  'ArgoCD · GitOps',
  'Ansible',
  'AWS · Azure · GCP',
  'Prometheus · Grafana',
  'CI/CD · DevSecOps',
  'Trainer / mentor',
  'Networking',
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">04 Profile</p>
            <h2 className="section__title">
              Cloud DevOps Engineer{' '}
              <span className="text-accent">Sofonias Mengistu</span>
            </h2>
            <p className="section__lead section__lead--tight">
              DevSecOps Engineer, Cloud Engineer, Trainer, SRE enthusiast.
              Kubestronaut. Also ships products so you know I own production,
              not just tickets.
            </p>
          </div>
          <a href="#contact" className="fancy-arrow" aria-label="Go to contact">
            <span className="fancy-arrow__label">Contact</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </div>

        <div className="about__layout about__layout--media">
          <div className="about__media">
            <img
              src="/kubestronaut-portrait.png"
              alt="Sofonias Mengistu in CNCF Kubestronaut jacket"
              className="about__portrait"
              width={420}
              height={520}
            />
            <img
              src="/kubestronaut-jacket.png"
              alt="Kubestronaut jacket detail"
              className="about__jacket"
              width={200}
              height={200}
            />
          </div>

          <div className="about__bio">
            <p className="about__roles">
              Cloud DevSecOps · Kubestronaut · Gebeya / Safaricom · Open to remote
            </p>
            <p>
              Based in Addis Ababa. Career path: IT support and networking into
              DevOps and cloud. Field engineer for 35+ technology companies, then
              six plus years designing and automating infrastructure on AWS,
              Azure, GCP, and production Kubernetes end to end.
            </p>
            <p>
              I create and operate clusters from the ground up on AWS EKS,
              Google GKE, Azure AKS, Infomaniak, Linode, and VMware Tanzu TKG:
              provisioning, hardening, CI/CD, RBAC, networking, and observability.
              Hired by Gebeya Inc. for that Kubernetes depth and assigned to a
              live telco TKG platform project. I also train teams (including GIZ)
              and mentor on cloud, security, and cost optimization. Featured in{' '}
              <a href={credentials.cncfOrbit} target="_blank" rel="noopener noreferrer">
                CNCF Kubestronaut in Orbit
              </a>
              . Proof on{' '}
              <a href={credentials.linkedIn} target="_blank" rel="noopener noreferrer">
                LinkedIn (29k+ followers)
              </a>{' '}
              and{' '}
              <a href={credentials.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
            <a
              className="about__credential"
              href={credentials.kubestronautDirectory}
              target="_blank"
              rel="noopener noreferrer"
            >
              {credentials.kubestronautNote}
            </a>
            <p className="about__cta-row">
              <a
                className="btn-primary"
                href="/Sofonias_Mengistu_Resume.pdf"
                download="Sofonias_Mengistu_Resume.pdf"
              >
                Download CV
              </a>
              <a
                className="btn-dark"
                href={credentials.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
                <ArrowUpRight size={16} />
              </a>
              <a className="btn-dark" href="#contact">
                Contact for roles
              </a>
            </p>

            <div className="about__skills" id="skills">
              <p className="band__title">Capabilities for Cloud DevOps roles</p>
              <div className="skills__chips">
                {highlights.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.year} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
