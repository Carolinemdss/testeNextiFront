import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";
import {Product} from "../product.model";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product

  constructor(private productService: ProductService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct (): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto removido!");
      this.router.navigate(["/products"]);
    });
  }

  cancel (): void {
    this.router.navigate(['/products'])
  }

}
