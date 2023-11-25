import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-card-papel-de-parede',
  templateUrl: './card-papel-de-parede.component.html',
  styleUrls: ['./card-papel-de-parede.component.css']
})
export class CardPapelDeParedeComponent {
  @Input() imagePath: string = '';

  constructor(private modalService: ModalService) {}

  openPapelIndividualModal() {
    this.modalService.openModalWithImage(this.imagePath);
  }
}
