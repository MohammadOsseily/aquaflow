'use client';
import { useState } from 'react';
import ListOfProducts from './ListOfProducts';
import { ProductType } from '../../types/product';
import ProductModuel from './ProductModuel';

const products = {
    data: [
        {
            price: 45,
            productHighlight: 'Ps4 Accessories',
            productName: 'Call of Duty: Modern Warfare 3',
            image: 'black-bottle.png',
            description:
                'Call of Duty: Modern Warfare 3 Call of Duty: Modern Warfare 3 Call of Duty: Modern Warfare 3 Call of Duty: Modern Warfare 3',
        },
        {
            price: 90,
            productHighlight: 'Ps4 Accessories',
            productName: 'Call of Duty: Modern Warfare 3',
            image: 'black-bottle.png',
            description:
                'Call of Duty: Modern Warfare 3 Call of Duty: Modern Warfare 3 Call of Duty: Modern Warfare 3 Call of Duty: Modern Warfare 3',
        },
        {
            price: 80,
            productHighlight: 'Ps4 Accessories',
            productName: 'Call of Duty: Modern Warfare 3',
            image: 'black-bottle.png',
            description:
                'Call of Duty: Modern Warfar Call of Duty: Modern Warfare 3 Call of Duty: Modern Warfare 3 Call of Duty: Modern Warfare 3 3',
        },
    ],
};
function ListPHandler() {
    const [selectedProduct, setSelectedProduct] = useState<ProductType | undefined>(undefined);

    return (
        <div>
            {products.data.map((product, index) => {
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

export default ListPHandler;
