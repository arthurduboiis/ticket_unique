import React, { useEffect, useState } from "react";
import Home from "../templates/Home";
// import {
//   fetchEvents,
//   fetchMyFavEvents,
//   updateFavEvents,
// } from '../../DAL/DAO_events';
import { fetchEvents, fetchMyFavEvents, getFilteredEvents, likeEvent, removeLikeEvent } from "../../services/eventsService";
import useFilterStore from "../../store/FilterStore";
import useEventsStore from "../../store/EventsStore";
import useAuthStore from "../../store/authStore";

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

  useEffect(() => {
    fetchEvents();

    fetchFavEvents();
    
  }, []);

  const fetchFavEvents = async () => {
    const { user } = useAuthStore.getState();
    const favEvents = await fetchMyFavEvents(user.id);
    const likedEvents = {};
    favEvents.forEach((event) => {
      likedEvents[event.id] = true;
    });
    setLikedEvents(likedEvents);
  }

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


  const toggleLike = async (eventId) => {
    const { user } = useAuthStore.getState();
    console.log(user)
    const newLikedEvents = { ...likedEvents };
    newLikedEvents[eventId] = !newLikedEvents[eventId];
    const favUserEvents = user.liked;
    console.log(favUserEvents);
    setLikedEvents(newLikedEvents);
    if (newLikedEvents[eventId]) {
      likeEvent(eventId);
    } else {
      removeLikeEvent(eventId);
    }
  };

  const handleEventPress = (event) => {
    navigation.navigate("Event", {
      event: event
    });
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
