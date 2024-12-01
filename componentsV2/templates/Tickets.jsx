import React, { useEffect } from "react";
import { Container } from "../atoms";
import { HorizontalCardEvent, HeaderTickets } from "../organismes";
// import ModalMessage from '../../components/ModalSearch';
import { RefreshControl } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";

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

  useEffect(() => {
    tickets.map((ticket) => {
      console.log(ticket.event.startDate);
    });
  }, []);

  return (
    <Container.PageContainer gap="20px">
      <HeaderTickets activeFilters={activeFilters} openFilter={openFilter} />
      {/* <ModalMessage
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      <Container.ScrollContainer
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={useThemeColor("primaryLight")}
          />
        }
      >
        {tickets &&
          tickets.map((ticket) => (
            <HorizontalCardEvent
              key={ticket.id}
              eventImage={ticket.event.image}
              name={ticket.event.title}
              place={ticket.event.city + " - " + ticket.event.place}
              numberOfTickets={ticket.length}
              eventDate={ticket.event.startDate}
              action={() => handleTicketPress(ticket)}
              marginBottom={"20px"}
            />
          ))}
      </Container.ScrollContainer>
    </Container.PageContainer>
  );
};

export default Tickets;
