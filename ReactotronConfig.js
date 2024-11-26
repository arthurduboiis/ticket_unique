import Reactotron, { trackGlobalErrors, trackGlobalLogs} from "reactotron-react-native";

Reactotron.configure() // controls connection & communication settings
  .use(trackGlobalErrors()) // add all built-in react native plugins
  .use(trackGlobalLogs()) // add all built-in react native plugins
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!