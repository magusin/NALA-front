import React, { useEffect, useState } from "react";

import "./foot-print.scss";

const FootPrint = () => {
  // on determine 2 variables d'état pour gérer la position en x et y
  // de notre empreinte
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  // utilitaire permettant de générer un nombre aléatoire
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // on lance un hook d'effet au montage
  // du composant
  useEffect(setXY, []);

  // ce hook d'effet lancera un timer qui permattra de
  // générer aléatoirement de nouvelles coordonnées toutes les 2 secondes
  function setXY() {
    setInterval(() => {
      let height = window.innerHeight;
      let width = window.innerWidth;

      let imgHeight = 37.8;
      let imgWidth = 72;

      setY(getRandomInt(height - imgHeight));
      setX(getRandomInt(width - imgWidth));
    }, 2000);
  }

  // on s'appuie sur x et y pour déterminer le style
  const style = {
    left: `${x}px`,
    top: `${y}px`,
  };

  // tant qu'on n'a pas de x, on ne dessine pas le composant
  if (x === null) return null;

  // sinon, on revoit sa portion d'UI.
  return <img style={style} src="https://cdn.pixabay.com/photo/2014/04/03/00/42/footprints-309158_960_720.png" className="foot-print"></img>;
};

export default FootPrint;
