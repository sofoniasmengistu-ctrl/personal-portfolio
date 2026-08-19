export const products = [
  {
    id: 'weremoteit',
    name: 'WeRemoteIT',
    tag: 'Live company · Web, bot, Android',
    description:
      'WeRemoteIT company product for remote IT talent: live site, Telegram bot, and Android app. Open and use it today. Company GitHub stays private.',
    web: 'https://weremoteit.com',
    webLabel: 'Company site',
    bot: '@WeRemoteITbot',
    botUrl: 'https://t.me/WeRemoteITbot',
    community: 'https://t.me/WeRemoteIT',
    communityLabel: 'Community',
    mark: '/products/weremoteit-mark.png',
  },
  {
    id: 'aurapay',
    name: 'AuraPay Global',
    tag: 'Live company · Bot + site',
    description:
      'AuraPay Global company product. Telegram bot is live for payments. Website aurapayglobal.com is the public company site (still being finished).',
    web: 'https://aurapayglobal.com',
    webLabel: 'Company site',
    webSoon: false,
    bot: '@AuraPayGlobalBot',
    botUrl: 'https://t.me/AuraPayGlobalBot',
    community: 'https://t.me/AuraPayGlobalCommunity',
    communityLabel: 'Community',
    mark: '/products/aurapay-mark.png',
  },
  {
    id: 'nexusai',
    name: 'NexusAI Aggregator',
    tag: 'Live',
    description:
      'Live multi model AI bot. Compare models side by side with vision, voice, and more. Open and use it now.',
    web: null,
    webLabel: null,
    bot: '@NexusAIAggregatorBot',
    botUrl: 'https://t.me/NexusAIAggregatorBot',
    community: 'https://t.me/NexusAIPromo',
    communityLabel: 'Updates',
    mark: '/products/nexusai-mark.png',
  },
  {
    id: 'kubeoptimia',
    name: 'KubeOptimia',
    tag: 'FinOps · Cluster cost controller',
    description:
      'Cloud FinOps for Kubernetes: cluster cost controller that makes spend visible, rightsizes workloads, and keeps cloud bills under control. Pure Forward Deployed Engineer craft — sit with production clusters and govern cost as a first class platform signal.',
    web: null,
    webLabel: null,
    webSoon: false,
    bot: null,
    botUrl: null,
    community: null,
    communityLabel: null,
    focus: 'Kubernetes cost · FinOps · FDE',
    ctaHref: '#contact',
    ctaLabel: 'Discuss FinOps',
    mark: null,
  },
];

export const companyChannels = [
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@WeRemoteIT',
    href: 'https://www.youtube.com/@WeRemoteIT',
    note: 'Live product demos and updates',
  },
  {
    id: 'x',
    label: 'X',
    handle: '@WeRemoteIT',
    href: 'https://x.com/WeRemoteIT',
    note: 'Live product announcements',
  },
  {
    id: 'medium',
    label: 'Medium',
    handle: '@sofonias_mengistu',
    href: 'https://medium.com/@sofonias_mengistu',
    note: 'Engineering and AI notes',
  },
];

export const credentials = {
  kubestronautDirectory:
    'https://www.cncf.io/training/kubestronaut/?_sft_lf-country=et',
  kubestronautNote: 'Only registered Kubestronaut in Ethiopia, CNCF',
  linkedIn: 'https://www.linkedin.com/in/sofonias-mengistu-eng/',
  github: 'https://github.com/Sofoniasm',
  cncfOrbit:
    'https://www.cncf.io/blog/2024/12/31/kubestronaut-in-orbit-sofonias-mengistu/',
  email: 'sofonias_mengistu@sofoniasdevops.com',
  emailGmail: 'sofoniasmengistu@gmail.com',
};

export const professionalEmails = [
  {
    id: 'portfolio',
    email: 'sofonias_mengistu@sofoniasdevops.com',
    href: 'mailto:sofonias_mengistu@sofoniasdevops.com',
    note: 'Portfolio, jobs, consulting',
  },
  {
    id: 'weremoteit',
    email: 'sofonias_mengistu@weremoteit.com',
    href: 'mailto:sofonias_mengistu@weremoteit.com',
    note: 'WeRemoteIT',
  },
  {
    id: 'aurapay',
    email: 'sofonias_mengistu@aurapayglobal.com',
    href: 'mailto:sofonias_mengistu@aurapayglobal.com',
    note: 'AuraPay Global',
  },
];

