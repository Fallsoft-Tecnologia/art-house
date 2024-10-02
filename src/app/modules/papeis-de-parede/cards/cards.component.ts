import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  @Input() imageDataList: any[] = [];
  nomeProduto: string = '';
  descProduto: string = '';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/webp;base64,";
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
  
        console.log(this.nomeProduto);
        console.log(this.descProduto);
      },
      error: (error) => {
        console.error('Erro ao obter informações do produto:', error);
      }
    });
  }
}
