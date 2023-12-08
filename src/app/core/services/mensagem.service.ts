import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeadMensagemForm } from 'src/app/shared/models/leadMensagemForm';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private apiUrl = 'http://localhost:8080/api/leads';

  constructor(private http: HttpClient) {}

  enviarMensagem(leadMensagemForm: LeadMensagemForm): Observable<string> {
    const mensagemEndpoint = `${this.apiUrl}/mensagem`;
    return this.http.post<string>(mensagemEndpoint, leadMensagemForm);
  }
}
