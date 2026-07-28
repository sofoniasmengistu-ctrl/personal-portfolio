const Proof = () => {
  return (
    <section id="ecosystem" className="section section--tight">
      <div className="container">
        <p className="section__label">02 — Approach</p>
        <h2 className="section__title">
          Built where people <span className="text-gradient">already are</span>
        </h2>
        <p className="section__lead">
          Chat is the interface. Infrastructure is invisible. Communities grow
          beside the product — not as an afterthought.
        </p>

        <div className="proof__grid">
          <div className="proof-item">
            <h3>Mini Apps + bots</h3>
            <p>Telegram-native surfaces with real wallets, hiring flows, and AI.</p>
          </div>
          <div className="proof-item">
            <h3>Owned communities</h3>
            <p>Channels and groups per product — updates and support in-chat.</p>
          </div>
          <div className="proof-item">
            <h3>Operated end-to-end</h3>
            <p>Cloud, Kubernetes, CI/CD, security — the same stack that keeps them live.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
