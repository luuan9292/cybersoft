import { Product } from './product';

// interface dinh nghia cart
export interface CartItem {
    Product: Product;
    quantity: number;
}