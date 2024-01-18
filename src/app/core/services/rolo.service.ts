import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoloService {
  private baseUrl = 'http://localhost:8080/api/produto';

  constructor(private http: HttpClient) {}

  calcularQuantidadeDeRolos(largura: number, altura: number): Observable<string> {
    const requestBody = { largura, altura };
    return this.http.post<string>(`${this.baseUrl}/calculo-quantidade`, requestBody);
  }
}
