import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  @Input() itemCount: number = 0;
  @Output() filterToggle = new EventEmitter<void>();
  @Output() sortingChanged = new EventEmitter<string>();

  filterOpened: boolean = true;

  constructor(private ngbCollapse: NgbCollapse) {}

  toggleFilter() {
    this.filterOpened = !this.filterOpened;
    this.ngbCollapse.toggle();
    this.filterToggle.emit();
  }

  changeSorting(option: string) {
    this.sortingChanged.emit(option);
  }

}
