import React from 'react'
import { Container, Typo } from '../atoms'
import { Display, DisplayDescription } from '../molecules'
import { Colors } from '../../constants/Colors'

const CardEvent = ({ eventImage, name, eventDate, place, price, liked, toggleLiked = () => { }, action = () => { }, ...props }) => {
  return (
    <Container.ButtonContainer flexDirection={'column'} gap={'10px'} justifyContent={'flex-start'} paddingHorizontal={props.rectangle ? '10px' : '0px'} paddingVertical={props.rectangle ? '10px' : '0px'} bgColor={props.rectangle && Colors.light.secondaryDark} borderRadius={props.rectangle && 12.00} onPress={action} {...props}>
      <Display eventDate={eventDate} liked={liked} toggleLiked={toggleLiked} eventImage={eventImage} rectangle={props.rectangle ? true : false} />
      <DisplayDescription name={name} place={place} />
      <Typo.OwnersText fontSize={'14px'} style={{ alignSelf: props.rectangle ? 'flex-end' : 'flex-start' }} >{'à partir de ' + (price ? price : 'XX') + '€'}</Typo.OwnersText>
    </Container.ButtonContainer>
  )
}

export default CardEvent