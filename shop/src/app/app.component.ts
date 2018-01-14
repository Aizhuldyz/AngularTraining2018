import { Component } from '@angular/core';

import { ProductService } from './components/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = "Welcome to Shop!";
}
