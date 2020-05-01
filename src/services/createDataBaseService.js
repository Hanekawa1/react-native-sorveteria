import { OpenDataBase } from './database.js';

export function CreateDataBaseService() {
  try {
    const db = OpenDataBase();

    const sqlCreateTableUser = `
      CREATE TABLE IF NOT EXISTS Usuario(
        IdUsuario INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        NomeUsuario VARCHAR(100) NOT NULL,
        SenhaUsuario VARCHAR(100) NOT NULL,
        IdeUsuario VARCHAR(100) NOT NULL
      );`;

    const insertUsuario = `
        INSERT INTO USUARIO(NomeUsuario, SenhaUsuario, IdeUsuario) values ('admin', 'a', 'admin');
    `;

    db.transaction(function (txn) {
      txn.executeSql(sqlCreateTableUser, []);
      txn.executeSql(insertUsuario, []);
    });
    console.log('Banco criado');
    return '';
  } catch (err) {
    return err.message;
  }
}
