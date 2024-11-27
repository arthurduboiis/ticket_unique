import React from "react";
import { Container, Tag, Typo } from "../atoms";
import { IconButton } from "../molecules";
import Minus from '../../assets/minus.svg'
import Plus from '../../assets/plus.svg'

const TicketSelectionRow = ({ category, quantity, incrementQuantity, decrementQuantity }) => {
  return (
    <Container.RowContainer justifyContent={"space-between"}>
      <Container.ColContainer gap={'10px'}>
          <Typo.OwnersText fontWeight={'500'} fontSize={'18px'}>{category.categoryName}</Typo.OwnersText>
          <Typo.OwnersText>{category.price}€</Typo.OwnersText>
      </Container.ColContainer>
      <Container.RowContainer alignItems={'center'}>
        <IconButton icon={Minus} action={decrementQuantity} bgColor={'transparent'} />
        <Tag.Base title={quantity} />
        <IconButton icon={Plus} action={incrementQuantity} bgColor={'transparent'}/>
      </Container.RowContainer>
    </Container.RowContainer>
  );
};

export default TicketSelectionRow;
