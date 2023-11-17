import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ModalPromocaoService } from 'src/app/shared/components/modal-promocao/modal-promocao.service';

declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  constructor(
    private modalService: ModalPromocaoService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  openModal(): void {
    console.log(this.modalService.shouldShowModal())
    $('#modalPromocao').modal('show');
    this.modalService.markModalAsShown();
  }

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'click', () => this.openModal());
  }
}
