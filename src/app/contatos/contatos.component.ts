import { Component, OnInit } from '@angular/core';
import { Contato } from './services/contatos';
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

    private contato: Contato;
    private formActived = false;
  
    constructor(private contato_service: ContatosService) {
      this.contato = new Contato();
    }
    // Adicionar novos produtos
    public adicionar(form: FormGroup) {
      this.contato = form.value;
      this.contato_service.adicionarProduto(this.contato);
      console.log(this.contatos());
    }
    // Listar produtos
    public contatos() {
      return this.contato_service.retornarContatos();
    }
  
    public activeForm() {
      this.formActived = true;
    }
    
  ngOnInit() {
  }

}
