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
    private totalSum: number;
    constructor(private _cartService: CartService) {}
    
    isEmpty(): boolean {
        return this._cartService.isEmpty();
    }
    increaseQuantity(productId: number): void {
        this._cartService.increaseQuantity(productId);
        this.totalSum = this._cartService.getTotal();
    }

    decreaseQuantity(productId: number): void {
        this._cartService.decreaseQuantity(productId);
        this.totalSum = this._cartService.getTotal();
    }

    deleteFromCart(productId: number): void {
        this._cartService.deleteFromCart(productId);
        this.totalSum = this._cartService.getTotal();
    }

    addToCart(product: Product): void {
        this._cartService.addToCart(product);
        this.totalSum = this._cartService.getTotal();
    }

    ngOnInit() {
        this.cartItems = this._cartService.getProducts();
    }
}