import React from 'react'
import { Native } from '../../nanites'

const RowContainer = (props) => {
  return (
    <Native.StyledContainer flexDirection={'row'} {...props} />
  )
}

export default RowContainer