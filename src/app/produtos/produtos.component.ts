import { Component, OnInit } from '@angular/core';
import { Produto } from './services/produto';
import { ProdutosService } from './services/produtos.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  isCollapsed = true;
  produtos: Array<any>;
  produto: any;
  atualizar: boolean;
  private formActived = false;

  constructor(private produto_service: ProdutosService) {
  }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.produto = {};
    this.listarProduto()
  }


  criarProduto(formulario: FormGroup) {
    this.produto_service.criarProduto(this.produto).subscribe(resposta => {
    });
    formulario.reset();
  }

  listarProduto() {
    this.produto_service.listarProduto().subscribe(resposta => this.produtos = resposta);
  }
  deletarProduto(i: any) {
    this.produto_service.deletarProduto(i).subscribe(resposta => {

      this.listarProduto();
    });

  }
  atualizarProduto(formulario: FormGroup) {
    this.produto_service.atualizarProduto(this.produto.id, this.produto).subscribe(resposta => {
      console.log(resposta);

    });
    formulario.reset();

  }

}
