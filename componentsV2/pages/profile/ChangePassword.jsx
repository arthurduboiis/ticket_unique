import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { changePassword } from '../../../services/connectionService';
import { ProfileTemplate } from '../../templates';

const ChangePasswordPage = () => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChangePassword = async () => {
    console.log('Changing password');
    if (newPassword !== confirmPassword) {
      setError('Le nouveau mot de passe et la confirmation ne correspondent pas.');
      return;
    }

    try {
      setLoading(true);
      await changePassword(oldPassword, newPassword, confirmPassword);

      navigation.goBack();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <ProfileTemplate.ChangePassword
      oldPassword={oldPassword}
      newPassword={newPassword}
      confirmPassword={confirmPassword}
      setOldPassword={setOldPassword}
      setNewPassword={setNewPassword}
      setConfirmPassword={setConfirmPassword}
      onChangePassword={handleChangePassword}
      loading={loading}
      error={error}
    />
  );
};

export default ChangePasswordPage;
