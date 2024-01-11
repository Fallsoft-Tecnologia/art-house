import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FiltroService } from 'src/app/core/services/filtro.service';
import { WallpaperFilter } from 'src/app/shared/models/wallpaperFilter';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  imageDataList: any[] = [];

  filtroSubscription: Subscription = new Subscription();

  constructor(private filtroService: FiltroService) { }

  ngOnInit(): void {
    this.filtroSubscription = this.filtroService.filtroChange.subscribe(() => this.loadImages());
    this.loadImages();
  }

  ngOnDestroy(): void {
    this.filtroSubscription.unsubscribe();
  }

  loadImages(): void {
    const { getCurrentPage, getPageSize, getFiltro } = this.filtroService;

    this.filtroService.filtrarWallpapers(getFiltro(), getCurrentPage(), getPageSize()).subscribe(data => {
      this.imageDataList = data.content;
    });
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/png;base64,";
    return pathImage + byteArray;
  }
}
