import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-card-papel-de-parede',
  templateUrl: './card-papel-de-parede.component.html',
  styleUrls: ['./card-papel-de-parede.component.css']
})
export class CardPapelDeParedeComponent {
  @Input() imagePath: string = '';
  @Input() grupo: string = '';
  @Input() idProduto: number = 0;




  constructor(private modalService: ModalService) {}

  openPapelIndividualModal(idProduto: number) {
    this.modalService.openModalWithImage(idProduto);
    
  }
}
