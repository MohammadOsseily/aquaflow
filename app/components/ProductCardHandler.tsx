'use client';

import { useEffect, useState } from 'react';
import Productcard from '../components/ProductCard';
import ProductModuel from './ProductModuel';
import { ProductType } from '../../types/product';
import { PaginationType } from '../../types/pagination';
// test
function ProductCardHandler() {
    const [products, setProducts] = useState<PaginationType | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | undefined>(undefined);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/product/show', { method: 'post' })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    else if (!products) return <p>No profile data</p>;
    else {
        return (
            <>
                <div className='grid grid-cols-2 gap-4 py-5  md:mx-auto  md:grid-cols-4 '>
                    {products?.data?.map((product, index) => {
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
                {/* <Pagination pagination={pagination} /> */}
            </>
        );
    }
}
export default ProductCardHandler;
