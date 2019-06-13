import { Injectable } from '@angular/core';
import { Tarefa } from './tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
 
  private tarefas: Tarefa[];

  constructor() {
    this.tarefas = [];
  }

  public adicionarProduto(produto) {
    this.tarefas.push(produto);
  }

  public retornarTarefas() {
    return this.tarefas;
  }
}
