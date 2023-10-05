import Image from 'next/image';
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { PiTrashDuotone } from 'react-icons/pi';

import 'react-icons';
import { CartDetailes } from '../../types/cartDetailes';

type props = {
    cartDetailes: CartDetailes;
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
                        src={'/static/images/' + cartDetailes.image}
                        alt={cartDetailes.productName}
                    />
                </div>
                <div className='ml-4 flex  flex-col justify-around'>
                    <span className='text-sm font-bold'>{cartDetailes.productName}</span>
                    <span className='text-xs text-red-500'>{cartDetailes.companyName}</span>
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
            <div className='w-1/5 text-center text-sm font-semibold'>$ {cartDetailes.price}</div>
            <div className='w-1/5 text-center text-sm font-semibold'>${cartDetailes.total}</div>
        </div>
    );
}
export default CartDetails;
