import React from 'react'
import { Native } from '../../nanites'

const SectionList = ({action = () => {} , ...props}) => {
  return (
    <Native.StyledButtonContainer onPress={action} {...props}
    paddingVertical={'10px'}
    paddingHorizontal={'10px'}
    justifyContent={'space-between'}
    flexDirection={'row'}
    alignItems={'center'}
    />
  
  )
}

export default SectionList