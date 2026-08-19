import { ArrowUpRight, MoveRight } from 'lucide-react';
import { credentials } from '../data/products';
import { Reveal } from './Reveal';

const timeline = [
  {
    year: 'Now',
    role: 'Addis Telco · Architect',
  },
  {
    year: 'Companies',
    role: 'WeRemoteIT · AuraPay',
  },
  {
    year: 'Cloud',
    role: 'Gebeya · Tefer · Upwork',
  },
  {
    year: 'Start',
    role: 'JSI · ECX · Custor',
  },
];

const highlights = [
  'Kubestronaut (KCNA KCSA CKA CKAD CKS)',
  'Forward Deployed Engineer',
  'WeRemoteIT Android app',
  'Telegram bots',
  'KubeOptimia FinOps',
  'Cluster cost controller',
  'Azure Solutions Architect Expert',
  'Azure Data Engineer',
  'ADF, Databricks, Data Lake',
  'AWS Solutions Architect',
  'CCNA, CCNP, CCNA Security',
  'Tanzu TKG',
  'AWS EKS',
  'GKE',
  'AKS',
  'Infomaniak',
  'Linode Kubernetes',
  'Akamai Cloud',
  'Kubernetes',
  'Terraform',
  'ArgoCD and GitOps',
  'Ansible',
  'AWS, Azure, GCP',
  'Prometheus and Grafana',
  'CI/CD and DevSecOps',
  'AI chat products',
  'AI research',
  'Trainer / mentor',
  'Networking',
];

const About = () => {
  return (
    <section id="about" className="section section--tight about">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">04 Profile</p>
            <h2 className="section__title">
              Cloud DevOps Engineer{' '}
              <span className="text-accent">Sofonias Mengistu</span>
            </h2>
            <p className="section__lead section__lead--tight">
              DevSecOps Engineer, Cloud Engineer, Azure Data Engineer, Forward
              Deployed Engineer, Trainer, SRE enthusiast. Kubestronaut. One year
              building live products: WeRemoteIT (bot + Android), AuraPay, NexusAI,
              and KubeOptimia (Kubernetes FinOps / cluster cost controller). Open to
              AI research and related initiatives.
            </p>
          </div>
          <a href="#contact" className="fancy-arrow" aria-label="Go to contact">
            <span className="fancy-arrow__label">Contact</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <div className="about__layout about__layout--media">
          <Reveal className="about__media" variant="left">
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
          </Reveal>

          <Reveal className="about__bio" delay={100} variant="right">
            <p className="about__roles">
              Cloud Platform Architect at Addis Telco. Founder of WeRemoteIT and
              AuraPay Global. Kubestronaut.
            </p>
            <p>
              Based in Addis Ababa. Current job is Cloud Platform Architect at
              Addis Telco. I also own two live companies:{' '}
              <a href="https://weremoteit.com" target="_blank" rel="noopener noreferrer">
                WeRemoteIT
              </a>{' '}
              and{' '}
              <a href="https://aurapayglobal.com" target="_blank" rel="noopener noreferrer">
                AuraPay Global
              </a>
              . Career path: junior programmer at Custor Computing PLC, Network
              Specialist and IT Support at ECX, IT Specialist at JSI, Cloud DevOps
              at Tefer, DevOps at Gebeya, then Addis Telco. More than 11 Upwork
              Azure Data Engineer projects finished successfully. Network Engineer
              field support for 37 tech companies across GB, USA, Dubai, Singapore,
              and Pakistan.
            </p>
            <p>
              I create and operate clusters from the ground up on AWS EKS,
              Google GKE, Azure AKS, Infomaniak, Linode, and VMware Tanzu TKG:
              provisioning, hardening, CI/CD, RBAC, networking, and observability.
              WeRemoteIT includes web, Telegram bot, and Android. AuraPay Global
              is the payments company. I also ship NexusAI Aggregator and
              KubeOptimia, a Kubernetes cluster cost controller for cloud FinOps.
              Azure Data Engineer work on Upwork covers medallion lakehouse, Data
              Lake Gen2, Databricks, and Data Factory. Gebeya DevOps includes a
              live Safaricom Ethiopia TKG platform assignment. I also train teams
              (including GIZ) and mentor on cloud, security, and cost optimization.
              Outside client work I run live AI chat products and want to contribute
              to AI research or any serious AI initiative. Featured in{' '}
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
            <div className="about__cta-row">
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
            </div>
          </Reveal>
        </div>

        <Reveal className="about__skills" id="skills" delay={80}>
          <p className="band__title">Capabilities for Cloud DevOps roles</p>
          <div className="skills__chips">
            {highlights.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal key={item.year} className="timeline__item" delay={i * 80} variant="up">
              <span className="timeline__year">{item.year}</span>
              <h3 className="timeline__role">{item.role}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
