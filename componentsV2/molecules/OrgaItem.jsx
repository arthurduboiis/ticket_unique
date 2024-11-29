import React from "react";
import { Container, ImageCustom, Typo } from "../atoms";
import { useThemeColor } from '../../hooks/useThemeColor';

const OrgaItem = ({
  source,
  orgaName,
  followersNumber,
  eventsNumber,
  ...props
}) => {
  return (
    <Container.RowContainer gap={"10px"} alignItems={"center"}>
      <ImageCustom.Circle
        width={"50px"}
        height={"50px"}
        source={source ? source : "default"}
      />
      <Container.ColContainer paddingHorizontal={"0px"} paddingVertical={"0px"}>
        <Typo.OwnersText>
          {orgaName ? orgaName : "Nom de l'organisation"}
        </Typo.OwnersText>
        <Typo.OwnersText color={useThemeColor("dimmedLight")}>
          {followersNumber ? followersNumber + " followers" : "0 follower"}
        </Typo.OwnersText>
        <Typo.OwnersText>
          {eventsNumber ? eventsNumber + " événements" : "0 événement"}
        </Typo.OwnersText>
      </Container.ColContainer>
    </Container.RowContainer>
  );
};

export default OrgaItem;
