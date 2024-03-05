import { Component } from '@angular/core';
import { FiltroService } from 'src/app/core/services/filtro.service';
import { ModalService } from 'src/app/core/services/modal.service';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent {
  pageSize: number = 5;
  totalPages: number = 0;
  imageDataList: any[] = [];
  totalItems: number = 0;
  nomeProduto: string = '';
  descProduto: string = '';



  filtro = {
    cores: [],
    caracteristicas: [],
    ordenacao: 0
  };

  constructor(private filtroService: FiltroService,private modalService: ModalService) {
    
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

carregarProdutos(): void {
    this.filtroService.listrarProdutosFiltrados(this.filtro, 0, this.pageSize)
    .subscribe((response: any) => {
      this.imageDataList = response.content;
      this.totalPages = response.totalPages;
      this.totalItems = response.totalElements;
    })
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/png;base64,";
    return pathImage + byteArray;
  }

  openPapelIndividualModal(idProduto: string) {
    this.modalService.openModalWithImage(idProduto);
    this.loadProdutoInfo(idProduto)
    
  }

  
  private loadProdutoInfo(idProduto: string) {
    this.modalService.getProdutoInfo(idProduto).subscribe({
      next: (response: any) => {
        this.nomeProduto = response.nomeProduto;
        this.descProduto = response.descProduto;
      },
      error: (error) => {
        console.error('Erro ao obter informações do produto:', error);
      }
    });
  }
}
