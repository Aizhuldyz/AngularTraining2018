import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product/product';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'product-item',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    @Input() product: Product;  
    @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

    onBuy(product: Product): void {
        this.addToCart.emit(product);
    }

    setClasses() {
        const classes = {
            unbuyable: !this.product.isAvailable
        }
        return classes;
    }
}