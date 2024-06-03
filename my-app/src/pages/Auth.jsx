import React from 'react'
import RegistrationForm from '../redux/features/user/RegistrationForm';
import LoginForm from '../redux/features/user/LoginForm';
import PasswordRecoveryForm from '../redux/features/user/PasswordRecoveryForm';
import ChangePasswordForm from '../redux/features/user/ChangePasswordForm';
import UserProfile from '../redux/features/user/UserProfile';

const Auth = () => {
  return (
    <div>
      <RegistrationForm />
    </div>
  )
}

export default Auth
