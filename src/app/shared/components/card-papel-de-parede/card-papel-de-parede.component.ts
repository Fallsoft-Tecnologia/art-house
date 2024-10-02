import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-card-papel-de-parede',
  templateUrl: './card-papel-de-parede.component.html',
  styleUrls: ['./card-papel-de-parede.component.css']
})
export class CardPapelDeParedeComponent {
  @Input() imagePath: string = '';
  @Input() grupo: string = '';
  @Input() descProduto: string = '';
  @Input() nomeProduto: string = '';
  @Input() idProduto: string = '';
  @Input() aspectRatio: 'square' | 'rectangular' = 'square';

  imageSrc: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage();
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
    observer.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.imageSrc = this.imagePath;
  }
}
