import { Component } from '@angular/core';
import { IconDefinition, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-papeis-de-parede',
  templateUrl: './papeis-de-parede.component.html',
  styleUrls: ['./papeis-de-parede.component.css']
})
export class PapeisDeParedeComponent {
  totalItems: number = 130;
  showFilter: boolean = true;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  changeSorting(event: any) {
    const selectedOption: string = event;
  }
}
