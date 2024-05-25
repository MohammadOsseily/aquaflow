// components/ProductCard.tsx

import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { ProductType } from '../../types/product';
import Link from 'next/link';
import { SetStateAction } from 'react';
import axios from 'axios';

type Props = {
    product: ProductType;
    setSelectedProduct: React.Dispatch<SetStateAction<ProductType | undefined>>;
};

function ProductCard({ product, setSelectedProduct }: Props) {
    const addToCart = async (productId: number) => {
        try {
            const token = localStorage.getItem('authToken');
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');
            if (!token) {
                alert('You must be logged in to add products to the cart');
                return;
            }

            const response = await axios.post('http://127.0.0.1:8000/api/cart/add', {
                product_id: productId,
                quantity: 1,
                email: email,
                password: password,
            });
            alert(response.data.message);
        } catch (error: any) {
            console.error('Error adding product to cart:', error);
            alert(`Failed to add product to cart: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className='flex flex-col items-center' onClick={() => setSelectedProduct(product)}>
            <figure className='text-center' style={{ width: '70px', height: '70px' }}>
                <Image className='' alt={product.label} width={50} height={50} src={product.image} />
            </figure>
            <div className='card-body flex justify-between'>
                <h2 className='card-title flex justify-center'>{product.label}</h2>
                <div className='card-actions flex items-center'>
                    <p className='font-bold'>{product.price}$</p>
                    <Link
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product.id);
                        }}
                        href='#'
                        className='btn btn-primary bg-secondary hover:bg-secondary'>
                        <FiShoppingCart size={25} className='bg-secondary text-white' />
                        add to cart
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
