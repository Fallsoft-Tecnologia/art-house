import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FiltroService } from 'src/app/core/services/filtro.service';
import { FiltroModalService } from 'src/app/core/services/filtroModal.service';
import { WallpaperFilter } from 'src/app/shared/models/wallpaperFilter';

declare var $: any;

@Component({
  selector: 'app-filtro-modal',
  templateUrl: './filtro-modal.component.html',
  styleUrls: ['./filtro-modal.component.css']
})
export class FiltroModalComponent implements OnInit {

  cores: { idCor: number, nomeCor: string, imgCor: Uint8Array }[] = [];
  tipos: { idCaracteristicas: number, nomeCaracterisiticas: string, imgCaracteristicas: Uint8Array }[] = [];

  @Input() filtro: WallpaperFilter = {
    cores: [],
    caracteristicas: [],
  };

  @Output() filtroChanged = new EventEmitter<WallpaperFilter>();


  constructor(private modalService: FiltroModalService, private filtroService: FiltroService) { }

  ngOnInit() {
    this.modalService.getModalOpen().subscribe((open) => {
      console.log("teste");
      if (open) {
        console.log("Abriu 3");
        this.openModal();
        this.carregarCoresETipos();

      }
    });
  }

  openModal() {
    $('#filtroModal').modal('show');
  }

  closeModal() {
    $('#filtroModal').modal('hide');
  }

  carregarCoresETipos() {
    this.filtroService.listarCores().subscribe(data => {
      this.cores = data as { idCor: number, nomeCor: string, imgCor: Uint8Array }[];
    });

    this.filtroService.listarCaracteristicas().subscribe(data => {
      this.tipos = data as { idCaracteristicas: number, nomeCaracterisiticas: string, imgCaracteristicas: Uint8Array }[];
    });
  }


  toggleFiltro(nome: string, tipo: 'cores' | 'caracteristicas'): void {
    if (this.filtro[tipo]?.includes(nome)) {
      this.filtro[tipo] = this.filtro[tipo]?.filter(item => item !== nome);
    } else {
      this.filtro[tipo]?.push(nome);
    }

    console.log(this.filtro)
    this.emitFiltroChange();
  }
  emitFiltroChange(): void {
    this.filtroChanged.emit(this.filtro);
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/png;base64,";
    return pathImage + byteArray;
  }
}
