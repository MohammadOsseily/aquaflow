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
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
        <div>
            <div className='mx-auto flex flex-row flex-wrap gap-4 py-5 '>
                {pagination.data.map((product, index) => {
                    return (
                        <div
                            className='neumorphism card glass  flex w-[47%] items-center bg-primary pt-4 md:w-[24%]'
                            key={index}>
                            <Productcard product={product} setSelectedProduct={setSelectedProduct} key={index} />
                        </div>
                    );
                })}

                {selectedProduct != undefined && <ProductModuel products={selectedProduct} />}
            </div>

            <Pagination pagination={pagination} />
        </div>
    );
}
export default ProductCardHandler;
