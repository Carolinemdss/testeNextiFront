import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Client} from "./client.model";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientUrl = "http://localhost:4000/clients"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 2500,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(client: Client): Observable<Client> {
   return this.http.post<Client>(this.clientUrl, client)
  }
}
