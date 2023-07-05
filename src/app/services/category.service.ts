import { Injectable } from '@angular/core';
import {Client} from "../models/client.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories! : Category[];
  private errorMessage! : String;

  constructor(private route: Router,private http : HttpClient) {
    this.getAllCategories().subscribe({
      next: data=>{
        this.categories = data;
      }
    });
  }

  public getAllCategories(){
    return  this.http.get<Client[]>("http://127.0.0.1:8000/api/categories")
  }

  getClient(id: number) {
    let category = this.categories.find(p=>p.id==id)
    if(category )return of(category);
    else return throwError(()=>new Error("Category not found"));
  }

  saveCategory(category: Category):Observable<Category> {
    this.http.post<Category>("http://127.0.0.1:8000/api/category",category);
    this.route.navigateByUrl("/categories");
    return of(category);
  }
}
