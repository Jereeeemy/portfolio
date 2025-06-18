import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';
// import cermepLogo from '../img/cermep-logo.png'; // Décommentez quand vous ajouterez le logo

const Experience = () => {
  const [ref, visible] = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`glass fade-in ${visible ? 'visible' : ''} mt mb`}
    >
      <div className="center-title-icon">
        <h2 style={{ fontSize: '2.5rem', margin: '0', color: 'white' }}>
          Expérience Professionnelle
        </h2>
      </div>

      <div style={{ 
        textAlign: 'left', 
        marginTop: '2rem',
        padding: '1.5rem',
      }} className='glass-bg'>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px', 
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <h3 style={{ 
            color: 'white', 
            fontSize: '1.8rem', 
            margin: '0',
            fontWeight: 'bold'
          }}>
            Stage - CERMEP Imagerie du Vivant
          </h3>
          <img src='/portfolio/img/cermep.jpg' className='logo'></img>
        </div>

        <div style={{ 
          fontSize: '1rem', 
          color: 'rgba(255,255,255,0.8)',
          marginBottom: '0.5rem',
          fontStyle: 'italic'
        }}>
          Centre d'Étude et de Recherche Multimodale Et Pluridisciplinaire en imagerie du vivant
        </div>

        <div style={{ 
          fontSize: '0.9rem', 
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '1.5rem'
        }}>
          📅 14/04/2025 - 06/06/2025 • 📍 Lyon, France
        </div>

        <div style={{ 
          color: 'white', 
          lineHeight: '1.6',
          fontSize: '1.1rem'
        }}>
          <p>
            Durant mon stage au CERMEP, j'ai eu l'opportunité de travailler dans un environnement de recherche médicale de pointe, 
            spécialisé dans l'imagerie biomédicale. Cette expérience m'a permis de découvrir le monde professionnel et de contribuer à un projet informatique dans des conditions réelles.
          </p>
          
          <p style={{ marginBottom: '1rem' }}>
            <strong>Missions principales :</strong>
          </p>
          <ul style={{ 
            paddingLeft: '1.5rem', 
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.8'
          }}>
            <li>Développement d'un site web pour le CERMEP</li>
            <li>Implémentation de Matomo Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;