import { Injectable } from '@angular/core';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {}

  sendConversion(sendTo: string) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: sendTo
      });
    }
  }

  sendEvent(eventName: string, eventParams: Record<string, any>) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }
  }
}
