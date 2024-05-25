// services/cartService.ts
import axios from 'axios';
import { Cart } from '../../../types/cart';

const API_URL = 'http://127.0.0.1:8000/api';

export const addToCart = async (token: string, productId: number, quantity: number) => {
    return await axios.post(
        `${API_URL}/cart/add`,
        { product_id: productId, quantity: quantity },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const getCart = async (token: string): Promise<Cart> => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const response = await axios.post(
        `${API_URL}/cart`,
        {
            email: email,
            password: password,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

export const updateCartItem = async (token: string, cartItemId: number, quantity: number) => {
    return await axios.post(
        `${API_URL}/cart/update`,
        { cart_item_id: cartItemId, quantity: quantity },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const removeCartItem = async (token: string, cartItemId: number) => {
    return await axios.post(
        `${API_URL}/cart/remove`,
        { cart_item_id: cartItemId },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
