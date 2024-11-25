import React from 'react'
import { Native } from '../nanites'
import { Colors } from '../../styles/colors'
import Chevron from '../atoms/Icon/Chevron'

const SecondaryButton = ({title, action = () =>  {}, color = Colors.light.primaryLight, left = false, darkmode = false, ...props}) => {
  const defaultTitle = "Secondary Button title to set";
  return (
    <Native.StyledButton
      onPress={() => {
        action()
        console.log("Secondary button pressed")
      }}
      bgColor={'transparent'}
      {...props}
    >
      {left && <Chevron color={darkmode ? Colors.light.primaryDark : color} direction='left'/>}
      <Native.StyledOwnersText fontSize="18px" color={darkmode ? Colors.light.primaryDark : color}>{title ? title : defaultTitle}</Native.StyledOwnersText>
      {!left && <Chevron color={darkmode ? Colors.light.primaryDark : color} />}
    </Native.StyledButton>

  )
}

export default SecondaryButton