import { credentials } from '../data/products';

const timeline = [
  {
    year: 'Now',
    role: 'Founder · Kubestronaut',
    description: 'Shipping chat-native products. Multi-cloud & Kubernetes consulting.',
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

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section__label">04 — Profile</p>
        <h2 className="section__title">
          Sofonias <span className="text-gradient">Mengistu</span>
        </h2>
        <p className="section__lead">
          Brief by design. Detail lives in the work — and in the CV on request.
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
            <p className="about__roles">Founder · DevSecOps · Kubestronaut</p>
            <p>
              Based in Addis Ababa. I build products people use in Telegram,
              and advise teams on cloud, Kubernetes, and secure delivery across Africa.
            </p>
            <a
              className="about__credential"
              href={credentials.kubestronautDirectory}
              target="_blank"
              rel="noopener noreferrer"
            >
              {credentials.kubestronautNote}
            </a>
            <p>
              <a href="/Sofonias_Mengistu_Resume.pdf" download="Sofonias_Mengistu_Resume.pdf">
                Download CV →
              </a>
            </p>
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
