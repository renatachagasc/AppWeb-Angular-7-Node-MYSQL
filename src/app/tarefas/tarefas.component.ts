import { Component, OnInit } from '@angular/core';
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
  tarefas: Array<any>;
  tarefa: any;
  private formActived = false;
  atualizar: boolean;
  
  constructor(private tarefa_service: TarefasService) { }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.tarefa = {};
    this.listarTarefa()
  }

  criarTarefa(formulario: FormGroup) {
    this.tarefa_service.criarTarefa(this.tarefa).subscribe(resposta => {
    });
    formulario.reset();
  }

  listarTarefa() {
    this.tarefa_service.listarTarefa().subscribe(resposta => this.tarefas = resposta);
  }
  deletarTarefa(i: any) {
    this.tarefa_service.deletarTarefa(i).subscribe(resposta => {

      this.listarTarefa();
    });

  }
  atualizarTarefa(formulario: FormGroup) {
    this.tarefa_service.atualizarTarefa(this.tarefa.id, this.tarefa).subscribe(resposta => {
      console.log(resposta);

    });
    formulario.reset();

  }
}