export const location = {
  name: 'Sofonias Mengistu',
  street: 'Africa Avenue',
  city: 'Addis Ababa',
  postalCode: '1000',
  country: 'Ethiopia',
  hours: 'By appointment · Addis Ababa on site · remote worldwide',
  timezone: 'EAT (UTC+3)',
  latLabel: '08.9942° N',
  lngLabel: '038.7875° E',
  iata: 'ADD',
  mapsQuery:
    'https://www.google.com/maps/search/?api=1&query=Sofonias%20Mengistu%2C%20Africa%20Avenue%2C%20Addis%20Ababa',
  mapsEmbed:
    'https://maps.google.com/maps?q=Africa%20Avenue%2C%20Addis%20Ababa%201000&z=15&output=embed&hl=en',
  profileSearch: 'https://www.google.com/search?q=Sofonias+Mengistu',
  whatsapp:
    'https://wa.me/251912215057?text=Hi%20Sofonias%2C%20I%20saw%20your%20map%20listing',
};

/** Direct channels for hiring managers and personal clients */
export const clientChannels = [
  ...professionalEmails.map((item) => ({
    id: `email-${item.id}`,
    label: 'Email',
    value: item.email,
    href: item.href,
    note: item.note,
  })),
  {
    id: 'email-gmail',
    label: 'Email',
    value: 'sofoniasmengistu@gmail.com',
    href: 'mailto:sofoniasmengistu@gmail.com',
    note: 'Gmail backup',
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

/** Social / platform proof curated for hiring managers */
export const trustMetrics = [
  {
    value: 'Kubestronaut',
    label: 'KCNA, KCSA, CKA, CKAD, CKS',
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
    value: '37',
    count: 37,
    suffix: '',
    label: 'Tech companies, Network Engineer field support',
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

/** Full cert picture for trust strip · Kubestronaut badges use official CNCF artwork */
export const trustKubestronautCerts = [
  {
    id: 'kcna',
    label: 'KCNA',
    logo: '/certs/kcna.svg',
    href: 'https://www.cncf.io/training/certification/kcna/',
  },
  {
    id: 'kcsa',
    label: 'KCSA',
    logo: '/certs/kcsa.svg',
    href: 'https://www.cncf.io/training/certification/kcsa/',
  },
  {
    id: 'cka',
    label: 'CKA',
    logo: '/certs/cka.svg',
    href: 'https://www.cncf.io/training/certification/cka/',
  },
  {
    id: 'ckad',
    label: 'CKAD',
    logo: '/certs/ckad.svg',
    href: 'https://www.cncf.io/training/certification/ckad/',
  },
  {
    id: 'cks',
    label: 'CKS',
    logo: '/certs/cks.svg',
    href: 'https://www.cncf.io/training/certification/cks/',
  },
];

export const trustAzureCertifications = [
  {
    id: 'az-104',
    title: 'Azure Administrator Associate',
    level: 'Associate',
    logo: '/certs/ms-associate.svg',
  },
  {
    id: 'az-305',
    title: 'Azure Solutions Architect Expert',
    level: 'Expert',
    logo: '/certs/ms-expert.svg',
  },
  {
    id: 'az-500',
    title: 'Azure Security Engineer Associate',
    level: 'Associate',
    logo: '/certs/ms-associate.svg',
  },
  {
    id: 'az-400',
    title: 'DevOps Engineer Expert',
    level: 'Expert',
    logo: '/certs/ms-expert.svg',
  },
  {
    id: 'sc-200',
    title: 'Security Operations Analyst Associate',
    level: 'Associate',
    logo: '/certs/ms-associate.svg',
  },
  {
    id: 'dp-900',
    title: 'Azure Data Fundamentals',
    level: 'Fundamentals',
    logo: '/certs/ms-fundamentals.svg',
  },
  {
    id: 'sc-900',
    title: 'Security, Compliance, and Identity Fundamentals',
    level: 'Fundamentals',
    logo: '/certs/ms-fundamentals.svg',
  },
  {
    id: 'pl-900',
    title: 'Power Platform Fundamentals',
    level: 'Fundamentals',
    logo: '/certs/ms-fundamentals.svg',
  },
  {
    id: 'az-900',
    title: 'Azure Fundamentals',
    level: 'Fundamentals',
    logo: '/certs/ms-fundamentals.svg',
  },
  {
    id: 'ai-900',
    title: 'Azure AI Fundamentals',
    level: 'Fundamentals',
    logo: '/certs/ms-fundamentals.svg',
  },
];

export const trustAzureProfileHref =
  'https://learn.microsoft.com/en-us/users/sofoniasmengistu-7753/credentials/certifications';

export const trustAwsAndCiscoCertifications = [
  {
    id: 'aws-sa',
    title: 'AWS Solutions Architect',
    note: 'Amazon Web Services',
    logo: '/certs/aws-sa.svg',
    href: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
  },
  {
    id: 'ccna',
    title: 'CCNA',
    note: 'Cisco',
    logo: '/certs/cisco.svg',
    href: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html',
  },
  {
    id: 'ccnp',
    title: 'CCNP',
    note: 'Cisco',
    logo: '/certs/cisco.svg',
    href: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccnp-enterprise/index.html',
  },
  {
    id: 'ccna-sec',
    title: 'CCNA Security',
    note: 'Cisco',
    logo: '/certs/cisco.svg',
    href: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/security/index.html',
  },
];

/** @deprecated kept for any old imports · prefer trustAzureCertifications */
export const trustPlatformCertifications = trustAwsAndCiscoCertifications;

/** Employer path · current roles first, each company once */
export const experienceHighlights = [
  {
    era: 'Now',
    title: 'Cloud Platform Architect, Addis Telco',
    outcome:
      'Current job: Cloud Platform Architect in Addis Ababa. Multi cloud design, Kubernetes platforms, and production architecture for telco systems.',
    tags: ['Current role', 'Cloud architecture', 'Kubernetes', 'Telco'],
    channel: 'Current job · Addis Telco',
  },
  {
    era: 'Companies',
    title: 'Founder, WeRemoteIT and AuraPay Global',
    outcome:
      'These are my companies. WeRemoteIT is live at weremoteit.com (web, Telegram bot, Android). AuraPay Global is live at aurapayglobal.com (payments bot and company site). I also ship NexusAI Aggregator and KubeOptimia FinOps.',
    tags: ['WeRemoteIT', 'AuraPay Global', 'Founder'],
    channel: 'My companies · live',
    links: [
      { label: 'weremoteit.com', href: 'https://weremoteit.com' },
      { label: 'aurapayglobal.com', href: 'https://aurapayglobal.com' },
    ],
  },
  {
    era: 'DevOps',
    title: 'DevOps Engineer, Gebeya',
    outcome:
      'DevOps Engineer at Gebeya Inc., assigned to Safaricom Ethiopia Tanzu Kubernetes Grid: cluster lifecycle, Terraform, CI/CD, RBAC, and Prometheus / Grafana.',
    tags: ['Gebeya', 'TKG', 'Terraform', 'CI/CD', 'Safaricom'],
    channel: 'Gebeya Inc.',
  },
  {
    era: 'Cloud',
    title: 'Cloud DevOps Engineer, Tefer',
    outcome:
      'Cloud DevOps Engineer at Tefer: AWS, Azure, GCP infrastructure, CI/CD, Docker and Kubernetes, monitoring, and cost-aware delivery.',
    tags: ['Tefer', 'AWS', 'Azure', 'GCP', 'Kubernetes'],
    channel: 'Cloud DevOps · Tefer',
  },
  {
    era: 'Upwork',
    title: 'Azure Data Engineer, 11+ completed projects',
    outcome:
      'More than 11 Upwork Azure Data Engineer projects delivered successfully: medallion lakehouse, Data Lake Gen2, Databricks, Data Factory, Key Vault, Terraform, and streaming when required.',
    tags: ['Upwork', 'ADF', 'Databricks', 'Lakehouse', '11+ projects'],
    channel: 'Freelance · Azure data',
  },
  {
    era: 'IT',
    title: 'IT Specialist, JSI',
    outcome:
      'IT Specialist at JSI: day-to-day systems, support, and infrastructure so teams could keep working.',
    tags: ['JSI', 'IT specialist', 'Support'],
    channel: 'JSI',
  },
  {
    era: 'Networks',
    title: 'Network Specialist and IT Support, ECX',
    outcome:
      'Network Specialist and IT Support at Ethiopia Commodity Exchange: LAN/WAN, systems, and on site operations. Field cutovers for 37 tech companies sit in the Field section.',
    tags: ['ECX', 'Network specialist', 'IT support', 'Cisco'],
    channel: 'Ethiopia Commodity Exchange',
  },
  {
    era: 'Start',
    title: 'Junior Programmer, Custor Computing PLC',
    outcome:
      'Junior programmer at Custor Computing PLC: software work that started the path from code into networks, cloud, and platform architecture.',
    tags: ['Custor Computing', 'Junior programmer'],
    channel: 'Custor Computing PLC',
  },
];

/** Featured GitHub engineering work (public repos only). Company products use private GitHub. */
export const githubFeatured = [
  {
    name: 'AWS prod infra, FT360 / Aircall',
    stack: 'Terraform, AWS, CI',
    description:
      'Production IaC: EC2, RDS, GitLab Runner, security, backups, and scale.',
    href: 'https://github.com/Sofoniasm/aws-prod-infra-ft360-aircall-api',
  },
  {
    name: 'Laravel serverless on AWS',
    stack: 'Lambda, Aurora, Terraform',
    description:
      'Bref + API Gateway + Aurora Serverless with GitLab CI and secure env management.',
    href: 'https://github.com/Sofoniasm/aws-laravel-serverless-terraform',
  },
  {
    name: 'Azure Data Engineer platform (100%)',
    stack: 'Terraform, Databricks, ADF',
    description:
      'Full Azure Data Engineer stack: medallion lakehouse, Data Lake Gen2, Key Vault, Databricks, Data Factory.',
    href: 'https://github.com/Sofoniasm/Azure-Data-Engineer-100-automated-',
  },
  {
    name: 'Matrix Synapse deployment',
    stack: 'HCL, Bridges, React',
    description:
      'Full stack Matrix platform with social bridges and AI conversation insights.',
    href: 'https://github.com/Sofoniasm/Matrix-Synapse-deployment',
  },
  {
    name: 'Realtime data streaming',
    stack: 'Kafka, Spark, Airflow',
    description:
      'End to end streaming pipeline: ingest, process, store, fully containerized.',
    href: 'https://github.com/Sofoniasm/Realtime-Data-Streaming-End-To-End-Data-Engineering-Project',
  },
  {
    name: 'GitOps + AIOps prototype',
    stack: 'Python, Multi cloud',
    description:
      'Simulated multi cloud cost and latency routing with telemetry and a live dashboard.',
    href: 'https://github.com/Sofoniasm/swen-gitops-aiops',
  },
];

/**
 * Client delivery themes from real engagements.
 * Add portfolio URLs here when you want cards to deep-link out.
 */
export const clientDeliveries = [
  {
    title: 'Safaricom Ethiopia, TKG Kubernetes',
    outcome:
      'Via Gebeya: cluster lifecycle, Terraform provisioning, CI/CD integration, security policies, monitoring.',
    tags: ['Tanzu TKG', 'Safaricom', 'GitOps'],
    channel: 'Gebeya Inc., production',
  },
  {
    title: 'Product suite · bots, Android, KubeOptimia FinOps',
    outcome:
      'One year shipping WeRemoteIT (web, bot, Android), AuraPay Global, NexusAI Aggregator, and KubeOptimia cluster cost controller — cloud FinOps and FDE-style ownership from product to platform cost.',
    tags: ['WeRemoteIT Android', 'Telegram bots', 'FinOps', 'FDE'],
    channel: '1 year · product build',
  },
  {
    title: 'Azure Data Engineer platforms',
    outcome:
      'Automated Azure data stack: Data Lake Gen2, Databricks, Data Factory, Key Vault, medallion architecture, plus realtime streaming (Kafka, Spark, Airflow).',
    tags: ['Azure Data Factory', 'Databricks', 'Lakehouse', 'Streaming'],
    channel: 'Data engineering delivery',
  },
  {
    title: 'Multi cloud CI/CD and platforms',
    outcome:
      'Pipelines and infra automation on AWS, Azure, and GCP for consulting and Upwork style delivery.',
    tags: ['Kubernetes', 'ArgoCD', 'Jenkins', 'GitLab CI'],
    channel: 'Consulting, client delivery',
  },
  {
    title: 'Cloud training for teams (GIZ)',
    outcome:
      'Structured AWS / Azure / GCP programs: fundamentals through architecture, security, and cost control.',
    tags: ['Trainer', 'AWS', 'Azure', 'GCP'],
    channel: 'GIZ, capacity building',
  },
  {
    title: 'Enterprise networking to cloud',
    outcome:
      '37 tech companies across GB, USA, Dubai, Singapore, and Pakistan as Network Engineer field support, plus ECX network/systems foundation before the DevOps transition.',
    tags: ['Networking', 'Cisco', 'Hybrid cloud'],
    channel: 'Field + ECX',
  },
];
