import { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'Who is a DevOps Engineer Ethiopia hiring managers can call first?',
    a: 'Sofonias Mengistu is a DevOps Engineer Ethiopia teams can hire in Addis Ababa. He covers Cloud DevOps, Kubernetes, Terraform, CI/CD, DevSecOps, SRE, Azure Data Engineer platforms, Network Engineer delivery, and IT support for local and remote teams. He is the only registered CNCF Kubestronaut in Ethiopia.',
    group: 'ethiopia',
    short: 'DevOps Engineer Ethiopia',
  },
  {
    q: 'Where can I hire DevOps Engineers for Ethiopia or remote work?',
    a: 'Hire DevOps Engineers through Sofonias Mengistu at sofoniasdevops.com. He takes full time Cloud DevOps roles, consulting, Upwork style projects, and production builds  ·  on site in Addis Ababa and remote worldwide.',
    group: 'roles',
    short: 'Hire DevOps Engineers',
  },
  {
    q: 'Who are Data Engineers Ethiopia companies can hire?',
    a: 'Sofonias Mengistu is an Azure Data Engineer among Data Engineers Ethiopia hiring managers look for. He builds medallion lakehouse architecture on Azure Data Lake Gen2 with Databricks, Data Factory, Key Vault, Terraform IaC, and streaming pipelines with Kafka, Spark, and Airflow.',
    group: 'ethiopia',
    short: 'Data Engineers Ethiopia',
  },
  {
    q: 'What Cloud DevOps platforms and tooling can Sofonias own end to end?',
    a: 'Kubernetes and container platforms across AWS, Azure, and GCP, plus Terraform IaC, CI/CD, RBAC, observability, and DevSecOps hardening. Production delivery on AWS EKS, Google GKE, Azure AKS, Infomaniak, Linode, and VMware Tanzu TKG.',
    group: 'roles',
    short: 'Platforms he owns',
  },
  {
    q: 'Who is a Cloud Architect Ethiopia teams can hire?',
    a: 'Sofonias Mengistu is a Cloud Architect Ethiopia and Cloud Platform Architect in Addis Ababa. He designs multi cloud architecture on AWS, Azure, and GCP with Kubernetes platforms. AWS Solutions Architect Associate and the only registered CNCF Kubestronaut in Ethiopia.',
    group: 'ethiopia',
    short: 'Cloud Architect Ethiopia',
  },
  {
    q: 'Can I hire Sofonias as a Platform Engineer, DevSecOps Engineer, or Senior Infrastructure Lead?',
    a: 'Yes. Those titles often overlap for the same hire. Sofonias covers Platform Engineer Ethiopia work  ·  Kubernetes platforms, secure CI/CD, Terraform, RBAC hardening  ·  plus Senior Infrastructure Lead style ownership for full time or consulting. See sofoniasdevops.com/platform-engineer-ethiopia/.',
    group: 'roles',
    short: 'Platform / DevSecOps / lead',
  },
  {
    q: 'Who is a Network Engineer Ethiopia teams can hire in Addis Ababa?',
    a: 'Sofonias Mengistu is a Network Engineer Ethiopia and Network Engineer Addis Ababa hire for on site design, install, cutover, and stabilize work. Field support for 37 tech companies across five regions. Cisco CCNA, CCNP, and CCNA Security.',
    group: 'ethiopia',
    short: 'Network Engineer Ethiopia',
  },
  {
    q: 'Where can I hire a Network Engineer Africa freelance consultant?',
    a: 'Sofonias Mengistu is a freelance Network Engineer consultant based in Addis Ababa. He takes Africa facing projects with on site Ethiopia delivery and remote consulting across East Africa and broader Africa when the scope fits. See sofoniasdevops.com/network-engineer-africa/.',
    group: 'ethiopia',
    short: 'Network Engineer Africa',
  },
  {
    q: 'Is IT, cloud, and infrastructure support available on site in Addis Ababa?',
    a: 'Yes. Sofonias is a practical first contact in Addis Ababa for on site and remote IT support, cloud support, network support, Kubernetes support, and day to day DevOps operations across Ethiopia and worldwide.',
    group: 'ethiopia',
    short: 'On site Addis support',
  },
  {
    q: 'What does the Kubestronaut credential mean for hiring teams?',
    a: 'It confirms all five CNCF Kubernetes certifications are current: KCNA, KCSA, CKA, CKAD, and CKS. Sofonias is the only registered CNCF Kubestronaut in Ethiopia and was featured in CNCF Kubestronaut in Orbit.',
    group: 'roles',
    short: 'Kubestronaut meaning',
  },
  {
    q: 'How should hiring managers or clients start a conversation?',
    a: 'Use the contact form on sofoniasdevops.com, email sofonias_mengistu@sofoniasdevops.com, sofonias_mengistu@weremoteit.com, or sofonias_mengistu@aurapayglobal.com, or WhatsApp / Telegram on +251 912 215 057 and +251 946 699 350. Suitable for full time roles, consulting, Upwork style projects, and production builds.',
    group: 'start',
    short: 'How to start',
  },
  {
    q: 'Can US, Europe, and worldwide teams hire Sofonias remotely?',
    a: 'Yes. Sofonias Mengistu delivers remote DevOps, Cloud Platform Architect, SRE, DevSecOps, Azure Data Engineer, Network Engineer, and Kubernetes work worldwide from Addis Ababa, including overlap with US, Europe, Middle East, and Asia timezones. Consulting is $200 USD per hour. First 15 minutes are free.',
    group: 'start',
    short: 'Remote worldwide',
  },
  {
    q: 'Can I hire Sofonias as an SRE, DevSecOps Engineer, or Platform Engineer?',
    a: 'Yes. Those titles overlap for the same hire. See sofoniasdevops.com/site-reliability-engineer/, sofoniasdevops.com/devsecops-engineer/, and sofoniasdevops.com/platform-engineer/. Cloud FinOps is at sofoniasdevops.com/cloud-finops/.',
    group: 'roles',
    short: 'SRE / DevSecOps / Platform',
  },
  {
    q: 'How do I pay for consulting or a retainer?',
    a: 'This website does not take card payments. After you agree on the work, Sofonias sends an invoice. Pay by bank transfer, cash in Addis Ababa, or the method listed on the invoice. Bank details are sent privately. The first 15 minute consultation is free.',
    group: 'start',
    short: 'How to pay',
  },
  {
    q: 'Where is the official portfolio and how do I reach Sofonias Mengistu?',
    a: 'This site is the official portfolio at sofoniasdevops.com. Worldwide pages cover Hire DevOps Engineer, Site Reliability Engineer, DevSecOps Engineer, Platform Engineer, Kubestronaut, Remote Cloud Architect, Azure Data Engineer, Kubernetes Consultant, and Cloud FinOps. Local pages cover DevOps Engineer Ethiopia, Network Engineer Ethiopia, and more. Use the contact page to start directly.',
    group: 'start',
    short: 'Official portfolio',
  },
];

