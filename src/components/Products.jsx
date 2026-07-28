import { ExternalLink, Send } from 'lucide-react';
import { products } from '../data/products';

const Products = () => {
  return (
    <section id="products" className="section products">
      <div className="container">
        <p className="section__label">01 — Selected work</p>
        <h2 className="section__title">
          Products I <span className="text-gradient">own</span>
        </h2>
        <p className="section__lead">
          Three live systems. Each with a Mini App, a bot, and a community.
        </p>

        <div className="products__track">
          {products.map((product) => (
            <article key={product.id} className="product-panel">
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
