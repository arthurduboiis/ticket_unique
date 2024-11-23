import { Button, Icon } from "../atoms";

const IconButton = ({ icon, action = () => {} ,...props} ) => {
  return (
    <Button.Icon action={action} {...props}>
      <Icon.Base source={icon} />
    </Button.Icon>
  );
}

export default IconButton;