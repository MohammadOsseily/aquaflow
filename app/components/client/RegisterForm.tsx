'use client';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password,
            });
            // Handle successful registration (e.g., redirect)
            alert({ 'Registration successful:': response.data });
        } catch (error) {
            // Handle registration error (e.g., display error message)
            setError('Registration failed. Please try again.');
            alert('register failed');
        }
    };

    return (
        <div className='flex h-screen'>
            <div className='neumorphism m-auto w-full max-w-md rounded bg-white p-5'>
                <header>
                    <Image
                        className='mx-auto mb-5 w-20'
                        src='/static/images/logo.png'
                        alt='d'
                        width={200}
                        height={200}
                    />
                </header>
                <form className='' onSubmit={handleSubmit}>
                    <input type='hidden' name='remember' defaultValue='true' />

                    <div>
                        <label htmlFor='name' className='mb-2 block text-secondary'>
                            Name
                        </label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            autoComplete='name'
                            required
                            className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='email-address' className='mb-2 block text-secondary'>
                            Email address
                        </label>
                        <input
                            id='email-address'
                            name='email'
                            type='email'
                            autoComplete='email'
                            required
                            className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='mb-2 block text-secondary'>
                            Password
                        </label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            autoComplete='new-password'
                            required
                            className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password-confirmation' className='mb-2 block text-secondary'>
                            Confirm Password
                        </label>
                        <input
                            id='password-confirmation'
                            name='password_confirmation'
                            type='password'
                            autoComplete='new-password'
                            required
                            className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </div>

                    {error && <p className='mt-2 text-center text-sm text-red-600'>{error}</p>}
                    <div>
                        <button
                            type='submit'
                            className='mb-6 w-full  rounded-xl bg-secondary px-4 py-2 font-bold  text-white hover:bg-neutral'>
                            Submit
                        </button>
                    </div>
                </form>
                <div>
                    <Link className='float-left text-sm text-secondary hover:text-neutral' href='/auth/forgetPass'>
                        Forgot Password?
                    </Link>
                    <Link className='float-right text-sm text-secondary hover:text-neutral' href='/auth/login'>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { RegisterForm };
