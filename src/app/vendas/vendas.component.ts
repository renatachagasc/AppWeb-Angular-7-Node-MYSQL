import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Venda } from './services/vendas';
import { VendasService } from './services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  //Visibilidade do Botão Adicionar
  isCollapsed = true;

  private venda: Venda;
  private formActived = false;

  constructor(private venda_service: VendasService) {
    this.venda = new Venda();
  }
  // Adicionar novos produtos
  public adicionar(form: FormGroup) {
    this.venda = form.value;
    this.venda_service.adicionarVendas(this.venda);
    console.log(this.vendas());
  }
  // Listar produtos
  public vendas() {
    return this.venda_service.retornarVendas();
  }

  public activeForm() {
    this.formActived = true;
  }

  ngOnInit() {
  }

}
