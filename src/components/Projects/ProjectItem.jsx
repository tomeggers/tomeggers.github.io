import { useInView } from '../../hooks/useInView';

export default function ProjectItem({ num, title, description, pills, links }) {
  const [ref, visible] = useInView();

  return (
    <div ref={ref} className={`project-item reveal${visible ? ' visible' : ''}`}>
      <div className="project-num">{num}</div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-pills">
          {pills.map(p => (
            <span key={p} className="pill">{p}</span>
          ))}
        </div>
      </div>

      <div className="project-links-col">
        {links.map(({ label, href }) => (
          <a
            key={label}
            className="proj-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}<span className="arr">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
