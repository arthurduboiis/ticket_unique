import React from 'react';
import { Native } from '../../nanites';

const Rectangle = (props) => {
  return (
    <Native.StyledImageBase
      src={props.source ? props.source : 'default'}
      height={'180px'}
      width={'100%'}
      imageStyle={{ borderRadius: 5 }}
    />
  );
};

export default Rectangle;
