import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import { Colors } from '../styles/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import useTicketStore from '../services/TicketStore';
import { sellTickets } from '../DAL/DAO_tickets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Resell from '../../assets/resell.svg';
import Arrow from '../../assets/arrow.svg';

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const [menuVisible, setMenuVisible] = useState(false);
  const { selectedCounts, eventId } = useTicketStore();

  const styles = StyleSheet.create({
    headerWithGoBack: {
      backgroundColor: Colors.primaryDark,
      paddingTop: insets.top,
      width: '100%',
      minHeight: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    header: {
      backgroundColor: Colors.primaryDark,
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
      backgroundColor: Colors.primaryDark,
      padding: 10,
      gap: 10,
    },
    menuOption: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    menuText: {
      fontSize: 18,
      color: Colors.primaryLight,
    },
    closeButton: {
      marginTop: 10,
      alignItems: 'center',
    },
    closeButtonText: {
      fontSize: 16,
      color: Colors.primaryLight,
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

  const confirmSellTickets = () => {
    Alert.alert(
      'Confirmation',
      'Es-tu sûr de vouloir revendre les tickets sélectionnés ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Confirmer',
          onPress: () =>
            sellTickets(eventId, selectedCounts, setMenuVisible, navigation),
        },
      ],
      { cancelable: false }
    );
  };

  const openMenu = () => {
    if (Object.keys(selectedCounts).length > 0) {
      setMenuVisible(true);
    } else {
      Alert.alert("Aucun ticket n'a été sélectionné");
    }
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const handleMenuOption = (option) => {
    console.log('Selected option:', option);
    if (option === 'Revendre') {
      confirmSellTickets();
    } else if (option === 'Transférer') {
      setMenuVisible(false);
      navigation.navigate('TicketTransfer', { event: route.params.event });
    } else if (option === 'Imprimer Ticket(s)') {
      // Insérer la logique pour imprimer les tickets | Q : je pense qu'on peut supprimer ça
    }
  };
  if (navigation && navigation.canGoBack()) {
    return (
      <View>
        <View style={styles.headerWithGoBack}>
          {route.name !== 'TicketTransferSuccess' ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.arrow}
            >
              <Arrow />
            </TouchableOpacity>
          ) : (
            <View style={styles.box} />
          )}
          <View style={styles.logoContainer}></View>
          {route.name === 'EventBought' ? (
            <View style={styles.box}>
              <TouchableOpacity onPress={() => setMenuVisible(true)}>
                <Resell />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.box} />
          )}
        </View>
        <Modal visible={menuVisible} animationType="fade" transparent={true}>
          <TouchableOpacity
            style={styles.modalBackground}
            activeOpacity={1}
            onPressOut={closeMenu}
          >
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => handleMenuOption('Revendre')}
              >
                <Text style={styles.menuText}>Revendre</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => handleMenuOption('Transférer')}
              >
                <Text style={styles.menuText}>Transférer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeMenu}
              ></TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
};

export default CustomHeader;
