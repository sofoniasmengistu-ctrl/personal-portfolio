const ecosystem = [
  {
    title: 'Mini Apps + bots',
    body: 'Telegram-native surfaces with real wallets, hiring flows, and AI.',
  },
  {
    title: 'Owned communities',
    body: 'Channels and groups per product — updates and support in-chat.',
  },
  {
    title: 'Operated end-to-end',
    body: 'Cloud, Kubernetes, CI/CD, security — the same stack that keeps them live.',
  },
];

const Proof = () => {
  return (
    <section id="ecosystem" className="section section--tight">
      <div className="container">
        <p className="section__label">03 — Approach</p>
        <h2 className="section__title">
          Built where people <span className="text-gradient">already are</span>
        </h2>
        <p className="section__lead">
          Chat is the interface. Infrastructure is invisible. Communities grow
          beside the product — not as an afterthought.
        </p>

        <div className="proof__grid">
          {ecosystem.map((item) => (
            <div key={item.title} className="proof-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
