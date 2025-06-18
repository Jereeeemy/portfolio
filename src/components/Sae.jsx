import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

const Sae = () => {
    const [ref1, visible1] = useScrollFadeIn();
    const [ref2, visible2] = useScrollFadeIn();
    const [ref3, visible3] = useScrollFadeIn();

    return (
        <div className="glass">
            <h1>Projets</h1>
            <div>
                <div
                    ref={ref1}
                    className={`left glass-bg fade-in ${visible1 ? 'visible' : ''}`}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }} className="center-title-icon">
                        <h2>Didactypo</h2>
                        <img src="/portfolio/img/logoDidactypo.png" alt="Logo Didactypo" className="icone" />
                    </div>
                    <p className="glass-bg">
                        Projet de SAE de deuxième année par groupe de 4. Application web qui permet l'apprentissage de la dactylographie pour les plus jeunes. Développée en React et avec Fast API. Didactypo possède de nombreuses fonctionnalités avec des exercices, des classes, des statistiques personnelles.
                    </p>
                    <img src="/portfolio/img/didactypo.png" alt="Screenshot Didactypo" style={{ width: '100%', borderRadius: '8px' }} />
                </div>

                <div
                    ref={ref2}
                    className={`right glass-bg mt mb fade-in ${visible2 ? 'visible' : ''}`}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', justifyContent: 'flex-end' }} className="center-title-icon">
                        <img src="/portfolio/img/safly.png" alt="Logo Safly" className="icone" />
                        <h2>Safly</h2>
                    </div>
                    <p className="glass-bg">
                        Application Java permettant la lecture et la création de graphes, coloration des graphes avec les algorithmes de D-Satur, Welsh & Powell, RLF. Gestion de fichiers de vol avec gestion des conflits de graphe. Projet de SAE de première année de BUT, par groupe de 3.
                    </p>
                    <img src="/portfolio/img/saflyApp.png" alt="Screenshot Safly" style={{ width: '100%', borderRadius: '8px' }} />
                </div>

                <div
                    ref={ref3}
                    className={`left glass-bg fade-in ${visible3 ? 'visible' : ''}`}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }} className="center-title-icon">
                        <h2>Power BI Dashboard</h2>
                        <img src="/portfolio/img/competence/power-bi.png" alt="Logo Power BI" className="icone" />
                    </div>
                    <p className="glass-bg">
                        Création de tableaux de bord interactifs avec Power BI pour l'analyse de données business. Développement de visualisations personnalisées et mise en place de rapports automatisés pour le suivi des KPIs et la prise de décision stratégique.
                    </p>
                    <img src="/portfolio/img/stats.png" alt="Screenshot Power BI" style={{ width: '100%', borderRadius: '8px' }} />
                </div>

                <div style={{ clear: 'both' }}></div>
            </div>
        </div>
    );
};

export default Sae;
