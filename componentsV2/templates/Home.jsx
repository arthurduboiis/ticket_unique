import React from 'react';
import { Container, Typo } from '../atoms';
import { CardEvent, SearchBar } from '../organismes';
// import ModalMessage from '../../components/ModalSearch';
import { RefreshControl } from 'react-native';
import { Colors } from '../../constants/Colors';

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
  const formatDate = (timestamp) => {
    const dateObject = new Date(timestamp * 1000);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    let year = dateObject.getFullYear();
    year = year.toString().slice(-2);
    return `${day}-${month}-${year}`;
  };

  return (
    <Container.PageContainer gap={'20px'}>
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
            tintColor={Colors.light.primaryLight}
          />
        }
      >
        { events && 
          events.map((event) => (
            <CardEvent
              key={event.id}
              name={event.title}
              eventDate={formatDate(event.date.seconds)}
              action={() => handleEventPress(event)}
              eventImage={event.image}
              price={event.startingPrice}
              place={event.city + ' - ' + event.salle}
              liked={liked[event.id]}
              toggleLiked={() => toggleLiked(event.id)}
              rectangle
              width={'100%'}
              marginBottom={'20px'}
            />
          ))}
      </Container.ScrollContainer>
    </Container.PageContainer>
  );
};

export default Home;
