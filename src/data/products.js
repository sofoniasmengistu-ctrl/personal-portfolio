export const products = [
  {
    id: 'weremoteit',
    name: 'WeRemoteIT',
    tag: 'Hiring',
    description:
      'AI-powered ATS for remote IT talent: screening and matching inside Telegram.',
    web: 'https://weremoteit.com',
    bot: '@WeRemoteITbot',
    botUrl: 'https://t.me/WeRemoteITbot',
    community: 'https://t.me/WeRemoteIT',
    communityLabel: 'Community',
  },
  {
    id: 'aurapay',
    name: 'AuraPay Global',
    tag: 'Payments',
    description:
      'TON & USDT gateway in Telegram: send, swap, Stars, and merchant links.',
    web: 'https://aurapayglobal.com',
    bot: '@AuraPayGlobalBot',
    botUrl: 'https://t.me/AuraPayGlobalBot',
    community: 'https://t.me/AuraPayGlobalCommunity',
    communityLabel: 'Community',
  },
  {
    id: 'nexusai',
    name: 'NexusAI',
    tag: 'AI',
    description:
      'Hundreds of models in one bot: compare side by side, vision, voice, and more.',
    web: null,
    bot: '@NexusAIAggregatorBot',
    botUrl: 'https://t.me/NexusAIAggregatorBot',
    community: 'https://t.me/NexusAIPromo',
    communityLabel: 'Updates',
  },
];

export const companyChannels = [
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@WeRemoteIT',
    href: 'https://www.youtube.com/@WeRemoteIT',
    note: 'Product demos & updates',
  },
  {
    id: 'x',
    label: 'X',
    handle: '@WeRemoteIT',
    href: 'https://x.com/WeRemoteIT',
    note: 'Announcements',
  },
  {
    id: 'medium',
    label: 'Medium',
    handle: '@sofonias_mengistu',
    href: 'https://medium.com/@sofonias_mengistu',
    note: 'Engineering notes',
  },
];

export const credentials = {
  kubestronautDirectory:
    'https://www.cncf.io/training/kubestronaut/?_sft_lf-country=et',
  kubestronautNote: 'Only registered Kubestronaut in Ethiopia · CNCF',
  linkedIn: 'https://www.linkedin.com/in/sofonias-mengistu-eng/',
  github: 'https://github.com/Sofoniasm',
  cncfOrbit:
    'https://www.cncf.io/blog/2024/12/31/kubestronaut-in-orbit-sofonias-mengistu/',
  email: 'sofoniasmengistu@gmail.com',
};

/** Direct channels for hiring managers and personal clients */
export const clientChannels = [
  {
    id: 'email',
    label: 'Email',
    value: 'sofoniasmengistu@gmail.com',
    href: 'mailto:sofoniasmengistu@gmail.com',
    note: 'Jobs, consulting, product builds',
  },
  {
    id: 'wa-1',
    label: 'WhatsApp',
    value: '+251 912 215 057',
    href: 'https://wa.me/251912215057',
    note: 'Chat / call',
  },
  {
    id: 'wa-2',
    label: 'WhatsApp',
    value: '+251 946 699 350',
    href: 'https://wa.me/251946699350',
    note: 'Chat / call',
  },
  {
    id: 'tg-1',
    label: 'Telegram',
    value: '+251 912 215 057',
    href: 'https://t.me/+251912215057',
    note: 'Direct message',
  },
  {
    id: 'tg-2',
    label: 'Telegram',
    value: '+251 946 699 350',
    href: 'https://t.me/+251946699350',
    note: 'Direct message',
  },
  {
    id: 'phone-1',
    label: 'Call',
    value: '+251 912 215 057',
    href: 'tel:+251912215057',
    note: 'Mobile',
  },
  {
    id: 'phone-2',
    label: 'Call',
    value: '+251 946 699 350',
    href: 'tel:+251946699350',
    note: 'Mobile',
  },
];

/** Social / platform proof — curated for hiring managers */
export const trustMetrics = [
  {
    value: 'Kubestronaut',
    label: 'KCNA · KCSA · CKA · CKAD · CKS',
    href: 'https://www.cncf.io/training/kubestronaut/?_sft_lf-country=et',
  },
  {
    value: '16+',
    count: 16,
    suffix: '+',
    label: 'Years in IT / DevOps',
    href: null,
  },
  {
    value: '35+',
    count: 35,
    suffix: '+',
    label: 'Companies delivered as field engineer',
    href: null,
  },
  {
    value: '29k+',
    count: 29,
    suffix: 'k+',
    label: 'LinkedIn followers',
    href: 'https://www.linkedin.com/in/sofonias-mengistu-eng/',
  },
];

/** Full cert picture for trust strip */
export const trustCertifications = [
  'Kubestronaut (KCNA · KCSA · CKA · CKAD · CKS)',
  'Azure — all certifications',
  'AWS Cloud Engineer',
  'CCNA',
  'CCNP',
  'CCNA Security',
];

