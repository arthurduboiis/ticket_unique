import React from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';

const ScrollContainer = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        {...props}
        style={{ minHeight: '100%' }}
        contentContainerStyle={{
          flexDirection: props.flexDirection ? props.flexDirection : 'column',
          flexGrow: 1,
          minHeight: '100%',
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default ScrollContainer;
