import React from 'react'
import styled from 'styled-components/native'
import IconButton from './IconButton'
import Filter from '../../../assets/filter.svg';
import { Bubble } from '../atoms';


const StyledView = styled.View`
  position: relative;
`

const FilterButton = ({notification = 0, action = () => {}}) => {
  return (
    <StyledView>
      { notification > 0 ?? <Bubble.Base numberOfNotif={notification} position={'absolute'} right={'-3px'} top={'-8px'} zIndex={'10'} ></Bubble.Base>}
      <IconButton icon={Filter} action={action} />

    </StyledView>
  )
}

export default FilterButton