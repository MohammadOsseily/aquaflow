import Link from 'next/link';

function AccountBar() {
    return (
        <div className='neumorphism flex h-1/2 flex-col justify-evenly bg-neutral '>
            <div className='ml-5 text-lg hover:text-gray-600'>
                <Link href={'/account'}>Account Details</Link>
            </div>
            <hr />
            <div className='ml-5 text-lg hover:text-gray-600'>
                <Link href={'/account/orders'}>Orders History</Link>
            </div>
            <hr />
            <div className='ml-5 text-lg hover:text-gray-600'>
                <Link href={'/account/addresses'}>Addresses</Link>
            </div>
        </div>
    );
}
export default AccountBar;
