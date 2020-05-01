import { put } from 'redux-saga/effects';
import NetInfo from '@react-native-community/netinfo';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { obterPorIdeUsuario } from '../../services/usuarioService';
import AuthActions from '../ducks/auth';

export function* login(action) {
  try {
    const { isConnected } = yield NetInfo.fetch();

    if (isConnected) {
      ToastActionsCreators.displayInfo('Autenticando');

      var retorno = yield pesquisarUsuarioPorIdentificacaoDoUsuario(
        action.user.ideUsuario,
      );

      if (retorno.tipo === 1) {
        if (retorno.usuario.senhaUsuario !== action.user.senhaUsuario) {
          yield apresentarMensagem(1, action.user, 'Senha inválida');
          return;
        } else {
          yield apresentarMensagem(
            2,
            retorno.usuario,
            'Autenticação efetuada com sucesso',
          );
          return;
        }
      } else {
        yield apresentarMensagem(1, action.user, retorno.mensagem);
        return;
      }
    } else {
      yield apresentarMensagem(1, action.user, 'Sem conexão com internet');
      return;
    }
  } catch (err) {
    yield apresentarMensagem(1, action.user, err.message);
    return;
  }
}

function* apresentarMensagem(tipo, user, mensagem) {
  if (tipo === 1) {
    yield put(AuthActions.signInFailure(user));
    yield put(ToastActionsCreators.displayError(mensagem));
  } else {
    yield put(AuthActions.signInSuccess(user));
    yield put(ToastActionsCreators.displayInfo(mensagem));
  }
}

function* pesquisarUsuarioPorIdentificacaoDoUsuario(ideUsuario) {
  const retorno = yield obterPorIdeUsuario(ideUsuario)
    .then((resp) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        usuario: resp,
      };
      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 2,
        mensagem: erro,
        usuario: null,
      };
      return ret;
    });
  return retorno;
}
