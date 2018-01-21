import { Injectable } from '@angular/core';


@Injectable()
export class CartService {
    cartList: number[];

    isEmpty(): boolean {
        return this.cartList ? false : true;
    }

    addToCart(productId: number): void {
        this.cartList.push(productId);
    }

    getProducts(): number[] {
        return this.cartList;
    }
}