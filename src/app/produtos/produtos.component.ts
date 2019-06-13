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
  //Visibilidade do Botão Adicionar
  isCollapsed = true;

  private produto: Produto;
  private formActived = false;

  constructor(private produto_service: ProdutosService) {
    this.produto = new Produto();
  }
  // Adicionar novos produtos
  public adicionar(form: FormGroup) {
    this.produto = form.value;
    this.produto_service.adicionarProduto(this.produto);
    console.log(this.produtos());
  }
  // Listar produtos
  public produtos() {
    return this.produto_service.retornarProdutos();
  }

  public activeForm() {
    this.formActived = true;
  }
  
  ngOnInit() {
  }

}
