/**
 * Notify Bing / IndexNow that portfolio URLs changed.
 * Run after deploy: npm run indexnow
 */
const KEY = '7f3a9c2e1b84d05f6e8a4c9b0d2f1e73';
const HOST = 'www.sofoniasdevops.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/#addis-ababa`,
  `https://${HOST}/#field`,
  `https://${HOST}/#case-study`,
  `https://${HOST}/#work`,
  `https://${HOST}/#devops-ethiopia`,
  `https://${HOST}/#pricing`,
  `https://${HOST}/#about`,
  `https://${HOST}/#contact`,
  `https://${HOST}/sitemap.xml`,
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const endpoints = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
];

async function submit(endpoint) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  console.log(`${endpoint} -> ${res.status} ${text || '(empty)'}`);
  return res.status;
}

const results = await Promise.all(endpoints.map((url) => submit(url).catch((err) => {
  console.error(`${url} failed:`, err.message);
  return 0;
})));

const ok = results.some((status) => status === 200 || status === 202);
process.exit(ok ? 0 : 1);
