import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product';
import { CartItem } from '../../models/cart/CartItem';
import { CartComponent } from '../index';


@Injectable()
export class CartService {
    cartList: CartItem[];

    constructor() {
        this.cartList = new Array();
    }
    isEmpty(): boolean {
        return this.cartList.length > 0 ? false : true;
    }

    addToCart(product: Product): void {
        if (this.cartList.find(x => x.productId === product.productId)) {
            this.cartList.find(x => x.productId === product.productId).quantity += 1;
        }else {
            const cartItem: CartItem = {
                productId: product.productId,
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: 1
            }
            this.cartList.push(cartItem);
        }
    }

    increaseQuantity(productId: number): void {
        if (this.cartList.find(x => x.productId === productId)) {
            this.cartList.find(x => x.productId === productId).quantity += 1;
        }
    }

    decreaseQuantity(productId: number): void {
        if (this.cartList.find(x => x.productId === productId)) {
            this.cartList.find(x => x.productId === productId).quantity -= 1;
        }
        if (this.cartList.find(x => x.productId === productId).quantity === 0) {
            this.deleteFromCart(productId);
        }
    }

    deleteFromCart(productId: number): void {  
        const index = this.cartList.findIndex(x => x.productId === productId);
        this.cartList.splice(index, 1);
    }


    getProducts(): CartItem[] {
        if (this.cartList) {
            return this.cartList;
        }
        return new Array();
    }
}