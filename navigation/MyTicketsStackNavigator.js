import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from './CustomHeader';
// import EventProof from '../screens/singles/EventProof';
// import EventBought from '../screens/singles/EventBought';
// import TicketTransfer from '../screens/singles/TicketTransfer';
// import TicketTransferTo from '../screens/singles/TicketTransferTo';
// import TicketTransferSuccess from '../screens/singles/TicketTransferSuccess';
// import MyTickets from '../screens/loggedStack/MyTickets';
import { TicketsPage } from '../componentsV2/pages';

const Stack = createNativeStackNavigator();

function MyTicketsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />, // Utilisez CustomHeader partout par défaut
      }}
    >
      <Stack.Screen
        name="MyTickets"
        component={TicketsPage}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="EventProof" component={EventProof} />
      <Stack.Screen name="EventBought" component={EventBought} />
      <Stack.Screen name="TicketTransfer" component={TicketTransfer} />
      <Stack.Screen name="TicketTransferTo" component={TicketTransferTo} /> */}
      {/* <Stack.Screen
        name="TicketTransferSuccess"
        component={TicketTransferSuccess}
      /> */}
    </Stack.Navigator>
  );
}

export default MyTicketsStackNavigator;
