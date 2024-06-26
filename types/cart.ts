import { ProductType } from './product';

export interface CartItem {
    id: number;
    product_id: number;
    quantity: number;
    product: ProductType;
}

export interface Cart {
    id: number;
    user_id: number;
    items: CartItem[];
}
