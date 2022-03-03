import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './IProduct';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, Product, httpOptions);
  }

  updateProduct(Product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${Product.id}`;
    return this.http.put<Product>(url, Product, httpOptions);
  }

  deleteProduct(Product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${Product.id}`;
    return this.http.delete<Product>(url);
  }
}
