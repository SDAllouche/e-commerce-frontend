import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProductFormGroup!: FormGroup;

  constructor(private fb :FormBuilder, private productService: ProductService) {
  }

  saveProduct() {
    let product=this.newProductFormGroup.value;
    this.productService.saveProduct(product).subscribe({
      next :(data)=>{
        alert("Product saved successfully");
        this.newProductFormGroup.reset();
      }
    });
  }

  ngOnInit(): void {
    this.newProductFormGroup=this.fb.group({
      name : this.fb.control(null,[Validators.required]),
      slug : this.fb.control(null, [Validators.required]),
      stock : this.fb.control(0,[Validators.required]),
      category : this.fb.control(null,[Validators.required])
    });
  }
}
