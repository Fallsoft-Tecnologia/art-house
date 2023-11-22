import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-filtro-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtro-modal.component.html',
  styleUrl: './filtro-modal.component.css'
})
export class FiltroModalComponent {
  @Output() modalClosed = new EventEmitter<void>();

  openModal() {
    $('#filtroModal').modal('show');
  }

  closeModal() {
    $('#filtroModal').modal('hide');
    this.modalClosed.emit();
  }

  fundoModalClick() {
    this.closeModal();
  }
}
