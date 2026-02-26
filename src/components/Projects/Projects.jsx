import { useInView } from '../../hooks/useInView';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  const [labelRef, labelVisible] = useInView();

  return (
    <section id="projects">
      <p ref={labelRef} className={`section-label reveal${labelVisible ? ' visible' : ''}`}>
        Selected Work
      </p>
      <div className="projects-grid">
        {PROJECTS.map(project => (
          <ProjectItem key={project.num} {...project} />
        ))}
      </div>
    </section>
  );
}
