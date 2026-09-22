import { ExternalLink, MoveRight, Send } from 'lucide-react';
import { products } from '../data/products';
import { Reveal } from './Reveal';

const Products = () => {
  return (
    <section id="products" className="section products products--shots">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">04 Products</p>
            <h2 className="section__title section__title--display">
              Live products,{' '}
              <span className="text-accent">built end to end</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Sites, Android, and bots — open the page or the channel. Company
              GitHub stays private.
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
          <p className="band__meta mono h-track-hint">Swipe · hover to lift</p>
          <div className="h-track products__track">
            {products.map((product, index) => (
              <article
                key={product.id}
                className={`product-shot h-track__item${
                  product.id === 'papoleather' ? ' product-shot--store' : ''
                }`}
              >
                <div className="product-shot__frame" aria-hidden="true">
                  <div className="product-shot__chrome">
                    <span />
                    <span />
                    <span />
                    <em className="mono">
                      {product.web?.replace(/^https?:\/\//, '') ||
                        product.bot ||
                        'private'}
                    </em>
                  </div>
                  <div
                    className="product-shot__screen"
                    style={{ '--shot-i': index }}
                  >
                    {product.mark ? (
                      <img src={product.mark} alt="" className="product-shot__mark" />
                    ) : (
                      <span className="product-shot__glyph mono">KO</span>
                    )}
                    <p className="product-shot__placeholder mono">Screenshot placeholder</p>
                    <p className="product-shot__hint">{product.name}</p>
                  </div>
                </div>
                <div className="product-shot__body">
                  <p className="product-shot__tag">{product.tag}</p>
                  <h3 className="product-shot__title">{product.name}</h3>
                  <p className="product-shot__desc">{product.description}</p>
                  {product.channels?.length ? (
                    <ul className="product-shot__channels" aria-label="Channels">
                      {product.channels.map((channel) => (
                        <li key={channel}>{channel}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="product-shot__actions">
                    {product.web ? (
                      <a
                        href={product.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        {product.webLabel || 'Open site'} <ExternalLink size={14} />
                      </a>
                    ) : null}
                    {product.botUrl ? (
                      <a
                        href={product.botUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={product.web ? 'btn-ghost' : 'btn-primary'}
                      >
                        {product.botLabel || 'Open bot'} <Send size={14} />
                      </a>
                    ) : null}
                    {product.ctaHref && !product.web && !product.botUrl ? (
                      <a href={product.ctaHref} className="btn-primary">
                        {product.ctaLabel || 'Learn more'} <MoveRight size={14} />
                      </a>
                    ) : null}
                    {product.ctaHref && (product.web || product.botUrl) ? (
                      <a href={product.ctaHref} className="btn-ghost">
                        {product.ctaLabel || 'Learn more'} <MoveRight size={14} />
                      </a>
                    ) : null}
                  </div>
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
