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
    image?: string;
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
            <div className='pb-5 text-3xl'>Create Product</div>
            <form onSubmit={handleSubmit}>
                <label className='input input-bordered flex items-center gap-2'>
                    Label:
                    <input
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        required
                        type='text'
                        className='grow'
                    />
                </label>
                <label className='input input-bordered flex items-center gap-2'>
                    Description:
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        className='grow'
                    />
                </label>
                <label className='input input-bordered flex items-center gap-2'>
                    Price:
                    <input type='number' name='price' value={price} onChange={handleChange} required className='grow' />
                </label>
                <label className='input input-bordered flex items-center gap-2'>
                    Stock:
                    <input type='number' name='stock' value={stock} onChange={handleChange} required className='grow' />
                </label>
                <label className='input input-bordered flex items-center gap-2'>
                    SKU:
                    <input type='text' value={sku} onChange={(e) => setSku(e.target.value)} required className='grow' />
                </label>
                <label className='input input-bordered flex items-center gap-2'>
                    Image URL:
                    <input type='text' value={image} onChange={(e) => setImage(e.target.value)} className='grow' />
                </label>

                <button
                    className=' flex w-20  justify-center rounded-full bg-secondary py-4 text-sm font-semibold uppercase text-white hover:bg-gray-500 '
                    type='submit'>
                    Create
                </button>
            </form>
        </div>
    );
};

export default ProductCreate;
