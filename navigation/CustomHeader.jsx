import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Resell from '../assets/resell.svg';
import Arrow from '../assets/arrow.svg';

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const [menuVisible, setMenuVisible] = useState(false);
  const styles = StyleSheet.create({
    headerWithGoBack: {
      backgroundColor: Colors.light.primaryDark,
      paddingTop: insets.top,
      width: '100%',
      minHeight: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    header: {
      backgroundColor: Colors.light.primaryDark,
      paddingTop: insets.top,
      width: '100%',
      minHeight: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    arrow: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: 50,
    },
    menuContainer: {
      position: 'absolute',
      right: 10,
      backgroundColor: Colors.light.primaryDark,
      padding: 10,
      gap: 10,
    },
    menuOption: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    menuText: {
      fontSize: 18,
      color: Colors.light.primaryLight,
    },
    closeButton: {
      marginTop: 10,
      alignItems: 'center',
    },
    closeButtonText: {
      fontSize: 16,
      color: Colors.light.primaryLight,
      fontFamily: 'Owners-Medium',
    },
    modalBackground: {
      flex: 1,
      top: insets.top + 56,
      backgroundColor: 'rgba(0, 0, 0, 0.70)',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
  });

  


  const closeMenu = () => {
    setMenuVisible(false);
  };

  if (navigation && navigation.canGoBack()) {
    return (
      <View>
        <View style={styles.headerWithGoBack}>
          {route.name !== 'TicketTransferSuccess' ? (
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.arrow}
            >
              <Arrow />
            </Pressable>
          ) : (
            <View style={styles.box} />
          )}
          <View style={styles.logoContainer}></View>
          {route.name === 'EventBought' ? (
            <View style={styles.box}>
              <Pressable onPress={() => setMenuVisible(true)}>
                <Resell />
              </Pressable>
            </View>
          ) : (
            <View style={styles.box} />
          )}
        </View>
        <Modal visible={menuVisible} animationType="fade" transparent={true}>
          <Pressable
            style={styles.modalBackground}
            activeOpacity={1}
            onPressOut={closeMenu}
          >
            <View style={styles.menuContainer}>
              <Pressable
                style={styles.menuOption}
                onPress={() => handleMenuOption('Revendre')}
              >
                <Text style={styles.menuText}>Revendre</Text>
              </Pressable>
              <Pressable
                style={styles.menuOption}
                onPress={() => handleMenuOption('Transférer')}
              >
                <Text style={styles.menuText}>Transférer</Text>
              </Pressable>
              <Pressable
                style={styles.closeButton}
                onPress={closeMenu}
              ></Pressable>
            </View>
          </Pressable>
        </Modal>
      </View>
    );
  }
};

export default CustomHeader;
