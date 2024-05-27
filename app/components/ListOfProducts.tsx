import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '../../types/product';
import { SetStateAction } from 'react';

type props = {
    product: ProductType;
    setSelectedProduct: React.Dispatch<SetStateAction<ProductType | undefined>>;
};
function ListOfProducts({ product, setSelectedProduct }: props) {
    return (
        <div className='cursor-pointer pt-4'>
            <div className='pb-7 text-3xl'>{product.label}</div>
            <div
                className='neumorphism no-scrollbar flex  w-full flex-col overflow-x-scroll '
                onClick={() => setSelectedProduct(product)}>
                <div className='flex flex-row '>
                    {[1, 2, 3, 4, 5, 6].map((_, index) => {
                        _;
                        return (
                            <div key={index} className='ml-7 h-full w-1/4 py-7 hover:brightness-[80%]'>
                                <Image
                                    alt={product.label}
                                    src={product.image}
                                    width={300}
                                    height={300}
                                    className='mx-auto w-8'
                                />
                                <div className='ml-3 truncate break-all pt-4 text-center'>{product.label} </div>
                                <div className='ml-3 flex justify-center pt-4 text-lg font-bold'>${product.price}</div>

                                <button
                                    onClick={() => alert('product have been added')}
                                    className=' ml-3 mt-4 w-full rounded-full bg-secondary py-3 text-xs font-semibold uppercase text-white hover:bg-gray-500 md:ml-8 md:w-4/5 md:text-sm '>
                                    Add to cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default ListOfProducts;
