import React from "react";
import { Container, Tag, Typo } from "../atoms";
import { IconButton } from "../molecules";
import Minus from "../../assets/minus.svg";
import MinusLight from "../../assets/minus_light.svg";
import Plus from "../../assets/plus.svg";
import PlusLight from "../../assets/plus_light.svg";
import { useThemeStore } from "../../store/ThemeStore";

const TicketSelectionRow = ({
  category,
  ticketCounts,
  incrementTicketCount,
  decrementTicketCount,
}) => {
  const handleIncrement = (categoryName) => {
    const currentCount = ticketCounts[categoryName] || 0;
    if (currentCount < category.availableTickets)
      incrementTicketCount(categoryName);
  };

  const handleDecrement = (categoryName) => {
    const currentCount = ticketCounts[categoryName] || 0;
    if (currentCount > 0) {
      decrementTicketCount(categoryName);
    }
  };
  const theme = useThemeStore((state) => state.theme);

  return (
    <Container.RowContainer justifyContent={"space-between"}>
      <Container.ColContainer gap={"10px"}>
        <Typo.OwnersText fontWeight={"500"} fontSize={"18px"}>
          {category.categoryName}
        </Typo.OwnersText>
        <Typo.OwnersText>{category.price}€</Typo.OwnersText>
      </Container.ColContainer>
      <Container.RowContainer alignItems={"center"}>
        <IconButton
          icon={theme === 'light' ? MinusLight : Minus}
          action={() => handleDecrement(category.categoryName)}
          bgColor={"transparent"}
        />
        <Tag.Base
          title={
            ticketCounts[category.categoryName] > 0
              ? ticketCounts[category.categoryName]
              : 0
          }
        />
        <IconButton
          icon={theme === 'light' ? PlusLight : Plus}
          action={() => handleIncrement(category.categoryName)}
          bgColor={"transparent"}
        />
      </Container.RowContainer>
    </Container.RowContainer>
  );
};

export default TicketSelectionRow;
