import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import 'react-icons';
import { ProductType } from '../../types/product';

import Link from 'next/link';
import { SetStateAction } from 'react';

type props = {
    product: ProductType;
    setSelectedProduct: React.Dispatch<SetStateAction<ProductType | undefined>>;
};

function ProductCard({ product, setSelectedProduct }: props) {
    return (
        <div onClick={() => setSelectedProduct(product)}>
            <figure>
                <Image alt={product.label} width={50} height={50} src={product.gallery[3]} />
            </figure>
            <div className='card-body flex justify-between'>
                <h2 className='card-title flex justify-center'>{product.label}</h2>

                <div className='card-actions flex  items-center'>
                    <p className='font-bold'>{product.price}$</p>
                    <Link
                        onClick={(e) => e.stopPropagation()}
                        href={'/checkout'}
                        className='btn btn-primary bg-secondary hover:bg-secondary'>
                        <FiShoppingCart size={25} className='bg-secondary text-white' />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
