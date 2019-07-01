import { Component, OnInit } from '@angular/core';
import { ContatosService } from './services/contatos.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {
  //Visibilidade do Botão Adicionar
  isCollapsed = true;
  contatos: Array<any>;
  contato: any;
  private formActived = false;
  atualizar: boolean;
  constructor(private contato_service: ContatosService) { }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.contato = {};
    this.listarContato()
  }

  criarContato(formulario: FormGroup) {
    this.contato_service.criarContato(this.contato).subscribe(resposta => {
      this.listarContato();
    });
    formulario.reset();
  }

  listarContato() {
    this.contato_service.listarContato().subscribe(resposta => this.contatos = resposta);
  }
  deletarContato(contato: any) {
    this.contato_service.deletarContato(contato.id).subscribe(resposta => {
      this.listarContato();
    });

  }
  atualizarContato(formulario: FormGroup) {
    this.contato_service.atualizarContato(this.contato.id, this.contato).subscribe(resposta => {
      console.log(resposta);

    });
    formulario.reset();

  }

}
