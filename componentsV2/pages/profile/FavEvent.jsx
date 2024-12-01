import React, { useEffect, useState } from 'react'
import { ProfileTemplate } from '../../templates'
import { fetchMyFavEvents } from '../../../services/eventsService'
import useAuthStore from '../../../store/authStore';

const FavEvent = () => {
  const [favEvents, setFavEvents] = useState([]);

  const fetchFavEvents = async () => {
    const { user } = useAuthStore.getState();
    const favEvents = await fetchMyFavEvents(user.id);
    setFavEvents(favEvents);
  }

  useEffect(() => {
    fetchFavEvents();
  }, []);



  return (
    <ProfileTemplate.LikeEvent events={favEvents} />
  )
}

export default FavEvent