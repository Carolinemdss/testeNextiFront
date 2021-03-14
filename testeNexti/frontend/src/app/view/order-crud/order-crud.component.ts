import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-order-crud',
  templateUrl: './order-crud.component.html',
  styleUrls: ['./order-crud.component.css']
})
export class OrderCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Pedidos',
      icon: 'shopping_cart',
      routeUrl: '/order'
    }
  }

  ngOnInit(): void {
  }

  navigateToOrderCreate(): void {
    this.router.navigate(['/order/create'])
  }

  navigateToOrderUpdate(): void {
    this.router.navigate(['/order/update'])
  }

  navigateToOrderDelete(): void {
    this.router.navigate(['/order/delete'])
  }

  navigateToOrderList(): void {
    this.router.navigate(['/order/list'])
  }
}
