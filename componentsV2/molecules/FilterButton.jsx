import React from 'react'
import styled from 'styled-components/native'
import IconButton from './IconButton'
import Filter from '../../assets/filter.svg';
import FilterLight from '../../assets/filter_light.svg';
import { Bubble } from '../atoms';
import { useThemeStore } from '../../store/ThemeStore';


const StyledView = styled.View`
  position: relative;
`

const FilterButton = ({notification = 0, action = () => {}}) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <StyledView>
      { notification > 0 ?? <Bubble.Base numberOfNotif={notification} position={'absolute'} right={'-3px'} top={'-8px'} zIndex={'10'} ></Bubble.Base>}
      <IconButton icon={theme === 'light' ? FilterLight : Filter} action={action} />

    </StyledView>
  )
}

export default FilterButton