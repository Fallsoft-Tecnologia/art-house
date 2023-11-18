import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  @Input() itemCount: number = 0;
  @Output() filterToggle = new EventEmitter<boolean>();
  @Output() sortingChanged = new EventEmitter<string>();

  filterOpened: boolean = false;

  toggleFilter() {
    this.filterOpened = !this.filterOpened;
    this.filterToggle.emit();
  }

  changeSorting(option: string) {
    this.sortingChanged.emit(option);
  }

}
