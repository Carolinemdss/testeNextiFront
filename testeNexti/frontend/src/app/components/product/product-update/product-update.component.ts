import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from '@angular/router'
import {HeaderService} from "../../template/header/header.service";
import {Product} from "../product.model";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product

  constructor(private productService: ProductService,
              private router: Router, private headerService: HeaderService, private route: ActivatedRoute) {
    headerService.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Alterações salvas!");
      this.router.navigate(["/products"]);
    });
  }

  cancel (): void {
    this.router.navigate(['/products'])
  }
}
