import { Component } from '@angular/core';

declare var gtag: Function;

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {
  trackWhatsappClick(): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-661767471/b5OSCNvm9-wZEK-Kx7sC'
      });
    }
  }
}
