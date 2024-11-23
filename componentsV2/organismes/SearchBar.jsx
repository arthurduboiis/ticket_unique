import React from 'react';
import { Container } from '../atoms';
import { FilterButton, LabeledInput } from '../molecules';

const SearchBar = ({
  openFilter,
  activeFilters,
  searchPhrase,
  setSearchPhrase,
  ...props
}) => {
  return (
    <Container.RowContainer gap={'20px'}  width={'78%'}>
      <FilterButton action={openFilter} notification={activeFilters} />
      <LabeledInput
        placeholder={'Rechercher...'}
        mandatory={false}
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        icon="feather"
      />
    </Container.RowContainer>
  );
};

export default SearchBar;
