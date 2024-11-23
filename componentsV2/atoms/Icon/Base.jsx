import React from 'react';
import { SvgXml } from 'react-native-svg';

const Base = (props) => {
  const defaultIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle></svg>`;

  if (typeof props.source === 'function') {
    const SvgComponent = props.source;
    return <SvgComponent width={props.width || 20} height={props.height || 20} />;
  }

  return (
    <SvgXml xml={props.source ? props.source : defaultIcon} width={props.width || 20} height={props.height || 20} />
  );
};

export default Base;
