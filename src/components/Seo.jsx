const faqs = [
  {
    q: 'Who is a Cloud DevOps Engineer in Ethiopia?',
    a: 'Sofonias Mengistu is a Cloud DevOps Engineer and CNCF Kubestronaut based in Addis Ababa. He delivers Kubernetes, AWS, Azure, GCP, Terraform, CI/CD, and DevSecOps for Ethiopian and international teams.',
  },
  {
    q: 'Is there a Kubestronaut in Ethiopia?',
    a: 'Yes. Sofonias is the only registered CNCF Kubestronaut in Ethiopia (KCNA, KCSA, CKA, CKAD, CKS) and was featured in CNCF Kubestronaut in Orbit.',
  },
  {
    q: 'How do I hire a DevOps Engineer in Ethiopia or remotely?',
    a: 'Use the contact form on this site, email sofoniasmengistu@gmail.com, or WhatsApp / Telegram on +251 912 215 057 and +251 946 699 350 for full-time roles, consulting, or builds.',
  },
  {
    q: 'What production Kubernetes work has Sofonias delivered?',
    a: 'End-to-end Kubernetes across clouds and providers: cluster creation through hardening, CI/CD, RBAC, networking, and observability on AWS EKS, Google GKE, Azure AKS, Infomaniak, Linode, and VMware Tanzu (TKG). At Gebeya Inc. he was hired for that depth and assigned to a live telco TKG platform project.',
  },
];

const Seo = () => {
  return (
    <section id="devops-ethiopia" className="section section--muted seo" aria-labelledby="seo-heading">
      <div className="container">
        <p className="section__label">SEO · Ethiopia · Cloud native</p>
        <h2 id="seo-heading" className="section__title">
          DevOps Engineer in Ethiopia{' '}
          <span className="text-accent">Cloud DevOps · Kubestronaut</span>
        </h2>
        <p className="section__lead">
          Looking for a Cloud DevOps Engineer in Ethiopia, a Kubernetes specialist
          in Addis Ababa, or a Kubestronaut for remote DevSecOps? This is the
          official site of Sofonias Mengistu.
        </p>

        <div className="seo__grid">
          <article className="seo__card">
            <h3>Cloud DevOps Engineer in Ethiopia</h3>
            <p>
              Based in Addis Ababa and available remote worldwide. Multi-cloud
              delivery on AWS, Azure, and GCP with Terraform, CI/CD, GitOps, and
              production Kubernetes end to end: EKS, GKE, AKS, Infomaniak,
              Linode, and VMware Tanzu Kubernetes Grid.
            </p>
          </article>
          <article className="seo__card">
            <h3>Kubestronaut Ethiopia</h3>
            <p>
              CNCF Kubestronaut credentials: KCNA, KCSA, CKA, CKAD, and CKS.
              Featured by CNCF for Kubernetes and cloud native leadership from
              Ethiopia.
            </p>
          </article>
          <article className="seo__card">
            <h3>Hire for roles, consulting, and builds</h3>
            <p>
              Full time Cloud DevOps / DevSecOps / SRE roles, Upwork style
              consulting, multi-cloud cluster builds, cloud training (GIZ), and
              custom Telegram / platform builds.
            </p>
          </article>
        </div>

        <div className="seo__faq">
          <h3 className="seo__faq-title">Frequently asked questions</h3>
          <dl className="seo__faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="seo__faq-item">
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Seo;
