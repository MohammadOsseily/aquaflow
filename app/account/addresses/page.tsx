import 'react-icons';
import AllAddresses from '../../components/AllAdresses';
import { PaginationType } from '../../components/ProductCard';
import AccountBar from '../../components/AccountBar';

const pagination = {
    total: 23,
    per_page: 5,
    current_page: 1,
    last_page: 5,
    first_page_url: 'http://laravel.app/?page=1',
    last_page_url: 'http://laravel.app/?page=4',
    next_page_url: 'http://laravel.app/?page=2',
    prev_page_url: undefined,
    path: 'http://laravel.app/',
    from: 1,
    to: 5,
    userAddress: [
        {
            name: 'Mohammad Osseily',
            address: 'dahye',
            city: 'Beirut',
        },
        {
            name: 'hsein Osseily',
            address: 'Karballa',
            city: 'Iraq',
        },
        {
            name: 'zynb Osseily',
            address: 'Laylaki',
            city: 'Beirut',
        },
        {
            name: 'hsn Osseily',
            address: 'main street',
            city: 'Tiri',
        },
        {
            name: 'ali rida Osseily',
            address: 'main street',
            city: 'Tiri',
        },
    ],
};

function Addresses() {
    return (
        <div className=''>
            <div className='mx-auto w-4/5 pb-7 pt-7 text-4xl '>Address</div>
            <AccountBar />

            <div className='grid-rows neumorphism mx-auto grid w-4/5 bg-primary  '>
                <div className='mb-5 ml-2 mt-5 flex'>
                    <div className='w-1/4 text-center text-xs font-semibold uppercase text-gray-600 md:pl-28 md:text-left'>
                        Address Name
                    </div>
                    <div className='w-1/4 text-center text-xs font-semibold uppercase text-gray-600 md:pl-40 md:text-left'>
                        Address
                    </div>
                    <div className='w-1/4 text-center text-xs font-semibold  uppercase text-gray-600 md:pl-40 md:text-left'>
                        City
                    </div>
                    <div className='flex w-1/4 justify-center text-center text-xs font-semibold uppercase text-gray-600 md:text-left'>
                        Action
                    </div>
                </div>
                {pagination.userAddress.map((addressInfo, index) => {
                    return <AllAddresses userAddress={addressInfo} key={index} />;
                })}
            </div>
        </div>
    );
}
export default Addresses;
