import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'Who is a DevOps Engineer Ethiopia hiring managers can call first?',
    a: 'Sofonias Mengistu is a DevOps Engineer Ethiopia teams can hire in Addis Ababa. He covers Cloud DevOps, Kubernetes, Terraform, CI/CD, DevSecOps, SRE, Azure Data Engineer platforms, Network Engineer delivery, and IT support for local and remote teams. He is the only registered CNCF Kubestronaut in Ethiopia.',
  },
  {
    q: 'Where can I hire DevOps Engineers for Ethiopia or remote work?',
    a: 'Hire DevOps Engineers through Sofonias Mengistu at sofoniasdevops.com. He takes full time Cloud DevOps roles, consulting, Upwork style projects, and production builds  ·  on site in Addis Ababa and remote worldwide.',
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
    q: 'Who is a Cloud Architect Ethiopia teams can hire?',
    a: 'Sofonias Mengistu is a Cloud Architect Ethiopia and Cloud Platform Architect in Addis Ababa. He designs multi cloud architecture on AWS, Azure, and GCP with Kubernetes platforms. AWS Solutions Architect Associate and the only registered CNCF Kubestronaut in Ethiopia.',
  },
  {
    q: 'Can I hire Sofonias as a Platform Engineer, DevSecOps Engineer, or Senior Infrastructure Lead?',
    a: 'Yes. Those titles often overlap for the same hire. Sofonias covers Platform Engineer Ethiopia work  ·  Kubernetes platforms, secure CI/CD, Terraform, RBAC hardening  ·  plus Senior Infrastructure Lead style ownership for full time or consulting. See sofoniasdevops.com/platform-engineer-ethiopia/.',
  },
  {
    q: 'Who is a Network Engineer Ethiopia teams can hire in Addis Ababa?',
    a: 'Sofonias Mengistu is a Network Engineer Ethiopia and Network Engineer Addis Ababa hire for on site design, install, cutover, and stabilize work. Field support for 37 tech companies across Great Britain, the USA, Dubai, Singapore, and Pakistan, plus Visa routers for Ethiopian banks, American Embassy Huawei to Ubiquiti cutover, Spain embassy datacenter VPN, and GIZ router configuration. Cisco CCNA, CCNP, and CCNA Security.',
  },
  {
    q: 'Where can I hire a Network Engineer Africa freelance consultant?',
    a: 'Sofonias Mengistu is a freelance Network Engineer consultant based in Addis Ababa. He takes Africa facing projects with on site Ethiopia delivery and remote consulting across East Africa and broader Africa when the scope fits. See sofoniasdevops.com/network-engineer-africa/.',
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
    a: 'Use the contact form on sofoniasdevops.com, email sofonias_mengistu@sofoniasdevops.com, sofonias_mengistu@weremoteit.com, or sofonias_mengistu@aurapayglobal.com, or WhatsApp / Telegram on +251 912 215 057 and +251 946 699 350. Suitable for full time roles, consulting, Upwork style projects, and production builds.',
  },
  {
    q: 'How do I pay for consulting or a retainer?',
    a: 'This website does not take card payments. After you agree on the work, Sofonias sends an invoice. Pay by bank transfer, cash in Addis Ababa, or the method listed on the invoice. Bank details are sent privately. The first 15 minute consultation is free.',
  },
  {
    q: 'Where is the official portfolio and how do I reach Sofonias Mengistu?',
    a: 'This site is the official portfolio at sofoniasdevops.com. Worldwide pages cover Hire DevOps Engineer, Kubestronaut, Remote Cloud Architect, Azure Data Engineer, and Kubernetes Consultant. Local pages cover DevOps Engineer Ethiopia, Network Engineer Ethiopia, and more. Use the contact page to start directly.',
  },
];

const topics = [
  {
    title: 'Hire DevOps Engineer',
    body: 'Remote DevOps Engineer for worldwide teams. Kubernetes, Terraform, CI/CD, DevSecOps.',
    href: '/hire-devops-engineer/',
  },
  {
    title: 'Kubestronaut',
    body: 'CNCF Kubestronaut with all five Kubernetes certs. Featured in Kubestronaut in Orbit.',
    href: '/kubestronaut/',
  },
  {
    title: 'Remote Cloud Architect',
    body: 'Cloud Architect for AWS, Azure, and GCP multi cloud design. Worldwide remote delivery.',
    href: '/remote-cloud-architect/',
  },
  {
    title: 'Azure Data Engineer',
    body: 'Azure Data Engineer for lakehouse and pipelines: ADF, Databricks, Data Lake Gen2, streaming.',
    href: '/azure-data-engineer/',
  },
  {
    title: 'Kubernetes Consultant',
    body: 'Kubernetes Consultant and Kubestronaut for EKS, GKE, AKS, and Tanzu TKG platforms.',
    href: '/kubernetes-consultant/',
  },
  {
    title: 'DevOps Engineer Ethiopia',
    body: 'Cloud DevOps for AWS, Azure, GCP, Terraform, CI/CD, and Kubernetes in Addis Ababa.',
    href: '/devops-engineer-ethiopia/',
  },
  {
    title: 'Network Engineer Ethiopia',
    body: 'Network Engineer Addis Ababa for on site design, install, cutover, and stabilize.',
    href: '/network-engineer-ethiopia/',
  },
];

const Seo = () => {
  return (
    <section id="devops-ethiopia" className="section section--tight seo" aria-labelledby="seo-heading">
      <div className="container">
        <Reveal>
          <p className="section__label">Worldwide · Ethiopia · Cloud · Data · Network</p>
          <h2 id="seo-heading" className="section__title">
            Searching cloud or data roles?{' '}
            <span className="text-accent">Sofonias should come up first</span>
          </h2>
          <p className="section__lead">
            Looking to hire a DevOps Engineer remote, Cloud Architect, Kubestronaut,
            Azure Data Engineer, Kubernetes Consultant, or Network Engineer Ethiopia?
            Make Sofonias Mengistu your first call worldwide.
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
