import { MoveRight } from 'lucide-react';
import { Reveal } from './Reveal';

const cases = [
  {
    label: '01 Production Kubernetes',
    title: 'Gebeya → Safaricom Ethiopia TKG',
    problem:
      'Safaricom Ethiopia needed production Tanzu Kubernetes Grid capacity with secure lifecycle, not a lab cluster. Gebeya hired Sofonias for that Kubernetes depth and assigned him to the live telco platform.',
    stack: ['Tanzu TKG', 'Terraform', 'CI/CD', 'RBAC', 'NetworkPolicy', 'Prometheus', 'Grafana'],
    result:
      'Owned cluster lifecycle through hardening on TKG: Terraform provisioning, CI/CD integration, RBAC and NetworkPolicy, plus Prometheus/Grafana observability for a production telco assignment.',
  },
  {
    label: '02 Azure data platforms',
    title: 'Medallion lakehouse and streaming',
    problem:
      'Teams needed an Azure Data Engineer platform that could move from raw ingest to trusted gold layers, with secrets and IaC, not one off notebooks.',
    stack: ['Data Lake Gen2', 'Databricks', 'ADF', 'Key Vault', 'Terraform', 'PySpark', 'Kafka', 'Airflow'],
    result:
      'Delivered medallion lakehouse (Bronze / Silver / Gold) on Data Lake Gen2 with Databricks and Data Factory, Key Vault backed secrets, Terraform IaC, and streaming patterns with Kafka, Spark, and Airflow when required.',
  },
  {
    label: '03 Network field cutovers',
    title: 'Banks, embassies, and 37 companies',
    problem:
      'Enterprise sites needed Network Engineer delivery that finished in one pass: design, install, cutover, stabilize. Ticket only support was not enough.',
    stack: ['Cisco', 'Visa connectivity', 'Ubiquiti', 'VPN', 'LAN/WAN', 'Field support'],
    result:
      'Field support for 37 tech companies across GB, USA, Dubai, Singapore, and Pakistan. Standouts: Visa routers across Ethiopian banks, American Embassy Huawei to Ubiquiti cutover, Spain embassy datacenter VPN, and GIZ router configuration.',
  },
];

const tools = [
  'Git',
  'Jenkins',
  'Linux',
  'Docker',
  'Kubernetes',
  'AWS EKS',
  'GKE',
  'AKS',
  'Tanzu TKG',
  'Terraform',
  'Ansible',
  'Azure Data Factory',
  'Databricks',
  'Prometheus',
  'Grafana',
  'Cisco',
];

const CaseStudy = () => {
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
                Three delivery themes hiring managers ask for: production
                Kubernetes at Safaricom Ethiopia via Gebeya, Azure data platforms,
                and Network Engineer field cutovers. KodeKloud Senior DevOps and
                ~2 years of hands on toolchain work sit behind the hire.
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

          <Reveal className="case-study__meta" delay={80}>
            <div className="case-study__meta-item">
              <p className="case-study__meta-label mono">Telco Kubernetes</p>
              <p className="case-study__meta-value">Gebeya · Safaricom TKG</p>
            </div>
            <div className="case-study__meta-item">
              <p className="case-study__meta-label mono">Network field</p>
              <p className="case-study__meta-value">37 companies · 5 regions</p>
            </div>
            <div className="case-study__meta-item">
              <p className="case-study__meta-label mono">KodeKloud</p>
              <p className="case-study__meta-value">1 year · Senior DevOps</p>
            </div>
          </Reveal>

          <div className="case-study__steps">
            {cases.map((item, i) => (
              <Reveal key={item.label} as="article" className="case-study__step" delay={i * 100} variant="up">
                <p className="case-study__step-label mono">{item.label}</p>
                <h3 className="case-study__step-title">{item.title}</h3>
                <div className="case-study__psr">
                  <p>
                    <strong>Problem.</strong> {item.problem}
                  </p>
                  <p>
                    <strong>Stack.</strong> {item.stack.join(', ')}
                  </p>
                  <p>
                    <strong>Result.</strong> {item.result}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="case-study__tools" delay={120}>
            <p className="case-study__tools-label mono">Stack across engagements</p>
            <div className="skills__chips">
              {tools.map((tool) => (
                <span key={tool} className="skill-chip">
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
