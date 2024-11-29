import React from 'react'
import { Bubble, Container } from '../atoms'
import { Display, DisplayDescription } from '../molecules'
import { Colors } from '../../constants/Colors'

const HorizontalCardEvent = ({ eventImage, name, place, numberOfTickets = 0, eventDate, action = () => { }, ...props }) => {

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    if (month < 10) {
      return `${day}-0${month}-${year}`;
    }
    return `${day}-${month}-${year}`;
  };

  return (
    <Container.ButtonContainer flexDirection={'row'} gap={'20px'} justifyContent={'flex-start'} paddingHorizontal={'10px'} paddingVertical={'10px'} bgColor={Colors.light.secondaryDark} borderRadius={5.00} width={'100%'} position={"relative"} onPress={action} {...props}>
      <Display smallSquare eventDate={formatDate(eventDate)} eventImage={eventImage} canFav={false} />
      <DisplayDescription name={name} place={place} paddingVertical={'10px'} />
      {numberOfTickets > 0 && (
        <Bubble.Base numberOfNotif={numberOfTickets} fontSize={'14px'}
          style={{ position: 'absolute', bottom: 20, right: 20 }}
        />
      )}
    </Container.ButtonContainer>
  )
}

export default HorizontalCardEvent