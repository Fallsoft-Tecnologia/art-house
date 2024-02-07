import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { FiltroModalService } from 'src/app/core/services/filtroModal.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  @Input() itemCount: number = 0;
  @Output() filterToggle = new EventEmitter<void>();
  @Output() openModal = new EventEmitter<void>();
  @Output() sortingChanged = new EventEmitter<number>();
  

  filterOpened: boolean = true;
  selectedItem: number = 0;

  constructor(private ngbCollapse: NgbCollapse, private modalService: FiltroModalService) {
    this.updateFilterOpened(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateFilterOpened(event.target.innerWidth);
  }

  updateFilterOpened(windowWidth: number) {
    this.filterOpened = windowWidth >= 600;
  }

  toggleFilter() {
    if (window.innerWidth >= 600) {
      this.filterOpened = !this.filterOpened;
      this.ngbCollapse.toggle();
      this.filterToggle.emit();
    } else {
      this.modalService.openModal();
      console.log("Abriu");
    }
  }

  changeSorting(option: number) {
    this.selectedItem = option; 
    this.sortingChanged.emit(option);
  }
}
