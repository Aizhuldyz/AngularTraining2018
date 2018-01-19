import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProductService } from './components/product/product.service';
import { CartService } from './components/cart/cart.service';

import { AppComponent } from './app.component';
import { ProductListComponent} from './components/product/product-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
