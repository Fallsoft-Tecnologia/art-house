import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  filtroDivClass: string = 'container-filtro float-start w-100 d-none';

  constructor() {
    this.updateFiltroDivClass(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateFiltroDivClass((event.target as Window).innerWidth);
  }

  private updateFiltroDivClass(windowWidth: number) {
    this.filtroDivClass = windowWidth >= 600 ? 'container-filtro float-start w-100 d-block' : 'container-filtro float-start w-100 d-none';
  }
}
