import React from 'react';
import { Container, Typo } from '../atoms';
import { useThemeColor } from '../../hooks/useThemeColor';

const DisplayDescription = ({ name, place, ...props }) => {
  const defaultName = 'Default Name';
  const defaultPlace = 'Default Place';
  return (
    <Container.DisplayContainer flexDirection={'column'} gap={'3px'} {...props}>
      <Typo.OwnersText >{name ? name : defaultName}</Typo.OwnersText>
      <Typo.OwnersText
        fontSize={'14px'}
        color={useThemeColor("dimmedLight")}
      >{place ? place : defaultPlace}</Typo.OwnersText>
    </Container.DisplayContainer>
  );
};

export default DisplayDescription;
