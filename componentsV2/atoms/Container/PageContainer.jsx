import React from 'react';
import { Native } from '../../nanites';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../../styles/colors';

const PageContainer = (props) => {
  const insets = useSafeAreaInsets();
  return (
    <Native.StyledContainer
      paddingHorizontal={'15px'}
      paddingTop={!props.canBack && `${insets.top}px`}
      paddingBottom={`${insets.bottom + 80}px`}
      flexDirection={'column'}
      bgColor={Colors.primaryDark}
      flexGrow={'1'}  
      flexShrink={'0'}
      {...props}
    />
  );
};

export default PageContainer;
