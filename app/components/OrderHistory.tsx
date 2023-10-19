import { OrderHistory } from '../../types/ordersHistory';

type props = {
    orderHistory: OrderHistory;
};

function OrderHistory({ orderHistory }: props) {
    return (
        <>
            <hr />
            <div className='mb-5 ml-2 mt-10 flex'>
                <div className='w-1/5 text-xs  font-semibold uppercase '>#{orderHistory.id}</div>
                <div className='t w-1/5 text-center text-xs font-semibold uppercase '>{orderHistory.payment}</div>
                <div className='t w-1/5 text-center text-xs font-semibold uppercase '>{orderHistory.date}</div>
                <div className='w-1/5  text-center text-xs font-semibold uppercase '>{orderHistory.status}</div>
                <div className='w-[10%]  text-center text-xs font-semibold uppercase'>{orderHistory.total}$</div>
                <div className='w-[10%]  text-center text-xs font-semibold uppercase'>...</div>
            </div>
        </>
    );
}
export default OrderHistory;
