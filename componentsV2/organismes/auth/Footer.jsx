import React from 'react';
import { Button, Container } from '../../atoms';
import { SecondaryButton } from '../../molecules';
import { Colors } from '../../../constants/Colors';


const Footer = ({
  textGoTo,
  goToPage,
}) => {
  return (
    <Container.ColContainer
      gap={'20px'}
      alignItems={'center'}
      width={'100%'}
    >
      <SecondaryButton
        title={textGoTo}
        action={goToPage}
        paddingVertical={'0px'}
        paddingHorizontal={'0px'}
      />
      <Container.RowContainer
        gap={'20px'}
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
      >

      </Container.RowContainer>
    </Container.ColContainer>
  );
};

export default Footer;
