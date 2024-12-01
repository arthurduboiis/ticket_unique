import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from './CustomHeader';
import { Tickets } from '../componentsV2/pages';
// import EventProof from '../screens/singles/EventProof';
// import EventBought from '../screens/singles/EventBought';
// import TicketTransfer from '../screens/singles/TicketTransfer';
// import TicketTransferTo from '../screens/singles/TicketTransferTo';
// import TicketTransferSuccess from '../screens/singles/TicketTransferSuccess';
// import MyTickets from '../screens/loggedStack/MyTickets';
import TicketsPage from '../componentsV2/pages/TicketsPage';
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
      <Stack.Screen name="TicketDetails" component={Tickets.QRCodePage} />
    </Stack.Navigator>
  );
}

export default MyTicketsStackNavigator;
