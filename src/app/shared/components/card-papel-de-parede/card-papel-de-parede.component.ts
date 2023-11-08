import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-papel-de-parede',
  templateUrl: './card-papel-de-parede.component.html',
  styleUrls: ['./card-papel-de-parede.component.css']
})
export class CardPapelDeParedeComponent {
  @Input() tamanho: 'grande' | 'pequeno' = 'grande';
  @Input() imagePath: string = 'caminho/default/da/imagem.jpg';

  get cardHeight(): string {
    return this.tamanho === 'grande' ? '350px' : '200px';
  }
}
