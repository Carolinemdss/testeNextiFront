import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {Observable} from "rxjs";
import {Client} from "../client/client.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = "http://localhost:4000/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 2500,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
  }

  readById(id: string): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.productUrl}/${product.id}`;
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<Product>(url)
  }
}
