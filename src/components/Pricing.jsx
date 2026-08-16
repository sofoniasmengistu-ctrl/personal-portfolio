import { useState } from 'react';
import {
  Banknote,
  Briefcase,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Handshake,
  Landmark,
  MoveRight,
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

const flowSteps = [
  {
    id: 'call',
    num: '01',
    label: 'Call',
    title: 'Free 15 minutes',
    body: 'WhatsApp, Telegram, or the contact form. We learn the need. No charge. No commitment.',
    hint: 'This is the only free step.',
    cta: 'Book free 15 min',
    href: 'https://wa.me/251912215057?text=Hi%20Sofonias%2C%20I%20want%20a%20free%2015%20minute%20consultation',
    external: true,
    Icon: CalendarClock,
  },
  {
    id: 'scope',
    num: '02',
    label: 'Scope',
    title: 'Agree the work',
    body: 'Rate, timeline, and deliverables in writing. NDA available on request before anything sensitive is shared.',
    hint: 'Nothing is billed until this is clear.',
    cta: 'Send the brief',
    href: '#contact',
    external: false,
    Icon: FileText,
  },
  {
    id: 'invoice',
    num: '03',
    label: 'Invoice',
    title: 'Pay off this site',
    body: 'I send an invoice with amount, currency, and payment details. This website does not take cards. Bank details stay private.',
    hint: 'Bank transfer, cash in Addis Ababa, or the method on the invoice.',
    methods: ['Bank transfer', 'Cash in Addis', 'Invoice method'],
    cta: 'Ask for payment details',
    href: '#contact',
    external: false,
    Icon: Landmark,
  },
  {
    id: 'kickoff',
    num: '04',
    label: 'Kickoff',
    title: 'Work starts',
    body: 'After payment, or as agreed for retainers and full time hires. On site in Addis Ababa or remote worldwide.',
    hint: 'Same person from first call through delivery.',
    cta: 'Start the work',
    href: '#contact',
    external: false,
    Icon: Rocket,
  },
];

const Pricing = () => {
  const [step, setStep] = useState(0);
  const active = flowSteps[step];
  const ActiveIcon = active.Icon;
  const progress = (step / (flowSteps.length - 1)) * 100;

  const go = (next) => {
    setStep(Math.max(0, Math.min(flowSteps.length - 1, next)));
  };

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

        <Reveal className="pricing__flow" delay={80}>
          <p className="pricing__flow-kicker mono">
            <Handshake size={16} strokeWidth={2.25} />
            Delivery pipeline
          </p>
          <h3 className="pricing__flow-title">
            Click a stage.{' '}
            <span className="text-accent">No card on this site.</span>
          </h3>
          <p className="pricing__flow-lead">
            Same path for consulting, retainers, and hires. Pay by invoice after
            we agree — never through this page or Google.
          </p>

          <div
            className="pricing__rail"
            role="tablist"
            aria-label="How work and payment start"
          >
            <span className="pricing__rail-line" aria-hidden="true" />
            <span
              className="pricing__rail-fill"
              aria-hidden="true"
              style={{ width: `${progress}%` }}
            />
            {flowSteps.map((item, index) => {
              const Icon = item.Icon;
              const selected = index === step;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`flow-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls="flow-panel"
                  className={`pricing__station${selected ? ' is-active' : ''}${index < step ? ' is-done' : ''}`}
                  onClick={() => setStep(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowRight') {
                      event.preventDefault();
                      go(step + 1);
                    }
                    if (event.key === 'ArrowLeft') {
                      event.preventDefault();
                      go(step - 1);
                    }
                  }}
                >
                  <span className="pricing__station-dot">
                    <Icon size={16} strokeWidth={2.25} />
                  </span>
                  <span className="pricing__station-meta">
                    <span className="mono">{item.num}</span>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="pricing__stage"
            id="flow-panel"
            role="tabpanel"
            aria-labelledby={`flow-tab-${active.id}`}
            key={active.id}
          >
            <p className="pricing__stage-num mono">{active.num} / 04</p>
            <h4 className="pricing__stage-title">
              <ActiveIcon size={22} strokeWidth={2.25} />
              {active.title}
            </h4>
            <p className="pricing__stage-body">{active.body}</p>
            <p className="pricing__stage-hint">{active.hint}</p>
            {active.methods ? (
              <ul className="pricing__methods">
                {active.methods.map((method) => (
                  <li key={method}>
                    <Banknote size={14} strokeWidth={2.25} />
                    {method}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="pricing__stage-nav">
              <button
                type="button"
                className="pricing__nav-btn"
                onClick={() => go(step - 1)}
                disabled={step === 0}
              >
                <ChevronLeft size={16} /> Back
              </button>
              <a
                href={active.href}
                className="btn-primary"
                target={active.external ? '_blank' : undefined}
                rel={active.external ? 'noopener noreferrer' : undefined}
              >
                {active.cta}
                <MoveRight size={16} />
              </a>
              <button
                type="button"
                className="pricing__nav-btn"
                onClick={() => go(step + 1)}
                disabled={step === flowSteps.length - 1}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
