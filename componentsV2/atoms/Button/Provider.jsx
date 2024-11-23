import React from 'react'
import { Native } from '../../nanites'

const Provider = ({loginWithProvider, ...props}) => {
  return (
    <Native.StyledButton onPress={loginWithProvider}  paddingHorizontal={'0px'} paddingVertical={'0px'} width={'44px'} height={'44px'} {...props}>
      {props.children}
      </Native.StyledButton>
  )
}

export default Provider