import { ArrowUpRight, MoveRight } from 'lucide-react';
import { credentials } from '../data/products';
import { Reveal } from './Reveal';

const timeline = [
  {
    year: 'Now',
    role: 'DevOps at Gebeya, Safaricom TKG assignment',
    description:
      'Tanzu Kubernetes Grid for Safaricom Ethiopia: clusters, Terraform, CI/CD, security, Prometheus/Grafana. Open to remote DevSecOps and SRE roles.',
  },
  {
    year: '2018 to 23',
    role: 'Cloud, KodeKloud, and DevOps tool craft',
    description:
      'About two years building Git, Jenkins, Linux, Docker, and Kubernetes tasks; one year Senior DevOps at KodeKloud; AWS, Azure, GCP, GIZ trainer, consulting delivery.',
  },
  {
    year: '2010 to 18',
    role: 'Network and systems at ECX and field',
    description:
      'Ethiopia Commodity Exchange and Network Engineer field support for 37 tech companies across GB, USA, Dubai, Singapore, and Pakistan.',
  },
];

const highlights = [
  'Kubestronaut (KCNA KCSA CKA CKAD CKS)',
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
  'KubeOptimia',
  'Kubernetes',
  'Terraform',
  'ArgoCD and GitOps',
  'Ansible',
  'AWS, Azure, GCP',
  'Prometheus and Grafana',
  'CI/CD and DevSecOps',
  'AI chat products',
  'AI research interest',
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
              DevSecOps Engineer, Cloud Engineer, Azure Data Engineer, Trainer, SRE
              enthusiast. Kubestronaut. Runs live Telegram products (WeRemoteIT,
              NexusAI, AuraPay bot) and is open to AI research and related
              initiatives.
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
              Cloud DevSecOps, Azure Data Engineer, Kubestronaut, Gebeya / Safaricom
            </p>
            <p>
              Based in Addis Ababa. Career path: IT support and networking into
              DevOps, cloud, and Azure Data Engineering. Network Engineer field
              support for 37 tech companies across GB, USA, Dubai, Singapore, and
              Pakistan, then six plus years designing and automating infrastructure
              on AWS, Azure, GCP, and production Kubernetes end to end.
            </p>
            <p>
              I create and operate clusters from the ground up on AWS EKS,
              Google GKE, Azure AKS, Infomaniak, Linode, and VMware Tanzu TKG:
              provisioning, hardening, CI/CD, RBAC, networking, and observability.
              On the data side I build Azure Data Engineer platforms: medallion
              lakehouse, Data Lake Gen2, Databricks, Data Factory, and streaming
              pipelines. Hired by Gebeya Inc. for Kubernetes depth and assigned to a
              live telco TKG platform project. I also train teams (including GIZ)
              and mentor on cloud, security, and cost optimization. Outside client
              work I run live AI chat products and want to contribute to AI
              research or any serious AI initiative. Featured in{' '}
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
          </Reveal>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal key={item.year} className="timeline__item" delay={i * 80} variant="up">
              <span className="timeline__year">{item.year}</span>
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__desc">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
