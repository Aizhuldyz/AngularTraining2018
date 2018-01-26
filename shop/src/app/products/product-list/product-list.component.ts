import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../../models/product/product';
import { ProductService } from '../services/product.service';


@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    @Output() addItemToCart: EventEmitter<Product> = new EventEmitter<Product>();
    pageTitle = 'Product List';
    products: Product[];
    filteredProducts: Product[];

    _listFilter: string;
    private get listFilter(): string {
        return this._listFilter;
    }

    private set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? 
                this.performFilter(this.listFilter) : this.products;
    }

    constructor ( private _productService: ProductService) {}

    private performFilter(listFilter: string): Product[] {
        listFilter = listFilter.toLocaleLowerCase();
        return this.products.filter((product: Product) =>
        product.name.toLocaleLowerCase().indexOf(listFilter) !== -1);
    }

    addToCart(product: Product): void {
        console.log('product with id: ' + product.productId + ' is added to cart');
        this.addItemToCart.emit(product);
    }

    ngOnInit() {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
}