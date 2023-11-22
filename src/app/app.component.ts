import { Component, OnDestroy } from '@angular/core';
import { ModalPromocaoService } from './shared/components/modal-promocao/modal-promocao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  constructor(
    private modalService: ModalPromocaoService
  ) { }

  ngOnDestroy(): void {
    this.modalService.resetModalState();
  }
}
