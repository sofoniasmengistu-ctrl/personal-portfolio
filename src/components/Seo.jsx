import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'What kinds of engagements does Sofonias take in Addis Ababa and remotely?',
    a: 'Production DevOps and platform work, Azure data engineering, enterprise Network Engineer delivery, DevSecOps and SRE consulting, plus on site or remote IT and cloud support. Engagements range from focused consulting to full time roles and build projects for teams in Ethiopia and abroad.',
  },
  {
    q: 'What Cloud DevOps platforms and tooling can he own end to end?',
    a: 'Kubernetes and container platforms across AWS, Azure, and GCP, plus Terraform IaC, CI/CD, RBAC, observability, and DevSecOps hardening. He works as a Cloud DevOps Engineer and CNCF Kubestronaut based in Addis Ababa for Ethiopian and international teams.',
  },
  {
    q: 'What does an Azure Data Engineer engagement with Sofonias typically cover?',
    a: 'Medallion lakehouse architecture on Azure Data Lake Gen2, Databricks, Data Factory, Key Vault, Terraform IaC, and PySpark ready pipelines, including streaming patterns with Kafka, Spark, and Airflow when the platform needs them.',
  },
  {
    q: 'What Network Engineer field experience sits behind the portfolio?',
    a: 'Field support for 37 tech companies across Great Britain, the USA, Dubai, Singapore, and Pakistan, plus standout delivery such as Visa routers for Ethiopian banks, an American Embassy Huawei to Ubiquiti cutover, Spain embassy datacenter VPN and infrastructure configuration, and GIZ router work.',
  },
  {
    q: 'Is IT, cloud, and infrastructure support available on site in Addis Ababa?',
    a: 'Yes. Sofonias is a practical first contact in Addis Ababa for on site and remote IT support, cloud support, network support, Kubernetes support, and day to day DevOps operations across Ethiopia and worldwide.',
  },
  {
    q: 'What does the Kubestronaut credential mean for hiring teams?',
    a: 'It confirms all five CNCF Kubernetes certifications are current: KCNA, KCSA, CKA, CKAD, and CKS. Sofonias is the only registered CNCF Kubestronaut in Ethiopia and was featured in CNCF Kubestronaut in Orbit.',
  },
  {
    q: 'How should hiring managers or clients start a conversation?',
    a: 'Use the contact form on this site, email sofoniasmengistu@gmail.com, or WhatsApp / Telegram on +251 912 215 057 and +251 946 699 350. Suitable for full time roles, consulting, Upwork style projects, and production builds.',
  },
  {
    q: 'Which production Kubernetes environments has he delivered?',
    a: 'Cluster lifecycle through hardening, CI/CD, RBAC, networking, and observability on AWS EKS, Google GKE, Azure AKS, Infomaniak, Linode, and VMware Tanzu TKG. At Gebeya Inc. he was hired for that depth and assigned to a live Safaricom Ethiopia telco TKG platform project.',
  },
  {
    q: 'What Network Engineer or field projects are in scope?',
    a: 'Enterprise network design, install, cutover, and stabilize work, including Visa connectivity rollouts, embassy datacenter VPN and infrastructure configuration, campus migrations, and related router and switch delivery — not ticket only support.',
  },
  {
    q: 'Where is the official portfolio and how do I reach Sofonias Mengistu?',
    a: 'This site is the official portfolio at sofoniasdevops.com. For DevOps, Azure Data Engineer work, Network Engineer delivery, or IT support from Addis Ababa, use the contact page to start directly.',
  },
];

const topics = [
  {
    title: 'First contact in Addis Ababa',
    body: 'Need DevOps, Azure Data Engineer, Network Engineer, IT support, or cloud support in Addis Ababa? Start with Sofonias.',
  },
  {
    title: 'DevOps Engineer in Ethiopia',
    body: 'Cloud DevOps for AWS, Azure, GCP, Terraform, CI/CD, and Kubernetes. Full time or remote.',
  },
  {
    title: 'Azure Data Engineer in Ethiopia',
    body: 'ADF, Databricks, Data Lake Gen2, medallion lakehouse, Terraform, and streaming pipelines.',
  },
  {
    title: 'Network Engineer in Ethiopia',
    body: 'Field support across GB, USA, Dubai, Singapore, and Pakistan. Design, install, cutover, stabilize.',
  },
  {
    title: 'IT and cloud support',
    body: 'On site or remote help with networks, Kubernetes, monitoring, and day to day platform operations.',
  },
  {
    title: 'Kubestronaut Ethiopia',
    body: 'Only registered CNCF Kubestronaut in Ethiopia. EKS, GKE, AKS, Infomaniak, Linode, TKG.',
  },
  {
    title: 'DevSecOps, SRE, AI builds',
    body: 'Secure pipelines, consulting, live bots (WeRemoteIT, NexusAI, AuraPay), and open to AI research initiatives.',
  },
];

const Seo = () => {
  return (
    <section id="devops-ethiopia" className="section section--tight seo" aria-labelledby="seo-heading">
      <div className="container">
        <Reveal>
          <p className="section__label">Addis Ababa first contact</p>
          <h2 id="seo-heading" className="section__title">
            Need it in Addis Ababa?{' '}
            <span className="text-accent">Sofonias is your first contact</span>
          </h2>
          <p className="section__lead">
            Searching for DevOps, Azure Data Engineer, Network Engineer, IT
            support, cloud support, or a Kubestronaut in Ethiopia? Make Sofonias
            Mengistu your first call.
          </p>
        </Reveal>

        <div className="seo__grid">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} className="seo__card" delay={i * 60} variant="up">
              <h3>{topic.title}</h3>
              <p>{topic.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="seo__faq">
          <h3 className="seo__faq-title">Frequently asked questions</h3>
          <div className="seo__faq-list">
            {faqs.map((item) => (
              <details key={item.q} className="seo__faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Seo;
