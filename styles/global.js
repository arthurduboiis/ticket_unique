import { StyleSheet } from 'react-native';
import { Colors } from './colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const globalStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: Colors.primaryDark,
    },
    pageScrollContainer: {
      width: '100%',
      paddingHorizontal: 15,
    },

    pageContainer: {
      width: '100%',
      paddingHorizontal: 15,
      paddingTop: insets.top,
    },

    subPageContainer: {
      width: '100%',
      paddingHorizontal: 15,
    },

    formLogin: {
      width: '100%',
      flexDirection: 'column',
      gap: 30,
      alignItems: 'center',
    },

    formRegister: {
      width: '100%',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'center',
    },

    inputContainer: {
      width: '100%',
      flexDirection: 'column',
      paddingVertical: 10,
      gap: 25,
      backgroundColor: Colors.primaryDark,
    },
    checkboxContainer: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
      flex: 1,
    },

    input: {
      backgroundColor: Colors.secondaryDark,
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontSize: 16,
      alignItems: 'center',
      borderRadius: 5,
      color: Colors.primaryLight,
    },

    inputLight: {
      backgroundColor: Colors.secondaryDark,
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontSize: 16,
      alignItems: 'center',
      borderRadius: 5,
      color: Colors.primaryDark,
    },

    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSecondary: {
      backgroundColor: Colors.primaryDark,
      paddingHorizontal: 30,
      height: 45,
      borderRadius: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderBottomColor: Colors.primaryLight,
    },
    button: {
      paddingHorizontal: 30,
      height: 45,
      borderRadius: 45,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText: {
      color: Colors.primaryDark,
      height: 25,
      fontSize: 18,
      fontFamily: 'Owners',
    },
    buttonSecondaryText: {
      color: Colors.primaryLight,
      height: 25,
      fontSize: 18,
      fontFamily: 'Owners',
    },

    buttonIcon: {
      padding: 15,
    },

    textYellow: {
      fontSize: 12,
      color: Colors.yellow,
      fontFamily: 'Owners',
    },
    textUnderline: {
      paddingVertical: 5,
      textAlign: 'center',
      color: Colors.primaryLight,
      fontFamily: 'Owners',
      textDecorationLine: 'underline',
    },

    text: {
      textAlign: 'center',
      fontSize: 14,
      color: Colors.primaryLight,
      fontFamily: 'Owners',
    },

    textDark: {
      textAlign: 'center',
      fontSize: 14,
      color: Colors.primaryDark,
      fontFamily: 'Owners',
    },

    title: {
      textAlign: 'center',
      color: Colors.primaryLight,
      fontSize: 20,
      fontFamily: 'Owners-Medium',
    },

    logo: {
      width: 185,
      height: 85,
      paddingBottom: 40,
      paddingHorizontal: 20,
    },

    ghotamTitle: {
      fontFamily: 'Gotham-Bold',
      color: Colors.primaryLight,
      textTransform: 'uppercase',
      fontSize: 26,
      textAlign: 'left',
    },
    ghotamTitleLowercase: {
      fontFamily: 'Gotham-Bold',
      color: Colors.primaryLight,
      fontSize: 26,
      textAlign: 'left',
    },
    secondaryText: {
      textAlign: 'left',
      color: Colors.dimmedLight,
      fontFamily: 'Owners',
    },
    valueMyWallet: {
      textAlign: 'left',
      color: Colors.primaryLight,
      fontFamily: 'Owners-Medium',
      fontSize: 16,
      marginBottom: 10,
    },
    labelMyWallet: {
      textAlign: 'left',
      color: Colors.eventCardTextSecondaryColor,
      fontFamily: 'Owners',
      fontSize: 16,
      marginBottom: 10,
    },
    ticketTextBoldRight: {
      fontSize: 18,
      color: Colors.primaryLight80,
      fontFamily: 'Owners-Medium',
      width: '100%',
      textAlign: 'right',
      textTransform: 'uppercase',
      color: Colors.primaryLight,
    },
    ticketTextBold: {
      fontSize: 18,
      color: Colors.primaryLight80,
      fontFamily: 'Owners-Medium',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    ticketCategoryRight: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '50%',
    },
    ticketCategoryLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '50%',
    },
    ticketCategory: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 20,
    },
    ticketTextRight: {
      fontSize: 16,
      width: '50%',
      color: Colors.primaryLight,
      fontFamily: 'Owners',
      textAlign: 'right',
    },
    ticketText: {
      fontSize: 18,
      color: Colors.primaryLight,
      fontFamily: 'Owners',
    },
    dateBubble: {
      position: 'absolute',
      top: 4,
      left: 4,
      backgroundColor: Colors.dateBubble,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 100,
    },
    description: {
      width: '100%',
      paddingVertical: 10,
    },
  });
};
