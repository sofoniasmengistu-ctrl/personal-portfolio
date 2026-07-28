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
  linkedIn: 'https://www.linkedin.com/in/sofonias-mengistu-b5394179/',
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
    label: 'Only in Ethiopia · CNCF',
    href: 'https://www.cncf.io/training/kubestronaut/?_sft_lf-country=et',
  },
  {
    value: '16+',
    label: 'Years in IT / DevOps',
    href: null,
  },
  {
    value: '97+',
    label: 'GitHub engineering projects',
    href: 'https://github.com/Sofoniasm',
  },
  {
    value: '30k+',
    label: 'LinkedIn network',
    href: 'https://www.linkedin.com/in/sofonias-mengistu-b5394179/',
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
    title: 'Multi-cloud CI/CD & Kubernetes',
    outcome: 'Pipelines, GitOps, and cluster operations for production teams.',
    tags: ['Kubernetes', 'ArgoCD', 'Jenkins', 'GitLab CI'],
    channel: 'Upwork · Consulting',
  },
  {
    title: 'AWS production infrastructure',
    outcome: 'Secure VPC layouts, RDS, runners, backups delivered as code.',
    tags: ['AWS', 'Terraform', 'Security'],
    channel: 'Upwork · Client delivery',
  },
  {
    title: 'Azure data engineering platforms',
    outcome: 'Automated lakehouse stacks for analytics and streaming workloads.',
    tags: ['Azure', 'Databricks', 'Data Factory'],
    channel: 'Freelance · Platform build',
  },
  {
    title: 'Network & hybrid cloud hardening',
    outcome: 'From Cisco-era networks to hybrid cloud and zero-trust patterns.',
    tags: ['Networking', 'VPN', 'IAM'],
    channel: 'Field + remote',
  },
];
