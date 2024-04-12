import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/shared/models/produto';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:8080/api/produto';

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: Produto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/filtro/cadastrar-produto`, produto);
  }

  listarCaracteristicas() {
    return this.http.get(`${this.apiUrl}/filtro/caracteristicas`);
  }

  listarCores() {
    return this.http.get(`${this.apiUrl}/filtro/cores`);
  }
  listarStatusProduto() {
    return this.http.get(`${this.apiUrl}/cadastro/status`);
  }

  listarTipoProduto() {
    return this.http.get(`${this.apiUrl}/cadastro/tipos`);
  }
}


