import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ClientService} from "../../services/client.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Client} from "../../models/client.model";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  clients! : Client[];
  errorMessage! : String;
  constructor(private clientService :ClientService,private router : Router) {
  }

  ngOnInit() {
    this.getAllClients();
  }

  public getAllClients(){
    this.clientService.getAllClients().subscribe({
      next: data=>{
        this.clients = data;
      },
      error : errorMessage => console.error(errorMessage)
    })
  }

  addClient() {
    this.router.navigateByUrl("/addClient")
  }


}
