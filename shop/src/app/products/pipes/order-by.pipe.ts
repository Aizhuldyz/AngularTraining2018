import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product/product';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

transform(value: Array<Product>, sortByParameter: string, byDescending: boolean = true): any {
    switch (sortByParameter) {
        case 'name':
            if (byDescending) { 
                return value.sort((a, b) => b.name.localeCompare(a.name));
            }
            return value.sort((a, b) => a.name.localeCompare(b.name));
        case 'price':
        if (byDescending) { 
            return value.sort((a, b) => b.price - a.price);
        }
            return value.sort((a, b) => a.price - b.price);           
        default:
            break;
    }
    return value;
}

}