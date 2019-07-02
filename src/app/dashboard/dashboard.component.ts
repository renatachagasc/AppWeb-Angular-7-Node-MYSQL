import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'app/produtos/services/produtos.service';
import { EmpresasService } from 'app/empresas/services/empresas.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produtos: Array<any>;
  produto: any;
  private formActived = false;
  empresas: Array<any>;
  empresa: any;
  atualizar: boolean;

  constructor(private produto_service: ProdutosService, private empresa_service: EmpresasService) { 
  }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.produto = {};
    this.listarProduto()
    this.empresa = {};
    this.listarEmpresa()
  }
  listarProduto() {
    this.produto_service.listarProduto().subscribe(resposta => this.produtos = resposta);
  }
  listarEmpresa() {
    this.empresa_service.listarEmpresa().subscribe(resposta => this.empresas = resposta);
  }

}
