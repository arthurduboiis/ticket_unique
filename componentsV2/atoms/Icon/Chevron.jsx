import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { Colors } from '../../../constants/Colors';

const Chevron = ({ width = 18, height = 18, color = Colors.light.primaryLight, direction = 'right' }) => {
  // Calculer le `viewBox` en fonction des props width et height pour qu'il reste proportionnel
  const viewBox = `0 0 24 24`;

  // Calculer la rotation en fonction de la direction (droite par défaut)
  const rotation = direction === 'left' ? '180deg'
                   : direction === 'up' ? '270deg'
                   : direction === 'down' ? '90deg'
                   : '0deg'; // par défaut 'right'

  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: [{ rotate: rotation }] }} // Rotation selon la direction
    >
      <Path
        d="M9 18L15 12L9 6"  // Coordonnées du chevron (flèche)
        stroke={color}
        strokeWidth={2}  // Tu peux aussi rendre le strokeWidth ajustable si nécessaire
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Chevron;
