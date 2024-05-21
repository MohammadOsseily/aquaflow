'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Product {
    label: string;
    description?: string;
    price: number;
    stock: number;
    sku: string;
    image: string;
}

const ProductCreate: React.FC = () => {
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [sku, setSku] = useState('');
    const [image, setImage] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: Product = { label, description, price, stock, sku, image };
        try {
            await axios.post('http://127.0.0.1:8000/api/product/create', data);
            router.push('/products'); // Redirect to product list after creation
        } catch (error) {
            console.error(error);
            // Handle creation errors appropriately (e.g., display error message)
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        switch (name) {
            case 'price':
                const priceValue = parseFloat(value);
                if (!isNaN(priceValue)) {
                    setPrice(priceValue);
                }
                break;
            case 'stock':
                const stockValue = parseInt(value, 10);
                if (!isNaN(stockValue)) {
                    setStock(stockValue);
                }
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Label:
                    <input type='text' value={label} onChange={(e) => setLabel(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    Price:
                    <input type='number' name='price' value={price} onChange={handleChange} required />
                </label>
                <label>
                    Stock:
                    <input type='number' name='stock' value={stock} onChange={handleChange} required />
                </label>
                <label>
                    SKU:
                    <input type='text' value={sku} onChange={(e) => setSku(e.target.value)} required />
                </label>
                <label>
                    Image Link
                    <input type='text' value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
};

export default ProductCreate;
