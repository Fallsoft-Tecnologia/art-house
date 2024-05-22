import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../core/services/loading.service'; // Importe o serviço de loading

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoading(); // Exibe o indicador de loading antes de fazer a requisição

    return next.handle(req).pipe(
      finalize(() => {
        this.loadingService.hideLoading(); // Oculta o indicador de loading após a requisição ser concluída
      })
    );
  }
}
