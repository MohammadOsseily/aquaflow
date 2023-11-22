import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../types/product';
import { SetStateAction } from 'react';

type props = {
    product: Product;
    setSelectedProduct: React.Dispatch<SetStateAction<Product | undefined>>;
};
function ListOfProducts({ product, setSelectedProduct }: props) {
    return (
        <div className='pt-4 '>
            <div className='pb-7 text-3xl'>{product.productHighlight}</div>
            <div
                className='neumorphism no-scrollbar flex  w-full flex-col overflow-x-scroll '
                onClick={() => setSelectedProduct(product)}>
                <div className='flex flex-row '>
                    {[1, 2, 3, 4, 5, 6].map((_, index) => {
                        _;
                        return (
                            <div key={index} className='ml-7 h-full w-1/4 py-7 hover:brightness-[80%]'>
                                <Image
                                    alt={product.productName}
                                    src={'/static/images/' + product.image}
                                    width={300}
                                    height={300}
                                    className='mx-auto w-8'
                                />
                                <div className='ml-3 truncate break-all pt-4'>{product.description} </div>
                                <div className='ml-3 flex justify-center pt-4 text-lg font-bold'>${product.price}</div>
                                <Link href={'/cart'}>
                                    <button className=' ml-8 mt-4 w-4/5 rounded-full bg-secondary py-3 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                                        Add to cart
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default ListOfProducts;
