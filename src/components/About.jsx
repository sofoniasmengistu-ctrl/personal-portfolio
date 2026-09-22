import { ArrowUpRight, MoveRight } from 'lucide-react';
import { credentials } from '../data/products';
import { Reveal } from './Reveal';

const highlights = [
  'Kubernetes platforms',
  'Terraform · GitOps',
  'AWS · Azure · GCP',
  'CI/CD · DevSecOps',
  'ADF · Databricks',
  'Forward Deployed Engineer',
  'Trainer / mentor',
  'AI research',
];

const About = () => {
  return (
    <section id="about" className="section section--tight about about--chapter">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">05 Profile</p>
            <h2 className="section__title">
              Cloud DevOps Engineer{' '}
              <span className="text-accent">Sofonias Mengistu</span>
            </h2>
            <p className="section__lead section__lead--tight">
              DevSecOps, Azure Data, Forward Deployed Engineer, trainer. Kubestronaut.
              Open to AI research and related initiatives.
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
              Based in Addis Ababa. I design and run Kubernetes platforms from the
              ground up on AWS EKS, Google GKE, Azure AKS, Infomaniak, Linode, and
              VMware Tanzu TKG. I also train teams and mentor on cloud, security,
              and cost. Featured in{' '}
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
      </div>
    </section>
  );
};

export default About;
