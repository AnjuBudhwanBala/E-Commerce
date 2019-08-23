import React, { useState, useCallback } from 'react';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signIn.styles';

const SignIn = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  //dispatch google signIn
  const signInwithGoogleStart = useCallback(() => {
    dispatch(googleSignInStart());
  }, [dispatch]);

  //dispatch email signIn action
  const signInWithEmailAndPassword = useCallback(
    (email, password) => {
      dispatch(emailSignInStart(email, password));
    },
    [dispatch]
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(input => ({ ...input, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    signInWithEmailAndPassword(input);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   setInput({ email: '', password: '' });
    // } catch (error) {
    //   console.log(error.message);
    // }
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
          <CustomButton
            type="button"
            onClick={signInwithGoogleStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
