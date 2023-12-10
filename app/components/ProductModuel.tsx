import Image from 'next/image';
import { Product } from '../../types/product';

import { IoArrowBack } from 'react-icons/io5';

type props = {
    products: Product;
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
};

function ProductModuel({ products, setSelectedProduct }: props) {
    const handleProductChange = () => {
        setSelectedProduct(undefined);
    };
    return (
        <div className=' modal-box  flex   h-2/3 w-full max-w-5xl items-center bg-neutral md:w-1/2'>
            <div className='flex h-full w-full flex-col md:flex-row '>
                <div className='flex w-full flex-row items-center justify-center md:w-1/2 md:flex-col'>
                    <Image
                        className='w-20 md:w-40  '
                        src={'/static/images/' + products.image}
                        width={100}
                        height={50}
                        alt={products.productName}
                    />
                </div>

                <div className='flex h-full w-full flex-col  pt-4 md:w-1/2 '>
                    <div className='pb-4 text-4xl text-secondary md:text-5xl'>{products.productName}</div>
                    <div className='pb-4 text-2xl text-secondary md:text-3xl'>{products.price}$</div>
                    <hr className='rounded-full border-primary  md:border-[1px]' />

                    <div className='pt-4 text-2xl text-secondary md:text-3xl'>Description</div>
                    <div className='pt-4 text-lg text-secondary md:text-2xl'>{products.description}</div>
                </div>
                <div className='pb-6 pt-6 text-3xl md:pb-0 md:text-4xl' onClick={handleProductChange}>
                    <IoArrowBack />
                </div>
            </div>
        </div>
    );
}
export default ProductModuel;
