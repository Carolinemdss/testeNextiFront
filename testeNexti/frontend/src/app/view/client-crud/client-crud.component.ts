import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Clientes',
      icon: 'person',
      routeUrl: '/clients'
    }
  }

  ngOnInit(): void {
  }

  navigateToClientCreate(): void {
    this.router.navigate(['/clients/create'])
  }

  navigateToClientUpdate(): void {
    this.router.navigate(['/clients/update'])
  }

  navigateToClientDelete(): void {
    this.router.navigate(['/clients/delete'])
  }

  navigateToClientList(): void {
    this.router.navigate(['/clients/list'])
  }
}
