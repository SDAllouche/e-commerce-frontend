import {Component, OnInit} from '@angular/core';
import {Client} from "../../models/client.model";
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categories! : Category[];
  errorMessage! : String;
  constructor(private categoryService :CategoryService,private router : Router,private http : HttpClient) {
  }

  ngOnInit() {
    this.getAllCategories()
  }

  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: data=>{
        this.categories = data;
      },
      error : errorMessage => console.error(errorMessage)
    })
  }

  addCategory() {
    this.router.navigateByUrl("/addCategory")
  }
}
