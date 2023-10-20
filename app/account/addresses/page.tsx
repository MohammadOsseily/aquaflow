import { PiTrashDuotone } from 'react-icons/pi';
import { FiEdit2 } from 'react-icons/fi';

import 'react-icons';

function Addresses() {
    return (
        <div className=''>
            <div className='pb-7 pt-7 text-4xl'>Address</div>
            <div className='grid-rows neumorphism grid bg-primary '>
                <div className='mb-5 ml-2 mt-5 flex'>
                    <div className='w-1/4 text-xs font-semibold uppercase text-gray-600'>Address Name</div>
                    <div className='t w-1/4 text-center text-xs font-semibold uppercase text-gray-600'>Address</div>
                    <div className='t w-1/4 text-center text-xs font-semibold uppercase text-gray-600'>City</div>
                    <div className='w-1/4  text-center text-xs font-semibold uppercase text-gray-600'>Action</div>
                </div>
                <hr />
                <div className='mb-5 ml-2 mt-5 flex'>
                    <div className='w-1/4 text-xs font-semibold uppercase text-gray-600'>Mohammad Osseily</div>
                    <div className='t w-1/4 text-center text-xs font-semibold uppercase text-gray-600'>Dahye</div>
                    <div className='t w-1/4 text-center text-xs font-semibold uppercase text-gray-600'>Beirut</div>
                    <div className='flex  w-1/4 justify-center text-center text-xs font-semibold uppercase text-gray-600'>
                        <div className='mr-2 text-lg'>
                            <PiTrashDuotone />
                        </div>
                        <div className='text-lg'>
                            <FiEdit2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Addresses;
