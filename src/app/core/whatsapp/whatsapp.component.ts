import { Component } from '@angular/core';

declare var gtag: Function;

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {
  trackWhatsappClick(): void {
    gtag('event', 'conversion', {
      send_to: 'AW-661767471/b5OSCNvm9-wZEK-Kx7sC',
      event_category: 'engagement',
      event_label: 'WhatsApp Button',
      value: 1
    });
    console.log('WhatsApp click tracked!');
  }
}
