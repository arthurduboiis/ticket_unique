import React from "react";
import { Container } from "../atoms";
import { CardEvent, SearchBar } from "../organismes";
// import ModalMessage from '../../components/ModalSearch';
import { RefreshControl } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";

const Home = ({
  searchPhrase,
  setSearchPhrase,
  openFilter,
  activeFilters,
  modalVisible,
  setModalVisible,
  refreshing,
  handleRefresh,
  events,
  handleEventPress,
  toggleLiked,
  liked,
}) => {
  const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    if (month < 10) {
      return `${day}-0${month}-${year}`;
    }
    return `${day}-${month}-${year}`;
  };
  return (
    <Container.PageContainer gap={"20px"}>
      {/* <ModalMessage
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      <SearchBar
        activeFilters={activeFilters}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        openFilter={openFilter}
      />
      <Container.ScrollContainer
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={useThemeColor("primaryLight")}
          />
        }
      >
        {events &&
          events.map((event) => (
            <CardEvent
              key={event.id}
              name={event.title}
              eventDate={formatDate(event.startDate)}
              action={() => handleEventPress(event)}
              eventImage={event.image}
              price={event.startingPrice}
              place={event.city + " - " + event.place}
              liked={liked[event.id]}
              toggleLiked={() => toggleLiked(event.id)}
              rectangle
              width={"100%"}
              marginBottom={"20px"}
            />
          ))}
      </Container.ScrollContainer>
    </Container.PageContainer>
  );
};

export default Home;
