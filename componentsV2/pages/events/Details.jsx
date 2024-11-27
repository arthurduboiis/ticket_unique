import React from 'react'
import { EventsTemplate } from '../../templates'

const Details = ({route, navigation}) => {
  const { event } = route.params
  const [liked, setLiked] = React.useState(false)

  const goToTicketSelection = () => {
    console.log('Go to ticket selection')
  }


  return (
    <EventsTemplate.Details 
      imageURL={event.image}
      eventTitle={event.title}
      eventDescription={event.description}
      startDate={event.startDate}
      endDate={event.endDate}
      organizerName={event.coOrganizer}
      mood={event.mood}
      source={event.company.companyLogo.url}
      startingPrice={event.startingPrice}
      action={goToTicketSelection}
      liked={liked}
      toggleLiked={() => setLiked(!liked)}
      numberOfLike={event.like}
    />
  )
}

export default Details