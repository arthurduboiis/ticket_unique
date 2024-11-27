import { Colors } from '../../../constants/Colors';
import { Native } from '../../nanites';

const Base = ({ title, ...props }) => {
  const defaultTitle = 'Tag field';
  console.log('Tag', typeof title)
  return (
    <Native.StyledTag {...props}>
      <Native.StyledOwnersText color={Colors.light.primaryDark}>
        {title || title >= 0 ? title : defaultTitle}
      </Native.StyledOwnersText>
    </Native.StyledTag>
  );
};

export default Base;
