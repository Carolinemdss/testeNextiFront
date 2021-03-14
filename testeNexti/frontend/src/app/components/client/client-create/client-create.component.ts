import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";
import {Client} from "../../client/client.model";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    id: 0,
    name: 'José',
    cpf: '12345678989',
    birthDate: '20/01/02'
  }

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

  createClient (): void {
    this.clientService.create(this.client).subscribe(() => {
    this.clientService.showMessage('Cliente cadastrado!')
    this.router.navigate(['/clients'])
    })
  }

  cancel (): void {
    this.router.navigate(['/clients'])
  }

}
