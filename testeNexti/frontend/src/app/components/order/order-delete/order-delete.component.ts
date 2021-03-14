import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})
export class OrderDeleteComponent implements OnInit {

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
  }

  deleteOrder (): void {
    this.orderService.showMessage('Pedido removido!')
  }

  cancel (): void {
    this.router.navigate(['/order'])
  }
}
