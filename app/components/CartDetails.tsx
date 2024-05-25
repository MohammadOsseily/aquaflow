import Image from 'next/image';
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { PiTrashDuotone } from 'react-icons/pi';

import 'react-icons';
import { CartItem } from '../../types/cart';

type props = {
    cartDetailes: CartItem;
};

function CartDetails({ cartDetailes }: props) {
    return (
        <div className='-mx-8 flex items-center px-6 py-5 hover:bg-gray-100'>
            <div className='flex w-2/5'>
                <div className='w-20'>
                    <Image
                        width={200}
                        height={200}
                        className='h-24'
                        src={cartDetailes.product.image}
                        alt={cartDetailes.product.label}
                    />
                </div>
                <div className='ml-4 flex  flex-col justify-around'>
                    <span className='text-sm font-bold'>{cartDetailes.product.label}</span>
                    <div className='text-xs font-semibold text-gray-500 '>
                        <PiTrashDuotone />
                    </div>
                </div>
            </div>
            <div className='flex w-1/5 items-center justify-center'>
                <BiMinus />
                <input className='mx-2 w-4 border text-center md:w-8' type='text' value='1' />
                <BiPlus />
            </div>
            <div className='w-1/5 text-center text-sm font-semibold'>$ {cartDetailes.product.price}</div>
            <div className='w-1/5 text-center text-sm font-semibold'>${cartDetailes.product.price}</div>
        </div>
    );
}
export default CartDetails;
