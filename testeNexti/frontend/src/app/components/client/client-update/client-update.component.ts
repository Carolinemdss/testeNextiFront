import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";
import {Product} from "../../product/product.model";
import {Client} from "../client.model";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client!: Client

  constructor(private clientService: ClientService,
              private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clientService.readById(id).subscribe((client) => {
      this.client = client
    });
  }


  updateClient(): void {
    if (this.client.name == ''){
      this.clientService.showMessage('O campo nome é obrigatório!')
    } else if (this.client.cpf == ''){
      this.clientService.showMessage('O campo CPF é obrigatório!')
    } else if (this.client.cpf.length < 14){
      this.clientService.showMessage('CPF inválido!')
    } else {
      this.clientService.update(this.client).subscribe(() => {
        this.clientService.showMessage("Alterações salvas!");
        this.router.navigate(["/clients"]);
      });
    }
  }


  cancel (): void {
    this.router.navigate(['/clients'])
  }

}
