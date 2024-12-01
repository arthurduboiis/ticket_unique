import React, { useEffect, useState } from "react";
import Tickets from "../templates/Tickets";
import useTicketsStore from "../../store/TicketsStore";
import { fetchMyTickets } from "../../services/ticketsService";
// import { fetchMyTickets } from '../../DAL/DAO_events';

const TicketsPage = ({ navigation }) => {
  const { tickets } = useTicketsStore.getState();
  const [myTickets, setMyTickets] = useState([]);
  const [activeFilters, setActiveFilters] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!tickets || tickets.length === 0) {
       fetchMyTickets().then((data) => {
        setMyTickets(data);
      }
      ).catch((error) => {
        console.error(error);
      }
      );
    } else {
      setMyTickets(tickets);
    }
  }, [tickets]);


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
      tickets={myTickets}
      handleTicketPress={handleTicketPress}
    />
  );
}

export default TicketsPage;