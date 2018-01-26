import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../../models/cart/CartItem';
import { Product } from '../../models/product/product';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    private cartItems: CartItem[];
    constructor(private _cartService: CartService) {}
    
    isEmpty(): boolean {
        return this._cartService.isEmpty();
    }
    increaseQuantity(productId: number): void {
        this._cartService.increaseQuantity(productId);
    }

    decreaseQuantity(productId: number): void {
        this._cartService.decreaseQuantity(productId);
    }

    deleteFromCart(productId: number): void {
        this._cartService.deleteFromCart(productId);
    }

    addToCart(product: Product): void {
        this._cartService.addToCart(product);
    }

    ngOnInit() {
        this.cartItems = this._cartService.getProducts();
    }
}