import React from 'react'
import { Native } from '../../nanites'
import styled from 'styled-components/native'
import { useThemeColor } from '../../../hooks/useThemeColor'

const StyledCheckbox = styled.View`
  width: 14px;
  height: 14px;
  border: 1px solid ${useThemeColor("primaryLight")};
  border-radius: 2px;
  background-color: ${props => props.checked ? useThemeColor("primaryLight") : useThemeColor("transparent")};
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
      <StyledCheckbox checked={checked} />
      <Native.StyledOwnersText fontSize={'14px'} color={useThemeColor("primaryLight")}>{title ? title : defaultText}</Native.StyledOwnersText>
    </Native.StyledButton>
  )
}

export default CheckboxContainer;