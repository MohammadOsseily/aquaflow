'use client';

import { useEffect, useState } from 'react';
import { UserType } from '../../types/user';
import Link from 'next/link';
import Image from 'next/image';

function LoginComponent() {
    const [selectedUser, setSelectedUser] = useState<UserType | undefined>(undefined);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/user/login', { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setSelectedUser(data);
            });
    }, []);

    return (
        <div className='flex h-screen '>
            <div className='neumorphism m-auto w-full max-w-xs rounded bg-white p-5'>
                <header>
                    <Image
                        className='mx-auto mb-5 w-20'
                        src='/static/images/logo.png'
                        alt='d'
                        width={200}
                        height={200}
                    />
                </header>
                <form method='POST'>
                    <div>
                        <label className='mb-2 block text-secondary' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
                            type='text'
                            name='email'
                        />
                    </div>
                    <div>
                        <label className='mb-2 block text-secondary' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
                            type='password'
                            name='password'
                        />
                    </div>

                    <button
                        className='mb-6 w-full rounded-xl bg-secondary px-4 py-2 font-bold text-white hover:bg-neutral'
                        type='submit'>
                        Submit
                    </button>
                </form>
                <div>
                    <Link className='float-left text-sm text-secondary hover:text-neutral' href='/auth/forgetPass'>
                        Forgot Password?
                    </Link>
                    <Link className='float-right text-sm text-secondary hover:text-neutral' href='/auth/register'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
