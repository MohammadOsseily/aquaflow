'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function AccountBar() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className='neumorphism mx-auto mb-7 flex h-28 w-4/5 items-center justify-between bg-primary'>
            <Link
                href={'/account'}
                className={`btn-ghost ${
                    pathname == '/account' ? 'bg-gray-300' : ''
                } flex h-full w-1/3 items-center justify-center rounded-3xl border-l-2 border-r-2  text-xs transition duration-300 ease-in-out  md:text-xl`}>
                Account Details
            </Link>
            <Link
                href={'/account/orders'}
                className='btn-ghost flex h-full w-1/3 items-center justify-center rounded-3xl border-l-2 border-r-2  text-xs transition duration-300 ease-in-out  md:text-xl'>
                Orders History
            </Link>
            <Link
                href={'/account/addresses'}
                className='btn-ghost flex h-full w-1/3 items-center justify-center rounded-3xl border-l-2 border-r-2  text-xs transition duration-300 ease-in-out  md:text-xl'>
                Addresses
            </Link>
        </div>
    );
}
export default AccountBar;
