import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import { Router } from '@angular/router'
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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

  updateProduct (): void {
    this.productService.showMessage('Alterações salvas!')
    this.router.navigate(['/clients'])

  }

  cancel (): void {
    this.router.navigate(['/products'])
  }
}
