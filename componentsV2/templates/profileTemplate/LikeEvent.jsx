import React from 'react'
import { Container, Typo } from '../../atoms'
import { HorizontalCardEvent } from '../../organismes'

const LikeEvent = ({events}) => {
  return (
    <Container.PageContainer gap={'20px'}>
      <Typo.Gotham text={'Événements favoris'} />
        {events.map((event) => (
          <HorizontalCardEvent key={event.event.id} eventDate={event.event.startDate} eventImage={event.event.image} name={event.event.title} place={event.event.place}  />
        ))}

    </Container.PageContainer>
  )
}

export default LikeEvent