/** Selected roles from LinkedIn experience */
export const experienceHighlights = [
  {
    title: 'DevOps Engineer · Gebeya Inc.',
    outcome:
      'Assigned to Safaricom Ethiopia: Tanzu Kubernetes Grid clusters, lifecycle, Terraform IaC, CI/CD, RBAC, Prometheus/Grafana.',
    tags: ['TKG', 'Terraform', 'CI/CD', 'Prometheus', 'RBAC'],
    channel: 'Aug 2023 to Present · Addis Ababa',
  },
  {
    title: 'Cloud Computing Trainer · GIZ',
    outcome:
      'Trained teams on AWS, Azure, and GCP: architecture, security, serverless, and cost aware cloud practice.',
    tags: ['AWS', 'Azure', 'GCP', 'Training'],
    channel: 'Jul 2023 to Nov 2023 · GIZ',
  },
  {
    title: 'Senior DevOps · KodeKloud',
    outcome:
      'Hands on DevOps delivery (Project Nautilus): Ansible, Terraform, config management, and cross team delivery.',
    tags: ['Ansible', 'Terraform', 'Linux', 'DevOps'],
    channel: '2023 · KodeKloud Engineer path',
  },
  {
    title: 'Cloud / DevOps · multi client delivery',
    outcome:
      'AWS, Azure, GCP IaC, CI/CD, Docker/Kubernetes, monitoring, security, and cost optimization for consulting clients.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
    channel: 'Tefer · Excis · Tech Source · Orion',
  },
  {
    title: 'Network & systems · ECX and field',
    outcome:
      'Field engineer for 35+ technology companies; network admin and IT support at Ethiopia Commodity Exchange.',
    tags: ['Cisco', 'LAN/WAN', 'Security', 'On prem'],
    channel: '2010 to 2018 · ECX + field',
  },
];

/** Featured GitHub engineering work — smart subset of 97+ repos */
export const githubFeatured = [
  {
    name: 'AWS prod infra · FT360 / Aircall',
    stack: 'Terraform · AWS · CI',
    description:
      'Production IaC: EC2, RDS, GitLab Runner, security, backups, and scale.',
    href: 'https://github.com/Sofoniasm/aws-prod-infra-ft360-aircall-api',
  },
  {
    name: 'Laravel serverless on AWS',
    stack: 'Lambda · Aurora · Terraform',
    description:
      'Bref + API Gateway + Aurora Serverless with GitLab CI and secure env management.',
    href: 'https://github.com/Sofoniasm/aws-laravel-serverless-terraform',
  },
  {
    name: 'Azure data platform (100%)',
    stack: 'Terraform · Databricks · ADF',
    description:
      'Medallion lakehouse: Data Lake, Key Vault, Databricks, Data Factory.',
    href: 'https://github.com/Sofoniasm/Azure-Data-Engineer-100-automated-',
  },
  {
    name: 'Matrix Synapse deployment',
    stack: 'HCL · Bridges · React',
    description:
      'Full-stack Matrix platform with social bridges and AI conversation insights.',
    href: 'https://github.com/Sofoniasm/Matrix-Synapse-deployment',
  },
  {
    name: 'Realtime data streaming',
    stack: 'Kafka · Spark · Airflow',
    description:
      'End to end streaming pipeline: ingest, process, store, fully containerized.',
    href: 'https://github.com/Sofoniasm/Realtime-Data-Streaming-End-To-End-Data-Engineering-Project',
  },
  {
    name: 'GitOps + AIOps prototype',
    stack: 'Python · Multi-cloud',
    description:
      'Simulated multi-cloud cost/latency routing with telemetry and a live dashboard.',
    href: 'https://github.com/Sofoniasm/swen-gitops-aiops',
  },
];

/**
 * Client / Upwork-style delivery — framed from real delivery themes.
 * Replace hrefs with Upwork portfolio links when you share them.
 */
export const clientDeliveries = [
  {
    title: 'Safaricom Ethiopia · TKG Kubernetes',
    outcome:
      'Via Gebeya: cluster lifecycle, Terraform provisioning, CI/CD integration, security policies, monitoring.',
    tags: ['Tanzu TKG', 'Safaricom', 'GitOps'],
    channel: 'Gebeya Inc. · production',
  },
  {
    title: 'Multi cloud CI/CD & platforms',
    outcome:
      'Pipelines and infra automation on AWS, Azure, and GCP for consulting and Upwork style delivery.',
    tags: ['Kubernetes', 'ArgoCD', 'Jenkins', 'GitLab CI'],
    channel: 'Consulting · client delivery',
  },
  {
    title: 'Cloud training for teams (GIZ)',
    outcome:
      'Structured AWS / Azure / GCP programs: fundamentals through architecture, security, and cost control.',
    tags: ['Trainer', 'AWS', 'Azure', 'GCP'],
    channel: 'GIZ · capacity building',
  },
  {
    title: 'Enterprise networking to cloud',
    outcome:
      '35+ company field delivery plus ECX network/systems foundation before the DevOps transition.',
    tags: ['Networking', 'Cisco', 'Hybrid cloud'],
    channel: 'Field + ECX',
  },
];
