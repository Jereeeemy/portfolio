import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

const Competence = () => {
  const [ref, visible] = useScrollFadeIn();

  const skills = [
    { name: "Power BI", img: "/portfolio/img/competence/power-bi.png" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "SQL & PL/SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Excel", img: "/portfolio/img/competence/excel.png" },
    { name: "PowerAMC", img: "/portfolio/img/competence/poweramc.png" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Javascript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "PHP/Symfony", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Jekyll", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jekyll/jekyll-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
    { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  ];

  return (
    <div
      ref={ref}
      className={`glass fade-in ${visible ? 'visible' : ''}`}
    >
      <h1>Compétences</h1>
      <div className="badges">
        {skills.map((skill, index) => (
          <div key={index}>
            <h2>{skill.name}</h2>
            <div>
              <img src={skill.img} className="icone" alt={skill.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competence;
