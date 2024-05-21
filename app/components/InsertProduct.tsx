'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const InsertProduct = () => {
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [sku, setSku] = useState('');
    const [image, setImage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/products', {
                label,
                description,
                price: parseFloat(price),
                stock: parseInt(stock),
                sku,
                iamge: image,
            });
            if (response.status === 201) {
                router.push('/products');
            }
        } catch (error) {
            console.error('Error inserting product:', error);
        }
    };

    return (
        <div>
            <h1>Insert Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Label</label>
                    <input type='text' value={label} onChange={(e) => setLabel(e.target.value)} required />
                </div>
                <div>
                    <label>Description</label>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type='number'
                        step='0.01'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Stock</label>
                    <input type='number' value={stock} onChange={(e) => setStock(e.target.value)} required />
                </div>
                <div>
                    <label>SKU</label>
                    <input type='text' value={sku} onChange={(e) => setSku(e.target.value)} required />
                </div>
                <div>
                    <label>Image Link</label>
                    <input type='text' value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type='submit'>Insert Product</button>
            </form>
        </div>
    );
};

export default InsertProduct;
