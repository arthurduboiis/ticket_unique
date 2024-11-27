import React from 'react'
import { EventsTemplate } from '../../templates'

const TicketSelection = ({route, navigation}) => {
  const [quantity, setQuantity] = React.useState(0)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  const { event } = route.params
  
  return (
    <EventsTemplate.TicketSelection 
      categories={event.ticketCategories}
      quantity={quantity}
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
    />
  )
}

export default TicketSelection