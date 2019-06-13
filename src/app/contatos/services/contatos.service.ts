import { Injectable } from '@angular/core';
import { Contato } from './contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  
  private contatos: Contato[];

  constructor() {
    this.contatos = [];
  }

  public adicionarProduto(produto) {
    this.contatos.push(produto);
  }

  public retornarContatos() {
    return this.contatos;
  }
}
