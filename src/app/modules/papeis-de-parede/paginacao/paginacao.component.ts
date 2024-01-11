import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FiltroService } from 'src/app/core/services/filtro.service';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit{  
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Output() pageChange = new EventEmitter<number>();
  @Output() filtroChange = new EventEmitter<void>();

  filtroSubscription: Subscription = new Subscription();
  paginaSubscription: Subscription = new Subscription();

  constructor(private filtroService: FiltroService) { }

  ngOnInit(): void {
    this.filtroSubscription = this.filtroService.filtroChange.subscribe(() => {
      this.currentPage = 1;
      this.pageChange.emit(1);
    });
  
    this.paginaSubscription = this.filtroService.paginaChange.subscribe((pagina: number) => {
      this.currentPage = pagina;
    });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
      this.filtroService.atualizarPagina(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
      this.filtroService.atualizarPagina(this.currentPage + 1);
    }
  }
  
  changePage(page: number) {
    this.pageChange.emit(page);
    this.filtroService.atualizarPagina(page);
  }

  getPages(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  // Adicione este método para emitir o evento de mudança de filtro
  onFiltroChange() {
    this.filtroChange.emit();
  }
}
