import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/shared/models/produto';
import { environment } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = environment.apiUrl.concat('/produto');

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: Produto, anexo: File): Observable<any> {
    const formData = new FormData();

    formData.append('parametros', JSON.stringify(produto));
    formData.append('anexo', anexo);

   return this.http.post<any>(`${this.apiUrl}/cadastro/image/parametros`, formData);
  }


  listarCaracteristicas() {
    return this.http.get(`${this.apiUrl}/cadastro/caracteristicas`);
  }

  listarCores() {
    return this.http.get(`${this.apiUrl}/cadastro/cores`);
  }
  listarStatusProduto() {
    return this.http.get(`${this.apiUrl}/cadastro/status`);
  }

  listarTipoProduto() {
    return this.http.get(`${this.apiUrl}/cadastro/tipos`);
  }
}


