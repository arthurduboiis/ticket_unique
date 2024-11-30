import React from 'react';
import { Native } from '../../nanites';

const Base = ({source,...props}) => {
  console.log('source', source)
  return (
    <Native.StyledImageBase
      src={source ? source : 'default'}
      imageStyle={{ borderRadius: 5 }}
    />
  );
};

export default Base;
