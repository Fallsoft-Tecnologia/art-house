import { AfterViewInit, Component, Input } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

declare var $: any;

@Component({
  selector: 'app-papel-individual',
  templateUrl: './papel-individual.component.html',
  styleUrls: ['./papel-individual.component.css']
})
export class PapelIndividualComponent implements AfterViewInit {
  @Input() imagePath: string = '';

  constructor(private modalService: ModalService) {}

  ngAfterViewInit() {
    this.modalService.openModal$.subscribe((imagePath) => {
      if (imagePath === this.imagePath) {
        this.openModal();
        this.updateModalSize();
        this.updateRowGap();
      }
    });
  }

  openModal() {
    $('#papelIndividual .modal-body img').attr('src', '');
    $('#papelIndividual .modal-body img').attr('src', this.imagePath);
    $('#papelIndividual').modal('show');
  }

  closeModal() {
    $('#papelIndividual').modal('hide');
  }

  private updateModalSize() {
    const isFullScreen = window.innerWidth <= 767;
    const modalBody = $('#papelIndividual .modal-body');

    if (isFullScreen) {
      modalBody.removeClass('mx-5 mb-5');
    } else {
      modalBody.addClass('mx-5 mb-5');
    }
  }

  private updateRowGap() {
    const isFullScreen = window.innerWidth <= 767;
    const rowDiv = $('#papelIndividual .modal-body .row');

    if (isFullScreen) {
      rowDiv.addClass('d-grid gap-4');
    } else {
      rowDiv.removeClass('d-grid gap-4');
    }
  }
}
