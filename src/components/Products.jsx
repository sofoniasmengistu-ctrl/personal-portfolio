import { ExternalLink, Send } from 'lucide-react';
import { products } from '../data/products';

const Products = () => {
  return (
    <section id="products" className="section products">
      <div className="container">
        <p className="section__label">02 — Also a builder</p>
        <h2 className="section__title">
          Products I run — <span className="text-accent">same ops mindset</span>
        </h2>
        <p className="section__lead">
          I don&apos;t only talk about platforms. I operate live systems in
          Telegram — proof that Cloud DevOps skills transfer to shipping.
        </p>

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
