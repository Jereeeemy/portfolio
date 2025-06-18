import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';
import profilePic from '/src/img/moi.png';

const Jeremy = () => {
  const [ref, visible] = useScrollFadeIn();
  const [nameRef, nameVisible] = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`jeremy-container glass fade-in ${visible ? 'visible' : ''}`}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@400;700;900&family=Rajdhani:wght@400;600;700&family=Bebas+Neue&display=swap');
          
          @keyframes glow {
            from {
              text-shadow: 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.1);
            }
            to {
              text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3);
            }
          }
        `}
      </style>
      <div className="jeremy-content" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <h1 
          ref={nameRef}
          className={`fade-in ${nameVisible ? 'visible' : ''}`}
          style={{ 
            color: 'white', 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            marginBottom: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            width: '100%',
            fontFamily: "'Orbitron', 'Exo 2', 'Rajdhani', 'Bebas Neue', cursive",
            background: 'linear-gradient(45deg, #fff, #ccc, #fff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: nameVisible ? 'glow 2s ease-in-out infinite alternate' : 'none'
          }}>
          Jérémy GARCIA
        </h1>
        <img src={profilePic} alt="Jeremy" className="jeremy-img" style={{ marginBottom: '1rem' }} />
        <div className="jeremy-text">
          <p className='glass-bg'>
            Étudiant en 2e année de BUT Informatique, passionné par le développement web, les interfaces soignées et la création de projets à impact. Je conçois des solutions techniques avec une vraie attention à l'expérience utilisateur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jeremy;