import React, { useState} from 'react';
import { ProfileTemplate } from '../../templates';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const menu = [
    {
      title: 'Modifier mon mot de passe',
      click: () => navigation.navigate('ChangePassword'),
    },
    {
      title: 'FAQ',
      click: () =>
        Linking.openURL(
          'https://unique-ticket.com/faq/?utm_source=app&utm_medium=profil&utm_campaign=settings'
        ),
    },
    {
      title: 'Conditions Générales de Vente',
      click: () =>
        Linking.openURL(
          'https://unique-ticket.com/cgv/?utm_source=app&utm_medium=profil&utm_campaign=settings'
        ),
    },
    {
      title: 'Supprimer le compte',
      click: () => setDeleteModalVisible(true)
    },
  ];

  const handleOutsideClick = () => {
    setLogoutModalVisible(false);
  };

  const closeModalDelete = () => {
    setDeleteModalVisible(false);
  };

  return ( <ProfileTemplate.Settings
    menu={menu}
    logoutModalVisible={logoutModalVisible}
    deleteModalVisible={deleteModalVisible}
    handleOutsideClick={handleOutsideClick}
    closeModalDelete={closeModalDelete}
  />);
};

export default Settings;
