'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductModuel from '../../components/ProductModuel';
import { PaginationType } from '../../../types/pagination';
import { ProductType } from '../../../types/product';

type Props = {
    params: { term: string };
};
function ProductCardHandler(props: Props) {
    const [products, setProducts] = useState<PaginationType | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | undefined>(undefined);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/product/search/' + props.params.term, { method: 'get' })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, [props.params.term]);

    if (isLoading) return <p>Loading...</p>;
    else if (!products) return <p>No profile data</p>;
    else {
        return (
            <>
                <div className='grid grid-cols-2 gap-4 py-5  md:mx-auto  md:grid-cols-4 '>
                    {products?.data?.map((product, index) => {
                        return (
                            <div className='neumorphism card glass  flex  items-center bg-primary pt-4 ' key={index}>
                                <ProductCard product={product} setSelectedProduct={setSelectedProduct} key={index} />
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
