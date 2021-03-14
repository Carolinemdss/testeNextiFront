import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductListDatasource } from './product-list-datasource';
import {Product} from "../product.model";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit, OnInit {

  products!: Product[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductListDatasource;

  displayedColumns = ['id', 'SKU', 'name', 'description', 'price', 'quantity', 'action'];

  constructor(private productService: ProductService) {
    this.dataSource = new ProductListDatasource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  ngOnInit() {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products)
    })
  }
}
