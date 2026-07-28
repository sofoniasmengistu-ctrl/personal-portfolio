import { clientDeliveries } from '../data/products';

const ClientWork = () => {
  return (
    <section id="clients" className="section section--tight">
      <div className="container">
        <p className="section__label">03 — Client delivery</p>
        <h2 className="section__title">
          Upwork &amp; <span className="text-gradient">consulting</span>
        </h2>
        <p className="section__lead">
          Freelance and client work as a Cloud DevOps engineer — the same craft
          behind Safaricom / Gebeya Kubernetes delivery, framed for remote teams.
        </p>

        <div className="work-grid">
          {clientDeliveries.map((job) => (
            <article key={job.title} className="work-card">
              <span className="work-card__channel">{job.channel}</span>
              <h3 className="work-card__title">{job.title}</h3>
              <p className="work-card__desc">{job.outcome}</p>
              <div className="work-card__tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="work-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
