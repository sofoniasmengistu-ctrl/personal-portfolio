import { ExternalLink, MoveRight, Send } from 'lucide-react';
import { products } from '../data/products';

const Products = () => {
  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">02 Also a builder</p>
            <h2 className="section__title">
              Products I run <span className="text-accent">same ops mindset</span>
            </h2>
            <p className="section__lead section__lead--tight">
              I don&apos;t only talk about platforms. I operate live systems in
              Telegram, proof that Cloud DevOps skills transfer to shipping.
            </p>
          </div>
          <a href="#approach" className="fancy-arrow" aria-label="Continue to approach">
            <span className="fancy-arrow__label">Next</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </div>

        <p className="band__meta mono h-track-hint">Swipe cards on mobile</p>
        <div className="h-track products__track">
          {products.map((product) => (
            <article key={product.id} className="product-panel h-track__item">
              <p className="product-panel__tag">{product.tag}</p>
              <h3 className="product-panel__title">{product.name}</h3>
              <p className="product-panel__desc">{product.description}</p>
              <div className="product-panel__meta">
                <a href={product.botUrl} target="_blank" rel="noopener noreferrer">
                  {product.bot}
                </a>
                <a href={product.community} target="_blank" rel="noopener noreferrer">
                  {product.communityLabel}
                </a>
              </div>
              <div className="product-panel__actions">
                <a
                  href={product.botUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Open <Send size={14} />
                </a>
                {product.web && (
                  <a
                    href={product.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Site <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
