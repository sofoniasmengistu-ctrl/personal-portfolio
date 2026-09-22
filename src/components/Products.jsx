import { ExternalLink, MoveRight, Send } from 'lucide-react';
import { products } from '../data/products';
import { Reveal } from './Reveal';

const Products = () => {
  return (
    <section id="products" className="section section--tight products">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">04 Products</p>
            <h2 className="section__title">
              WeRemoteIT and AuraPay{' '}
              <span className="text-accent">are mine</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Live companies and products I built end to end. Company GitHub stays
              private.
            </p>
          </div>
          <a href="#about" className="fancy-arrow" aria-label="Continue to about">
            <span className="fancy-arrow__label">Next</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <Reveal delay={80}>
          <p className="band__meta mono h-track-hint">Swipe cards on mobile</p>
          <div className="h-track products__track">
            {products.map((product) => (
              <article
                key={product.id}
                className={`product-panel h-track__item${
                  product.id === 'papoleather' ? ' product-panel--store' : ''
                }`}
              >
                {product.mark ? (
                  <img
                    src={product.mark}
                    alt=""
                    className="product-panel__mark"
                    aria-hidden="true"
                    draggable="false"
                  />
                ) : null}
                <p className="product-panel__tag">{product.tag}</p>
                <h3 className="product-panel__title">{product.name}</h3>
                <p className="product-panel__desc">{product.description}</p>
                <div className="product-panel__meta">
                  {product.botUrl ? (
                    <a href={product.botUrl} target="_blank" rel="noopener noreferrer">
                      {product.bot}
                    </a>
                  ) : null}
                  {product.community ? (
                    <a href={product.community} target="_blank" rel="noopener noreferrer">
                      {product.communityLabel}
                    </a>
                  ) : null}
                  {product.focus ? (
                    <span className="product-panel__focus mono">{product.focus}</span>
                  ) : null}
                </div>
                <div className="product-panel__actions">
                  {product.botUrl ? (
                    <a
                      href={product.botUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Open bot <Send size={14} />
                    </a>
                  ) : null}
                  {product.ctaHref ? (
                    <a href={product.ctaHref} className="btn-primary">
                      {product.ctaLabel || 'Learn more'} <MoveRight size={14} />
                    </a>
                  ) : null}
                  {product.web ? (
                    <a
                      href={product.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        product.botUrl || product.ctaHref ? 'btn-ghost' : 'btn-primary'
                      }
                    >
                      {product.webLabel || 'Site'} <ExternalLink size={14} />
                    </a>
                  ) : product.webSoon ? (
                    <span className="btn-ghost product-panel__soon" aria-disabled="true">
                      Site soon
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Products;
