import { useEffect, useState } from 'react';
import { getTimeSegment } from './utils/timeSegment';
import nuage1 from './img/nuage1.png';
import nuage2 from './img/nuage2.png';
import nuage3 from './img/nuage3.png';
import nuage4 from './img/nuage6.png';
import nuage5 from './img/nuage5.png';
import nuage6 from './img/nuage6.png';
import './index.css';
import CartePixi from './components/CartePixi';
import SAE from './components/Sae';
import Ecole from './components/ecole';
import Competence from './components/Competence';
import Contact from './components/Contact';
import Jeremy from './components/jeremy';
import Experience from './components/Experience';


const backgrounds = {
  dawn: nuage1,
  morning: nuage2,
  afternoon: nuage3,
  evening: nuage4,
  sunset: nuage5,
  night: nuage6
};

function App() {
  const [segment, setSegment] = useState(getTimeSegment());

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgrounds[segment]})`;

    const interval = setInterval(() => {
      const newSegment = getTimeSegment();
      if (newSegment !== segment) {
        setSegment(newSegment);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [segment]);

  return (
    <div className="app-container">

      <Jeremy></Jeremy>

      <SAE></SAE>

      <Ecole></Ecole>

      <Experience></Experience>

      <Competence></Competence>

      <Contact></Contact>
    </div>
  );
}

export default App;