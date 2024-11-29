import { useThemeColor } from '../../../hooks/useThemeColor';
import { Native } from '../../nanites';

const Base = ({ title }) => {
  const defaultTitle = 'Tag field';
  return (
    <Native.StyledTag>
      <Native.StyledOwnersText color={useThemeColor("primaryDark")}>
        {title ? title : defaultTitle}
      </Native.StyledOwnersText>
    </Native.StyledTag>
  );
};

export default Base;
