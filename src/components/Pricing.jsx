import { Briefcase, CalendarClock, Clock3, MoveRight, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

/**
 * Sofonias rates (USD)
 * - consultationHourly: paid consulting / advisory hour
 * - fullTimeHourly: employment rate for full time roles
 * - monthly: retainer with slight discount vs 20 consulting hours at $200
 */
export const pricingRates = {
  currency: 'USD',
  consultationHourly: 200,
  fullTimeHourly: 20,
  monthly: 3600,
  monthlyHoursIncluded: 20,
  monthlyListValue: 4000,
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
    id: 'consultation',
    featured: false,
    icon: Clock3,
    name: 'Consultation hour',
    price: `$${pricingRates.consultationHourly}`,
    priceNote: `per hour, ${pricingRates.currency}`,
    blurb: 'Paid consulting for focused work: architecture, Kubernetes, pipelines, network cutovers, or expert advice.',
    points: [
      'DevOps and Kubernetes delivery',
      'Network Engineer field support',
      'IT and cloud support blocks',
    ],
    cta: 'Book consulting hour',
    href: '#contact',
    external: false,
  },
  {
    id: 'monthly',
    featured: false,
    icon: ShieldCheck,
    name: 'Monthly retainer',
    price: `$${pricingRates.monthly.toLocaleString()}`,
    priceNote: `per month, ${pricingRates.currency}`,
    blurb: `Up to ${pricingRates.monthlyHoursIncluded} hours included. Slight discount vs $${pricingRates.monthlyListValue.toLocaleString()} at the $${pricingRates.consultationHourly}/hr consulting rate. Global fractional DevOps retainers often run about $2,000 to $6,000 for this shape of work.`,
    points: [
      `About 10% off vs ${pricingRates.monthlyHoursIncluded} consulting hours`,
      'Priority response and monthly cadence',
      'On site Addis Ababa when required',
    ],
    cta: 'Start monthly retainer',
    href: '#contact',
    external: false,
  },
  {
    id: 'fulltime',
    featured: false,
    icon: Briefcase,
    name: 'Full time role',
    price: `$${pricingRates.fullTimeHourly}`,
    priceNote: `per hour, ${pricingRates.currency} employment`,
    blurb: 'For full time Cloud DevOps / Network Engineer employment offers. About $3,200 per month at a standard 160 hour month.',
    points: [
      'Full time hire conversations',
      'Addis Ababa on site or remote',
      'Roles, not short consulting blocks',
    ],
    cta: 'Discuss full time hire',
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
              Clear rates.{' '}
              <span className="text-accent">15 minutes free.</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Free intro call, then consulting at $200/hr, a discounted monthly
              retainer, or full time employment at $20/hr.
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

        <div className="pricing__grid pricing__grid--4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Reveal
                key={plan.id}
                className={`pricing__card${plan.featured ? ' pricing__card--featured' : ''}`}
                delay={index * 80}
              >
                <p className="pricing__card-kicker mono">
                  <Icon size={16} strokeWidth={2.25} />
                  {plan.name}
                </p>
                <p className="pricing__amount">{plan.price}</p>
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
            Consulting hour is $200 USD. Monthly retainer is $3,600 for up to 20
            hours (about 10% below $4,000 at the hourly consulting rate). Full time
            employment conversations use $20/hr. Larger cutovers or dedicated on
            site weeks get a custom quote after the free 15 minute call.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
