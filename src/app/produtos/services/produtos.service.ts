import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: Produto[];

  constructor() {
    this.produtos = [];
  }

  public adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  public retornarProdutos() {
    return this.produtos;
  }
}
