import React, { useState } from 'react';
import './signUp.styles.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [input, setInput] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(input => ({ ...input, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = input;

    if (password !== confirmPassword) {
      alert('password and confirm password does not match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.log(error.message);
    }
    setInput({ displayName: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="sign-up">
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password </span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          value={input.displayName}
          name="displayName"
          handleChange={handleChange}
          label="Display Name"
          required
        />
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
        <FormInput
          type="password"
          value={input.confirmPassword}
          name="confirmPassword"
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
