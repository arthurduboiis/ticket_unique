import React from 'react'
import { Native } from '../nanites'
import { Colors } from '../../constants/Colors'
import { Chevron } from '../atoms/Icon'

const FollowingButton = ({title = 'suivi', action = () => {}, ...props}) => {
  return (
    <Native.StyledButton 
      
      onPress={() => {
        action()
        console.log("Following button pressed")
      }}
      bgColor={Colors.light.dimmedLight}
      paddingHorizontal={'10px'}
      paddingVertical={'6px'}
    >
      <Native.StyledOwnersText color={Colors.light.primaryLight}>{title}</Native.StyledOwnersText>
      <Chevron color={Colors.light.primaryLight} direction='down'/>
    </Native.StyledButton>
  )
}

export default FollowingButton