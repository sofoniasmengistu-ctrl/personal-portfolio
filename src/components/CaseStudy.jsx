import { MoveRight } from 'lucide-react';
import { Reveal } from './Reveal';

const cases = [
  {
    id: 'tkg',
    number: '01',
    kicker: 'Telco Kubernetes',
    title: 'Gebeya → Safaricom Ethiopia TKG',
    result:
      'Owned cluster lifecycle through hardening on one live telco Tanzu TKG platform.',
    stack: ['Tanzu TKG', 'Terraform', 'CI/CD', 'RBAC', 'Prometheus'],
    peeks: ['Cluster lifecycle', 'GitOps gates', 'Observability'],
    bg: '/case-study-bg.png',
  },
  {
    id: 'azure',
    number: '02',
    kicker: 'Upwork Azure',
    title: 'Azure Data Engineer platforms',
    result:
      '11+ completed lakehouse projects: Data Lake Gen2, Databricks, ADF, Terraform.',
    stack: ['Data Lake Gen2', 'Databricks', 'ADF', 'Key Vault', 'Terraform'],
    peeks: ['Medallion layers', 'ADF pipelines', 'Secrets + IaC'],
    bg: '/work-cloud-bg.png',
  },
];

const CaseStudy = () => {
  return (
    <section id="case-study" className="case-chapters" aria-labelledby="case-chapters-heading">
      <div className="container case-chapters__head">
        <Reveal>
          <p className="section__label">02 Case chapters</p>
          <h2 id="case-chapters-heading" className="section__title section__title--display">
            Problem to production,{' '}
            <span className="text-accent">full width</span>
          </h2>
          <p className="section__lead">
            Two flagship deliveries. Scroll each chapter — number, result, stack,
            and a UI peek placeholder until live screenshots land.
          </p>
        </Reveal>
      </div>

      {cases.map((item, index) => (
        <article
          key={item.id}
          className="case-chapter"
          style={{ '--case-bg': `url('${item.bg}')` }}
        >
          <div className="case-chapter__media" aria-hidden="true" />
          <div className="case-chapter__veil" aria-hidden="true" />
          <div className="container case-chapter__inner">
            <Reveal className="case-chapter__copy" variant={index % 2 ? 'right' : 'left'}>
              <p className="case-chapter__number mono">{item.number}</p>
              <p className="case-chapter__kicker mono">{item.kicker}</p>
              <h3 className="case-chapter__title">{item.title}</h3>
              <p className="case-chapter__result">{item.result}</p>
              <div className="case-chapter__stack">
                {item.stack.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              {index === 0 ? (
                <a href="#contact" className="case-chapter__cta">
                  Discuss similar work <MoveRight size={16} />
                </a>
              ) : null}
            </Reveal>

            <Reveal className="case-chapter__peek" delay={120} variant="scale">
              <div className="ui-peek" aria-hidden="true">
                <div className="ui-peek__chrome">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="ui-peek__body">
                  <p className="ui-peek__label mono">Placeholder UI</p>
                  <ul>
                    {item.peeks.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CaseStudy;
