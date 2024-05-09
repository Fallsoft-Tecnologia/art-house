import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeadMensagemForm } from 'src/app/shared/models/leadMensagemForm';
import { environment } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private apiUrl = environment.apiUrl.concat('/leads');

  constructor(private http: HttpClient) {}

  enviarMensagem(leadMensagemForm: LeadMensagemForm): Observable<string> {
    const mensagemEndpoint = `${this.apiUrl}/mensagem`;
    return this.http.post<string>(mensagemEndpoint, leadMensagemForm);
  }
}
