import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FiltroService } from 'src/app/core/services/filtro.service';
import { WallpaperFilter } from 'src/app/shared/models/wallpaperFilter';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  cores: { idCor: number, nomeCor: string, imgCor: Uint8Array }[] = [];
  tipos: { idCaracteristicas: number, nomeCaracterisiticas: string, imgCaracteristicas: Uint8Array }[] = [];

  @Input() filtro: WallpaperFilter = {
    cores: [],
    caracteristicas: [],
  };

  @Output() filtroChanged = new EventEmitter<WallpaperFilter>();

  filtroDivClass: string = 'container-filtro float-start w-100 d-none';
  coresCarregadas = false;
  tiposCarregados = false;

  constructor(private filtroService: FiltroService) {
    this.updateFiltroDivClass(window.innerWidth);
  }

  ngOnInit(): void {
    // Remova a chamada inicial para carregar os dados.
  }

  carregarCores(): void {
    this.filtroService.listarCores().subscribe(data => {
      this.cores = data as { idCor: number, nomeCor: string, imgCor: Uint8Array }[];
      this.coresCarregadas = true;
    });
  }

  carregarTipos(): void {
    this.filtroService.listarCaracteristicas().subscribe(data => {
      this.tipos = data as { idCaracteristicas: number, nomeCaracterisiticas: string, imgCaracteristicas: Uint8Array }[];
      this.tiposCarregados = true;
    });
  }

  onCollapseOpened(tipo: 'cores' | 'tipos'): void {
    if (tipo === 'cores' && !this.coresCarregadas) {
      this.carregarCores();
    } else if (tipo === 'tipos' && !this.tiposCarregados) {
      this.carregarTipos();
    }
  }

  toggleFiltro(nome: string, tipo: 'cores' | 'caracteristicas'): void {
    if (this.filtro[tipo]?.includes(nome)) {
      this.filtro[tipo] = this.filtro[tipo]?.filter(item => item !== nome);
    } else {
      this.filtro[tipo]?.push(nome);
    }

    console.log(this.filtro);
    this.emitFiltroChange();
  }

  emitFiltroChange(): void {
    this.filtroChanged.emit(this.filtro);
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/png;base64,";
    return pathImage + byteArray;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateFiltroDivClass((event.target as Window).innerWidth);
  }

  private updateFiltroDivClass(windowWidth: number) {
    this.filtroDivClass = windowWidth >= 600 ? 'container-filtro float-start w-100 d-block' : 'container-filtro float-start w-100 d-none';
  }
}
