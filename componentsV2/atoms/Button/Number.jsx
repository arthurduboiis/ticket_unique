import React from 'react';
import { Native } from '../../nanites';
import { Colors } from '../../../styles/colors';

const Number = ({ action = () => {}, number, selected = false, ...props }) => {
  return (
    <Native.StyledButton
      borderRadius={5.00}
      paddingHorizontal={'10px'}
      paddingVertical={'10px'}
      onPress={() => {
        action();
      }}
      bgColor={selected ? Colors.dimmedLight : Colors.secondaryDark}
      width={'45px'}
      {...props}
    >
      <Native.StyledOwnersText fontSize={'18px'} color={Colors.primaryLight}>
        {number ? number : 0}
      </Native.StyledOwnersText>
    </Native.StyledButton>
  );
};

export default Number;
