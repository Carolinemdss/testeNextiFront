import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import { Router } from '@angular/router'
import {Product} from "../product.model";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id:0,
    SKU: 0,
    name: '',
    description: '',
    price: 0 ,
    quantity: 0
  }

  constructor(private productService: ProductService,
              private router: Router, private headerService:HeaderService) {
    headerService.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  createProduct (): void {
    if ( !this.product.SKU || this.product.SKU == 0){
      this.productService.showMessage('O campo SKU é obrigatório!')
    } else if (this.product.name == ''){
      this.productService.showMessage('O campo nome é obrigatório!')
    } else if (!this.product.price || this.product.price == 0){
      this.productService.showMessage('O campo preço é obrigatório!')
    } else {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage('Producto cadastrado!')
        this.router.navigate(['/products'])
      })
    }
  }

  cancel (): void {
    this.router.navigate(['/products'])
  }

}
