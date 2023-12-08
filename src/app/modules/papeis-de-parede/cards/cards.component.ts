import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  imageDataList: any[] = [];
  currentPage = 0;
  totalPages = 0;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.loadImages();

    
  }
 

  loadImages(): void {

    const requestBody = {
      cores: [],
      caracteristicas: []
    };
  
    // Chame a API ou serviço para obter os dados paginados
    this.http.post(`http://localhost:8080/api/produto/filtro?page=${this.currentPage}&size=20`,requestBody, { observe: 'response' }).subscribe((response: any) => {
      this.imageDataList = response.body.content;
      this.totalPages = response.body.totalPages;
    });
  }
  

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/png;base64,";
    return pathImage + byteArray;
  }
  

  getPages(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  changePage(page: number): void {
    console.log(page)
    const internalPage = page - 1; // Subtrai 1 para ajustar internamente
    if (internalPage >= 0 && internalPage < this.totalPages) {
      this.currentPage = internalPage;
      this.loadImages();
    }else{
      this.currentPage = 0;

      this.loadImages();
    }
  }

}
