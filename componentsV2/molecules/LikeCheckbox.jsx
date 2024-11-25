import React, { useState } from 'react';
import { Native } from '../nanites';
import { Icon } from '../atoms';
import EventLikedIcon from '../../../assets/icon_event_liked.svg';
import EventNotLikedIcon from '../../../assets/icon_event_not_liked.svg';
import { Colors } from '../../constants/Colors';

const LikeCheckbox = ({liked, toggleLiked = () => {}, ...props}) => {


  return (
    <Native.StyledButton
      onPress={toggleLiked}
      checked={liked}
      accessibilityRole="checkbox"
      accessibilityLabel="Like Checkbox"
      accessibilityState={{ liked }}
      bgColor={Colors.light.primaryDark50}
      width={'30px'}
      height={'30px'}
      paddingHorizontal={'0'}
      paddingVertical={'0px'}
      {...props}
    >
      {liked ? (
        <Icon.Base source={EventLikedIcon} /> // Icône pour "liké"
      ) : (
        <Icon.Base source={EventNotLikedIcon} /> // Icône pour "non liké"
      )}
    </Native.StyledButton>
  );
};

export default LikeCheckbox;
