import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../Models/product-category';
import { ProductCategoryServeService } from '../../Services/product-category-serve.service';
import { Router } from '@angular/router';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {


  public model!: ProductCategory;


  constructor(private Service: ProductCategoryServeService, private router: Router) {

  }
  ngOnInit(): void {


    this.model = new ProductCategory();

  }


  OnSubmit() {

    this.Service.SaveProduct(this.model).subscribe({
      next: () => {
        this.router.navigate([""]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  AddProduct() {

    this.model.products.push(new Product());

  }

  DeleteProduct(index: number) {

    const remItem = this.model.products.splice(index, 1);
  }
}
