import { Reveal } from './Reveal';

const pillars = [
  {
    num: '01',
    title: 'Integrated platforms',
    body: 'Cloud, Kubernetes, CI/CD, and security as one system, not disconnected tickets.',
  },
  {
    num: '02',
    title: 'Own what ships',
    body: 'Forward Deployed Engineer craft: take the work from idea to live ops, including mobile and cost loops when that is the job.',
  },
  {
    num: '03',
    title: 'Production ownership',
    body: 'I run live systems myself, so I design infra the way operators actually need it.',
  },
  {
    num: '04',
    title: 'Multi cloud and AI',
    body: 'AWS, Azure, GCP with Terraform, GitOps, and DevSecOps. Open to AI research that needs real platform craft.',
  },
];

const Approach = () => {
  return (
    <section id="approach" className="section section--tight approach section--muted">
      <div className="container">
        <div className="approach__layout">
          <Reveal className="approach__intro">
            <p className="section__label">03 How I operate</p>
            <h2 className="section__title">
              DevOps craft that <span className="text-accent">stays invisible</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Same discipline on client platforms and my own products: secure,
              automated, observable.
            </p>
          </Reveal>

          <ol className="approach__rail">
            {pillars.map((item, i) => (
              <Reveal key={item.num} as="li" className="approach__step" delay={i * 70} variant="up">
                <span className="approach__dot mono" aria-hidden="true">
                  {item.num}
                </span>
                <div className="approach__copy">
                  <h3 className="approach__title">{item.title}</h3>
                  <p className="approach__body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Approach;
