import React from 'react'
import { Container, Typo } from '../../atoms'
import { HorizontalCardEvent, TicketSelected } from '../../organismes'
import { TicketSelectedRow } from '../../molecules'

const Payment = ({eventDate, eventImage, eventName, eventPlace, buyTickets, totalPrice, totalTickets, ticketCountAndPrice}) => {
  return (
    <Container.PageContainer paddingBottom={'0px'} justifyContent={'space-between'}>
      <Container.ColContainer gap={'10px'}>
        <Typo.Gotham uppercase text={'Payer'} />
      <HorizontalCardEvent
        bgColor={'transparent'}
        eventDate={eventDate}
        eventImage={eventImage}
        name={eventName}
        place={eventPlace}
      />
{Object.keys(ticketCountAndPrice).map((key, index) => (
        <TicketSelectedRow
          key={index}
          name={key}
          price={ticketCountAndPrice[key].price}
          number={ticketCountAndPrice[key].count}
        />
      ))}
      </Container.ColContainer>
      
      
     <TicketSelected totalTickets={totalTickets} totalPrice={totalPrice} goNext={buyTickets} buttonTitle={'payer'} isPaymentPage />
    </Container.PageContainer>
  )
}

export default Payment