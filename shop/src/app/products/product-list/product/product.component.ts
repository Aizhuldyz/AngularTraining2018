import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product/product';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'product-item',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product: Product;        
}