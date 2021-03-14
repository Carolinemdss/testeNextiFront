import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";
import {Router} from "@angular/router";
import {Product} from "../../product/product.model";
import {Order} from "../order.model";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  //order: Order = {

 // }

  constructor(private orderService: OrderService,
              private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Pedidos',
      icon: 'shopping_cart',
      routeUrl: '/order'
    }
  }

  ngOnInit(): void {
  }

  createOrder (): void {
    //  this.orderService.create(this.order).subscribe(() => {
    this.orderService.showMessage('Pedido realizado!')
    this.router.navigate(['/order'])
    //  })
  }

  cancel (): void {
    this.router.navigate(['/order'])
  }
}
