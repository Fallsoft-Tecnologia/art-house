import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { WallpaperFilter } from 'src/app/shared/models/wallpaperFilter';
import { WallpaperResponse } from 'src/app/shared/models/wallpaperResponse';
import { environment } from 'src/config';
@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private baseUrl = environment.apiUrl.concat('/produto/filtro');

  private filtroSubject = new BehaviorSubject<WallpaperFilter>({ cores: [], caracteristicas: [] });
  filtroChange = this.filtroSubject.asObservable();

  private paginaSubject = new BehaviorSubject<number>(1);
  paginaChange = this.paginaSubject.asObservable();

  constructor(private http: HttpClient) { }

  listarCaracteristicas() {
    return this.http.get(`${this.baseUrl}/caracteristicas`);
  }

  listarCores() {
    return this.http.get(`${this.baseUrl}/cores`);
  }

  listrarProdutosFiltrados(filter: WallpaperFilter, page: number, size: number): Observable<WallpaperResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
  
    return this.http.post<WallpaperResponse>(`${this.baseUrl}`, filter, { params });
  }

  atualizarPagina(pagina: number) {
    this.paginaSubject.next(pagina);
  }

  private atualizarFiltro(filtro: WallpaperFilter) {
    this.filtroSubject.next(filtro);
  }

  getFiltro(): WallpaperFilter {
    return this.filtroSubject.getValue();
  }

  getCurrentPage(): number {
    return this.paginaSubject.value;
  }
  
  getPageSize(): number {
    return 20;
  }
}
