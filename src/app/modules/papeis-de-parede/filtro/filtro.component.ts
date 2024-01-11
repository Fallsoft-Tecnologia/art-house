import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { FiltroService } from 'src/app/core/services/filtro.service';
import { WallpaperFilter } from 'src/app/shared/models/wallpaperFilter';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  cores: { idCor: number, nomeCor: string }[] = [];
  tipos: { idCaracteristicas: number, nomeCaracterisiticas: string, imgCaracteristicas: string }[] = [];
  selectedCores: number[] = [];
  selectedTipos: number[] = [];

  filtroDivClass: string = 'container-filtro float-start w-100 d-none';

  constructor(private filtroService: FiltroService) {
    this.updateFiltroDivClass(window.innerWidth);
  }

  ngOnInit(): void {
    this.carregarCoresETipos();
  }

  carregarCoresETipos() {
    this.filtroService.listarCores().subscribe(data => {
      this.cores = data as { idCor: number, nomeCor: string, imgCor: string }[];
    });
  
    this.filtroService.listarCaracteristicas().subscribe(data => {
      this.tipos = data as { idCaracteristicas: number, nomeCaracterisiticas: string, imgCaracteristicas: string }[];
    });
  }

  aplicarFiltro() {
    console.log('Selected Cores:', this.selectedCores);
    console.log('Selected Tipos:', this.selectedTipos);

    const filtro: WallpaperFilter = {
      cores: this.selectedCores.map(id => id.toString()),
      caracteristicas: this.selectedTipos.map(id => id.toString())
    };

    console.log('Filtro:', filtro);

    this.filtroService.filtrarWallpapers(filtro, 1, 20).subscribe(data => {
      console.log('Resultado do Filtro:', data);
      // Atualize os dados dos papéis de parede no componente Cards (pode ser utilizando um serviço ou EventEmitter)
    });
  }

  toggleCor(idCor: number) {
    if (this.selectedCores.includes(idCor)) {
      this.selectedCores = this.selectedCores.filter(id => id !== idCor);
    } else {
      this.selectedCores.push(idCor);
    }
    this.aplicarFiltro();
  }

  toggleTipo(idTipo: number) {
    if (this.selectedTipos.includes(idTipo)) {
      this.selectedTipos = this.selectedTipos.filter(id => id !== idTipo);
    } else {
      this.selectedTipos.push(idTipo);
    }
    this.aplicarFiltro();
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
