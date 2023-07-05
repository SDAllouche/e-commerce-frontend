import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products! : Product[];
  errorMessage! : String;
  constructor(private productService :ProductService, private router : Router) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  public getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: data=>{
        this.products = data;
      },
      error : errorMessage => console.error(errorMessage)
    })
  }

  addProduct() {
    this.router.navigateByUrl("/addProduct")
  }

  deleteProduct(product:Product) {
    let conf =confirm("Do you want to delete this product?");
    if(conf==false) return;
    this.productService.deleteProduct(product.id).subscribe(()=>this.getAllProducts());
  }


  updateProduct(id: number) {
    this.router.navigateByUrl("/admin/updateCar/"+id)
  }


}
