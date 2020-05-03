export default class Produto {
  idProduto: int;
  nomeProduto: String;
  descricaoProduto: String;
  sabores: String;
  adicionais: String;
  idUsuario: int;

  constructor() {
    this.idProduto = 0;
    this.nomeProduto = '';
    this.descricaoProduto = '';
    this.sabores = '';
    this.adicionais = '';
    this.idUsuario = 0;
  }
}
