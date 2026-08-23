import useScrollFadeIn from '../utils/useScrollFadeIn';
import { skillGroups } from '../data/skills';

const Competence = () => {
  const [ref, visible] = useScrollFadeIn();

  return (
    <section ref={ref} className={`glass fade-in ${visible ? 'visible' : ''}`}>
      <p className="section-kicker">Boîte à outils</p>
      <h2 className="section-title">Compétences techniques</h2>
      <p className="section-intro">Technologies et outils utilisés tout au long de ma formation et de mes projets.</p>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.title}>
            <header className="skill-group-header"><h3>{group.title}</h3><p>{group.description}</p></header>
            {group.items.length > 0 ? <ul className="skill-list">{group.items.map(([name, image]) => <li key={name}>{image ? <img src={image} alt="" /> : <span className="skill-mark" aria-hidden="true">•</span>}<span>{name}</span></li>)}</ul> : <p className="skill-empty">Ajoutez vos langues ici.</p>}
          </section>
        ))}
      </div>
    </section>
  );
};

export default Competence;