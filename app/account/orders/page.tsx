import Link from 'next/link';
import OrderHistory from '../../components/OrderHistory';
import { Pagination } from '../../components/ProductCard';

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
    orderHistory: [
        {
            id: 1,
            payment: 'cash',
            status: 'deliverd',
            total: 90,
            date: '17/10/2023',
        },
        {
            id: 2,
            payment: 'Delevey',
            status: 'deliverd',
            total: 190,
            date: '18/10/2023',
        },
        {
            id: 3,
            payment: 'cash',
            status: 'waiting',
            total: 290,
            date: '19/10/2023',
        },
    ],
};

function Orders() {
    return (
        <div className=''>
            <div className='mx-auto  w-4/5 pb-7 pt-7 text-3xl md:text-4xl'>Order History</div>
            <div className='neumorphism mx-auto mb-7 flex h-28 w-4/5 items-center justify-between bg-primary'>
                <div className='flex w-1/3 justify-center pl-4 text-sm hover:text-gray-600 md:text-xl'>
                    <Link href={'/account'}>Account Details</Link>
                </div>
                <div className='flex h-full w-1/3 items-center justify-center border-l-2 border-r-2 text-sm hover:text-gray-600 md:text-xl'>
                    <Link href={'/account/orders'}>Orders History</Link>
                </div>
                <div className='flex w-1/3 justify-center pr-4 text-sm hover:text-gray-600 md:text-xl'>
                    <Link href={'/account/addresses'}>Addresses</Link>
                </div>
            </div>

            <div className='grid-rows neumorphism mx-auto grid w-[97%] bg-primary md:w-4/5'>
                <div className='mb-5 ml-2 mt-10 flex'>
                    <div className='w-1/5 text-[10px] font-semibold uppercase text-gray-600 md:text-xs'>Order ID</div>
                    <div className='t w-1/5 text-center text-[10px] font-semibold uppercase text-gray-600 md:text-xs'>
                        Payment
                    </div>
                    <div className='t w-1/5 text-center text-[10px] font-semibold uppercase text-gray-600 md:text-xs'>
                        Date
                    </div>
                    <div className='w-1/5  text-center text-[10px] font-semibold uppercase text-gray-600 md:text-xs'>
                        Status
                    </div>
                    <div className='w-1/5 text-center text-[10px] font-semibold uppercase text-gray-600 md:w-[10%] md:text-xs'>
                        Total
                    </div>
                    <div className='w-1/5 text-center  text-[10px] font-semibold uppercase text-gray-600 md:w-[10%] md:text-xs'>
                        Action
                    </div>
                </div>
                {pagination.orderHistory.map((product, index) => {
                    return <OrderHistory orderHistory={product} key={index} />;
                })}
            </div>
            <div className='pt-7'>
                <Pagination pagination={pagination} />
            </div>
        </div>
    );
}
export default Orders;
