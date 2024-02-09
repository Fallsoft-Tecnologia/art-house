import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
private openModalWithImageSource = new Subject<{ imagePath: string, nomeProduto:string, descProduto:string }>();
  openModalWithImage$ = this.openModalWithImageSource.asObservable();

  private openModalSource = new Subject<void>();
  openModal$ = this.openModalSource.asObservable();

  private closeModalSource = new Subject<void>();
  closeModal$ = this.closeModalSource.asObservable();

  openModalWithImage(imagePath: string,nomeProduto:string, descProduto:string) {
    this.openModalWithImageSource.next({ imagePath, nomeProduto,descProduto });
  }

  openModal() {
    this.openModalSource.next();
    console.log("Abriu 2")
    console.log(this.openModal$)
  }

  closeModal() {
    this.closeModalSource.next();
  }
}
