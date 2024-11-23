import { Colors } from '../../../styles/colors';
import { Native } from '../../nanites';

const Base = ({ title }) => {
  const defaultTitle = 'Tag field';
  return (
    <Native.StyledTag>
      <Native.StyledOwnersText color={Colors.primaryDark}>
        {title ? title : defaultTitle}
      </Native.StyledOwnersText>
    </Native.StyledTag>
  );
};

export default Base;