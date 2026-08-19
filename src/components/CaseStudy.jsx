import { useId, useRef, useState } from 'react';
import { MoveRight } from 'lucide-react';
import { Reveal } from './Reveal';

const cases = [
  {
    label: '01 Production Kubernetes',
    kicker: 'Telco Kubernetes',
    metric: 'Gebeya · Safaricom TKG',
    title: 'Gebeya → Safaricom Ethiopia TKG',
    problem:
      'Safaricom Ethiopia needed production Tanzu Kubernetes Grid capacity with secure lifecycle, not a lab cluster. Gebeya hired Sofonias for that Kubernetes depth and assigned him to the live telco platform.',
    stack: ['Tanzu TKG', 'Terraform', 'CI/CD', 'RBAC', 'NetworkPolicy', 'Prometheus', 'Grafana'],
    result:
      'Owned cluster lifecycle through hardening on TKG: Terraform provisioning, CI/CD integration, RBAC and NetworkPolicy, plus Prometheus/Grafana observability for a production telco assignment.',
  },
  {
    label: '02 Azure data platforms',
    kicker: 'Upwork Azure',
    metric: '11+ completed projects',
    title: 'Azure Data Engineer on Upwork',
    problem:
      'Clients needed an Azure Data Engineer who could finish real projects: raw ingest to trusted gold layers, with secrets and IaC, not one off notebooks.',
    stack: ['Data Lake Gen2', 'Databricks', 'ADF', 'Key Vault', 'Terraform', 'PySpark', 'Kafka', 'Airflow'],
    result:
      'Finished more than 11 Upwork Azure Data Engineer projects: medallion lakehouse (Bronze / Silver / Gold) on Data Lake Gen2 with Databricks and Data Factory, Key Vault backed secrets, Terraform IaC, and streaming patterns with Kafka, Spark, and Airflow when required.',
  },
];

const CaseStudy = () => {
  const [active, setActive] = useState(0);
  const tabsId = useId();
  const tabRefs = useRef([]);

  const selectCase = (index) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  return (
    <section id="case-study" className="case-study">
      <div className="partition-stage">
        <div
          className="partition-visual"
          style={{ backgroundImage: "url('/case-study-bg.png')" }}
          role="img"
          aria-label="DevOps Kubernetes and container infrastructure background"
        />
        <div className="partition-veil" aria-hidden="true" />

        <div className="container partition-inner case-study__inner">
          <Reveal className="section-head section-head--row">
            <div className="section-head__copy">
              <p className="section__label">Flagship case studies</p>
              <h2 className="section__title">
                Problem, stack,{' '}
                <span className="text-accent">result</span>
              </h2>
              <p className="section__lead section__lead--tight">
                Production TKG at Safaricom via Gebeya, and Azure Data Engineer
                platforms on Upwork.
              </p>
            </div>
            <a href="#contact" className="fancy-arrow">
              <span className="fancy-arrow__label">Discuss similar work</span>
              <span className="fancy-arrow__track" aria-hidden="true">
                <span className="fancy-arrow__line" />
                <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
              </span>
            </a>
          </Reveal>

          <Reveal className="case-board" delay={80}>
            <div className="case-board__tabs" role="tablist" aria-label="Flagship case studies">
              {cases.map((item, i) => {
                const selected = i === active;
                return (
                  <button
                    key={item.label}
                    type="button"
                    role="tab"
                    id={`${tabsId}-tab-${i}`}
                    aria-selected={selected}
                    aria-controls={`${tabsId}-panel-${i}`}
                    tabIndex={selected ? 0 : -1}
                    className={`case-board__tab${selected ? ' is-active' : ''}`}
                    ref={(node) => {
                      tabRefs.current[i] = node;
                    }}
                    onClick={() => setActive(i)}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                        event.preventDefault();
                        selectCase((i + 1) % cases.length);
                      }
                      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                        event.preventDefault();
                        selectCase((i - 1 + cases.length) % cases.length);
                      }
                      if (event.key === 'Home') {
                        event.preventDefault();
                        selectCase(0);
                      }
                      if (event.key === 'End') {
                        event.preventDefault();
                        selectCase(cases.length - 1);
                      }
                    }}
                  >
                    <span className="case-board__tab-kicker mono">{item.kicker}</span>
                    <span className="case-board__tab-metric">{item.metric}</span>
                  </button>
                );
              })}
            </div>

            {cases.map((item, i) => (
              <article
                key={item.label}
                id={`${tabsId}-panel-${i}`}
                role="tabpanel"
                aria-labelledby={`${tabsId}-tab-${i}`}
                hidden={i !== active}
                className="case-board__panel"
              >
                <p className="case-board__label mono">{item.label}</p>
                <h3 className="case-board__title">{item.title}</h3>
                <div className="case-board__psr">
                  <div>
                    <p className="case-board__col-label mono">Problem</p>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <p className="case-board__col-label mono">Stack</p>
                    <div className="case-board__stack">
                      {item.stack.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="case-board__col-label mono">Result</p>
                    <p>{item.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
