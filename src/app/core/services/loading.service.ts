import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingCount: number = 0;

  showLoading() {
    this.loadingCount++;
    // Lógica para exibir o indicador de loading na tela
    console.log('Indicador de loading exibido');
  }

  hideLoading() {
    this.loadingCount--;
    if (this.loadingCount === 0) {
      // Lógica para ocultar o indicador de loading da tela
      console.log('Indicador de loading ocultado');
    }
  }
}
