import { useInView } from '../../hooks/useInView';
import SkillBar from './SkillBar';
import { CORE_SKILLS, TOOL_SKILLS, LEARNING } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const [labelRef, labelVisible] = useInView();
  const [coreRef,  coreVisible]  = useInView();
  const [toolsRef, toolsVisible] = useInView();

  return (
    <section id="skills">
      <p ref={labelRef} className={`section-label reveal${labelVisible ? ' visible' : ''}`}>
        Technical Skills
      </p>
      <div className="skills-layout">
        <div ref={coreRef} className={`skills-group reveal${coreVisible ? ' visible' : ''}`}>
          <h3>Core Languages &amp; Frameworks</h3>
          {CORE_SKILLS.map(s => <SkillBar key={s.label} {...s} />)}
        </div>

        <div ref={toolsRef} className={`skills-group reveal${toolsVisible ? ' visible' : ''}`}>
          <h3>Tools &amp; Ecosystem</h3>
          {TOOL_SKILLS.map(s => <SkillBar key={s.label} {...s} />)}

          <h3 className="skills-group-subtitle">Currently Learning</h3>
          <ul className="learning-list">
            {LEARNING.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
