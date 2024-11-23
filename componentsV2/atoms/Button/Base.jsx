import { Colors } from "../../../styles/colors";
import { Native } from "../../nanites";

const Base = ({ title, action = () => {} , darkmode = false,...props}) => {
  const defaultTitle = "Primary Button title to set";

  return (
    <Native.StyledButton
      onPress={() => {
        action();
        console.log("Primary button pressed");
      }}
      bgColor={darkmode ? Colors.primaryDark : Colors.yellow}
      {...props}
    >
      <Native.StyledOwnersText fontSize="18px" color={darkmode ? Colors.primaryLight : Colors.primaryDark}>
        {title ? title : defaultTitle}
      </Native.StyledOwnersText>
    </Native.StyledButton>
  );
};

export default Base;
