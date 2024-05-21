import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FiltroService } from 'src/app/core/services/filtro.service';
import { WallpaperFilter } from 'src/app/shared/models/wallpaperFilter';

@Component({
  selector: 'app-papeis-de-parede',
  templateUrl: './papeis-de-parede.component.html',
  styleUrls: ['./papeis-de-parede.component.css']
})
export class PapeisDeParedeComponent implements OnInit {
  imageDataList: any[] = [];
  totalItems: number = 0;
  showFilter: boolean = true;
  currentPage: number = 1;
  pageSize: number = 20;
  totalPages: number = 0;
  filtro: WallpaperFilter = {
    cores: [],
    caracteristicas: [],
    ordenacao: 0
  };

  isLoading: boolean = true;


  @ViewChild('papeisDeParedeContainer') papeisDeParedeContainer!: ElementRef;

  constructor(private filtroService: FiltroService) {
    this.updateShowFilter(window.innerWidth);
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.filtroService.listrarProdutosFiltrados(this.filtro, this.currentPage - 1, this.pageSize)
    .subscribe((response: any) => {
      this.isLoading = true
      this.imageDataList = response.content;
      this.totalPages = response.totalPages;
      this.totalItems = response.totalElements;
      this.isLoading = false
    })
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.carregarProdutos();
    this.scrollContainerToTop();
  }

  onFiltroChanged(novoFiltro: WallpaperFilter): void {
    this.filtro = novoFiltro;
    this.currentPage = 1;
    this.carregarProdutos();
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

  changeSorting(option: number) {
    this.filtro.ordenacao = option;
    this.carregarProdutos();
  }
  

  scrollContainerToTop() {
    const containerElement = this.papeisDeParedeContainer.nativeElement;
    containerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
