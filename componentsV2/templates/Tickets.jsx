import React from "react";
import { Container } from "../atoms";
import { HorizontalCardEvent, HeaderTickets } from "../organismes";
// import ModalMessage from '../../components/ModalSearch';
import { RefreshControl } from 'react-native';
import { Colors } from '../../constants/Colors'

const Tickets = ({
  tickets,
  handleTicketPress,
  openFilter,
  activeFilters,
  modalVisible,
  setModalVisible,
  refreshing,
  handleRefresh,
}) => {
  const formatDate = (timestamp) => {
    const dateObject = new Date(timestamp * 1000);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    let year = dateObject.getFullYear();
    year = year.toString().slice(-2);
    return `${day}-${month}-${year}`;
  };
  return (
    <Container.PageContainer gap='20px'>
      <HeaderTickets
        activeFilters={activeFilters}
        openFilter={openFilter}
      />
      {/* <ModalMessage
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      <Container.ScrollContainer
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={Colors.light.primaryLight}
          />
        }
      >
        {tickets &&
          tickets.map((ticket) => (
            <HorizontalCardEvent
              key={ticket.id}
              eventImage={ticket.image}
              artist={ticket.title}
              place={ticket.city + ' - ' + ticket.salle}
              numberOfTickets={ticket.tickets.length}
              eventDate={formatDate(ticket.date.seconds)}
              action={() => handleTicketPress(ticket)}
              marginBottom={'20px'}
            />
          ))
        }
      </Container.ScrollContainer>
    </Container.PageContainer>
  );
};

export default Tickets;