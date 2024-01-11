import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  @Input() imageDataList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/png;base64,";
    return pathImage + byteArray;
  }
}
