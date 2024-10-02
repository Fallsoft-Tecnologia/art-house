import { Component } from '@angular/core';
import { FiltroService } from 'src/app/core/services/filtro.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { NotificacaoService, TipoNotificacao } from 'src/app/shared/components/notificacao/notificacao.service';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent {
  pageSize: number = 4;
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


  isLoading:boolean = true;

  constructor(private filtroService: FiltroService,private modalService: ModalService,private notificacaoService: NotificacaoService) {
    
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

carregarProdutos(): void {
  this.isLoading = true;
    this.filtroService.listrarProdutosFiltrados(this.filtro, 0, this.pageSize)
    .subscribe({
      next: (response: any) => {
        this.imageDataList = response.content;
        this.totalPages = response.totalPages;
        this.totalItems = response.totalElements;
        this.isLoading = false; 
      },
      error: (err) => {
        this.handleError(err);
      }
    });
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/webp;base64,";
    return pathImage + byteArray;
  }

  openPapelIndividualModal(idProduto: string) {
    this.modalService.openModalWithImage(idProduto);
    this.loadProdutoInfo(idProduto)
    
  }
  private handleError(error: any): void {
    this.isLoading = false;
    this.notificacaoService.mostrarNotificacao('Erro ao listar as imagens. Por favor, tente novamente.', TipoNotificacao.Erro);
    console.error('Erro ao enviar mensagem:', error);
   

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
