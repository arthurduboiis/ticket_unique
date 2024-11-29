import React from 'react'
import { Native } from '../../nanites'
import { useThemeColor } from '../../../hooks/useThemeColor'

const Base = ({ numberOfNotif, ...props }) => {
  return (
    <Native.StyledContainer bgColor={useThemeColor("yellow")} paddingVertical={'2px'} paddingHorizontal={'6px'} borderRadius={100.00} {...props}>
      <Native.StyledOwnersText fontSize={props.fontSize ? props.fontSize : '12px'} color={useThemeColor("primaryDark")}>{numberOfNotif}</Native.StyledOwnersText>
    </Native.StyledContainer>
  )
}

export default Base