import React from 'react'
import { Native } from '../../nanites'
import { useThemeColor } from '../../../hooks/useThemeColor'
const Icon = ({action = () => {}, ...props}) => {
  return (
    <Native.StyledButton 
      onPress={action}
      {...props}
      paddingHorizontal={props.paddingHorizontal ? props.paddingHorizontal : '20px'}
      paddingVertical={props.paddingVertical ? props.paddingVertical : '10px'}
      bgColor={props.bgColor ? props.bgColor : useThemeColor("secondaryDark")}
      borderRadius={5.00}
    >
      {props.children}
    </Native.StyledButton>
  )
}

export default Icon