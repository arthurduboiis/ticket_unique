import React from "react";
import { Button, Container, Typo } from "../atoms";

const TicketSelected = ({
  totalTickets,
  totalPrice,
  goNext,
  buttonTitle,
  isPaymentPage = false,
}) => {
  let totalTicketsPhrase =
    totalTickets === 1 ? "ticket sélectionné" : "tickets sélectionnés";
  return (
    <Container.ColContainer gap={"10px"}>
      {!isPaymentPage ? (
        <Typo.OwnersText>
          {totalTickets} {totalTicketsPhrase}
        </Typo.OwnersText>
      ) : null}
      <Container.RowContainer justifyContent={"space-between"}>
        <Typo.OwnersText fontWeight={"500"}>Total</Typo.OwnersText>
        <Typo.OwnersText fontWeight={"500"}>{totalPrice}€</Typo.OwnersText>
      </Container.RowContainer>
      <Button.Base title={buttonTitle} action={goNext} />
    </Container.ColContainer>
  );
};

export default TicketSelected;
