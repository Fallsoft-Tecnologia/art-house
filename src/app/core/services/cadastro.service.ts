import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/shared/models/produto';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:8080/api/produto/filtro';

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: Produto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cadastrar-produto`, produto);
  }
}
