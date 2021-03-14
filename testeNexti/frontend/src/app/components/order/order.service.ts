import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Order} from "./order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderUrl = "http://localhost:4200/order"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 2500,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, order)
  }
}
