import './Hero.css';

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-bg" />
      <div className="hero-circle" />

      <div className="hero-content">
        <p className="hero-tag">Software Developer — Christchurch, NZ</p>
        <h1 className="hero-name">
          Tom<br /><em>Eggers</em>
        </h1>
        <div className="hero-sub">
          <div className="hero-line" />
          <p>
            Computer Science student at the University of Canterbury.
            I build things that are fast, thoughtful, and real — from
            booking platforms to mobile apps.
          </p>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
