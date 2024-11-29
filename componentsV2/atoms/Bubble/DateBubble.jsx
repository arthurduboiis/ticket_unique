import React from 'react'
import { Native } from '../../nanites'
import { useThemeColor } from '../../../hooks/useThemeColor'

const DateBubble = ({date, ...props}) => {
  const defaultDate = "DD-MM-YY";
  return (
    <Native.StyledContainer bgColor={useThemeColor("dateBubble")} paddingVertical={'1px'} paddingHorizontal={'5px'} borderRadius={100.00} {...props}>

      <Native.StyledOwnersText fontSize={'14px'} color={useThemeColor("primaryLight")}>{date ? date : defaultDate}</Native.StyledOwnersText>
    </Native.StyledContainer>

  )
}

export default DateBubble