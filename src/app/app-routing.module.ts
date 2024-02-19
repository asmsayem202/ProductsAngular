import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';

const routes: Routes = [
  { path: "", redirectTo: "/ProductCategory", pathMatch: "full" },
  { path: "ProductCategory", component: ProductListComponent },
  { path: "ProductCategory/create", component: CreateProductComponent },
  { path: "ProductCategory/:id/update", component: EditProductComponent },
  { path: "ProductCategory/edit/:id", component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
