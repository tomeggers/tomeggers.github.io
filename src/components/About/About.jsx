import { useInView } from '../../hooks/useInView';
import './About.css';

export default function About() {
  const [leftRef,  leftVisible]  = useInView();
  const [rightRef, rightVisible] = useInView();

  return (
    <section id="about">
      <div ref={leftRef} className={`about-left reveal${leftVisible ? ' visible' : ''}`}>
        <p className="section-label">About</p>
        <h2>
          Builder by instinct.<br />
          <em>Problem-solver</em><br />
          by nature.
        </h2>
        <p>
          Born and raised in Nelson, I've always been drawn to the intersection
          of technical precision and creative thinking. Currently finishing my
          CS degree at the University of Canterbury.
        </p>
        <p>
          Outside of code, I play and coach volleyball, a golfer, and someone who genuinely enjoys building real
          things for real people. Weither it's a website, a game, or a piece of furniture, I love the process of creating something from nothing and seeing it come to life.
        </p>
        <div className="achievement-container">
          <div className="achievement-pill">Computer Science Degree</div>
          <div className="achievement-pill">Business Coordinator Award Winner</div>
          <div className="achievement-pill">NZ Volleyball representive</div>
        </div>
      </div>

      <div ref={rightRef} className={`about-right reveal${rightVisible ? ' visible' : ''}`}>
        <p className="section-label">By the numbers</p>
        <div className="stat-row">
          <div className="stat-num">7+</div>
          <div className="stat-label">Languages<br />Mastered</div>
        </div>
        <div className="stat-row">
          <div className="stat-num">5</div>
          <div className="stat-label">Live<br />Projects</div>
        </div>
        <div className="stat-row">
          <div className="stat-num">2026</div>
          <div className="stat-label">Internship<br />Experience</div>
        </div>
        <div className="stat-row">
          <div className="stat-num">∞</div>
          <div className="stat-label">Problems<br />Left to Solve</div>
        </div>
      </div>
    </section>
  );
}