const topics = [
  {
    title: 'Hire DevOps Engineer',
    body: 'Remote DevOps Engineer for worldwide teams. Kubernetes, Terraform, CI/CD, DevSecOps.',
    href: '/hire-devops-engineer/',
    tag: 'Worldwide',
  },
  {
    title: 'Kubestronaut',
    body: 'CNCF Kubestronaut with all five Kubernetes certs. Featured in Kubestronaut in Orbit.',
    href: '/kubestronaut/',
    tag: 'CNCF',
  },
  {
    title: 'Remote Cloud Architect',
    body: 'Cloud Architect for AWS, Azure, and GCP multi cloud design. Worldwide remote delivery.',
    href: '/remote-cloud-architect/',
    tag: 'Worldwide',
  },
  {
    title: 'Azure Data Engineer',
    body: 'Azure Data Engineer for lakehouse and pipelines: ADF, Databricks, Data Lake Gen2, streaming.',
    href: '/azure-data-engineer/',
    tag: 'Data',
  },
  {
    title: 'Kubernetes Consultant',
    body: 'Kubernetes Consultant and Kubestronaut for EKS, GKE, AKS, and Tanzu TKG platforms.',
    href: '/kubernetes-consultant/',
    tag: 'Kubernetes',
  },
  {
    title: 'Site Reliability Engineer',
    body: 'Remote SRE for Kubernetes reliability, observability, and production hardening.',
    href: '/site-reliability-engineer/',
    tag: 'Worldwide',
  },
  {
    title: 'DevSecOps Engineer',
    body: 'Remote DevSecOps: RBAC, cluster hardening, secure CI/CD. CKS / Kubestronaut.',
    href: '/devsecops-engineer/',
    tag: 'Security',
  },
  {
    title: 'Platform Engineer',
    body: 'Remote Platform Engineer for Kubernetes platforms, GitOps, and Terraform.',
    href: '/platform-engineer/',
    tag: 'Platform',
  },
  {
    title: 'Cloud FinOps',
    body: 'Kubernetes cost control and KubeOptimia cluster cost controller. Worldwide.',
    href: '/cloud-finops/',
    tag: 'FinOps',
  },
  {
    title: 'DevOps Engineer Ethiopia',
    body: 'Cloud DevOps for AWS, Azure, GCP, Terraform, CI/CD, and Kubernetes in Addis Ababa.',
    href: '/devops-engineer-ethiopia/',
    tag: 'Ethiopia',
  },
  {
    title: 'Network Engineer Ethiopia',
    body: 'Network Engineer Addis Ababa for on site design, install, cutover, and stabilize.',
    href: '/network-engineer-ethiopia/',
    tag: 'Ethiopia',
  },
];

