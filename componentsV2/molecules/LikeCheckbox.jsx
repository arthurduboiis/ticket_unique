import React, { useState } from 'react';
import { Native } from '../nanites';
import { Icon } from '../atoms';
import EventLikedIcon from '../../assets/icon_event_liked.svg';
import EventNotLikedIcon from '../../assets/icon_event_not_liked.svg';
import EventNotLikedIconDark from '../../assets/icon_event_not_liked_dark.svg';
import EventLikedIconDark from '../../assets/icon_event_liked_dark.svg';
import { useThemeColor } from '../../hooks/useThemeColor';
import { useThemeStore } from '../../store/ThemeStore';

const LikeCheckbox = ({liked, toggleLiked = () => {}, ...props}) => {

  const theme = useThemeStore((state) => state.theme);

  return (
    <Native.StyledButton
      onPress={toggleLiked}
      checked={liked}
      accessibilityRole="checkbox"
      accessibilityLabel="Like Checkbox"
      accessibilityState={{ liked }}
      bgColor={useThemeColor("primaryDark")}
      width={'30px'}
      height={'30px'}
      paddingHorizontal={'0'}
      paddingVertical={'0px'}
      {...props}
    >
      <Icon.Base source={liked ? theme === 'light' ? EventLikedIconDark : EventLikedIcon : theme === 'light' ? EventNotLikedIconDark : EventNotLikedIcon} />
    </Native.StyledButton>
  );
};

export default LikeCheckbox;
