import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { INITIAL_STATE } from './auth';

const { Types, Creators } = createActions({
  cadastroRequest: ['produto'],
  cadastroSuccess: ['produto'],
  cadastroFailure: null,
  carrinho: ['produtos'],
});

export const ProdutoTypes = Types;
export default Creators;

export const INTIAL_STATE = Immutable({
  navegar: false,
  produtos: null,
});

export const cadastroRequestReducer = (state) => {
  return state.merge({
    navegar: false,
    produtos: null,
  });
};

export const cadastroSuccessReducer = (state) => {
  return state.merge({
    navegar: true,
    produtos: null,
  });
};

export const cadastroFailureReducer = (state) => {
  return state.merge({
    navegar: false,
    produtos: null,
  });
};

export const carrinhoReducer = (state, produtos) => {
  return state.merge({
    navegar: true,
    produtos: produtos,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CADASTRO_REQUEST]: cadastroRequestReducer,
  [Types.CADASTRO_SUCCESS]: cadastroSuccessReducer,
  [Types.CADASTRO_FAILURE]: cadastroFailureReducer,
  [Types.CARRINHO]: carrinhoReducer,
});
