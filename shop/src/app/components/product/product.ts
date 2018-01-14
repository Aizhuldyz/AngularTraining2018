export enum Category {
    Imported, Local
}
export interface Product {
    productId: number;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: Category;
    ingredients: string[];
}