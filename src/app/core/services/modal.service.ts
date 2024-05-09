import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private apiUrl = environment.apiUrl.concat('/produto');

  private openModalWithImageSource = new Subject<{ idProduto: string }>();
  openModalWithImage$ = this.openModalWithImageSource.asObservable();

  private openModalSource = new Subject<void>();
  openModal$ = this.openModalSource.asObservable();

  
  constructor(private http: HttpClient) {}

  getProdutoInfo(idProduto: string): Observable<any> {
    const url = `${this.apiUrl}?idProduto=${idProduto}`;
    return this.http.get(url);
  }

  openModalWithImage(idProduto: string) {
    this.openModalWithImageSource.next({ idProduto });
  }

  openModal() {
    this.openModalSource.next();
    console.log(this.openModal$)
  }
}
