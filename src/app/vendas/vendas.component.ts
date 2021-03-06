import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VendasService } from './services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  //Visibilidade do Botão Adicionar
  isCollapsed = true;
  vendas: Array<any>;
  venda: any;
  private formActived = false;
  atualizar: boolean;
  constructor(private venda_service: VendasService) { }
  public activeForm() {
    this.formActived = true;
  }
  ngOnInit() {
    this.venda = {};
    this.listarVenda()
  }

  criarVenda(formulario: FormGroup) {
    this.venda_service.criarVenda(this.venda).subscribe(resposta => {
      this.listarVenda();
    });
    formulario.reset();
  }

  listarVenda() {
    this.venda_service.listarVenda().subscribe(resposta => this.vendas = resposta);
  }
  deletarVenda(venda: any) {
    this.venda_service.deletarVenda(venda.id).subscribe(resposta => {
      this.listarVenda();
      });
  }
  atualizarVenda(formulario: FormGroup) {
    this.venda_service.atualizarVenda(this.venda.id, this.venda).subscribe(resposta => {
    });
    formulario.reset();

  }

}
