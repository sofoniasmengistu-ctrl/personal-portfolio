import { CalendarClock, Clock3, MoveRight, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

/**
 * Set hourly / monthly when Sofonias confirms live rates.
 * null = show “quoted after free consult”.
 */
export const pricingRates = {
  currency: 'USD',
  hourly: null,
  monthly: null,
};

const plans = [
  {
    id: 'free',
    featured: true,
    icon: CalendarClock,
    name: 'Free consultation',
    price: '15 min',
    priceNote: 'No charge',
    blurb: 'Quick call to understand your need in Addis Ababa or remote. DevOps, network, IT support, or a build.',
    points: [
      'WhatsApp, Telegram, or scheduled call',
      'Clear next step in one conversation',
      'No commitment',
    ],
    cta: 'Book free 15 min',
    href: 'https://wa.me/251912215057?text=Hi%20Sofonias%2C%20I%20want%20a%20free%2015%20minute%20consultation',
    external: true,
  },
  {
    id: 'hourly',
    featured: false,
    icon: Clock3,
    name: 'Hourly',
    price: pricingRates.hourly
      ? `$${pricingRates.hourly}`
      : 'Custom',
    priceNote: pricingRates.hourly
      ? `per hour · ${pricingRates.currency}`
      : 'Quoted after free consult',
    blurb: 'Best for focused tasks: cluster work, pipeline fixes, network cutovers, or short consulting blocks.',
    points: [
      'DevOps and Kubernetes delivery',
      'Network Engineer field support',
      'IT and cloud support blocks',
    ],
    cta: 'Ask hourly rate',
    href: '#contact',
    external: false,
  },
  {
    id: 'monthly',
    featured: false,
    icon: ShieldCheck,
    name: 'Monthly retainer',
    price: pricingRates.monthly
      ? `$${pricingRates.monthly.toLocaleString()}`
      : 'Custom',
    priceNote: pricingRates.monthly
      ? `per month · ${pricingRates.currency}`
      : 'Quoted after free consult',
    blurb: 'Ongoing platform ownership: uptime, changes, security, and a first contact in Addis Ababa when you need him.',
    points: [
      'Priority response and planning',
      'Monthly delivery cadence',
      'Local on site when required',
    ],
    cta: 'Ask monthly rate',
    href: '#contact',
    external: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">Pricing</p>
            <h2 className="section__title">
              Clear engagement.{' '}
              <span className="text-accent">15 minutes free.</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Start with a free consultation. Then choose hourly work or a monthly
              retainer for Addis Ababa on site and remote delivery.
            </p>
          </div>
          <a href="#contact" className="fancy-arrow">
            <span className="fancy-arrow__label">Talk rates</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <div className="pricing__grid">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Reveal
                key={plan.id}
                className={`pricing__card${plan.featured ? ' pricing__card--featured' : ''}`}
                delay={index * 90}
              >
                <p className="pricing__card-kicker mono">
                  <Icon size={16} strokeWidth={2.25} />
                  {plan.name}
                </p>
                <p className="pricing__amount">
                  {plan.price}
                  {plan.id !== 'free' && pricingRates[plan.id] ? (
                    <span className="pricing__amount-suffix">+</span>
                  ) : null}
                </p>
                <p className="pricing__amount-note">{plan.priceNote}</p>
                <p className="pricing__blurb">{plan.blurb}</p>
                <ul className="pricing__points">
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={plan.featured ? 'btn-primary' : 'btn-dark'}
                  target={plan.external ? '_blank' : undefined}
                  rel={plan.external ? 'noopener noreferrer' : undefined}
                >
                  {plan.cta}
                  <MoveRight size={16} />
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="pricing__footnote">
          <p>
            Rates are a starting point for standard consulting. Complex production
            cutovers, multi cloud builds, or dedicated on site weeks get a custom
            quote after the free 15 minute call.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
