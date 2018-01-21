import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent{
    
    constructor(private _cartService: CartService) {}
    
    isEmpty(): boolean {
        return this._cartService.isEmpty();
    }
}