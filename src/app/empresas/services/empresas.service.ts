import { Injectable } from '@angular/core';
import { Empresa } from './empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  
  private empresas: Empresa[];

  constructor() {
    this.empresas = [];
  }

  public adicionarProduto(produto) {
    this.empresas.push(produto);
  }

  public retornarEmpresas() {
    return this.empresas;
  }
}
