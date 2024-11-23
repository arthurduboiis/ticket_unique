import React, { useState, useEffect } from 'react';
import { ProfileTemplate } from '../../templates';
import { useNavigation } from '@react-navigation/core';
import { FIREBASE_FUNCTIONS_URL } from '@env';
import { auth, db } from '../../../../firebase';
import { doc, onSnapshot, setDoc } from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

const EditProfile = () => {
  const [metadata, setMetadata] = useState({
    lastname: '',
    firstname: '',
    phone: '',
    gender: '',
    region: '',
    birthday: '',
  });

  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Status for selected date
  const [brevoContactId, setBrevoContactId] = useState(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const navigation = useNavigation();

  const region = [
    { label: 'Auvergne-Rhône-Alpes', value: 'Auvergne-Rhône-Alpes' },
    { label: 'Bourgogne-Franche-Comté', value: 'Bourgogne-Franche-Comté' },
    { label: 'Bretagne', value: 'Bretagne' },
    { label: 'Centre-Val de Loire', value: 'Centre-Val de Loire' },
    { label: 'Corse', value: 'Corse' },
    { label: 'Grand Est', value: 'Grand Est' },
    { label: 'Hauts-de-France', value: 'Hauts-de-France' },
    { label: 'Île-de-France', value: 'Île-de-France' },
    { label: 'Normandie', value: 'Normandie' },
    { label: 'Nouvelle-Aquitaine', value: 'Nouvelle-Aquitaine' },
    { label: 'Occitanie', value: 'Occitanie' },
    { label: 'Pays de la Loire', value: 'Pays de la Loire' },
    {
      label: "Provence-Alpes-Côte d'Azur",
      value: "Provence-Alpes-Côte d'Azur",
    },
  ];

  const gender = [
    { label: 'Homme', value: 'Homme' },
    { label: 'Femme', value: 'Femme' },
    { label: 'Autre', value: 'Autre' },
  ];

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          return;
        }

        e.preventDefault();

        Alert.alert(
          'Annuler les modifications ?',
          'Voulez-vous vraiment quitter sans enregistrer les modifications ?',
          [
            { text: 'Non', style: 'cancel', onPress: () => {} },
            {
              text: 'Oui',
              style: 'destructive',
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );

  const handleInputChange = (field, value) => {
    setMetadata({ ...metadata, [field]: value });
    setHasUnsavedChanges(true); // Marque les changements comme non sauvegardés
  };

  useEffect(() => {
    const userDoc = doc(db, 'users', auth.currentUser.uid);
    const unsubscribe = onSnapshot(userDoc, (snapshot) => {
      const data = snapshot.data();
      if (data?.birthday && data.birthday !== NaN) {
        data.birthday = new Date(data.birthday);
      }
      if (data?.brevoContactId) {
        setBrevoContactId(data.brevoContactId);
      }

      setMetadata(data);
    });

    return () => unsubscribe();
  }, []);

  const updateProfile = async () => {
    metadata.email = auth?.currentUser?.email;
    if (metadata.email === '' || metadata.phone === '') {
      setModal(true);
      setMessage('Les champs email et téléphone sont obligatoires');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(metadata.email)) {
      setModal(true);
      setMessage("L'email n'est pas valide");
      return;
    }

    const phoneRegex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    if (!phoneRegex.test(metadata.phone)) {
      setModal(true);
      setMessage("Le numéro de téléphone n'est pas valide");
      return;
    }

    metadata.email = metadata.email.toLowerCase();
    metadata.birthday = new Date(metadata.birthday).getTime();
    try {
      const userDoc = doc(db, 'users', auth.currentUser.uid);
      await setDoc(userDoc, { ...metadata }, { merge: true });
      setHasUnsavedChanges(false);
      setModal(true);
      setMessage('Informations mises à jour');
  
      if (brevoContactId && metadata.lastname && metadata.firstname) {
        const firebaseFunctionUrl =
          FIREBASE_FUNCTIONS_URL || process.env.FIREBASE_FUNCTIONS_URL;
        const JWT = await auth.currentUser.getIdToken();
        try {
          await fetch(firebaseFunctionUrl + '/addAttributesToBrevoContact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + JWT,
            },
            body: JSON.stringify({
              brevoContactId: brevoContactId,
              attributes: {
                email: metadata.email,
                lastname: metadata.lastname,
                firstname: metadata.firstname,
                phone: metadata.phone,
              },
            }),
          });
        } catch (error) {
          console.log('Error: ', error);
        }
      }
    } catch (error) {
      console.log('Error: ', error);
    }
    
  };

  const showDatePicker = () => {
    if (!metadata.birthday && metadata.birthday !== NaN) {
      const today = new Date();
      today.setFullYear(today.getFullYear() - 10);
      setSelectedDate(today); // Initialize the selected date with the user's current date
    } else {
      setSelectedDate(metadata.birthday); // Initialize the selected date with the user's current date
    }
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const applySelectedDate = () => {
    setMetadata({ ...metadata, birthday: selectedDate });
    setHasUnsavedChanges(true);
    hideDatePicker();
  };

  return (
    <ProfileTemplate.EditProfile
      isDatePickerVisible={isDatePickerVisible}
      hideDatePicker={hideDatePicker}
      applySelectedDate={applySelectedDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      gender={gender}
      region={region}
      onSubmit={updateProfile}
      metadata={metadata}
      birthDate={metadata?.birthday
        ? new Date(metadata?.birthday).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : 'Date de naissance'}
      handleInputChange={handleInputChange}
      showDatePicker={showDatePicker}
      modal={modal}
      setModal={setModal}
      message={message}
    />
  );
};

export default EditProfile;
