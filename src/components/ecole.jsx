const Ecole = () => {

  return (
    <div className="glass">
      <h1>Apprentissage du BUT Informatique</h1>

      <div className={`competence-block realiser glass-bg`}>
        <div className="competence-title">Réaliser</div>
        <div className="competence-text">
          <p>Projet Didactypo en React et avec Fast API, blog en PHP, site de liste de course en Symfony. Apprentissage de nombreux langages Informatique ( Pyhton, JavaScript, PHP/Symfony, Java, C )</p>
        </div>
      </div>

      <div className={`competence-block optimiser glass-bg`}>
        <div className="competence-title">Optimiser</div>
        <div className="competence-text">
          <p>Réflexion sur des algorithmes complexes (Safly), apprentissage des design pattern. Enseignements de qualité de développement employés dans des projets ( Liste de courses Symfony ) </p>
        </div>
      </div>

      <div className={`competence-block administrer glass-bg`}>
        <div className="competence-title">Administrer</div>
        <div className="competence-text">
          <p>Utilisation de Git pour les projets, enseignements sur Docker, Azure, et les différents systèmes d'exploitation et leur environnement.</p>
        </div>
      </div>

      <div className={`competence-block gerer glass-bg`}>
        <div className="competence-title">Gérer</div>
        <div className="competence-text">
          <p>Projet d'analyse de données avec Power BI, apprentissage des langages permettant l'exploitation des bases de données relationnelles (SQL, PL/SQL) et non-relationnelles (MongoDB).</p>
        </div>
      </div>

      <div className={`competence-block conduire glass-bg`}>
        <div className="competence-title">Conduire</div>
        <div className="competence-text">
          <p>Projets pilotés en équipe (Didactypo, Safly). Planification de projets avec différentes méthodes (Cascade, Agile...), rédaction de cahiers des charges.</p>
        </div>
      </div>

      <div className={`competence-block collaborer glass-bg`}>
        <div className="competence-title">Collaborer</div>
        <div className="competence-text">
          <p>Projets toujours réalisés en groupe, enseignements de communication. ( Didactypo, Safly, Power BI Dashboard )</p>
        </div>
      </div>
    </div>
  );
};

export default Ecole;
