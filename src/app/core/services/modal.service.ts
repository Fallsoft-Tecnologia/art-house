import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

private baseUrl = 'http://localhost:8080/api/produto';
private openModalWithImageSource = new Subject<number>();
  openModalWithImage$ = this.openModalWithImageSource.asObservable();

  private openModalSource = new Subject<void>();
  openModal$ = this.openModalSource.asObservable();

  private closeModalSource = new Subject<void>();
  closeModal$ = this.closeModalSource.asObservable();

  constructor(private http: HttpClient) { }

  openModalWithImage(idProduto:number) {
    this.openModalWithImageSource.next(idProduto);
  }

  openModal() {
    this.openModalSource.next();
    console.log("Abriu 2")
    console.log(this.openModal$)
  }

  closeModal() {
    this.closeModalSource.next();
  }

  getProdutoPorId(idProduto:number){
    return this.http.get(`${this.baseUrl}?idProduto=${idProduto}`);
  }
}
