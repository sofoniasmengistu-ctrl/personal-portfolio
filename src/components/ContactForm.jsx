import { useState } from 'react';
import { Send } from 'lucide-react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/sofoniasmengistu@gmail.com';

const intentOptions = [
  { value: 'Free 15 minute consultation', label: 'Free 15 minute consultation' },
  { value: 'Consulting hour ($200)', label: 'Consulting hour ($200)' },
  { value: 'Monthly retainer ($3600)', label: 'Monthly retainer ($3600)' },
  { value: 'Full time role ($20/hr)', label: 'Full time role ($20/hr)' },
  { value: 'Network Engineer / field work', label: 'Network Engineer / field work' },
  { value: 'Build a product or platform', label: 'Build a product or platform' },
  { value: 'Other', label: 'Other' },
];

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone') || '',
      intent: data.get('intent'),
      message: data.get('message'),
      _subject: `Portfolio inquiry: ${data.get('intent')}`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Could not send. Try WhatsApp or email directly.');
      }

      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--done" role="status">
        <p className="contact-form__done-title">Message sent</p>
        <p className="contact-form__done-body">
          I received your email and will reply to the address you submitted.
        </p>
        <button
          type="button"
          className="btn-dark"
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <p className="contact-form__title">Send a message</p>
      <p className="contact-form__note">
        Include your email so I can reply. For roles, consulting, or builds.
      </p>

      <label className="contact-form__field">
        <span>I need help with</span>
        <select name="intent" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {intentOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <div className="contact-form__row">
        <label className="contact-form__field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Full name" />
        </label>
        <label className="contact-form__field">
          <span>Your email (for my reply)</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="contact-form__field">
        <span>Phone / WhatsApp / Telegram (optional)</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="+251 ..." />
      </label>

      <label className="contact-form__field">
        <span>Project or role details</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Role, stack, timeline, or what you want built..."
        />
      </label>

      {status === 'error' && (
        <p className="contact-form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary contact-form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : (
          <>
            Submit message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
