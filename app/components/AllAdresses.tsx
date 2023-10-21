import { PiTrashDuotone } from 'react-icons/pi';
import { FiEdit2 } from 'react-icons/fi';
import { UserAddresses } from '../../types/addresses';

type props = {
    userAddress: UserAddresses;
};
function AllAddresses({ userAddress }: props) {
    return (
        <>
            <hr />
            <div className='mb-5 ml-2 mt-5 flex'>
                <div className='w-1/4 truncate text-center text-xs text-gray-600  md:pl-28   md:text-left'>
                    {userAddress.name}
                </div>
                <div className=' w-1/4 truncate text-center text-xs text-gray-600 md:pl-40   md:text-left'>
                    {userAddress.address}
                </div>
                <div className=' w-1/4 truncate text-center  text-xs  text-gray-600 md:pl-40  md:text-left'>
                    {userAddress.city}
                </div>
                <div className='flex  w-1/4 justify-center truncate text-center text-xs  text-gray-600   md:text-left'>
                    <div className='mr-2 text-lg'>
                        <PiTrashDuotone />
                    </div>
                    <div className='text-lg'>
                        <FiEdit2 />
                    </div>
                </div>
            </div>
        </>
    );
}
export default AllAddresses;
