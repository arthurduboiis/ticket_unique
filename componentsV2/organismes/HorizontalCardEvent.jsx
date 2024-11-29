import React from 'react'
import { Bubble, Container } from '../atoms'
import { Display, DisplayDescription } from '../molecules'
import { useThemeColor } from '../../hooks/useThemeColor';

const HorizontalCardEvent = ({ eventImage, artist, place, numberOfTickets = 0, eventDate, action = () => { }, ...props }) => {
  return (
    <Container.ButtonContainer flexDirection={'row'} gap={'20px'} justifyContent={'flex-start'} paddingHorizontal={'10px'} paddingVertical={'10px'} bgColor={useThemeColor("secondaryDark")} borderRadius={5.00} width={'100%'} position={"relative"} onPress={action} {...props}>
      <Display smallSquare eventDate={eventDate} eventImage={eventImage} canFav={false} />
      <DisplayDescription name={artist} place={place} paddingVertical={'10px'} />
      {numberOfTickets > 0 && (
        <Bubble.Base numberOfNotif={numberOfTickets} fontSize={'14px'}
          style={{ position: 'absolute', bottom: 20, right: 20 }}
        />
      )}
    </Container.ButtonContainer>
  )
}

export default HorizontalCardEvent