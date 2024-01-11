import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroModalService {
  private modalOpen = new BehaviorSubject<boolean>(false);

  openModal() {
    this.modalOpen.next(true);
    
    console.log("Abriu 2");
    console.log(this.modalOpen.value);
  }

  getModalOpen(): Observable<boolean> {
    return this.modalOpen.asObservable();
  }
}
