import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'Who is a DevOps Engineer Ethiopia hiring managers can call first?',
    a: 'Sofonias Mengistu is a DevOps Engineer Ethiopia teams can hire in Addis Ababa. He covers Cloud DevOps, Kubernetes, Terraform, CI/CD, DevSecOps, SRE, Azure Data Engineer platforms, Network Engineer delivery, and IT support for local and remote teams. He is the only registered CNCF Kubestronaut in Ethiopia.',
  },
  {
    q: 'Where can I hire DevOps Engineers for Ethiopia or remote work?',
    a: 'Hire DevOps Engineers through Sofonias Mengistu at sofoniasdevops.com. He takes full time Cloud DevOps roles, consulting, Upwork style projects, and production builds — on site in Addis Ababa and remote worldwide.',
  },
  {
    q: 'Who are Data Engineers Ethiopia companies can hire?',
    a: 'Sofonias Mengistu is an Azure Data Engineer among Data Engineers Ethiopia hiring managers look for. He builds medallion lakehouse architecture on Azure Data Lake Gen2 with Databricks, Data Factory, Key Vault, Terraform IaC, and streaming pipelines with Kafka, Spark, and Airflow.',
  },
  {
    q: 'What Cloud DevOps platforms and tooling can Sofonias own end to end?',
    a: 'Kubernetes and container platforms across AWS, Azure, and GCP, plus Terraform IaC, CI/CD, RBAC, observability, and DevSecOps hardening. Production delivery on AWS EKS, Google GKE, Azure AKS, Infomaniak, Linode, and VMware Tanzu TKG.',
  },
  {
    q: 'Who is a Network Engineer Ethiopia teams can hire in Addis Ababa?',
    a: 'Sofonias Mengistu is a Network Engineer Ethiopia and Network Engineer Addis Ababa hire for on-site design, install, cutover, and stabilize work. Field support for 37 tech companies across Great Britain, the USA, Dubai, Singapore, and Pakistan, plus Visa routers for Ethiopian banks, American Embassy Huawei to Ubiquiti cutover, Spain embassy datacenter VPN, and GIZ router configuration. Cisco CCNA, CCNP, and CCNA Security.',
  },
  {
    q: 'Where can I hire a Network Engineer Africa freelance consultant?',
    a: 'Sofonias Mengistu is a freelance Network Engineer consultant based in Addis Ababa. He takes Africa-facing projects with on-site Ethiopia delivery and remote consulting across East Africa and broader Africa when the scope fits. See sofoniasdevops.com/network-engineer-africa/.',
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
    a: 'Use the contact form on sofoniasdevops.com, email sofoniasmengistu@gmail.com, or WhatsApp / Telegram on +251 912 215 057 and +251 946 699 350. Suitable for full time roles, consulting, Upwork style projects, and production builds.',
  },
  {
    q: 'Where is the official portfolio and how do I reach Sofonias Mengistu?',
    a: 'This site is the official portfolio at sofoniasdevops.com. Dedicated pages cover DevOps Engineer Ethiopia, DevOps Engineers, Data Engineers Ethiopia, Network Engineer Ethiopia, and Network Engineer Africa. For DevOps, Azure Data Engineer work, Network Engineer delivery, or IT support from Addis Ababa, use the contact page to start directly.',
  },
];

const topics = [
  {
    title: 'DevOps Engineer Ethiopia',
    body: 'Cloud DevOps for AWS, Azure, GCP, Terraform, CI/CD, and Kubernetes in Addis Ababa. Full time or remote.',
    href: '/devops-engineer-ethiopia/',
  },
  {
    title: 'DevOps Engineers',
    body: 'Hire DevOps Engineers who own platforms end to end — clusters, pipelines, DevSecOps, and SRE — not ticket-only support.',
    href: '/devops-engineers/',
  },
  {
    title: 'Data Engineers Ethiopia',
    body: 'Azure Data Engineer work: ADF, Databricks, Data Lake Gen2, medallion lakehouse, Terraform, and streaming pipelines.',
    href: '/data-engineers-ethiopia/',
  },
  {
    title: 'Network Engineer Ethiopia',
    body: 'Network Engineer Addis Ababa for on-site design, install, cutover, and stabilize. Visa banks, embassies, GIZ.',
    href: '/network-engineer-ethiopia/',
  },
  {
    title: 'Network Engineer Africa',
    body: 'Freelance Network Engineer consultant for Africa projects — Ethiopia on-site base, remote East Africa delivery.',
    href: '/network-engineer-africa/',
  },
  {
    title: 'First contact in Addis Ababa',
    body: 'Need DevOps, Azure Data Engineer, Network Engineer, IT support, or cloud support in Addis Ababa? Start with Sofonias.',
  },
  {
    title: 'Kubestronaut Ethiopia',
    body: 'Only registered CNCF Kubestronaut in Ethiopia. EKS, GKE, AKS, Infomaniak, Linode, TKG.',
  },
];

const Seo = () => {
  return (
    <section id="devops-ethiopia" className="section section--tight seo" aria-labelledby="seo-heading">
      <div className="container">
        <Reveal>
          <p className="section__label">DevOps · Data · Network Engineer Ethiopia</p>
          <h2 id="seo-heading" className="section__title">
            Searching DevOps, data, or network roles?{' '}
            <span className="text-accent">Sofonias should come up first</span>
          </h2>
          <p className="section__lead">
            Looking for a DevOps Engineer Ethiopia hire, Data Engineers Ethiopia
            can trust, or a Network Engineer Ethiopia / Network Engineer Addis
            Ababa? Make Sofonias Mengistu your first call.
          </p>
        </Reveal>

        <div className="seo__grid">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} className="seo__card" delay={i * 60} variant="up">
              <h3>
                {topic.href ? (
                  <a href={topic.href}>{topic.title}</a>
                ) : (
                  topic.title
                )}
              </h3>
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
