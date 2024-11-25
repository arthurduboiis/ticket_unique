import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const KeyboardAvoidingLayout = (props) => {

  const insets = useSafeAreaInsets();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAwareScrollView
      scrollEnabled={true}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardDismissMode='on-drag'
      contentContainerStyle={{
        flexGrow: 1,
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: props.forgottenPage ? 0 : insets.top,
        alignItems: 'center',
      }}
      style={{
        backgroundColor: Colors.light.primaryDark,
      }}
    >
      {props.children}
    </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardAvoidingLayout;
