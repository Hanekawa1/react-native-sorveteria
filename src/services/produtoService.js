import { OpenDataBase } from './database.js';

export function obterTodosProdutos() {
  return new Promise((resolve, reject) => {
    try {
      const sql = 'select * from Produto';

      const db = OpenDataBase();

      db.transaction((tx) => {
        tx.executeSql(sql, [], (tx, results) => {
          var produtos = results.rows.raw();
          resolve(produtos);
        });
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

export function cadastrarProduto(produto) {
  return new Promise((resolve, reject) => {
    try {
      const sql =
        'insert into Produto(NomeProduto, DescricaoProduto, Sabores, Adicionais, IdUsuario) values(?, ?, ?, ?, ?)';

      const db = OpenDataBase();

      db.transaction((tx) => {
        console.log('sql errado');
        tx.executeSql(
          sql,
          [
            produto.nomeProduto,
            produto.descricaoProduto,
            produto.sabores,
            produto.adicionais,
            produto.idUsuario,
          ],
          (tx, results) => {
            console.log('resolve ');
            resolve(produto);
          },
        );
      });
    } catch (err) {
      reject(err.message);
    }
  });
}
