import React, { useState } from 'react';

import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signIn.styles';

const SignIn = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(input => ({ ...input, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = input;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setInput({ email: '', password: '' });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={input.email}
          name="email"
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          value={input.password}
          name="password"
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
