import {
  GOOGLE_SIGN_IN_PENDING,
  EMAIL_SIGN_IN_PENDING,
  SIGN_IN_FULLFILED,
  SIGN_IN_REJECTED,
  CHECK_USER_SESSION,
  SIGN_OUT_PENDING,
  SIGN_OUT_FULLFILED,
  SIGN_OUT_REJECTED,
  SIGN_UP_FULLFILED,
  SIGN_UP_PENDING,
  SIGN_UP_REJECTED,
} from './user-constants';

export const googleSignInPending = () => ({
  type: GOOGLE_SIGN_IN_PENDING,
});

export const emailSignInPending = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_PENDING,
  payload: emailAndPassword,
});

export const signInFullFiled = (user) => ({
  type: SIGN_IN_FULLFILED,
  payload: user,
});

export const signInRejected = (error) => ({
  type: SIGN_IN_REJECTED,
  payload: error,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutPending = () => ({
  type: SIGN_OUT_PENDING,
});

export const signOutFullfiled = () => ({
  type: SIGN_OUT_FULLFILED,
});

export const signOutRejected = (error) => ({
  type: SIGN_OUT_REJECTED,
  payload: error,
});

export const emailSignUpPending = (userCredentials) => ({
  type: SIGN_UP_PENDING,
  payload: userCredentials,
});

export const signUpFullfiled = ({ user, additionalData }) => ({
  type: SIGN_UP_FULLFILED,
  payload: { user, additionalData },
});

export const signUpRejected = (error) => ({
  type: SIGN_UP_REJECTED,
  payload: error,
});
