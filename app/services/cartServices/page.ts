// services/cartService.ts
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const addToCart = async (token: string, productId: number, quantity: number) => {
    return await axios.post(
        `${API_URL}/cart/add`,
        { product_id: productId, quantity },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const getCart = async (token: string) => {
    return await axios.get(`${API_URL}/cart`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const updateCartItem = async (token: string, cartItemId: number, quantity: number) => {
    return await axios.post(
        `${API_URL}/cart/update`,
        { cart_item_id: cartItemId, quantity },
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
