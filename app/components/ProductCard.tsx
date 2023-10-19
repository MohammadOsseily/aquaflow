import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import 'react-icons';
import { Product } from '../../types/product';

import { Pagination } from '../../types/pagination';
import Link from 'next/link';
import { SetStateAction } from 'react';

type paginationProps = {
    pagination: Pagination;
};
export function Pagination({ pagination }: paginationProps) {
    return (
        <div className='join flex w-full justify-center'>
            {pagination.current_page != 1 && (
                <Link
                    href={pagination.first_page_url}
                    className='btn join-item bg-primary hover:bg-secondary hover:text-primary'>
                    1
                </Link>
            )}

            {pagination.prev_page_url && (
                <Link
                    href={pagination.prev_page_url}
                    className='btn join-item bg-primary  hover:bg-secondary hover:text-primary'>
                    {pagination.current_page - 1}
                </Link>
            )}
            <div className='btn join-item  bg-primary hover:bg-secondary hover:text-primary'>
                {pagination.current_page}
            </div>
            {pagination.next_page_url && (
                <Link
                    href={pagination.next_page_url}
                    className='btn join-item bg-primary hover:bg-secondary hover:text-primary'>
                    {pagination.current_page + 1}
                </Link>
            )}
            {pagination.last_page_url && pagination.current_page != pagination.last_page && (
                <Link
                    href={pagination.last_page_url}
                    className='btn join-item bg-primary hover:bg-secondary hover:text-primary'>
                    {pagination.last_page}
                </Link>
            )}
        </div>
    );
}
type props = {
    product: Product;
    setSelectedProduct: React.Dispatch<SetStateAction<Product | undefined>>;
};

function ProductCard({ product, setSelectedProduct }: props) {
    return (
        <div onClick={() => setSelectedProduct(product)}>
            <figure>
                <Image alt={product.productName} width={50} height={50} src={'/static/images/' + product.image} />
            </figure>
            <div className='card-body flex justify-between'>
                <h2 className='card-title flex justify-center'>{product.productName}</h2>

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
