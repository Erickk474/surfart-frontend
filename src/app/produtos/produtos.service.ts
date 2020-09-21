import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product/product'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService  {
  url: string;
  constructor(private http: HttpClient) {
    this.url = `${environment.urls.baseuUrl}/products`
   }

  getAllProducts(query: any): Observable<Product[]> {
    const url = `${this.url}`;
    return this.http.get<Product[]>(url, { params: query});
  }
  getByid(id: string): Observable<Product> {
    const url = `${this.url}/${id}`
    return this.http.get<Product>(url, { params: {}});
  }
  
}
