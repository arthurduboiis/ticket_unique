import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';
import LogoUT from '../../../assets/logo/Bulle_UT_Jaune.svg';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <LogoUT style={styles.image} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.light.primaryDark,
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.yellow,
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 115,
  },
});
