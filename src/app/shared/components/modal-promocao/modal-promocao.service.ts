import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalPromocaoService {

  private modalShownKey = 'modalShown';

  shouldShowModal(): boolean {
    return !localStorage.getItem(this.modalShownKey);
  }

  markModalAsShown(): void {
    localStorage.setItem(this.modalShownKey, 'true');
  }

  resetModalState(): void {
    localStorage.removeItem(this.modalShownKey);
  }
}
