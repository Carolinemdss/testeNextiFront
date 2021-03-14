import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService,
              private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  deleteProduct (): void {
    this.productService.showMessage('Produto removido!')
    this.router.navigate(['/products'])
  }

  cancel (): void {
    this.router.navigate(['/products'])
  }

}
