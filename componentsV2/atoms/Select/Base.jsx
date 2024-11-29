import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { globalStyles as global } from '../../../styles/global';
import { Dropdown } from 'react-native-element-dropdown';
import { useThemeColor } from '../../../hooks/useThemeColor';

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
        placeholderStyle={{
          color: useThemeColor("dimmedLight"),
          fontFamily: 'Owners-Medium',
        }}
        selectedTextStyle={{
          color: useThemeColor("primaryLight"),
        }}
        labelField="label"
        valueField="value"
        maxHeight={300}
        containerStyle={{ ...style.containerStyle, 
          backgroundColor: useThemeColor("secondaryDark"),
         }}
        itemTextStyle={{
          ...style.itemTextStyle,
          color: useThemeColor("primaryLight"),
        }}
        activeColor={useThemeColor("dimmedLight")}
        style={[
          globalStyles.input,
          style.input,
          styles,
          {
            backgroundColor: useThemeColor("secondaryDark"),
            borderColor: isFocused ? useThemeColor("yellow") : useThemeColor("secondaryDark"),
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
  containerStyle: {
    width: '100%',  
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
  },
});