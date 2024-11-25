import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../styles/colors';
import { globalStyles as global } from '../styles/global';
import useFilterStore from '../services/FilterStore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Home from '../../assets/nav/home.svg';
import HomeFocused from '../../assets/nav/home-focused.svg';
import Ticket from '../../assets/nav/ticket.svg';
import TicketFocused from '../../assets/nav/ticket-focused.svg';
import SecondHand from '../../assets/nav/hand-shake-heart.svg';
import SecondHandFocused from '../../assets/nav/hand-shake-heart-focused.svg';
import Profile from '../../assets/nav/profil.svg';
import ProfileFocused from '../../assets/nav/profil-focused.svg';
import ProfileStackNavigator from './ProfileStackNavigator';
import MyTicketsStackNavigator from './MyTicketsStackNavigator';
import EventStackNavigator from './EventStackNavigator';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const globalStyles = global();
  const resetFilters = useFilterStore((state) => state.resetFilters);
  const insets = useSafeAreaInsets();

  const reset = (event, name) => {
    const isFocused = event.target === name;

    if (!isFocused && event.type === 'tabPress') {
      resetFilters();
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
          backgroundColor: Colors.primaryDark,
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
              return focused ? (
                <HomeFocused {...globalStyles.buttonIcon} />
              ) : (
                <Home {...globalStyles.buttonIcon} />
              );
            case 'Mes tickets':
              return focused ? (
                <TicketFocused {...globalStyles.buttonIcon} />
              ) : (
                <Ticket {...globalStyles.buttonIcon} />
              );
            case 'Seconde main':
              return focused ? (
                <SecondHandFocused {...globalStyles.buttonIcon} />
              ) : (
                <SecondHand {...globalStyles.buttonIcon} />
              );
            case 'Mon profil':
              return focused ? (
                <ProfileFocused {...globalStyles.buttonIcon} />
              ) : (
                <Profile {...globalStyles.buttonIcon} />
              );
          }
        },
        tabBarActiveTintColor: Colors.yellow,
        tabBarInactiveTintColor: Colors.primaryLight,
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
