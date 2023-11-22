import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private openModalSource = new Subject<string>();
  openModal$ = this.openModalSource.asObservable();

  private closeModalSource = new Subject<void>();
  closeModal$ = this.closeModalSource.asObservable();

  openModal(imagePath: string) {
    this.openModalSource.next(imagePath);
  }

  closeModal() {
    this.closeModalSource.next();
  }
}
