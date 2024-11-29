import React from 'react'
import { Container, Typo } from '../atoms'

const TicketSelectedRow = ({number, name, price}) => {
  return (
    <Container.RowContainer justifyContent={'space-between'}>
      <Typo.OwnersText >{number}x</Typo.OwnersText>
      <Typo.OwnersText >{name}</Typo.OwnersText>
      <Typo.OwnersText >{price}€</Typo.OwnersText>
    </Container.RowContainer>
  )
}

export default TicketSelectedRow