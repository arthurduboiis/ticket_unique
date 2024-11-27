import Reactotron, { trackGlobalErrors, trackGlobalLogs} from "reactotron-react-native";
import reactotronZustand from 'reactotron-plugin-zustand';
import useAuthStore from "./store/authStore";
import useEventsStore from "./store/EventsStore";


Reactotron.configure() // controls connection & communication settings
  .use(trackGlobalErrors()) // add all built-in react native plugins
  .use(trackGlobalLogs()) // add all built-in react native plugins
  .use(reactotronZustand({
    stores: [{  name: 'auth', store: useAuthStore }, { name:'event', store: useEventsStore }]
  }))
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!