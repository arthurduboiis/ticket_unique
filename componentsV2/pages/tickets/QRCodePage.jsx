import React from 'react'
import { TicketsTemplate } from '../../templates'

const QRCodePage = ({route, navigation}) => {
  const { ticket } = route.params
  console.log(ticket.category )
  return (
    <TicketsTemplate.QRCodeTemplate categoryName={ticket.category} />
  )
}

export default QRCodePage