import React, { useState, useEffect } from 'react';
import { Profile } from '../templates';
import { useNavigation } from '@react-navigation/core';
// import { launchImageLibrary } from 'react-native-image-picker';
// import { auth, db } from '../../../firebase';
// import { doc, getDoc, setDoc } from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
import { logout } from '../../services/connectionService';
const ProfilePage = () => {
  const navigation = useNavigation();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('Mon profil');
  const [photoURL, setPhotoURL] = useState("https://via.placeholder.com/120");



  const handleImagePicker = () => {
    console.log("image picker")
  }

  const logoutFunction = async () => {
    console.log("lougoutttttttt")
    await logout();
    setLogoutModalVisible(false);
  };
  

  const menu = [
    {
      title: 'Profil',
      click: () => navigation.navigate('EditProfile'),
    },
    {
      title: 'Événements favoris',
      click: () => navigation.navigate('FavEvent'),
    },
    // {
    //   title: 'Anciens tickets',
    //   click: () => navigation.navigate('OldEvent'),
    // },
    // {
    //   title: 'Wallet',
    //   click: () => navigation.navigate('MyWallet'),
    // },
    // {
    //   title: 'Transactions',
    //   click: () => navigation.navigate('MyTransactions'),
    // },
    {
      title: 'Paramètres',
      click: () => navigation.navigate('Settings'),
    },
    {
      title: 'Se déconnecter',
      click: () => setLogoutModalVisible(true),
    },
  ];

  return (
    <Profile
      firstname={firstName}
      followersNumber={0}
      followingNumber={0}
      source={photoURL}
      menu={menu}
      logoutFunction={logoutFunction}
      handleImagePicker={handleImagePicker}
      logoutModalVisible={logoutModalVisible}
      setLogoutModalVisible={setLogoutModalVisible}
    />
  );
};

export default ProfilePage;
