import React from 'react';
import { Container, Icon, Typo } from '../atoms';
import { Chevron } from '../atoms/Icon';
import { Colors } from '../../constants/Colors';

const ProfileList = ({ action = () => {}, title, red = false, arrow = true, ...props }) => {
  const defaultTitle = 'profile list';
  const redColor = '#F83F3A';
  return (
    <Container.SectionList action={action} width={'100%'} {...props}>
      <Typo.OwnersText
        text={title ? title : defaultTitle}
        color={red && redColor}
      />
      {arrow && <Chevron color={Colors.light.primaryLight} />}
    </Container.SectionList>
  );
};

export default ProfileList;
