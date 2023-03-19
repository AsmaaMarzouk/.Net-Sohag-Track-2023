import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  httpHeader = {};

  constructor(private httpClient: HttpClient) {
    this.httpHeader = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }

  getAllProducts(): Observable<Iproduct[]> {
    // return this.httpClient.get<Iproduct[]>('http://localhost:3000/products')
    return this.httpClient.get<Iproduct[]>(`${environment.APIURL}/products`);
  }

  getProductsByCatId(catid: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.APIURL}/products?catID=${catid}`
    );
  }

  getProductByID(prodID: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.APIURL}/products/${prodID}`
    );
  }

  addNewProduct(prd: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(
      `${environment.APIURL}/products`,
      JSON.stringify(prd),this.httpHeader
    );
  }
}
