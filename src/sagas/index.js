import { all } from 'redux-saga/effects';
import '../utils/axiosClient';

import authSaga from '../sagas/auth';

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}