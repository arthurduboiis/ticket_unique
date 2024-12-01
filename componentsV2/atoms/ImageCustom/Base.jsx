import React from 'react';
import { Native } from '../../nanites';

const Base = ({source,...props}) => {
  return (
    <Native.StyledImageBase
      src={source ? source : 'default'}
      imageStyle={{ borderRadius: 5 }}
    />
  );
};

export default Base;
