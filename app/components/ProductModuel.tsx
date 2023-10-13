import Image from 'next/image';
import { Product } from '../../types/product';

type props = {
    products: Product;
};

function ProductModuel({ products }: props) {
    return (
        <div className='tz-20 modal-box absolute mx-auto  ml-36  flex h-2/3 w-full max-w-5xl items-center bg-neutral'>
            <div className='flex flex-row '>
                <div className='flex w-1/2 flex-col items-center'>
                    <Image
                        className='w-40 '
                        src={'/static/images/' + products.image}
                        width={100}
                        height={50}
                        alt={products.productName}
                    />
                </div>

                <div className='flex w-1/2 flex-col'>
                    <div className='pb-4 text-6xl text-secondary'>{products.productName}</div>
                    <div className='pb-4 text-4xl text-secondary'>{products.price}$</div>
                    <hr className='rounded-full border-[1px]  border-primary' />

                    <div className='pt-4 text-3xl text-secondary'>Description</div>
                    <div className='pt-4 text-2xl text-secondary'>{products.description}</div>
                </div>
            </div>
        </div>
    );
}
export default ProductModuel;
