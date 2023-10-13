import Image from 'next/image';
import { Product } from '../../types/product';

type props = {
    products: Product;
};

function ProductModuel({ products }: props) {
    return (
        <div className='tz-20 modal-box  absolute  mx-auto ml-36 h-2/3 w-full max-w-5xl bg-red-300'>
            <div className='flex flex-row '>
                <div className='flex w-1/2 flex-col items-center'>
                    <Image
                        className=' w-40'
                        src={'/static/images/' + products.image}
                        width={100}
                        height={50}
                        alt={products.productName}
                    />
                </div>

                <div className='flex w-1/2 flex-col'>
                    <div className='text-6xl'>{products.productName}</div>
                    <div className='text-4xl'>{products.price}$</div>
                    <hr />
                    <div>Description</div>
                    <div>{products.description}</div>
                </div>
            </div>
        </div>
    );
}
export default ProductModuel;
