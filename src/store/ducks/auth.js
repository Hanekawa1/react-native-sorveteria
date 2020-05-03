import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  signInRequest: ['user'],
  signInSuccess: ['user'],
  signInFailure: ['user'],
  signInCancel: null,
  signInInicial: null,
  navegarGuest: null,
  logoffGuest: null,
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  login: false,
  ideUsuario: '',
  senhaUsuario: '',
  navegar: false,
  usuario: null,
  navegarGuest: false,
});

export const signInInicialReducer = (state) => {
  return state.merge({
    loading: false,
    navegar: false,
  });
};

export const signInCancelReducer = (state) => {
  return state.merge({
    loading: false,
    login: false,
    navegar: true,
    usuario: null,
  });
};

export const signInRequestReducer = (state) =>
  state.merge({
    loading: true,
    login: false,
    navegar: false,
    usuario: null,
  });

export const signInSuccessReducer = (state, { user }) => {
  return state.merge({
    loading: false,
    login: true,
    navegar: true,
    ideUsuario: user.ideUsuario,
    senhaUsuario: user.senhaUsuario,
    usuario: user,
  });
};

export const signInFailureReducer = (state, { user }) => {
  return state.merge({
    loading: false,
    ideUsuario: user.ideUsuario,
    senhaUsuario: user.senhaUsuario,
    usuario: null,
  });
};

export const guestUserReducer = (state) => {
  return state.merge({
    navegarGuest: true,
  });
};
export const logoffGuestReducer = (state) => {
  return state.merge({
    navegarGuest: false,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequestReducer,
  [Types.SIGN_IN_SUCCESS]: signInSuccessReducer,
  [Types.SIGN_IN_FAILURE]: signInFailureReducer,
  [Types.SIGN_IN_CANCEL]: signInCancelReducer,
  [Types.SIGN_IN_INICIAL]: signInInicialReducer,
  [Types.NAVEGAR_GUEST]: guestUserReducer,
  [Types.LOGOFF_GUEST]: logoffGuestReducer,
});
