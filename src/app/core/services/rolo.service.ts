import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class RoloService {
  private baseUrl = environment.apiUrl.concat('/produto');

  constructor(private http: HttpClient) {}

  calcularQuantidadeDeRolos(largura: number, altura: number): Observable<string> {
    const requestBody = { largura, altura };
    return this.http.post<string>(`${this.baseUrl}/calculo-quantidade`, requestBody);
  }
}
