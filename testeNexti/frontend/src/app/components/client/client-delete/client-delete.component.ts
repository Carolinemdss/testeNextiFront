import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../client.model";

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  client!: Client

  constructor(private clientService: ClientService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.clientService.readById(id).subscribe((client) => {
      this.client = client
    });

  }

  deleteClient (): void {
    this.clientService.delete(this.client.id).subscribe(() => {
      this.clientService.showMessage("Cliente removido!");
      this.router.navigate(["/clients"]);
    });
  }



  cancel (): void {
    this.router.navigate(['/clients'])
  }

}
