import React from "react";
import { EventsTemplate } from "../../templates";
import { buyTickets } from "../../../services/eventsService";

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

  const checkout = async () => {
    console.log(event.id)
    console.log(ticketCountAndPrice)
    try {
      const response = await buyTickets(event.id, ticketCountAndPrice);
      navigation.navigate("Mes tickets")
    }
    catch (error) {
      console.log(error)
    }
  };
  return (
    <EventsTemplate.Payment
      eventDate={event.startDate}
      eventImage={event.image}
      eventName={event.title}
      eventPlace={event.place}
      totalPrice={totalPrice}
      totalTickets={totalTickets}
      buyTickets={checkout}
      ticketCountAndPrice={ticketCountAndPrice}
    />
  );
};

export default Payment;
