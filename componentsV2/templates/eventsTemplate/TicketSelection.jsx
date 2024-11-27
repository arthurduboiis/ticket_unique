import React from "react";
import { Container, Typo } from "../../atoms";
import TicketSelectionRow from "../../organismes/TicketSelectionRow";
import { TicketSelected } from "../../organismes";

const TicketSelection = ({
  categories,
  quantity,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <Container.PageContainer>
      <Container.ColContainer gap={"20px"}>
        <Typo.Gotham uppercase text={"Tickets"} />
        <Container.ColContainer gap={"10px"}>
          {categories.map((category, index) => (
            <TicketSelectionRow
              key={index}
              category={category}
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          ))}
        </Container.ColContainer>
      </Container.ColContainer>
      {quantity > 0 ? <TicketSelected /> : null}
    </Container.PageContainer>
  );
};

export default TicketSelection;
