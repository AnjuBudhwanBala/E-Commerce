import * as actionTypes from '../actionTypes';

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailandPassword => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: emailandPassword
});

export const checkUserSession = () => ({
  type: actionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: actionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = () => ({
  type: actionTypes.SIGN_OUT_FAILURE
});

export const signUpStart = userCredential => ({
  type: actionTypes.SIGN_UP_START,
  payload: userCredential
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error
});
