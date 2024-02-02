'use client';
import { useState } from 'react';
import Productcard, { Pagination } from '../components/ProductCard';
import ProductModuel from './ProductModuel';
import { Product } from '../../types/product';

const pagination = {
    total: 23,
    per_page: 5,
    current_page: 1,
    last_page: 5,
    first_page_url: 'http://laravel.app/?page=1',
    last_page_url: 'http://laravel.app/?page=4',
    next_page_url: 'http://laravel.app/?page=2',
    prev_page_url: undefined,
    path: 'http://laravel.app/',
    from: 1,
    to: 5,
    data: [
        {
            price: 45,
            productName: 'black bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        },
        {
            price: 90,
            productName: 'blac bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 80,
            productName: 'bl bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 22,
            productName: 'bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },

        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            price: 12,
            productName: 'bla bottle',
            image: 'black-bottle.png',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
    ],
};

function ProductCardHandler() {
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);

    return (
        <>
            <div className='grid grid-cols-2 gap-4 py-5  md:mx-auto  md:grid-cols-4 '>
                {pagination.data.map((product, index) => {
                    return (
                        <div className='neumorphism card glass  flex  items-center bg-primary pt-4 ' key={index}>
                            <Productcard product={product} setSelectedProduct={setSelectedProduct} key={index} />
                        </div>
                    );
                })}

                {selectedProduct != undefined && (
                    <div className='fixed inset-0 z-20 flex h-full w-full items-center justify-center   bg-black/50  backdrop-blur-sm'>
                        <ProductModuel products={selectedProduct} setSelectedProduct={setSelectedProduct} />
                    </div>
                )}
            </div>

            <Pagination pagination={pagination} />
        </>
    );
}
export default ProductCardHandler;
