import React, { useEffect, useState } from "react";
import Home from "../templates/Home";
// import {
//   fetchEvents,
//   fetchMyFavEvents,
//   updateFavEvents,
// } from '../../DAL/DAO_events';
import { fetchEvents, getFilteredEvents } from "../../services/eventsService";
import useFilterStore from "../../store/FilterStore";
import useEventsStore from "../../store/EventsStore";

const HomePage = ({ navigation }) => {
  const [likedEvents, setLikedEvents] = useState({});
  const [searchPhrase, setSearchPhrase] = useState("");
  const [activeFilters, setActiveFilters] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const { events } = useEventsStore();
  useEffect(() => {
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  const { filteredCity, filteredDate } = useFilterStore();

  // useEffect(() => {
  //   fetchEvents(searchPhrase, filteredCity, filteredDate)
  //     .then((data) => setEvents(data))
  //     .catch((error) => console.log(error));

  //   fetchFavEvents();
  // }, [searchPhrase, filteredCity, filteredDate]);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    getFilteredEvents(searchPhrase, filteredCity, filteredDate)
      .then((data) => setFilteredEvents(data))
      .catch((error) => console.log(error));
  }, [searchPhrase, filteredCity, filteredDate, events]);

  // async function fetchFavEvents() {
  //   const favEvents = await fetchMyFavEvents(auth.currentUser.uid);
  //   const likedEvents = {};
  //   favEvents.forEach((event) => {
  //     likedEvents[event.id] = true;
  //   });
  //   setLikedEvents(likedEvents);
  // }

  const handleRefresh = () => {
    setRefreshing(true);
    fetchEvents();
    getFilteredEvents(searchPhrase, filteredCity, filteredDate)
      .then((data) => setFilteredEvents(data))
      .catch((error) => console.log(error));
  };

  // const handleEventPress = (event) => {
  //   logEvent('click_event', {
  //     eventName: event.title,
  //     // organizerName : {nom.orga},
  //     source: 'home_page',
  //   });
  //   navigation.navigate('Event', {
  //     eventId: event.id,
  //     startingPrice: event.startingPrice,
  //   });
  // };

  // const toggleLike = async (eventId) => {
  //   const newLikedEvents = { ...likedEvents };
  //   newLikedEvents[eventId] = !newLikedEvents[eventId];
  //   setLikedEvents(newLikedEvents);
  //   const favUserEvents = await fetchMyFavEvents(auth.currentUser.uid);
  //   const eventRef = doc(db, 'events', eventId);
  //   const eventDoc = await getDoc(eventRef);
  //   if (newLikedEvents[eventId]) {
  //     await setDoc(
  //       eventRef,
  //       {
  //         likes: eventDoc.data().likes + 1,
  //       },
  //       { merge: true }
  //     );
  //     favUserEvents.push(eventRef);
  //   } else {
  //     await setDoc(
  //       eventRef,
  //       {
  //         likes: eventDoc.data().likes - 1,
  //       },
  //       { merge: true }
  //     );
  //     favUserEvents.splice(favUserEvents.indexOf(eventRef), 1);
  //   }
  //   await updateFavEvents(auth.currentUser.uid, favUserEvents);
  // };

  const handleEventPress = (event) => {
    navigation.navigate("Event", {
      event: event
    });
  };

  const toggleLike = (eventId) => {
    console.log(eventId);
  };

  return (
    <Home
      activeFilters={activeFilters}
      modalVisible={modalVisible}
      openFilter={() => setModalVisible(true)}
      searchPhrase={searchPhrase}
      setSearchPhrase={setSearchPhrase}
      setModalVisible={setModalVisible}
      refreshing={refreshing}
      handleRefresh={handleRefresh}
      events={filteredEvents}
      handleEventPress={handleEventPress}
      liked={likedEvents}
      toggleLiked={toggleLike}
    />
  );
};

export default HomePage;
