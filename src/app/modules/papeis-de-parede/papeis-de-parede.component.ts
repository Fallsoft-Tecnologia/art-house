import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-papeis-de-parede',
  templateUrl: './papeis-de-parede.component.html',
  styleUrls: ['./papeis-de-parede.component.css']
})
export class PapeisDeParedeComponent {
  totalItems: number = 130;
  showFilter: boolean = true;

  constructor() {
    this.updateShowFilter(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateShowFilter((event.target as Window).innerWidth);
  }

  private updateShowFilter(windowWidth: number) {
    this.showFilter = windowWidth >= 600;
  }

  toggleFilter() {
    if (window.innerWidth >= 600) {
      this.showFilter = !this.showFilter;
    }
  }

  changeSorting(event: any) {
    const selectedOption: string = event;
  }
}
