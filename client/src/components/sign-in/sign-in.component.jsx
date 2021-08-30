import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch } from 'react-redux';

//redux
import {
  googleSignInPending,
  emailSignInPending,
} from '../../redux/user-reducer/user-actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonBarContainer,
} from './sign-in.styles';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const dispatch = useDispatch();
  const googleSignIn = () => {
    dispatch(googleSignInPending());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInPending({ email, password }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle> I already have account </SignInTitle>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonBarContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' isGoogleSignIn onClick={googleSignIn}>
            Sign In With Google{' '}
          </CustomButton>
        </ButtonBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
