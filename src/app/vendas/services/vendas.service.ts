import { Injectable } from '@angular/core';
import { Venda } from './vendas';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private vendas: Venda[];

  constructor() {
    this.vendas = [];
  }

  public adicionarVendas(venda) {
    this.vendas.push(venda);
  }

  public retornarVendas() {
    return this.vendas;
  }
}
