import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cart/CartItem';


@Component({
    selector: 'cart-item',
    templateUrl: './cartitem.component.html'
})
export class CartItemComponent {
    @Input() cartItem: CartItem;  
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();
    @Output() increase:  EventEmitter<number> = new EventEmitter<number>();
    @Output() decrease: EventEmitter<number> = new EventEmitter<number>();

    deleteFromCart(cartItemId: number): void {
        this.delete.emit(cartItemId);
    }

    decreaseQuantity(cartItemId: number): void {
        this.decrease.emit(cartItemId);
    }

    increaseQuantity(cartItemId: number): void {
        this.increase.emit(cartItemId);
    }
}