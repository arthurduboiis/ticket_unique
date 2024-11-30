import { useThemeColor } from '../../../hooks/useThemeColor';
import { Native } from '../../nanites';

const Base = ({ title, ...props }) => {
  const defaultTitle = 'Tag field';
  return (
    <Native.StyledTag {...props}>
      <Native.StyledOwnersText color={useThemeColor("primaryLight")}>
        {title || title >= 0 ? title : defaultTitle}
      </Native.StyledOwnersText>
    </Native.StyledTag>
  );
};

export default Base;
