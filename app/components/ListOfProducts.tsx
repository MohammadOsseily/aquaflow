import Image from 'next/image';
import Link from 'next/link';

function ListOfProducts() {
    return (
        <div className='pt-4 '>
            <div className='pb-7 text-3xl'>Ps4 Accessories</div>
            <div className='neumorphism no-scrollbar flex  w-full flex-col overflow-x-scroll'>
                <div className='flex flex-row '>
                    {[1, 2, 3, 4, 5, 6].map((_, index) => {
                        _;
                        return (
                            <div key={index} className='ml-7 h-full py-7 hover:brightness-[80%]'>
                                <Image
                                    src={'/static/images/black-bottle.png'}
                                    alt='bottle'
                                    width={300}
                                    height={300}
                                    className='mx-auto w-8'
                                />
                                <div className='ml-3 truncate break-all pt-4'>Call of Duty: Modern Warfare 3 </div>
                                <div className='ml-3 flex justify-center pt-4 text-lg font-bold'>$50</div>
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
