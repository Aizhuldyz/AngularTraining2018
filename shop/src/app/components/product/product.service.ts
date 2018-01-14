import { Injectable } from '@angular/core';

import { Product } from './product';
@Injectable()
export class ProductService {
    getProducts(): Product[] {
        return [
            {
                'productId': 1,
                'name': 'Flour Elite',
                'description': 'Flour imported from Slovakia',
                'price': 19.95,
                'category': 1,
                'isAvailable' : true,
                'ingredients': ['flour', 'conservant E']
            },
            {
                'productId': 2,
                'name': 'Instant Porridge',
                'description': 'An instant porridge made in 3 minutes',
                'price': 29.95,
                'category': 1,
                'isAvailable' : true,
                'ingredients': ['whole grained oat', 'conservant E']
            },
            {
                'productId': 3,
                'name': 'Jam Whole',
                'description': 'Organic jam made with organically grown blueberries',
                'price': 190.95,
                'category': 1,
                'isAvailable' : true,
                'ingredients': ['blueberry', 'sugar', 'water', 'conservant E']
            },
            {
                'productId': 4,
                'name': 'Butter Elite',
                'description': 'Butter made with organic whole milk',
                'price': 23,
                'category': 2,
                'isAvailable' : true,
                'ingredients': ['milk', 'salt']
            },
            {
                'productId': 5,
                'name': 'Canned Tomato',
                'description': 'Canned tomato organic',
                'price': 58.96,
                'category': 2,
                'isAvailable' : true,
                'ingredients': ['tomato']
            },
        ];
    }
}
