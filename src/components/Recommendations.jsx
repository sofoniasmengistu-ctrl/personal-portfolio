import { useId, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { credentials } from '../data/products';
import { recommendationRoles, recommendations } from '../data/recommendations';
import { Reveal } from './Reveal';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/sofoniasmengistu@gmail.com';
const MAX_PHOTO_BYTES = 2.5 * 1024 * 1024;

const RecommendationForm = () => {
  const photoId = useId();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [preview, setPreview] = useState('');

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview('');
    }
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload a photo (JPG, PNG, or WebP).');
      event.target.value = '';
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      setError('Photo must be under 2.5 MB.');
      event.target.value = '';
      return;
    }

    setError('');
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const photo = data.get('photo');

    if (!(photo instanceof File) || !photo.size) {
      setStatus('error');
      setError('A profile photo is required with your recommendation.');
      return;
    }

    data.append('_subject', `Portfolio recommendation from ${data.get('name')}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    data.set(
      'message',
      [
        `Relationship: ${data.get('relationship')}`,
        `Title: ${data.get('title')}`,
        `Company: ${data.get('company') || '—'}`,
        '',
        String(data.get('recommendation') || ''),
      ].join('\n'),
    );

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (!res.ok) {
        throw new Error('Could not send. Try emailing sofoniasmengistu@gmail.com directly.');
      }

      form.reset();
      if (preview) URL.revokeObjectURL(preview);
      setPreview('');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--done" role="status">
        <p className="contact-form__done-title">Comment received</p>
        <p className="contact-form__done-body">
          Thank you. I review every submission and post it in your wording when it
          goes live.
        </p>
        <button type="button" className="btn-dark" onClick={() => setStatus('idle')}>
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form recommendations__form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      noValidate
    >
      <p className="contact-form__title">Submit your comment</p>
      <p className="contact-form__note">
        Write in your own wording — positive or critical, both are welcome. There
        is no “negative comment” here; there is honest feedback, including about
        delivery I refused to take on. Include your photo. Submissions go to my
        email and are published only after review. LinkedIn is optional.
      </p>

      <div className="contact-form__row">
        <label className="contact-form__field">
          <span>Your full name</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Full name" />
        </label>
        <label className="contact-form__field">
          <span>Your email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="contact-form__row">
        <label className="contact-form__field">
          <span>Your role / title</span>
          <input
            name="title"
            type="text"
            required
            placeholder="e.g. Engineering Manager"
          />
        </label>
        <label className="contact-form__field">
          <span>Company (optional)</span>
          <input name="company" type="text" autoComplete="organization" placeholder="Organization" />
        </label>
      </div>

      <label className="contact-form__field">
        <span>How you know Sofonias</span>
        <select name="relationship" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {recommendationRoles.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <label className="contact-form__field" htmlFor={photoId}>
        <span>Your photo (required)</span>
        <input
          id={photoId}
          name="photo"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          required
          onChange={handlePhotoChange}
        />
      </label>
      {preview ? (
        <div className="recommendations__photo-preview">
          <img src={preview} alt="Photo preview" width={72} height={72} />
          <p className="mono">Preview · JPG, PNG, or WebP under 2.5 MB</p>
        </div>
      ) : (
        <p className="recommendations__photo-hint mono">JPG, PNG, or WebP · under 2.5 MB</p>
      )}

      <label className="contact-form__field">
        <span>Your recommendation</span>
        <textarea
          name="recommendation"
          required
          rows={5}
          placeholder="Write honestly in your own words — praise, critique, or delivery you saw refused..."
        />
      </label>

      {status === 'error' && (
        <p className="contact-form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary contact-form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            Submit for review <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

const CommentCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const long = item.quote.length > 220;

  return (
    <article className="rec-card">
      <span className="rec-card__glow" aria-hidden="true" />
      <span className="rec-card__mark" aria-hidden="true">
        “
      </span>
      <blockquote className="rec-card__quote">
        <p className={`rec-card__text${expanded ? ' is-open' : ''}`}>
          {item.quote}
        </p>
      </blockquote>
      {long && (
        <button
          type="button"
          className="rec-card__more mono"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read full'}
        </button>
      )}
      <footer className="rec-card__footer">
        <img
          src={item.photo}
          alt=""
          className="rec-card__avatar"
          width={48}
          height={48}
        />
        <div className="rec-card__meta">
          <p className="rec-card__name">{item.name}</p>
          <p className="rec-card__title">{item.title}</p>
          <p className="rec-card__context mono">
            {item.relationship} · {item.source}
          </p>
        </div>
      </footer>
    </article>
  );
};

const Recommendations = () => {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.rec-card');
    const step = (card?.getBoundingClientRect().width || 300) + 16;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section id="recommendations" className="section section--tight recommendations section--muted">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head__copy">
            <p className="section__label">05 Recommendations</p>
            <h2 className="section__title">
              What colleagues and managers{' '}
              <span className="text-accent">have said</span>
            </h2>
            <p className="section__lead section__lead--tight">
              Genuine comments in the writer’s own wording. Positive or critical
              feedback is welcome. Scroll the row — the page stays short even when
              many people write.
            </p>
          </div>
          <a
            href={credentials.linkedIn}
            className="fancy-arrow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn recommendations"
          >
            <span className="fancy-arrow__label">LinkedIn</span>
            <span className="fancy-arrow__track" aria-hidden="true">
              <span className="fancy-arrow__line" />
              <ArrowUpRight className="fancy-arrow__tip" size={22} strokeWidth={2.25} />
            </span>
          </a>
        </Reveal>

        <Reveal delay={40}>
          <div className="recommendations__toolbar">
            <p className="band__meta mono">Swipe or use arrows · hover a box to glow</p>
            <div className="recommendations__arrows">
              <button
                type="button"
                className="recommendations__arrow"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous comments"
              >
                <ChevronLeft size={20} strokeWidth={2.25} />
              </button>
              <button
                type="button"
                className="recommendations__arrow"
                onClick={() => scrollByCard(1)}
                aria-label="Next comments"
              >
                <ChevronRight size={20} strokeWidth={2.25} />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="recommendations__track"
            tabIndex={0}
            aria-label="Colleague and manager comments"
          >
            {recommendations.map((item) => (
              <CommentCard key={item.id} item={item} />
            ))}
          </div>
        </Reveal>

        <Reveal className="recommendations__submit" delay={160}>
          <RecommendationForm />
        </Reveal>
      </div>
    </section>
  );
};

export default Recommendations;
