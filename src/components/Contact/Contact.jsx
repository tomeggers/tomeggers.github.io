import { useInView } from '../../hooks/useInView';
import { CONTACT_LINKS } from '../../data/contact';
import './Contact.css';

export default function Contact() {
  const [headlineRef, headlineVisible] = useInView();
  const [rowRef,      rowVisible]      = useInView();

  return (
    <section id="contact">
      <div
        ref={headlineRef}
        className={`contact-headline reveal${headlineVisible ? ' visible' : ''}`}
      >
        Let's<br />build something<br /><em>real.</em>
      </div>

      <div ref={rowRef} className={`contact-row reveal${rowVisible ? ' visible' : ''}`}>
        {CONTACT_LINKS.map(({ label, value, href }) => (
          <a
            key={label}
            className="contact-card"
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
          >
            <div className="contact-card-label">{label}</div>
            <div className="contact-card-value">{value}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
