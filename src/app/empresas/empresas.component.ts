import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmpresasService } from './services/empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})

export class EmpresasComponent implements OnInit {
  isCollapsed = true;
  empresas: Array<any>;
  empresa: any;
  private formActived = false;
  atualizar: boolean;

  constructor(private empresa_service: EmpresasService) { }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.empresa = {};

  }

  criarEmpresa(formulario: FormGroup) {
    this.empresa_service.criarEmpresa(this.empresa).subscribe(resposta => {
    });
    formulario.reset();
  }

  listarEmpresas() {
    this.empresa_service.listarEmpresa().subscribe(resposta => this.empresa = resposta);
  }
  deletarEmpresa(i: any) {
    this.empresa_service.deletarEmpresa(i).subscribe(resposta => {

      this.listarEmpresas();
    });

  }
  atualizarEmpresa(formulario: FormGroup) {
    this.empresa_service.atualizarEmpresa(this.empresa.id, this.empresa).subscribe(resposta => {
      console.log(resposta);

    });
    formulario.reset();

  }



}
