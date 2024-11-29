import { useThemeColor } from '../../../hooks/useThemeColor';
import { Native } from "../../nanites";

const Base = ({ title, action = () => {} , modalMode = false,...props}) => {
  const defaultTitle = "Primary Button title to set";
  return (
    <Native.StyledButton
      onPress={() => {
        if (typeof action === 'function') {
          action(); // Exécute uniquement si c'est une fonction
          console.log("Primary button pressed");
        }
      }}
      bgColor={modalMode ? useThemeColor("primaryDark") : useThemeColor("yellow")}
      {...props}
    >
      <Native.StyledOwnersText fontSize="18px" color={modalMode ? useThemeColor("primaryLight") : useThemeColor("primaryDark")}>
        {title ? title : defaultTitle}
      </Native.StyledOwnersText>
    </Native.StyledButton>
  );
};

export default Base;
