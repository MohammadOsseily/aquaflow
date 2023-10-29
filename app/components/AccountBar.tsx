import Link from 'next/link';

function AccountBar() {
    return (
        <div className='neumorphism mx-auto mb-7 flex h-28 w-4/5 items-center justify-between bg-primary'>
            <div className='btn-ghost flex h-full w-1/3 items-center justify-center rounded-3xl border-l-2 border-r-2  text-xs transition duration-300 ease-in-out  md:text-xl'>
                <Link href={'/account'}>Account Details</Link>
            </div>
            <div className='btn-ghost flex h-full w-1/3 items-center justify-center rounded-3xl border-l-2 border-r-2  text-xs transition duration-300 ease-in-out  md:text-xl'>
                <Link href={'/account/orders'}>Orders History</Link>
            </div>
            <div className='btn-ghost flex h-full w-1/3 items-center justify-center rounded-3xl border-l-2 border-r-2  text-xs transition duration-300 ease-in-out  md:text-xl'>
                <Link href={'/account/addresses'}>Addresses</Link>
            </div>
        </div>
    );
}
export default AccountBar;
