import { takeLatest, call, put, all } from '@redux-saga/core/effects';

import {
  EMAIL_SIGN_IN_PENDING,
  GOOGLE_SIGN_IN_PENDING,
  CHECK_USER_SESSION,
  SIGN_OUT_PENDING,
  SIGN_UP_PENDING,
  SIGN_UP_FULLFILED,
} from './user-constants';

import {
  signInFullFiled,
  signInRejected,
  signOutFullfiled,
  signOutRejected,
  signUpFullfiled,
  signUpRejected,
} from './user-actions';

import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapShot = yield userRef.get();
    yield put(signInFullFiled({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInRejected(error.message));
  }
}

export function* onGoogleSignInPending() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInRejected(error.message));
  }
}

export function* onEmailSignInPending({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInRejected(error.message));
  }
}

export function* onIsUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInRejected(error.message));
  }
}

export function* onSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutFullfiled());
  } catch (error) {
    yield put(signOutRejected(error.message));
  }
}

export function* onSignUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpFullfiled({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpRejected(error.message));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* pendingGoogleSignInSagas() {
  yield takeLatest(GOOGLE_SIGN_IN_PENDING, onGoogleSignInPending);
}

export function* pendingEmailSignInSagas() {
  yield takeLatest(EMAIL_SIGN_IN_PENDING, onEmailSignInPending);
}

export function* checkUserSessionSagas() {
  yield takeLatest(CHECK_USER_SESSION, onIsUserAuthenticated);
}

export function* signOutPendingSagas() {
  yield takeLatest(SIGN_OUT_PENDING, onSignOut);
}

export function* signUpPendingSagas() {
  yield takeLatest(SIGN_UP_PENDING, onSignUp);
}

export function* signUpFullfiledSagas() {
  yield takeLatest(SIGN_UP_FULLFILED, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(pendingGoogleSignInSagas),
    call(pendingEmailSignInSagas),
    call(checkUserSessionSagas),
    call(signOutPendingSagas),
    call(signUpPendingSagas),
    call(signUpFullfiledSagas),
  ]);
}
