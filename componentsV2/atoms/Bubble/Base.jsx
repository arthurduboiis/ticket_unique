import React from 'react'
import { Native } from '../../nanites'
import { Colors } from '../../../styles/colors'

const Base = ({ numberOfNotif, ...props }) => {
  return (
    <Native.StyledContainer bgColor={Colors.yellow} paddingVertical={'2px'} paddingHorizontal={'6px'} borderRadius={100.00} {...props}>
      <Native.StyledOwnersText fontSize={props.fontSize ? props.fontSize : '12px'} color={Colors.primaryDark}>{numberOfNotif}</Native.StyledOwnersText>
    </Native.StyledContainer>
  )
}

export default Base