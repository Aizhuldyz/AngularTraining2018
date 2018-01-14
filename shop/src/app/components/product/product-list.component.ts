import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    products: Product[];

    constructor ( private _productService: ProductService) {}

    ngOnInit() {
        this.products = this._productService.getProducts();
    }
}