import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product';
import { CartItem } from '../../models/cart/cart-item.model';
import { CartComponent } from '../index';


@Injectable()
export class CartService {
    cartList: CartItem[];
    totalQuantity: number;
    totalSum: number;

    constructor() {
        this.cartList = new Array();
        this.totalQuantity = 0;
        this.totalSum = 0;
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
        this.totalQuantity++; 
        this.totalSum += product.price;
    }

    increaseQuantity(productId: number): void {
        if (this.cartList.find(x => x.productId === productId)) {
            this.cartList.find(x => x.productId === productId).quantity += 1;
        }
        this.totalQuantity++;
        this.totalSum += this.cartList.find(x => x.productId === productId).price;
    }

    decreaseQuantity(productId: number): void {
        if (this.cartList.find(x => x.productId === productId)) {
            this.cartList.find(x => x.productId === productId).quantity -= 1;
            this.totalQuantity--;
            this.totalSum -= this.cartList.find(x => x.productId === productId).price;
        }
        if (this.cartList.find(x => x.productId === productId).quantity === 0) {
            this.deleteFromCart(productId);
        }
    }

    deleteFromCart(productId: number): void {  
        const cartItem = this.cartList.find(x => x.productId === productId);
        const index = this.cartList.findIndex(x => x.productId === productId);
        this.cartList.splice(index, 1);
        this.totalQuantity -= cartItem.quantity;
        this.totalSum -= (cartItem.price) * (cartItem.quantity);
        if (this.totalQuantity === 0) {
            this.totalSum = 0;
        }
    }


    getProducts(): CartItem[] {
        if (this.cartList) {
            return this.cartList;
        }
        return new Array();
    }

    getTotal(): number {
        return this.totalSum;     
    }

    getTotalQuantity(): number {
        return this.totalQuantity;
    }

    addToCartWithQuantity(product: Product, quantity: number): void {
        for (let i = 0; i < quantity; i++) {
            this.addToCart(product);
        }
    }

    deleteEntireCart() {
        this.cartList = new Array();
        this.totalQuantity = 0;
        this.totalSum = 0;
    }
}