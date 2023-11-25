import { Component, OnInit } from '@angular/core';
import { FiltroService } from 'src/app/core/services/filtro.service';

declare var $: any;

@Component({
  selector: 'app-filtro-modal',
  templateUrl: './filtro-modal.component.html',
  styleUrls: ['./filtro-modal.component.css']
})
export class FiltroModalComponent implements OnInit {

  constructor(private modalService: FiltroService) {}

  ngOnInit() {
    this.modalService.getModalOpen().subscribe((open) => {
      console.log("teste");
      if (open) {
        console.log("Abriu 3");
        this.openModal();
      }
    });
  }

  openModal() {
    $('#filtroModal').modal('show');
  }

  closeModal() {
    $('#filtroModal').modal('hide');
  }
}
