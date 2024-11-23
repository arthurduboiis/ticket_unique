import React from 'react';
import { Container, ImageCustom, Typo } from '../atoms';
import { Colors } from '../../styles/colors';

const OrgaItem = ({
  source,
  orgaName,
  followersNumber,
  eventsNumber,
  ...props
}) => {
  return (
    <Container.RowContainer gap={'10px'} alignItems={'center'}>
      <ImageCustom.Circle
        width={'50px'}
        height={'50px'}
        source={source ? source : 'default'}
      />
      <Container.ColContainer
        paddingHorizontal={'0px'}
        paddingVertical={'0px'}
      >
        <Typo.OwnersText text={orgaName ? orgaName : "Nom de l'organisation"} />
        <Typo.OwnersText
          text={followersNumber ? followersNumber + ' followers' : '0 follower'}
          color={Colors.dimmedLight}
        />
        <Typo.OwnersText
          text={eventsNumber ? eventsNumber + ' événements' : '0 événement'}
        />
      </Container.ColContainer>
    </Container.RowContainer>
  );
};

export default OrgaItem;
