import { put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { cadastrarProduto } from '../../services/produtoService';
import ProdutoActions from '../ducks/produto';

export function* cadastrar(action) {
  try {
    var retorno = yield cadastrarProdutoAction(action.produto);

    if (retorno.tipo === 1) {
      yield apresentarMensagem(
        2,
        retorno.produto,
        'Sorvete cadastrado com sucesso!',
      );
      return;
    } else {
      yield apresentarMensagem(1, null, 'Não foi possível cadastrar o sorvete');
      return;
    }
  } catch (err) {
    yield apresentarMensagem(1, null, err.message);
    return;
  }
}

function* apresentarMensagem(tipo, produto, mensagem) {
  if (tipo === 1) {
    yield put(ProdutoActions.cadastroFailure());
    yield put(ToastActionsCreators.displayError(mensagem));
  } else {
    yield put(ProdutoActions.cadastroSuccess(produto));
    yield put(ToastActionsCreators.displayInfo(mensagem));
  }
}

function* cadastrarProdutoAction(produto) {
  const retorno = yield cadastrarProduto(produto)
    .then((res) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        produto: res,
      };
      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 0,
        mensagem: erro,
        produto: null,
      };
      return ret;
    });
  return retorno;
}
