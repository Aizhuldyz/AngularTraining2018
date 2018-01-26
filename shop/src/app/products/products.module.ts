import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProductListComponent, ProductService, ProductComponent} from '.';
import { AvailabilityCheckDirective } from './directives/availabilitycheck.directive';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProductListComponent, ProductComponent, AvailabilityCheckDirective
  ],
  exports: [ProductListComponent],
  providers: [ProductService]
} )
export class ProductsModule { }