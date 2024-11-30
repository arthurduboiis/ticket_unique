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

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const user = auth.currentUser;
  //     if (user) {
  //       const userDoc = await getDoc(doc(db, 'users', user.uid));
  //       const userData = userDoc.data();
  //       if (userData) {
  //         setFirstName(userData.firstname);
  //         setPhotoURL(userData.photoURL || 'https://via.placeholder.com/120');
  //       }
  //     }
  //   };

  //   fetchUserData();
  // }, [store.user]);

  // useEffect(() => {
  //   console.log('photoURL', photoURL);
  // }, [photoURL]);

  // const handleImagePicker = async () => {
  //   const options = {
  //     mediaType: 'photo',
  //     maxWidth: 300,
  //     maxHeight: 300,
  //     quality: 1,
  //   };

  //   const result = await launchImageLibrary(options);

  //   if (!result.didCancel && !result.error) {
  //     const selectedImage = result.assets[0].uri;
  //     uploadImage(selectedImage);
  //   }
  // };

  // const uploadImage = async (uri) => {
  //   console.log(uri);
  //   try {
  //     // upload image to storage
  //     const user = auth.currentUser;
  //     if (!user) {
  //       return;
  //     }
  //     // Create a reference in Firebase Storage
  //     const imageRef = storage().ref(`users/${user.uid}/profile.jpg`);

  //     // Fetch the image from the local file system as a blob
  //     const response = await fetch(uri);
  //     const blob = await response.blob();

  //     // Upload the image to Firebase Storage
  //     await imageRef.put(blob);

  //     // Get the image URL after upload
  //     const uploadedImageUrl = await imageRef.getDownloadURL();

  //     //const uploadedImageUrl = 'https://via.placeholder.com/120'; // Remplacez par l'URL réelle après téléchargement

  //     // update picture in firestore
  //     console.log(user)
  //     if (user) {
  //       await setDoc(
  //         doc(db, 'users', user.uid),
  //         { photoURL: uploadedImageUrl },
  //         { merge: true }
  //       );
  //       setPhotoURL(uploadedImageUrl); // Mettez à jour l'état local
  //     }
  //   } catch (error) {
  //     alert('Erreur', 'Impossible de télécharger la photo.');
  //     console.error('Error uploading image: ', error);
  //   }
  // };

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
    {
      title: 'Anciens tickets',
      click: () => navigation.navigate('OldEvent'),
    },
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
