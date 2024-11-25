import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import CustomHeader from './CustomHeader';
// import EventPayment from '../screens/singles/EventPayment';
// import EventTicketSelection from '../screens/singles/EventTicketSelection';
// import PaymentSuccess from '../screens/singles/PaymentSuccess';
// import EditProfile from '../screens/singles/EditProfile';
// import Organizer from '../screens/singles/Organizer';
import { Profile } from '../componentsV2/pages';

const Stack = createNativeStackNavigator();

function MainLayout() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />, // Utilisez CustomHeader partout par défaut
      }}
    >
      <Stack.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Organizer"
        component={Organizer}
        options={{ headerShown: true }}
      /> */}
      {/* <Stack.Screen name="Event" component={Event} /> */}
      {/* <Stack.Screen name="EventPayment" component={EventPayment} />
      <Stack.Screen
        name="EventTicketSelection"
        component={EventTicketSelection}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} /> */}
      <Stack.Screen
        name="EditProfile"
        component={Profile.EditProfile}
        options={{
          animationTypeForReplace: 'push',
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainLayout;
