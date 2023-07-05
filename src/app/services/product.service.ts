import { Injectable } from '@angular/core';
import {Product, ProductRequest} from "../models/product.model";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Product[];
  private errorMessage! : String;

  constructor(private route: Router,private http : HttpClient) {
    this.getAllProducts().subscribe({
      next: data=>{
        this.products = data;
      }
    });
  }

  public getAllProducts(){
    return  this.http.get<Product[]>("http://127.0.0.1:8000/api/products")
  }

  getProduct(id: number) {
    let product = this.products.find(p=>p.id==id)
    if(product )return of(product);
    else return throwError(()=>new Error("Product not found"));
  }

  saveProduct(product: ProductRequest):Observable<ProductRequest> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    this.http.post<ProductRequest>("http://127.0.0.1:8000/api/products",JSON.stringify(product),httpOptions);
    this.route.navigateByUrl("/products")
    return of(product);
  }

  updateCar(product:ProductRequest, id: number) {
    this.http.put<ProductRequest>("http://127.0.0.1:8000/api/products/"+id+"/update",product)
    this.route.navigateByUrl("/products")
    return of(product);
  }

  public deleteProduct(id:number) : Observable<void>{
    return this.http.delete<void>("http://127.0.0.1:8000/api/products/"+id+"/delete");
  }
}
