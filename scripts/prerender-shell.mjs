/**
 * Post-build: inject crawlable HTML into dist/index.html #root.
 * The branded boot stays on screen. The text shell is in the HTML for crawlers
 * and is clipped off screen so a refresh does not flash the plain page.
 * React still mounts and replaces this shell. No Puppeteer required (Vercel safe).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = resolve(root, 'dist', 'index.html');

const shell = `
<div id="root">
  <div class="boot" role="status" aria-live="polite" aria-label="Loading Sofonias Mengistu">
    <img class="boot__mark" src="/brand-mark.svg" width="36" height="36" alt="" />
    <p class="boot__brand">Sofonias Mengistu<img src="/ckad-helm.svg" width="15" height="15" alt="" /></p>
    <p class="boot__meta">Cloud Platform Architect · Addis Ababa · Remote worldwide</p>
    <div class="boot__bar" aria-hidden="true"><span class="boot__bar-fill"></span></div>
  </div>
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
      <li>PAPO Leather · lightweight ecommerce · <a href="https://papoleather.com">papoleather.com</a></li>
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
/* Crawlable copy stays in the HTML. Sighted visitors keep the branded boot until React mounts. */
.prerender-shell{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);clip-path:inset(50%);white-space:nowrap;border:0}
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
