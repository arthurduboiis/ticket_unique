import React from "react";
import { Container, ImageCustom, Typo } from "../atoms";
import DefaultProfilePicture from "../../assets/defaultProfilPicture.png";
import { TouchableHighlight } from "react-native";

const ProfilHeader = ({
  source,
  firstname,
  followersNumber,
  followingNumber,
  handleImagePicker,
}) => {
  return (
    <Container.RowContainer gap={"15px"} alignItems={"center"}>
      <TouchableHighlight onPress={handleImagePicker}>
        <ImageCustom.Circle source={source ? source : DefaultProfilePicture} />
      </TouchableHighlight>
      <Container.ColContainer
        gap={"5px"}
        paddingHorizontal={0}
        paddingVertical={0}
      >
        <Typo.Gotham
          text={firstname ? firstname : "Prénom"}
          fontSize={"24px"}
        />
        {followersNumber >= 0 && followingNumber >= 0 ? (
          <Typo.OwnersText fontSize={"14px"}>
            {followersNumber +
              " Followers - " +
              followingNumber +
              " Abonnements"}
          </Typo.OwnersText>
        ) : null}
      </Container.ColContainer>
    </Container.RowContainer>
  );
};

export default ProfilHeader;
