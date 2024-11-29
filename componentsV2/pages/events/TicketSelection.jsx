import React from 'react'
import { EventsTemplate } from '../../templates'

const TicketSelection = ({route, navigation}) => {
  const [ticketCounts, setTicketCounts] = React.useState({});
  const [totalPrice, setTotalPrice] = React.useState(0);
  const { event } = route.params



  const incrementTicketCount = React.useCallback((categoryName) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [categoryName]: (prevCounts[categoryName] || 0) + 1,
    }));
  }, []);

  const decrementTicketCount = React.useCallback((categoryName) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [categoryName]: Math.max(0, (prevCounts[categoryName] || 0) - 1),
    }));
  }, []);

  const totalTickets = Object.values(ticketCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  React.useEffect(() => {
    const calculateTotalPrice = () => {
      const price = Object.entries(ticketCounts).reduce(
        (totalPrice, [key, count]) => {
          const category = Object.values(
            event?.ticketCategories || {}
          ).find((category) => category.categoryName === key);
          return category ? totalPrice + category.price * count : totalPrice;
        },
        0
      );
      setTotalPrice(price);
    };

    calculateTotalPrice();
  }, [ticketCounts, event]);

  const goToEventPayment = () => {
    navigation.navigate('EventPayment', { event, ticketCounts, totalPrice, totalTickets});
  }
  
  return (
    <EventsTemplate.TicketSelection 
      categories={event.ticketCategories}
      ticketCounts={ticketCounts}
      incrementTicketCount={incrementTicketCount}
      decrementTicketCount={decrementTicketCount}
      totalTickets={totalTickets}
      totalPrice={totalPrice}
      goToEventPayment={goToEventPayment}
    />
  )
}

export default TicketSelection