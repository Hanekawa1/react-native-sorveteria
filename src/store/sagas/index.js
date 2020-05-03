import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { ProdutoTypes } from '../ducks/produto';

import { login } from './auth';
import { cadastrar } from './produto';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, login),
    takeLatest(ProdutoTypes.CADASTRO_REQUEST, cadastrar),
  ]);
}
