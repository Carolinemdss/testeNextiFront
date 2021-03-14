import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  constructor(private clientService: ClientService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  deleteClient (): void {
    this.clientService.showMessage('Cliente removido!')
    this.router.navigate(['/clients'])
  }

  cancel (): void {
    this.router.navigate(['/clients'])
  }

}
