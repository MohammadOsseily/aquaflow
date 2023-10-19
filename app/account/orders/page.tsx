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
            <div className='pb-7 pt-7 text-4xl'>Order History</div>

            <div className='grid-rows neumorphism grid bg-primary '>
                <div className='mb-5 ml-2 mt-10 flex'>
                    <div className='w-1/5 text-xs font-semibold uppercase text-gray-600'>Order ID</div>
                    <div className='t w-1/5 text-center text-xs font-semibold uppercase text-gray-600'>Payment</div>
                    <div className='t w-1/5 text-center text-xs font-semibold uppercase text-gray-600'>Date</div>
                    <div className='w-1/5  text-center text-xs font-semibold uppercase text-gray-600'>Status</div>
                    <div className='w-[10%]  text-center text-xs font-semibold uppercase text-gray-600'>Total</div>
                    <div className='w-[10%]  text-center text-xs font-semibold uppercase text-gray-600'>Action</div>
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
