import {Alert} from 'react-native';
import {takeLatest, all, put, call} from 'redux-saga/effects';

import api from '../../../services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {id} = payload;

    const response = yield call(api.get, `student/${id}`);

    // const response = yield call(api.get, `student/${id}`, {
    //   id,
    // });
    const user = response.data;

    yield put(signInSuccess(user));

    // history.push('/student');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Usuario não cadastrado');
    yield put(signFailure());
  }
}
export function setId({payload}) {
  if (!payload) {
    return;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setId),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
