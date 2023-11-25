'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import 'react-icons';
import { CgProfile } from 'react-icons/cg';
import GlobalTextField from './GlobalTextField';

function NavBar() {
    const [isLoged, setIsLoged] = useState(true);
    return (
        <div className='bg-red navbar'>
            <div className='navbar-start md:w-full'>
                <div className='dropdown md:hidden'>
                    <label tabIndex={0} className='btn btn-circle btn-ghost'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h7'
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'>
                        <li>
                            <Link href='/products'>Product</Link>
                        </li>
                        <li>
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link href={'/contactUs'}>Contact Us</Link>
                        </li>
                        <li className='flex flex-row justify-between'>
                            <input type='text' placeholder='Type here' className='input w-32 ' />
                            <button className='btn btn-circle btn-ghost flex content-center '>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>

                <Link href={'/'}>
                    <Image src={'/static/images/logo.png'} width={70} height={70} alt='logo' />
                </Link>

                <div className='hidden md:flex md:w-full md:justify-center md:gap-10'>
                    <Link className='btn-ghost rounded-xl p-2 transition duration-300 ease-in-out' href='/products'>
                        Product
                    </Link>
                    <Link className='btn-ghost rounded-xl p-2 transition duration-300 ease-in-out' href={'/about'}>
                        About
                    </Link>
                    <Link className='btn-ghost rounded-xl p-2 transition duration-300 ease-in-out' href={'/contactUs'}>
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className='navbar-end md:w-2/5'>
                <input type='text' placeholder='Type here' className='input hidden w-full max-w-xs md:flex' />
                <button className='btn btn-circle btn-ghost ml-1 hidden md:flex'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                    </svg>
                </button>

                <div className='flex-none'>
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className='btn btn-circle btn-ghost'>
                            <div className='indicator'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                    />
                                </svg>

                                <span className='badge indicator-item badge-sm'>8</span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className='card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow'>
                            <div className='card-body'>
                                <span className='text-lg font-bold'>8 Items</span>
                                <span className='text-info'>Subtotal: $999</span>
                                <div className='card-actions'>
                                    <Link href={'/cart'}>
                                        <button className='btn btn-primary btn-block'>View cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isLoged && (
                    <div className='w-35 flex h-16 flex-row items-center justify-around rounded-full bg-white pl-4 text-sm md:h-20 md:w-44 md:text-base'>
                        <div className=''>
                            <Link href={'/auth/login'}>Login</Link>
                        </div>
                        <div className=' ml-1 flex h-10 w-16 items-center justify-center rounded-full bg-secondary text-sm text-white md:ml-0 md:h-14 md:w-20  md:text-base'>
                            <Link href={'/auth/register'}>Sign Up</Link>
                        </div>
                    </div>
                )}
                {isLoged && (
                    <div>
                        <Link href='/account' className='ml-3 flex text-2xl text-secondary md:text-3xl'>
                            <CgProfile />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
