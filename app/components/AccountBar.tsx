import Link from 'next/link';

function AccountBar() {
    return (
        <div className='neumorphism ml-2 flex h-60 w-3/4 flex-col justify-evenly bg-primary md:ml-0'>
            <div className='ml-5 text-sm hover:text-gray-600 md:text-lg'>
                <Link href={'/account'}>Account Details</Link>
            </div>
            <hr />
            <div className='ml-5 text-sm hover:text-gray-600 md:text-lg'>
                <Link href={'/account/orders'}>Orders History</Link>
            </div>
            <hr />
            <div className='ml-5 text-sm hover:text-gray-600 md:text-lg'>
                <Link href={'/account/addresses'}>Addresses</Link>
            </div>
        </div>
    );
}
export default AccountBar;
