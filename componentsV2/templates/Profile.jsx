import React from 'react';
import { Container } from '../atoms';
import ProfilHeader from '../molecules/ProfilHeader';
import { ProfileList } from '../molecules';
import Modal from '../molecules/Modal';
// import ModalLogout from '../../components/ModalLogout';

const Profile = ({
  firstname,
  followersNumber,
  followingNumber,
  source,
  menu,
  handleImagePicker,
  logoutModalVisible,
  setLogoutModalVisible,
  logoutFunction
}) => {
  return (
    <Container.PageContainer gap={'20px'}>
      {/* <ModalLogout
        closeModal={() => setLogoutModalVisible(false)}
        modalVisible={logoutModalVisible}
      /> */}
      <Modal.ModalLogout closeModal={() => setLogoutModalVisible(false)} modalVisible={logoutModalVisible} action={logoutFunction}/>
      <ProfilHeader
        firstname={firstname}
        followersNumber={followersNumber}
        followingNumber={followingNumber}
        source={source}
        handleImagePicker={handleImagePicker}
      />

      <Container.ColContainer>
        {menu.map((item, index) => (
          <ProfileList
            title={item.title}
            action={item.click}
            key={index}
            arrow={item.title === 'Se déconnecter' ? false : true}
          />
        ))}
      </Container.ColContainer>
    </Container.PageContainer>
  );
};

export default Profile;
