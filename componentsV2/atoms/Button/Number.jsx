import React from 'react';
import { Native } from '../../nanites';
import { useThemeColor } from '../../../hooks/useThemeColor';

const Number = ({ action = () => {}, number, selected = false, ...props }) => {
  return (
    <Native.StyledButton
      borderRadius={5.00}
      paddingHorizontal={'10px'}
      paddingVertical={'10px'}
      onPress={() => {
        action();
      }}
      bgColor={selected ? useThemeColor("dimmedLight") : useThemeColor("secondaryDark")}
      width={'45px'}
      {...props}
    >
      <Native.StyledOwnersText fontSize={'18px'} color={useThemeColor("primaryLight")}>
        {number ? number : 0}
      </Native.StyledOwnersText>
    </Native.StyledButton>
  );
};

export default Number;
