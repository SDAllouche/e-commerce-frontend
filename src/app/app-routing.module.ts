import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {ProductComponent} from "./components/product/product.component";
import {CategoryComponent} from "./components/category/category.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {UpdateProductComponent} from "./components/update-product/update-product.component";

const routes: Routes = [
  {path : "clients" , component : ClientComponent},
  {path : "products" , component : ProductComponent},
  {path : "categories" , component : CategoryComponent},
  {path : "addProduct" , component : AddProductComponent},
  {path : "updateProduct" , component : UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
