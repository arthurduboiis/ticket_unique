import React from 'react'
import { Native } from '../../nanites'

const DisplayContainer = (props) => {
  return (
    <Native.StyledContainer 
    paddingHorizontal={'0px'}
    paddingVertical={'0px'}
    position={'relative'}
    {...props}/>
  )
}

export default DisplayContainer