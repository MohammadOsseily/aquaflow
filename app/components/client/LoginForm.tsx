'use client';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '../useAuthStore';
import { useRouter } from 'next/navigation';

const Login = () => {
    const { setIsLoged } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password,
            });
            // console.log(response.data.user.name);
            // const name = response.data.user.name;
            // const email = response.data.user.email;
            // const password = response.data.user.password;
            // const role = response.data.user.role;
            // const vendor = response.data.user.vendor;

            // Handle successful login (e.g., store token, redirect)
            setIsLoged(true);
            alert('Login successful ' + response.data.user.name);
            if (response.data.user.role == 2) {
                router.push('/dashboard/admin');
            } else if (response.data.user.role == 1) {
                router.push('/dashboard/vendor');
            } else if (response.data.user.role == 0) {
                router.push('/account');
            }
            // In your login component after successful login
            localStorage.setItem('isLoggedIn', 'true');
            // router.push('/');
        } catch (err) {
            // Handle login error (e.g., display error message)
            setError('Invalid email or password');
        }
    };

    return (
        <div className='flex h-screen'>
            <div className='neumorphism m-auto w-full max-w-xs rounded bg-white p-5'>
                <header>
                    <Image
                        className='mx-auto mb-5 w-20'
                        src='/static/images/logo.png'
                        alt='logo'
                        width={200}
                        height={200}
                    />
                </header>
                {error && <p className='mt-2 text-center text-sm text-red-600'>{error}</p>}
                <form method='POST' onSubmit={handleSubmit}>
                    <div>
                        <label className='mb-2 block text-secondary' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name='password'
                        />
                    </div>

                    <button
                        className='mb-6 w-full rounded-xl bg-secondary px-4 py-2 font-bold text-white hover:bg-neutral'
                        type='submit'>
                        Login
                    </button>
                </form>
                <div>
                    <Link className='float-left text-sm text-secondary hover:text-neutral' href='/auth/forgetPass'>
                        Forgot Password?
                    </Link>
                    <Link className='float-right text-sm text-secondary hover:text-neutral' href='/register'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
