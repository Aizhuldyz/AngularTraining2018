import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProductListComponent, ProductService } from '.';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProductListComponent
  ],
  exports: [ProductListComponent],
  providers: [ProductService]
} )
export class ProductsModule { }