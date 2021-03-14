import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  constructor(private clientService: ClientService,
              private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Clientes',
      icon: 'person',
      routeUrl: '/clients'
    }
  }

  ngOnInit(): void {
  }

  updateClient (): void {
    this.clientService.showMessage('Alterações salvas!')
    this.router.navigate(['/clients'])
  }

  cancel (): void {
    this.router.navigate(['/clients'])
  }

}
