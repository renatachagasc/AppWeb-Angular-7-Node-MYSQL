import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BancoConectionService {

  URL_SERVIDOR = 'http://localhost:3000/empresas';


  constructor(private http: HttpClient) { }

  listarEmpresa() {
    return this.http.get<Array<any>>(`${this.URL_SERVIDOR}`);
  }

  criarEmpresa(empresa: any) {
    return this.http.post(this.URL_SERVIDOR, empresa);
  }

  deletarEmpresa(empresa: any) {

    console.log(empresa);
    return this.http.delete(this.URL_SERVIDOR + '/' + empresa);

  }
}
