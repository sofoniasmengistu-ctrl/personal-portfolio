import { credentials } from '../data/products';

const timeline = [
  {
    year: 'Now',
    role: 'Cloud DevOps · Kubestronaut · Open to roles',
    description:
      'Seeking Cloud DevOps roles. Consulting via Upwork. Kubernetes delivery (Safaricom / Gebeya). Products in production.',
  },
  {
    year: '2010–18',
    role: 'Network & systems · ECX',
    description: 'On-prem infrastructure and security at Ethiopia Commodity Exchange.',
  },
  {
    year: '2010',
    role: 'BSc Computer Science',
    description: 'HiLCoE School of Computer Science and Technology.',
  },
];

const highlights = [
  'Kubestronaut',
  'Cloud DevOps',
  '12× Azure',
  'AWS Architect',
  'Cisco Security',
  'Kubernetes',
  'Terraform',
  'AWS · Azure · GCP',
  'Python · Go',
  'CI/CD · DevSecOps',
  'Networking',
  'Data · MLOps',
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section__label">04 — Profile</p>
        <h2 className="section__title">
          Cloud DevOps Engineer — <span className="text-accent">Sofonias Mengistu</span>
        </h2>
        <p className="section__lead">
          Job-ready Cloud DevOps engineer. Kubestronaut. Also ships products —
          so you know I own production, not just tickets.
        </p>

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
              Cloud DevOps Engineer · Kubestronaut · Open to remote roles
            </p>
            <p>
              Based in Addis Ababa. I design and operate secure multi-cloud
              systems — Kubernetes, Terraform, CI/CD, DevSecOps — for teams that
              need reliability. Available for full-time Cloud DevOps roles and
              high-trust consulting (including Upwork).
            </p>
            <p>
              Featured in{' '}
              <a href={credentials.cncfOrbit} target="_blank" rel="noopener noreferrer">
                CNCF Kubestronaut in Orbit
              </a>
              . Proof on{' '}
              <a href={credentials.linkedIn} target="_blank" rel="noopener noreferrer">
                LinkedIn (30k+)
              </a>{' '}
              and{' '}
              <a href={credentials.github} target="_blank" rel="noopener noreferrer">
                GitHub (97+ projects)
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
