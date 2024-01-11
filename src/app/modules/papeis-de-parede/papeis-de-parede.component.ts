import { Component, HostListener, OnInit } from '@angular/core';
import { FiltroService } from 'src/app/core/services/filtro.service';
import { WallpaperFilter } from 'src/app/shared/models/wallpaperFilter';

@Component({
  selector: 'app-papeis-de-parede',
  templateUrl: './papeis-de-parede.component.html',
  styleUrls: ['./papeis-de-parede.component.css']
})
export class PapeisDeParedeComponent implements OnInit {
  totalItems: number = 130;
  showFilter: boolean = true;
  currentPage: number = 1;

  constructor(private filtroService: FiltroService) {
    this.updateShowFilter(window.innerWidth);
  }

  ngOnInit(): void {
    const filtroInicial: WallpaperFilter = {
      cores: [''],
      caracteristicas: ['']
    };

    this.filtroService.filtrarWallpapers(filtroInicial, 1, 20).subscribe(data => {
      // Faça algo com os dados (por exemplo, atribua a uma propriedade no seu componente)
      console.log('Dados iniciais:', data);
    });
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

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.filtroService.atualizarPagina(newPage);
  }
}
