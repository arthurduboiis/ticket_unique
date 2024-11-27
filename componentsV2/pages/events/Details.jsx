import React from 'react'
import { EventsTemplate } from '../../templates'

const Details = ({route, navigation}) => {
  const { event } = route.params
  return (
    <EventsTemplate.Details 
      imageURL={event.image}
      eventTitle={event.title}
      eventDescription={event.description}
      startDate={event.startDate}
      endDate={event.endDate}
      organizerName={event.coOrganizer}
    />
  )
}

export default Details