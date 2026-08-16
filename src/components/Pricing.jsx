import {
  Banknote,
  Briefcase,
  CalendarClock,
  Clock3,
  FileText,
  Handshake,
  Landmark,
  MoveRight,
  Receipt,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
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
    <section id="pricing" className="section section--tight pricing">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">06 Pricing</p>
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

        <Reveal delay={40}>
          <p className="band__meta mono h-track-hint">Swipe plans on mobile</p>
          <div className="h-track pricing__track">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Reveal
                  key={plan.id}
                  as="article"
                  className={`pricing__card h-track__item${plan.featured ? ' pricing__card--featured' : ''}`}
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
        </Reveal>

        <Reveal className="pricing__footnote">
          <p>
            Consulting hour is $200 USD. Monthly retainer is $3,600 for up to 20
            hours (about 10% below $4,000 at the hourly consulting rate). Full time
            employment conversations use $20/hr. Larger cutovers or dedicated on
            site weeks get a custom quote after the free 15 minute call.
          </p>
        </Reveal>

        <Reveal className="pricing__pay" delay={80}>
          <p className="pricing__pay-kicker mono">
            <Banknote size={16} strokeWidth={2.25} />
            How to pay
          </p>
          <h3 className="pricing__pay-title">
            This site does not take card payments
          </h3>
          <p className="pricing__pay-lead">
            After we agree on the work, I send an invoice. You pay separately —
            not through this website or Google. Bank details stay private and
            go out with the invoice.
          </p>
          <ol className="pricing__pay-steps">
            <li>
              <Receipt size={18} strokeWidth={2.25} aria-hidden="true" />
              <span>
                <strong>Agree on scope</strong>
                Free 15 minute call, WhatsApp, or the contact form.
              </span>
            </li>
            <li>
              <Landmark size={18} strokeWidth={2.25} aria-hidden="true" />
              <span>
                <strong>Receive an invoice</strong>
                Amount, currency, and payment details sent to you.
              </span>
            </li>
            <li>
              <Banknote size={18} strokeWidth={2.25} aria-hidden="true" />
              <span>
                <strong>Pay off site</strong>
                Bank transfer, cash in Addis Ababa, or the method on the invoice.
              </span>
            </li>
          </ol>
          <a href="#contact" className="fancy-arrow">
            <span className="fancy-arrow__label">Ask for payment details</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <MoveRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <Reveal className="pricing__engage" delay={100}>
          <p className="pricing__pay-kicker mono">
            <Handshake size={16} strokeWidth={2.25} />
            How an engagement starts
          </p>
          <h3 className="pricing__pay-title">Four steps. Then work begins.</h3>
          <p className="pricing__pay-lead">
            No card on this site. NDA available on request. Invoice details go
            out privately after we agree on scope.
          </p>
          <ol className="pricing__engage-steps">
            <li>
              <CalendarClock size={18} strokeWidth={2.25} aria-hidden="true" />
              <span>
                <strong>01 · Free 15 min</strong>
                WhatsApp, Telegram, or the contact form. Clear next step.
              </span>
            </li>
            <li>
              <FileText size={18} strokeWidth={2.25} aria-hidden="true" />
              <span>
                <strong>02 · Scope</strong>
                We agree the work, rate, and timeline. NDA if you need one.
              </span>
            </li>
            <li>
              <Receipt size={18} strokeWidth={2.25} aria-hidden="true" />
              <span>
                <strong>03 · Invoice</strong>
                You receive amount, currency, and how to pay.
              </span>
            </li>
            <li>
              <Rocket size={18} strokeWidth={2.25} aria-hidden="true" />
              <span>
                <strong>04 · Kickoff</strong>
                Work starts after payment or as agreed for retainers and hires.
              </span>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
