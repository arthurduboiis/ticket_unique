import React from 'react';
import { Container, Typo } from '../atoms';
import { Colors } from '../../styles/colors';

const DisplayDescription = ({ name, place, ...props }) => {
  const defaultName = 'Default Name';
  const defaultPlace = 'Default Place';
  return (
    <Container.DisplayContainer flexDirection={'column'} gap={'3px'} {...props}>
      <Typo.OwnersText text={name ? name : defaultName} />
      <Typo.OwnersText
        text={place ? place : defaultPlace}
        fontSize={'14px'}
        color={Colors.dimmedLight}
      />
    </Container.DisplayContainer>
  );
};

export default DisplayDescription;
