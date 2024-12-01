import api from "../services/api";
import useAuthStore from "../store/authStore";
import useEventsStore from "../store/EventsStore";
import Fuse from "fuse.js";
import useTicketsStore from "../store/TicketsStore";

export const fetchEvents = async (searchPhrase, filteredCity, filteredDate) => {
  const { setEvents } = useEventsStore.getState();
  try {
    const response = await api.get("/events");
    setEvents(response.data);
  } catch (error) {
    console.error("Failed to fetch events:", error);
    throw error;
  }
};

export const getFilteredEvents = async (
  searchPhrase = "",
  cities = [],
  dates = []
) => {
  const searchOptions = {
    keys: ["title", "artist", "salle"],
    threshold: 0.4,
  };

  const { events } = useEventsStore.getState();

  const filteredEvents = events.filter((event) => {
    if (cities.length > 0 && !cities.includes(event.city)) {
      return false;
    }

    // startDate and endDate are after today or between dates.startDate and dates.endDate
    if (
      dates.length > 0 &&
      (new Date(event.startDate) < new Date() ||
        new Date(event.startDate) < new Date(dates[0]) ||
        new Date(event.startDate) > new Date(dates[1]))
    ) {
      return false;
    }

    if (searchPhrase !== "") {
      const fuse = new Fuse([event], searchOptions);
      const result = fuse.search(searchPhrase);
      if (result.length === 0) {
        return false;
      }
    }

    return true;
  });

  return filteredEvents;
};

export const buyTickets = async (eventId, tickets) => {
  // tickets = {"Binch": {"count": 1, "price": 20}, "fosse": {"count": 1, "price": 10}} "Binch" et "fosse" sont les noms des catégories de tickets
  const { user } = useAuthStore.getState();
  const { setTickets } = useTicketsStore.getState();
  try {
    let orderedTickets = [];
    for (const [category, { count }] of Object.entries(tickets)) {
      for (let i = 0; i < count; i++) {
        const response = await api.post(`/tickets`, {
          category: category,
          tokenId: Math.floor(Math.random() * 100000),
          used: false,
          eventId: eventId, // UUID d'un événement
          userId: user.id, // UUID d'un utilisateur
        });
        orderedTickets.push(response.data);
      }
    }
    console.log('orderedTickets', orderedTickets);
    setTickets([...orderedTickets]);
  
  } catch (error) {
    console.error("Failed to buy tickets:", error);
    throw error;
  }
};
