import React from "react";
import { Container, Typo } from "../../atoms";
import TicketSelectionRow from "../../organismes/TicketSelectionRow";
import { TicketSelected } from "../../organismes";

const TicketSelection = ({
  categories,
  ticketCounts,
  incrementTicketCount,
  decrementTicketCount,
  totalTickets,
  totalPrice,
  goToEventPayment
}) => {
  return (
    <Container.PageContainer justifyContent={'space-between'} paddingBottom={'0px'}>
      <Container.ColContainer gap={"20px"}>
        <Typo.Gotham uppercase text={"Tickets"} />
        <Container.ColContainer gap={"10px"}>
          {categories.map((category, index) => (
            <TicketSelectionRow
              key={index}
              category={category}
              ticketCounts={ticketCounts}
              incrementTicketCount={incrementTicketCount}
              decrementTicketCount={decrementTicketCount}
            />
          ))}
        </Container.ColContainer>
      </Container.ColContainer>
      {totalTickets > 0 ? <TicketSelected totalTickets={totalTickets} totalPrice={totalPrice} goNext={goToEventPayment} buttonTitle={'suivant'} /> : null}
    </Container.PageContainer>
  );
};

export default TicketSelection;
