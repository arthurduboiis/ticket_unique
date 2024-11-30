import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../constants/Colors';
import { globalStyles as global } from '../styles/global';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Home from '../assets/nav/home.svg';
import HomeFocused from '../assets/nav/home-focused.svg';
import HomeFocusedLight from '../assets/nav/home-focused_light.svg';
import Ticket from '../assets/nav/ticket.svg';
import TicketFocused from '../assets/nav/ticket-focused.svg';
import TicketFocusedLight from '../assets/nav/ticket-focused_light.svg';
import Profile from '../assets/nav/profil.svg';
import ProfileFocused from '../assets/nav/profil-focused.svg';
import ProfileFocusedLight from '../assets/nav/profil-focused_light.svg';
import ProfileStackNavigator from './ProfileStackNavigator';
import MyTicketsStackNavigator from './MyTicketsStackNavigator';
import EventStackNavigator from './EventStackNavigator';

import TicketLight from '../assets/nav/ticket_light.svg';
import ProfileLight from '../assets/nav/profil_light.svg';
import HomeLight from '../assets/nav/home_light.svg';
import { useThemeStore } from '../store/ThemeStore';
import { useThemeColor } from '../hooks/useThemeColor';


const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const globalStyles = global();
  const insets = useSafeAreaInsets();
  const theme = useThemeStore((state) => state.theme);


  const reset = (event, name) => {
    const isFocused = event.target === name;

    if (!isFocused && event.type === 'tabPress') {
      console.log('reset filter');
    }
    if (isFocused) {
      e.preventDefault();
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: 'relative',
          height: 60 + insets.bottom,
          borderTopWidth: 0,
          paddingVertical: 10,
          backgroundColor: useThemeColor('primaryDark'),
        },
        tabBarLabelStyle: {
          display: 'flex',
          flexDirection: 'column',
          fontSize: 10,
          paddingTop: 5,
        },
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Accueil':
              if(theme === 'light') {
                return focused ? (
                  <HomeFocusedLight {...globalStyles.buttonIcon} />
                ) : (
                  <HomeLight {...globalStyles.buttonIcon} />
                );
              }
              return focused ? (
                <HomeFocused {...globalStyles.buttonIcon} />
              ) : (
                <Home {...globalStyles.buttonIcon} />
              );
            case 'Mes tickets':
              if(theme === 'light') {
                return focused ? (
                  <TicketFocusedLight {...globalStyles.buttonIcon} />
                ) : (
                  <TicketLight {...globalStyles.buttonIcon} />
                );
              }
              return focused ? (
                <TicketFocused {...globalStyles.buttonIcon} />
              ) : (
                <Ticket {...globalStyles.buttonIcon} />
              );
            case 'Mon profil':
              if(theme === 'light') {
                return focused ? (
                  <ProfileFocusedLight {...globalStyles.buttonIcon} />
                ) : (
                  <ProfileLight {...globalStyles.buttonIcon} />
                );
              }
              return focused ? (
                <ProfileFocused {...globalStyles.buttonIcon} />
              ) : (
                <Profile {...globalStyles.buttonIcon} />
              );
          }
        },
        tabBarActiveTintColor: useThemeColor('yellow'),
        tabBarInactiveTintColor: useThemeColor('primaryLight'),
      })}
    >
      <Tab.Screen
        name="Mes tickets"
        options={{ headerShown: false }}
        component={MyTicketsStackNavigator}
        listeners={{
          tabPress: (e) => reset(e, 'Mes tickets'),
        }}
      />
      <Tab.Screen
        name="Accueil"
        options={{ headerShown: false }}
        component={EventStackNavigator}
        listeners={{
          tabPress: (e) => reset(e, 'Accueil'),
        }}
      />

      <Tab.Screen
        name="Mon profil"
        options={{ headerShown: false }}
        component={ProfileStackNavigator}
        listeners={{
          tabPress: (e) => reset(e, 'Mon profil'),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
