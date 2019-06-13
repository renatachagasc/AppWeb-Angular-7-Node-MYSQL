import { Component, OnInit } from '@angular/core';
import { BancoConectionService } from './../services/banco-conection.service';
import { FormGroup } from '@angular/forms';
import { Empresa } from './services/empresas';
import { EmpresasService } from './services/empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})

export class EmpresasComponent implements OnInit {
    //Visibilidade do Botão Adicionar
    isCollapsed = true;

    private empresa: Empresa;
    private formActived = false;
  
    constructor(private empresa_service: EmpresasService) {
      this.empresa = new Empresa();
    }
    // Adicionar novos produtos
    public adicionar(form: FormGroup) {
      this.empresa = form.value;
      this.empresa_service.adicionarProduto(this.empresa);
      console.log(this.empresas());
    }
    // Listar produtos
    public empresas() {
      return this.empresa_service.retornarEmpresas();
    }
  
    public activeForm() {
      this.formActived = true;
    }
  ngOnInit() {

  }

  

}