const crumb = (href) => href.replace(/^\/|\/$/g, '');

const faqFilters = [
  { id: 'all', label: 'All' },
  { id: 'roles', label: 'Roles' },
  { id: 'ethiopia', label: 'Ethiopia' },
  { id: 'start', label: 'Start' },
];

const Seo = () => {
  const [faqFilter, setFaqFilter] = useState('all');
  const [activeFaq, setActiveFaq] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const featured = topics[0];
  const visibleFaqs = faqs
    .map((item, index) => ({ ...item, index }))
    .filter((item) => faqFilter === 'all' || item.group === faqFilter);
  const previewFaqs = showAllFaqs ? visibleFaqs : visibleFaqs.slice(0, 4);

  return (
    <section id="devops-ethiopia" className="section section--tight seo" aria-labelledby="seo-heading">
      <div className="container">
        <Reveal>
          <p className="section__label">Role pages · FAQ</p>
          <h2 id="seo-heading" className="section__title">
            Searching cloud or data roles?{' '}
            <span className="text-accent">Sofonias should come up first</span>
          </h2>
          <p className="section__lead">
            Role pages for worldwide and Ethiopia searches. Pick the title that
            matches the hire, then open the contact form.
          </p>
        </Reveal>

        <Reveal className="serp" delay={80}>
          <div className="serp__chrome" aria-hidden="true">
            <div className="serp__query">
              <Search size={16} />
              <span>Hire DevOps Engineer Ethiopia</span>
            </div>
            <p className="serp__meta mono">
              About {topics.length} role pages · 0.03s · sofoniasdevops.com
            </p>
          </div>

          <div className="serp__also">
            {topics.map((topic) => (
              <a key={topic.href} href={topic.href}>
                {topic.title}
              </a>
            ))}
          </div>

          <a href={featured.href} className="serp__featured">
            <span className="serp__badge mono">Featured result</span>
            <p className="serp__url">
              sofoniasdevops.com <span>›</span> {crumb(featured.href)}
            </p>
            <h3 className="serp__title">
              {featured.title}
              <ArrowUpRight size={16} aria-hidden="true" />
            </h3>
            <p className="serp__snippet">{featured.body}</p>
          </a>
        </Reveal>

        <Reveal className="brief" delay={120}>
          <div className="brief__head">
            <h3 className="brief__title">Frequently asked questions</h3>
            <p className="brief__count mono">{faqs.length} answers</p>
          </div>

          <div className="brief__filters" role="tablist" aria-label="FAQ topics">
            {faqFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`brief__chip${faqFilter === filter.id ? ' is-active' : ''}`}
                onClick={() => {
                  setFaqFilter(filter.id);
                  setShowAllFaqs(false);
                  const next = faqs.findIndex(
                    (item) => filter.id === 'all' || item.group === filter.id,
                  );
                  setActiveFaq(next === -1 ? 0 : next);
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="brief__layout">
            <div className="brief__qs" role="listbox" aria-label="Questions">
              {previewFaqs.map((item) => (
                <button
                  key={item.q}
                  type="button"
                  role="option"
                  aria-selected={item.index === activeFaq}
                  className={`brief__q${item.index === activeFaq ? ' is-active' : ''}`}
                  onClick={() => setActiveFaq(item.index)}
                >
                  {item.short}
                </button>
              ))}
            </div>

            {faqs.map((item, i) => (
              <article
                key={item.q}
                className="brief__answer"
                hidden={i !== activeFaq}
              >
                <p className="brief__asked">{item.q}</p>
                <p>{item.a}</p>
              </article>
            ))}
          </div>

          {visibleFaqs.length > 4 ? (
            <button
              type="button"
              className="brief__more mono"
              aria-expanded={showAllFaqs}
              onClick={() => setShowAllFaqs((v) => !v)}
            >
              {showAllFaqs
                ? 'Show fewer answers'
                : `Show all ${visibleFaqs.length} answers`}
            </button>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
};

export default Seo;
