import React from "react";
import { Container, Typo } from "../atoms";
import { FilterButton } from "../molecules";

const HeaderTickets = ({ openFilter, activeFilters, ...props }) => {
  return (
    <Container.RowContainer gap={"20px"} width={"100%"} justifyContent={"space-between"} alignItems={'center'}>
      <Typo.Gotham text={'Mes Tickets'} uppercase></Typo.Gotham>
      <FilterButton action={openFilter} notification={activeFilters} />
    </Container.RowContainer>
  );
}

export default HeaderTickets;