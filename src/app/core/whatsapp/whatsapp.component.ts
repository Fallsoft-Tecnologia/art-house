import { Component } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

declare var gtag: Function;

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {
  constructor(private analytics: AnalyticsService) {}

  trackWhatsappClick() {
    this.analytics.sendConversion('AW-661767471/b5OSCNvm9-wZEK-Kx7sC');
  }
}
