import React from 'react';
import { Native } from '../../nanites';
import { Colors } from '../../../constants/Colors';

const Follow = ({ title, action = () => {} }) => {
  const defaultTitle = 'Follow';
  return (
    <Native.StyledButton paddingHorizontal={"10px"} paddingVertical={"6px"}>
      <Native.StyledOwnersText color={Colors.light.primaryDark}>
        {title ? title : defaultTitle}
      </Native.StyledOwnersText>
    </Native.StyledButton>
  );
};

export default Follow;
