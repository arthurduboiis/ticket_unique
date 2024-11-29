import React from "react";
import { EventsTemplate } from "../../templates";

const Payment = ({ route, navigation }) => {
  const { event, ticketCounts, totalPrice, totalTickets } = route.params;
  const ticketCountAndPrice = Object.entries(ticketCounts).reduce(
    (acc, [key, count]) => {
      const category = Object.values(event.ticketCategories || {}).find(
        (category) => category.categoryName === key
      );
      if (category) {
        acc[key] = {
          price: category.price * count,
          count: count,
        };
      }
      return acc;
    },
    {}
  );

  buyTickets = () => {
    console.log("buy tickets");
  };
  return (
    <EventsTemplate.Payment
      eventDate={event.startDate}
      eventImage={event.image}
      eventName={event.title}
      eventPlace={event.place}
      totalPrice={totalPrice}
      totalTickets={totalTickets}
      buyTickets={buyTickets}
      ticketCountAndPrice={ticketCountAndPrice}
    />
  );
};

export default Payment;
