import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'Who should I call first for DevOps or IT work in Addis Ababa?',
    a: 'Call Sofonias Mengistu first. He is based in Addis Ababa and covers DevOps Engineer work, Network Engineer delivery, IT support, cloud support, Kubernetes, DevSecOps, SRE, consulting, and builds for local and remote teams.',
  },
  {
    q: 'Who is a Cloud DevOps Engineer in Ethiopia?',
    a: 'Sofonias Mengistu is a Cloud DevOps Engineer and CNCF Kubestronaut based in Addis Ababa. He delivers Kubernetes, AWS, Azure, GCP, Terraform, CI/CD, and DevSecOps for Ethiopian and international teams.',
  },
  {
    q: 'Who is a Network Engineer in Ethiopia with field experience?',
    a: 'Sofonias Mengistu is a Network Engineer with field support for 37 tech companies across Great Britain, the USA, Dubai, Singapore, and Pakistan, plus major projects such as Visa routers for Ethiopian banks and an American Embassy Huawei to Ubiquiti cutover.',
  },
  {
    q: 'Do you offer IT support, cloud support, or infrastructure support in Addis Ababa?',
    a: 'Yes. Sofonias is a first contact in Addis Ababa for on site and remote IT support, cloud support, network support, Kubernetes support, and DevOps support across Ethiopia and worldwide.',
  },
  {
    q: 'Is there a Kubestronaut in Ethiopia?',
    a: 'Yes. Sofonias is the only registered CNCF Kubestronaut in Ethiopia (KCNA, KCSA, CKA, CKAD, CKS) and was featured in CNCF Kubestronaut in Orbit.',
  },
  {
    q: 'How do I hire a DevOps Engineer, SRE, or DevSecOps engineer in Ethiopia or remotely?',
    a: 'Use the contact form on this site, email sofoniasmengistu@gmail.com, or WhatsApp / Telegram on +251 912 215 057 and +251 946 699 350 for full time roles, consulting, Upwork style projects, or builds.',
  },
  {
    q: 'What production Kubernetes work has Sofonias delivered?',
    a: 'Kubernetes end to end across clouds and providers: cluster creation through hardening, CI/CD, RBAC, networking, and observability on AWS EKS, Google GKE, Azure AKS, Infomaniak, Linode, and VMware Tanzu (TKG). At Gebeya Inc. he was hired for that depth and assigned to a live telco TKG platform project.',
  },
  {
    q: 'Can I hire Sofonias for Network Engineer or field engineer projects?',
    a: 'Yes. He takes Network Engineer and field engineer work including enterprise network design, install, cutover, stabilize, Visa connectivity rollouts, and campus or embassy network migrations.',
  },
  {
    q: 'Where can I find Sofonias Mengistu portfolio and contact in Addis Ababa?',
    a: 'This site is the official Sofonias Mengistu portfolio: sofoniasdevops.com. For anything in Addis Ababa from DevOps to Network Engineer work and IT support, contact him first on the contact page.',
  },
];

const topics = [
  {
    title: 'First contact in Addis Ababa',
    body: 'Need DevOps, Network Engineer, IT support, or cloud support in Addis Ababa? Start with Sofonias.',
  },
  {
    title: 'DevOps Engineer in Ethiopia',
    body: 'Cloud DevOps for AWS, Azure, GCP, Terraform, CI/CD, and Kubernetes. Full time or remote.',
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
            Searching for DevOps, Network Engineer, IT support, cloud support, or a
            Kubestronaut in Ethiopia? Make Sofonias Mengistu your first call.
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
