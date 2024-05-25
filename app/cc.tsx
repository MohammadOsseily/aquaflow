import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import 'react-icons';
import CartDetails from './components/CartDetails';

const CartList = {
    data: [
        { total: 90, companyName: 'dsd', price: 45, productName: 'black bottle', image: 'black-bottle.png' },
        { total: 90, companyName: 'dsd', price: 45, productName: 'black bottle', image: 'black-bottle.png' },
        { total: 90, companyName: 'dsd', price: 45, productName: 'black bottle', image: 'black-bottle.png' },
        { total: 90, companyName: 'dsd', price: 45, productName: 'black bottle', image: 'black-bottle.png' },
        { total: 90, companyName: 'dsd', price: 45, productName: 'black bottle', image: 'black-bottle.png' },
        { total: 90, companyName: 'dsd', price: 45, productName: 'black bottle', image: 'black-bottle.png' },
    ],
};

function Cart() {
    return (
        <div className='bg-gray-100'>
            <div className=' container mx-auto mt-10'>
                <div className='my-10 flex flex-col shadow-md md:flex-row'>
                    <div className='w-full bg-white px-10 py-10 md:w-3/4'>
                        <div className='flex justify-between border-b pb-8'>
                            <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
                            <h2 className='text-2xl font-semibold'>3 Items</h2>
                        </div>
                        <div className='mb-5 mt-10 flex'>
                            <div className='w-2/5 text-xs font-semibold uppercase text-gray-600'>Product Details</div>
                            <div className='t w-1/5 text-center text-xs font-semibold uppercase text-gray-600'>
                                Quantity
                            </div>
                            <div className='t w-1/5 text-center text-xs font-semibold uppercase text-gray-600'>
                                Price
                            </div>
                            <div className='w-1/5  text-center text-xs font-semibold uppercase text-gray-600'>
                                Total
                            </div>
                        </div>
                        {CartList.data.map((CartList, index) => {
                            return <CartDetails cartDetailes={CartList} key={index} />;
                        })}

                        <Link href='/products' className='mt-10 flex items-center text-sm font-semibold '>
                            <FaLongArrowAltLeft size={16} />
                            Continue Shopping
                        </Link>
                    </div>

                    <div id='summary' className='w-full px-8 py-10 md:w-1/4'>
                        <h1 className='border-b pb-8 text-2xl font-semibold'>Order Summary</h1>
                        <div className='mt-8 '>
                            <div className='flex justify-between py-6 text-sm font-semibold uppercase'>
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <Link href={'/checkout'}>
                                <button className='w-full rounded-full bg-secondary py-3 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
