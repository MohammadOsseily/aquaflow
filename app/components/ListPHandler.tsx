'use client';
import { useEffect, useState } from 'react';
import ListOfProducts from './ListOfProducts';
import { ProductType } from '../../types/product';
import ProductModuel from './ProductModuel';
import { PaginationType } from '../../types/pagination';

function ListPHandler() {
    const [selectedProduct, setSelectedProduct] = useState<ProductType | undefined>(undefined);
    const [products, setProducts] = useState<PaginationType | null>(null);
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
            <div>
                {products?.data?.map((product, index) => {
                    return (
                        <div key={index}>
                            <ListOfProducts product={product} setSelectedProduct={setSelectedProduct} key={index} />
                        </div>
                    );
                })}

                {selectedProduct != undefined && (
                    <div className='fixed inset-0 z-20 flex h-full w-full items-center justify-center   bg-black/50  backdrop-blur-sm'>
                        <ProductModuel products={selectedProduct} setSelectedProduct={setSelectedProduct} />
                    </div>
                )}
            </div>
        );
    }
}

export default ListPHandler;
