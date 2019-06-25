import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: Produto[];
  URL_SERVIDOR = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {
    this.produtos = [];
  }

  listarProduto() {
    return this.http.get<Array<any>>(`${this.URL_SERVIDOR}`);
  }

  criarProduto(empresa: any) {
    return this.http.post(this.URL_SERVIDOR, empresa);
  }

  deletarProduto(empresa: any) {

    console.log(empresa);
    return this.http.delete(this.URL_SERVIDOR + '/' + empresa);

  }
  atualizarProduto(id: any, update: any): Observable<any> {
    return this.http.put(`${this.URL_SERVIDOR}`, update);
  }
}
