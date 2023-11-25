import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ModalPromocaoService } from 'src/app/shared/components/modal-promocao/modal-promocao.service';

declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  constructor(
    private modalService: ModalPromocaoService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  openModal(): void {
    $('#modalPromocao').modal('show');
    this.modalService.markModalAsShown();
  }

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'click', () => this.openModal());
  }
}
