import { Injectable } from '@angular/core';
import {Client} from "../models/client.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients! : Client[];
  private errorMessage! : String;

  constructor(private route: Router,private http : HttpClient) {
    this.getAllClients().subscribe({
      next: data=>{
        this.clients = data;
      }
    });
  }

  public getAllClients(){
    return  this.http.get<Client[]>("http://127.0.0.1:8000/api/clients")
  }

  getClient(id: number) {
    let client = this.clients.find(p=>p.id==id)
    if(client )return of(client);
    else return throwError(()=>new Error("Client not found"));
  }

  saveClient(client: Client):Observable<Client> {
    this.http.post<Client>("http://127.0.0.1:8000/api/clients",client);
    this.route.navigateByUrl("/clients")
    return of(client);
  }

}
