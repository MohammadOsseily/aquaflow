'use client';
import { useEffect, useState } from 'react';
import { getCart, updateCartItem, removeCartItem } from '../services/cartServices/page';
import { useRouter } from 'next/navigation';
import { Cart } from '../../types/cart';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Image from 'next/image';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { PiTrashDuotone } from 'react-icons/pi';

import 'react-icons';

const CartPage = () => {
    const [cart, setCart] = useState<Cart | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchCart = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                router.push('/login');
                return;
            }
            try {
                const cartData = await getCart(token);
                setCart(cartData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, [router]);

    const handleUpdateCartItem = async (cartItemId: number, quantity: number) => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/login');
            return;
        }
        try {
            await updateCartItem(token, cartItemId, quantity);
            if (cart) {
                const updatedItems = cart.items.map((item) => (item.id === cartItemId ? { ...item, quantity } : item));
                setCart({ ...cart, items: updatedItems });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveCartItem = async (cartItemId: number) => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/login');
            return;
        }
        try {
            await removeCartItem(token, cartItemId);
            if (cart) {
                const updatedItems = cart.items.filter((item) => item.id !== cartItemId);
                setCart({ ...cart, items: updatedItems });
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!cart || !cart.items) {
        return <div>Cart is empty</div>;
    }

    const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto mt-10'>
                <div className='my-10 flex flex-col shadow-md md:flex-row'>
                    <div className='w-full bg-white px-10 py-10 md:w-3/4'>
                        <div className='flex justify-between border-b pb-8'>
                            <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
                            <h2 className='text-2xl font-semibold'>{cart.items.length} Items</h2>
                        </div>
                        <div className='mb-5 mt-10 flex'>
                            <div className='w-2/5 text-xs font-semibold uppercase text-gray-600'>Product Details</div>
                            <div className='w-1/5 text-center text-xs font-semibold uppercase text-gray-600'>
                                Quantity
                            </div>
                            <div className='w-1/5 text-center text-xs font-semibold uppercase text-gray-600'>Price</div>
                            <div className='w-1/5 text-center text-xs font-semibold uppercase text-gray-600'>Total</div>
                        </div>
                        {cart.items.map((item) => (
                            <div key={item.id} className='-mx-8 flex items-center px-6 py-5 hover:bg-gray-100'>
                                <div className='flex w-2/5'>
                                    <div className='w-20'>
                                        <Image
                                            width={200}
                                            height={200}
                                            className='h-24'
                                            src={item.product.image}
                                            alt={item.product.label}
                                        />
                                    </div>
                                    <div className='ml-4 flex flex-col justify-around'>
                                        <span className='text-sm font-bold'>{item.product.label}</span>
                                        <div className='text-xs font-semibold text-gray-500'>
                                            <button onClick={() => handleRemoveCartItem(item.id)}>
                                                <PiTrashDuotone />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-1/5 items-center justify-center'>
                                    <button onClick={() => handleUpdateCartItem(item.id, item.quantity - 1)}>
                                        <BiMinus />
                                    </button>
                                    <input
                                        className='mx-2 w-4 border text-center md:w-8'
                                        type='text'
                                        value={item.quantity}
                                        readOnly
                                    />
                                    <button onClick={() => handleUpdateCartItem(item.id, item.quantity + 1)}>
                                        <BiPlus />
                                    </button>
                                </div>
                                <div className='w-1/5 text-center text-sm font-semibold'>
                                    $ {item.product.price.toFixed(2)}
                                </div>
                                <div className='w-1/5 text-center text-sm font-semibold'>
                                    $ {(item.product.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                        <Link href='/products' className='mt-10 flex items-center text-sm font-semibold'>
                            <FaLongArrowAltLeft size={16} />
                            Continue Shopping
                        </Link>
                    </div>
                    <div id='summary' className='w-full px-8 py-10 md:w-1/4'>
                        <h1 className='border-b pb-8 text-2xl font-semibold'>Order Summary</h1>
                        <div className='mt-8'>
                            <div className='flex justify-between py-6 text-sm font-semibold uppercase'>
                                <span>Total cost</span>
                                <span>$ {total.toFixed(2)}</span>
                            </div>
                            <Link href='/checkout'>
                                <button className='w-full rounded-full bg-secondary py-3 text-sm font-semibold uppercase text-white hover:bg-gray-500'>
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
