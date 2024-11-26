import { Colors } from '../../../constants/Colors'
import { Native } from "../../nanites";

const Base = ({ title, action = () => {} , darkmode = false,...props}) => {
  const defaultTitle = "Primary Button title to set";

  return (
    <Native.StyledButton
      onPress={() => {
        if (typeof action === 'function') {
          action(); // Exécute uniquement si c'est une fonction
          console.log("Primary button pressed");
        }
      }}
      bgColor={darkmode ? Colors.light.primaryDark : Colors.light.yellow}
      {...props}
    >
      <Native.StyledOwnersText fontSize="18px" color={darkmode ? Colors.light.primaryLight : Colors.light.primaryDark}>
        {title ? title : defaultTitle}
      </Native.StyledOwnersText>
    </Native.StyledButton>
  );
};

export default Base;
