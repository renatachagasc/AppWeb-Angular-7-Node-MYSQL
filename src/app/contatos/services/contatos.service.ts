import { Injectable } from '@angular/core';
import { Contato } from './contatos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private contatos: Contato[];
  URL_SERVIDOR = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {
    this.contatos = [];
  }

  listarContato() {
    return this.http.get<Array<any>>(`${this.URL_SERVIDOR}`);
  }

  criarContato(contato: any) {
    return this.http.post(this.URL_SERVIDOR, contato);
  }

  deletarContato(contato: any) {

    console.log(contato);
    return this.http.delete(this.URL_SERVIDOR + '/' + contato);

  }
  atualizarContato(id: any, update: any): Observable<any> {
    return this.http.put(`${this.URL_SERVIDOR}`, update);
  }
}
