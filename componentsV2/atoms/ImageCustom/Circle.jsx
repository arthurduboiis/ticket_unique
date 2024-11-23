import React from 'react';
import { Native } from '../../nanites';

const Circle = (props) => {
  return (
    <Native.StyledImageBase
      src={props.source ? props.source : 'default'}
      width={props.width ? props.width : '60px'}
      height={props.height ? props.height : '60px'}
      imageStyle={{ borderRadius: 50 }}
      onC
      {...props}
    />
  );
};

export default Circle;
