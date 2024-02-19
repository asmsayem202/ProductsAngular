import { Component } from '@angular/core';
import { ProductCategoryServeService } from '../../Services/product-category-serve.service';
import { ProductCategory } from '../../Models/product-category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public ProductCategory: ProductCategory[] = [];
  constructor(private service: ProductCategoryServeService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.service.GetProducts().subscribe((response: ProductCategory[]) => {
      this.ProductCategory = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }




  DeleteProducts(product: ProductCategory) {
    let confirmDelete: boolean = confirm(`Delete ${product.name}?`);
    if (confirmDelete) {
      this.service.DeleteProduct(product.productCategoryID).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
