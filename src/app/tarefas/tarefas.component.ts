import { Component, OnInit } from '@angular/core';
import { Tarefa } from './services/tarefas';
import { TarefasService } from './services/tarefas.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  //Visibilidade do Botão Adicionar
  isCollapsed = true;

  private tarefa: Tarefa;
  private formActived = false;

  constructor(private tarefa_service: TarefasService) {
    this.tarefa = new Tarefa();
  }
  // Adicionar novas tarefas
  public adicionar(form: FormGroup) {
    this.tarefa = form.value;
    this.tarefa_service.adicionarProduto(this.tarefa);
    console.log(this.tarefas());
  }
  // Listar tarefas
  public tarefas() {
    return this.tarefa_service.retornarTarefas();
  }

  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
  }

}
