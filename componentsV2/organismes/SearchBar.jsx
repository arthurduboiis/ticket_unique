import React from 'react';
import { Button, Container } from '../atoms';
import { FilterButton, LabeledInput } from '../molecules';

const SearchBar = ({
  openFilter,
  activeFilters,
  searchPhrase,
  setSearchPhrase,
  ...props
}) => {
  return (
    <Container.RowContainer gap={'20px'}  width={'70%'}>
      <FilterButton action={openFilter} notification={activeFilters} />
      <LabeledInput
        placeholder={'Rechercher...'}
        mandatory={false}
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        icon="feather"
      />
      <Button.SwitchDarkLightMode />
    </Container.RowContainer>
  );
};

export default SearchBar;
