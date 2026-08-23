import useScrollFadeIn from '../utils/useScrollFadeIn';

const Experience = () => {
  const [ref, visible] = useScrollFadeIn();

  return (
    <section ref={ref} className={`glass fade-in ${visible ? 'visible' : ''}`}>
      <p className="section-kicker">Expérience</p>
      <h2 className="section-title">En environnement professionnel</h2>
      <p className="section-intro">Deux expériences complémentaires, entre développement web et systèmes d’information pour la finance.</p>
      <div className="experience-list">
        <article className="experience-card">
          <div className="company-logo company-monogram" aria-label="MLP">MLP</div>
          <div>
            <h3>Apprenti analyste développeur · MLP</h3>
            <p className="experience-meta">SEPT. 2025 — AOÛT 2026 · LYON</p>
            <p>Alternance chez Messageries Lyonnaises de Presse, au sein de l’équipe informatique Comptabilité et Finances.</p>
            <ul><li>Analyse et développement autour de SAP ECC et BW</li><li>Contribution aux outils et données du système dans l'équipe comptabilité et finances</li></ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;