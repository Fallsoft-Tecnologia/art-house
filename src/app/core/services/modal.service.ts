import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private openModalWithImageSource = new Subject<string>();
  openModalWithImage$ = this.openModalWithImageSource.asObservable();

  private openModalSource = new Subject<void>();
  openModal$ = this.openModalSource.asObservable();

  private closeModalSource = new Subject<void>();
  closeModal$ = this.closeModalSource.asObservable();

  openModalWithImage(imagePath: string) {
    this.openModalWithImageSource.next(imagePath);
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
