import React from 'react'
import { Native } from '../../nanites'

const ColContainer = (props) => {
  return (
    <Native.StyledContainer flexDirection={'column'} {...props} />
  )
}

export default ColContainer