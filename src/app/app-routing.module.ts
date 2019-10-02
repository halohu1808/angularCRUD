import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductComponent} from './product/product.component';
import {CreateProductComponent} from './create-product/create-product.component';

const routes: Routes = [
  // { path: '/product', component: ProductComponent },
  // { path: '/create', component: CreateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
