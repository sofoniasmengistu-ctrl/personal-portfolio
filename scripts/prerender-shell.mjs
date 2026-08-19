/**
 * Post-build: inject crawlable HTML into dist/index.html #root.
 * React still mounts and replaces this shell. No Puppeteer required (Vercel safe).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = resolve(root, 'dist', 'index.html');

const shell = `
<div id="root">
  <main class="prerender-shell" data-prerender="true">
    <p class="prerender-shell__brand">Sofonias Mengistu</p>
    <h1>Cloud Platform Architect in Addis Ababa. Remote worldwide.</h1>
    <p>Hire Sofonias Mengistu as a remote DevOps Engineer and Cloud Platform Architect. CNCF Kubestronaut. Kubernetes, CI/CD, and Azure data when the platform needs it. Current role: Cloud Platform Architect at Addis Telco. Based in Addis Ababa. Remote worldwide.</p>

    <h2>Case study: Gebeya → Safaricom Ethiopia TKG</h2>
    <p><strong>1 live telco TKG platform.</strong> Production Tanzu Kubernetes Grid for Safaricom Ethiopia. Stack: Tanzu TKG, Terraform, CI/CD, RBAC, NetworkPolicy, Prometheus, Grafana. Result: cluster lifecycle through hardening on a live telco assignment via Gebeya Inc.</p>

    <h2>Case study: Azure Data Engineer lakehouse</h2>
    <p><strong>11+ completed projects.</strong> Medallion lakehouse on Data Lake Gen2 with Databricks, ADF, Key Vault, Terraform, and streaming when required.</p>

    <h2>Live products</h2>
    <ul>
      <li>WeRemoteIT · <a href="https://weremoteit.com">weremoteit.com</a> · <a href="https://t.me/WeRemoteITbot">Telegram bot</a> · Android app</li>
      <li>AuraPay Global · <a href="https://aurapayglobal.com">aurapayglobal.com</a> · <a href="https://t.me/AuraPayGlobalBot">Telegram bot</a></li>
      <li>NexusAI Aggregator · <a href="https://t.me/NexusAIAggregatorBot">Telegram bot</a></li>
      <li>KubeOptimia · Kubernetes cluster cost controller · cloud FinOps</li>
    </ul>

    <h2>On-site network work</h2>
    <p>Field support for 37 companies lives on <a href="/network-engineer-ethiopia/">Network Engineer Ethiopia</a>.</p>

    <h2>Contact</h2>
    <p>Email <a href="mailto:sofoniasmengistu@gmail.com">sofoniasmengistu@gmail.com</a>. WhatsApp <a href="https://wa.me/251912215057">+251 912 215 057</a>. Portfolio <a href="https://www.sofoniasdevops.com/#contact">contact form</a>. Consulting is $200 USD per hour. Full-time employment conversations use $20 per hour. First 15 minutes are free.</p>

    <p>Related pages:
      <a href="/hire-devops-engineer/">Hire DevOps Engineer</a>,
      <a href="/kubestronaut/">Kubestronaut</a>,
      <a href="/remote-cloud-architect/">Remote Cloud Architect</a>,
      <a href="/azure-data-engineer/">Azure Data Engineer</a>,
      <a href="/kubernetes-consultant/">Kubernetes Consultant</a>,
      <a href="/devops-engineer-ethiopia/">DevOps Engineer Ethiopia</a>,
      <a href="/network-engineer-ethiopia/">Network Engineer Ethiopia</a>
    </p>
  </main>
</div>
`.trim();

const shellCss = `
<style id="prerender-shell-css">
.prerender-shell{box-sizing:border-box;min-height:100vh;padding:2rem 1.25rem 3rem;max-width:720px;margin:0 auto;font-family:"DM Sans",system-ui,sans-serif;color:#111;background:#fff;line-height:1.55}
.prerender-shell__brand{font-weight:700;color:#4a1539;margin:0 0 .75rem}
.prerender-shell h1{font-size:clamp(1.35rem,4vw,1.85rem);line-height:1.25;margin:0 0 1rem;letter-spacing:-.02em}
.prerender-shell h2{font-size:1.15rem;margin:1.75rem 0 .65rem}
.prerender-shell p,.prerender-shell li{color:#555;margin:0 0 .75rem;font-size:.95rem}
.prerender-shell a{color:#e5004f}
.prerender-shell ul{margin:0 0 1rem 1.1rem;padding:0}
</style>
`.trim();

let html = readFileSync(indexPath, 'utf8');

if (!html.includes('id="root"')) {
  console.error('dist/index.html missing #root');
  process.exit(1);
}

html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<noscript>|<script)/i, `${shell}\n  `);

if (!html.includes('prerender-shell-css')) {
  html = html.replace('</head>', `  ${shellCss}\n</head>`);
}

writeFileSync(indexPath, html);
console.log('Prerender shell injected into dist/index.html');
