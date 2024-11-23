import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { globalStyles as global } from '../../../styles/global';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors } from '../../../styles/colors';

const Base = ({
  items,
  selectedValue,
  onValueChange,
  placeholder,
  styles = {},
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const globalStyles = global();
  return (
    <View>
      <Dropdown
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        data={items}
        value={selectedValue}
        onChange={onValueChange}
        placeholder={placeholder}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.textInput}
        labelField="label"
        valueField="value"
        maxHeight={300}
        containerStyle={style.containerStyle}
        itemTextStyle={style.itemTextStyle}
        activeColor={Colors.dimmedLight}
        style={[
          globalStyles.input,
          style.input,
          styles,
          {
            borderColor: isFocused ? Colors.yellow : Colors.secondaryDark,
            borderWidth: isFocused ? 1 : 1,
          },
        ]}
      ></Dropdown>
    </View>
  );
};

export default Base;

const style = StyleSheet.create({
  input: {
    height: 46.5,
  },
  placeholderStyle: {
    color: Colors.dimmedLight,
  },
  textInput: {
    fontFamily: 'Owners-Medium',
    color: Colors.primaryLight,
  },
  containerStyle: {
    width: '100%',
    backgroundColor: Colors.secondaryDark,
    borderWidth: 0,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 10,
    justifyContent: 'center',
  },
  itemTextStyle: {
    fontFamily: 'Owners',
    fontSize: 15,
    color: Colors.primaryLight,
  },
});