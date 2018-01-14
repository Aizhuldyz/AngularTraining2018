import { Component } from '@angular/core';

import { ProductService } from './components/product/product.service';
import { CartService } from './components/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService]
})
export class AppComponent {
  pageTitle: string = "Welcome to Shop!";
}
