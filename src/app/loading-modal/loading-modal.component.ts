import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  template: `
    <div class="loading-modal-background"></div>
    <div class="loading-modal">
      <app-loading-spinner/>
    </div>
  `,
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent {}
