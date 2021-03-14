import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = "http://localhost:4000/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 2500,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl)
  }


}
