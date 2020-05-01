import { openDatabase } from 'react-native-sqlite-storage';

export function OpenDataBase() {
  var db = openDatabase({ name: 'dataBase.db' });
  return db;
}
