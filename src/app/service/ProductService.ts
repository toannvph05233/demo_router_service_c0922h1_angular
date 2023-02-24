import {Injectable} from '@angular/core';
import {Product} from "../model/Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:8080/products", product);
  }

  getAll() :Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/products");
  }


}
