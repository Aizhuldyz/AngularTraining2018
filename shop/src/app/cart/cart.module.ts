import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CartComponent, CartService } from '.';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [CartComponent],
  providers: [CartService ]
} )
export class CartModule { }