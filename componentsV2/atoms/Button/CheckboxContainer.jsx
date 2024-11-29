import React from 'react'
import { Native } from '../../nanites'
import styled from 'styled-components/native'
import { useThemeColor } from '../../../hooks/useThemeColor'

const StyledCheckbox = styled.View`
  width: 14px;
  height: 14px;
  border: 1px solid ${props => props.borderColor ? props.borderColor : 'transparent'};
  border-radius: 2px;
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
`


const CheckboxContainer = ({action = () => {}, title, checked = false ,...props}) => {
  const defaultText = 'Checkbox'
  return (
    <Native.StyledButton
      paddingHorizontal={'10px'}
      paddingVertical={'10px'}
      gap={20}
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      onPress={action}
      bgColor={useThemeColor("transparent")}
    >
      <StyledCheckbox checked={checked} bgColor={checked ? useThemeColor("primaryLight") : useThemeColor("transparent")} borderColor={useThemeColor("primaryLight")}/>
      <Native.StyledOwnersText fontSize={'14px'} color={useThemeColor("primaryLight")}>{title ? title : defaultText}</Native.StyledOwnersText>
    </Native.StyledButton>
  )
}

export default CheckboxContainer;