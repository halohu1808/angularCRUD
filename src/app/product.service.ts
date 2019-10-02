import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://127.0.0.1:8000/api/productList';
  constructor(private http: HttpClient) { }

  getProductList(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.url);
  }

  createProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>('http://127.0.0.1:8000/api/store', product);
  }
}
