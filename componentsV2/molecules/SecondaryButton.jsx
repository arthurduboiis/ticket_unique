import React from 'react'
import { Native } from '../nanites'
import { Colors } from '../../constants/Colors'
import Chevron from '../atoms/Icon/Chevron'

const SecondaryButton = ({title, action = () =>  {}, color = Colors.light.primaryLight, left = false, modalMode = false, ...props}) => {
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
      {left && <Chevron color={modalMode ? Colors.light.primaryDark : color} direction='left'/>}
      <Native.StyledOwnersText fontSize="18px" color={modalMode ? Colors.light.primaryDark : color}>{title ? title : defaultTitle}</Native.StyledOwnersText>
      {!left && <Chevron color={modalMode ? Colors.light.primaryDark : color} />}
    </Native.StyledButton>

  )
}

export default SecondaryButton