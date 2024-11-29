import React from 'react';
import { Container, Icon, Typo } from '../atoms';
import { Chevron } from '../atoms/Icon';
import { useThemeColor } from '../../hooks/useThemeColor';

const ProfileList = ({ action = () => {}, title, red = false, arrow = true, ...props }) => {
  const defaultTitle = 'profile list';
  const redColor = '#F83F3A';
  return (
    <Container.SectionList action={action} width={'100%'} {...props}>
      <Typo.OwnersText
        color={red && redColor}
      >{title ? title : defaultTitle}</Typo.OwnersText>
      {arrow && <Chevron color={useThemeColor("primaryLight")} />}
    </Container.SectionList>
  );
};

export default ProfileList;
