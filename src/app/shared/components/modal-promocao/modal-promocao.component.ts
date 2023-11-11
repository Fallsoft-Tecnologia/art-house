import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ModalPromocaoService } from './modal-promocao.service';

declare var $: any;

@Component({
  selector: 'app-modal-promocao',
  templateUrl: './modal-promocao.component.html',
  styleUrls: ['./modal-promocao.component.css']
})
export class ModalPromocaoComponent implements AfterViewInit, OnDestroy {

  constructor(private modalService: ModalPromocaoService) {}

  ngAfterViewInit() {
    if (this.modalService.shouldShowModal()) {
      $('#modalPromocao').modal('show');
    }
  }

  closeModal() {
    $('#modalPromocao').modal('hide');
    this.modalService.markModalAsShown();
  }

  ngOnDestroy() {
    this.modalService.resetModalState();
  }
}
