import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";


@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

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

  updateOrder (): void {
    this.orderService.showMessage('Alterações salvas!')
  }

  cancel (): void {
    this.router.navigate(['/order'])
  }

}
