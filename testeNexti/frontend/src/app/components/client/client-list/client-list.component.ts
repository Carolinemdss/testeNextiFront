import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ClientListDatasource} from './client-list-datasource';
import {Client} from "../client.model";
import {ProductService} from "../../product/product.service";
import {ClientService} from "../client.service";
import {Product} from "../../product/product.model";

@Component({
  selector: 'app-client-list2',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements AfterViewInit, OnInit {

  clients!: Client[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Client>;
  dataSource: ClientListDatasource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'cpf', 'birthDate', 'action'];

  constructor(private clientService: ClientService) {
    this.dataSource = new ClientListDatasource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      this.clients = clients;
      console.log(clients)
    })
  }

}
