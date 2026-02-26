import { useInView } from '../../hooks/useInView';

export default function SkillBar({ label, level, width }) {
  const [ref, visible] = useInView({ threshold: 0.3 });

  return (
    <div className="skill-bar-wrap" ref={ref}>
      <div className="skill-bar-label">
        <span>{label}</span>
        <span>{level}</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ transform: visible ? `scaleX(${width})` : 'scaleX(0)' }}
        />
      </div>
    </div>
  );
}
