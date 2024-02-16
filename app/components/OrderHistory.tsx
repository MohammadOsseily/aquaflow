import { OrderHistoryType } from '../../types/ordersHistory';
import { BiDotsVerticalRounded } from 'react-icons/bi';

type props = {
    orderHistory: OrderHistoryType;
};

function OrderHistory({ orderHistory }: props) {
    return (
        <>
            <hr />
            <div className='mb-5 ml-2 mt-10 flex'>
                <div className='w-1/5 text-[10px]  font-semibold uppercase md:text-xs '>#{orderHistory.id}</div>
                <div className='t w-1/5 text-center text-[10px]  uppercase md:text-xs '>{orderHistory.payment}</div>
                <div className='t w-1/5 text-center text-[10px]  uppercase md:text-xs '>{orderHistory.date}</div>
                <div className='w-1/5  text-center text-[10px]  uppercase md:text-xs '>{orderHistory.status}</div>
                <div className='w-1/5 text-center text-[10px]   uppercase md:w-[10%] md:text-xs'>
                    {orderHistory.total}$
                </div>
                <div className='flex w-1/5 justify-center text-center  text-lg   uppercase md:w-[10%] md:text-2xl'>
                    <BiDotsVerticalRounded />
                </div>
            </div>
        </>
    );
}
export default OrderHistoryType;
