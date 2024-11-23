import React from 'react';
import { Bubble, Container, ImageCustom } from '../atoms';
import LikeCheckbox from './LikeCheckbox';

const Display = ({
  eventImage,
  eventDate,
  canFav = true,
  liked,
  smallSquare = false,
  rectangle = false,
  toggleLiked = () => {},
}) => {
  return (
    <Container.DisplayContainer>
      {rectangle ? (
        <ImageCustom.Rectangle source={eventImage} />
      ) : smallSquare ? (
        <ImageCustom.Base source={eventImage} height={'95px'} width={'95px'} />
      ) : (
        <ImageCustom.Base source={eventImage} />
      )}

      <Bubble.DateBubble
        date={eventDate}
        position={'absolute'}
        top={'4px'}
        left={'4px'}
      />
      {canFav && (
        <LikeCheckbox
          liked={liked}
          toggleLiked={toggleLiked}
          position={'absolute'}
          bottom={'4px'}
          right={'4px'}
        />
      )}
    </Container.DisplayContainer>
  );
};

export default Display;
