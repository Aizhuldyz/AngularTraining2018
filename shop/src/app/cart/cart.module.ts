import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CartComponent, CartService, CartItemComponent } from '.';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CartComponent, CartItemComponent
  ],
  exports: [CartComponent],
  providers: [CartService ]
} )
export class CartModule { }