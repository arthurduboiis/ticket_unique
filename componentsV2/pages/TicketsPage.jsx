import React, { useEffect, useState } from "react";
import Tickets from "../templates/Tickets";
// import { fetchMyTickets } from '../../DAL/DAO_events';

const TicketsPage = ({ navigation }) => {
  const [tickets, setTickets] = useState([]);
  const [activeFilters, setActiveFilters] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   fetchMyTickets(auth.currentUser.uid, filteredCity, filteredDate)
  //     .then((data) => {
  //       setTickets(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [filteredCity, filteredDate]);

  // const handleRefresh = () => {
  //   setRefreshing(true);
  //   fetchMyTickets(auth.currentUser.uid, filteredCity, filteredDate)
  //     .then((data) => {
  //       setTickets(data);
  //       setRefreshing(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setRefreshing(false);
  //     });
  // }

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }
  
  const handleTicketPress = (ticket) => {
    navigation.navigate('TicketDetails', { ticket });
  };

  return (
    <Tickets
      activeFilters={activeFilters}
      modalVisible={modalVisible}
      openFilter={() => setModalVisible(true)}
      setModalVisible={setModalVisible}
      refreshing={refreshing}
      handleRefresh={handleRefresh}
      tickets={tickets}
      handleTicketPress={handleTicketPress}
    />
  );
}

export default TicketsPage;