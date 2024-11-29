import React from 'react'
import { Native } from '../nanites'
import { useThemeColor } from '../../hooks/useThemeColor';
import { Chevron } from '../atoms/Icon'

const FollowingButton = ({title = 'suivi', action = () => {}, ...props}) => {
  return (
    <Native.StyledButton 
      
      onPress={() => {
        action()
        console.log("Following button pressed")
      }}
      bgColor={useThemeColor("dimmedLight")}
      paddingHorizontal={'10px'}
      paddingVertical={'6px'}
    >
      <Native.StyledOwnersText color={useThemeColor("primaryLight")}>{title}</Native.StyledOwnersText>
      <Chevron color={useThemeColor("primaryLight")} direction='down'/>
    </Native.StyledButton>
  )
}

export default FollowingButton