import React from 'react'
import { Container, Icon, Typo } from '../atoms'
import LogoUT from '../../assets/logo/Bulle_UT_Jaune.svg';

const ConnectionHeader = ({title}) => {
  return (
    <Container.ColContainer gap={'20px'} alignItems={'center'} width={'100%'}>
      <Icon.Base source={LogoUT} width={'70px'} height={'70px'} />
      <Typo.OwnersText fontSize={'20px'} fontWeight={'500'} text={title} />
    
    </Container.ColContainer>
  )
}

export default ConnectionHeader