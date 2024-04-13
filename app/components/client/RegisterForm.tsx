// 'use client';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z, ZodType } from 'zod';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// // type
// type TRegisterForm = {
//     name: string;
//     email: string;
//     password: string;
//     cPassword: string;
// };

// const schema: ZodType<TRegisterForm> = z
//     .object({
//         name: z.string().min(5, { message: 'Name is required' }),
//         email: z.string().email({
//             message: 'Must be a valid email',
//         }),
//         password: z
//             .string()
//             .min(8, { message: 'Password must be at least 8 characters long' })
//             .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/, {
//                 message: 'Password must contain at least one number and one special character',
//             }),
//         cPassword: z.string(),
//     })
//     .refine((data) => data.password === data.cPassword, {
//         message: 'Passwords do not match',
//         path: ['confirmPassword'],
//     });

// const RegisterForm = () => {
//     const [loading, setLoading] = useState(false);
//     const [toast, setToast] = useState(false);
//     const [err, setErr] = useState(false);
//     const message =
//         toast && !err ? 'Your registration was successful.' : 'An error occurred while processing your request.';

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm<TRegisterForm>({
//         resolver: zodResolver(schema),
//     });

//     const handleFormSubmit = async (data: TRegisterForm) => {
//         try {
//             setErr(false);
//             setToast(false);
//             const response = await fetch('/api/register', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data),
//             });
//             const res = await response.json();
//             if (res.status) {
//                 setToast(true);
//             }
//             setLoading(false);
//             reset();
//         } catch (e) {
//             setErr(true);
//             setToast(true);
//         }
//     };

//     useEffect(() => {
//         if (setToast) {
//             const timer = setTimeout(() => {
//                 setToast(false);
//                 setErr(false);
//             }, 5000);

//             return () => {
//                 clearTimeout(timer);
//             };
//         }
//     }, [toast]);

//     return (
//         <div className='flex h-screen '>
//             <div className='neumorphism m-auto w-full max-w-md rounded bg-white p-5'>
//                 <header>
//                     <Image
//                         className='mx-auto mb-5 w-20'
//                         src='/static/images/logo.png'
//                         alt='d'
//                         width={200}
//                         height={200}
//                     />
//                 </header>
//                 <div className=' mx-auto py-8'>
//                     <div className=''>
//                         {toast && (
//                             <div
//                                 className={`flex justify-between px-8 py-4 ${
//                                     err ? 'bg-[#fad2e1]  text-[#7c193d]' : 'text-[#236c5b  bg-[#98f5e1]'
//                                 }]`}>
//                                 <div className='font-sans'>{message}</div>
//                                 <button className='font-bold'>&#10005;</button>
//                             </div>
//                         )}

//                         <form onSubmit={handleSubmit(handleFormSubmit)}>
//                             <div className='mb-4 flex'>
//                                 <div className='mr-1 w-full'>
//                                     <label className='mb-2 block text-secondary'>Name</label>
//                                     <input
//                                         className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
//                                         id='name'
//                                         type='text'
//                                         placeholder='Full name'
//                                         {...register('name')}
//                                     />
//                                     {errors.name ? (
//                                         <div className='mt-1 text-xs text-red-500'>{errors.name?.message}</div>
//                                     ) : null}
//                                 </div>
//                             </div>
//                             <div className='mb-4'>
//                                 <label className='mb-2 block text-secondary'>Email Address</label>
//                                 <input
//                                     className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
//                                     id='email'
//                                     type='email'
//                                     placeholder='Your email address'
//                                     {...register('email')}
//                                 />
//                                 {errors.email ? (
//                                     <div className='mt-1 text-xs text-red-500'>{errors.email?.message}</div>
//                                 ) : null}
//                             </div>
//                             <div className='mb-4'>
//                                 <label className='mb-2 block text-secondary'>Password</label>
//                                 <input
//                                     className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
//                                     id='password'
//                                     type='password'
//                                     placeholder='Your secure password'
//                                     {...register('password')}
//                                 />
//                                 <div className='text-grey mt-1 text-xs'>At least 6 characters</div>
//                                 {errors.password ? (
//                                     <div className='mt-1 text-xs text-red-500'>{errors.password?.message}</div>
//                                 ) : null}
//                             </div>
//                             <div className='mb-4'>
//                                 <label className='mb-2 block text-secondary'>Confirm Password</label>
//                                 <input
//                                     className='mb-6 w-full border-b-2 border-secondary p-2 text-secondary outline-none focus:bg-gray-300'
//                                     id='cPassword'
//                                     type='password'
//                                     placeholder='Your secure password'
//                                     {...register('cPassword')}
//                                 />
//                                 {errors.cPassword ? (
//                                     <div className='mt-1 text-xs text-red-500'>{errors.cPassword?.message}</div>
//                                 ) : null}
//                             </div>
//                             <div className='mt-8 flex items-center justify-center'>
//                                 <input
//                                     className='mb-6 w-1/2 rounded-xl bg-secondary px-4 py-2 font-bold  text-white hover:bg-neutral'
//                                     type='submit'
//                                     onClick={() => console.log('eer')}></input>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='my-4 text-center'>
//                         <Link className='float-left text-sm text-secondary hover:text-neutral' href='/auth/forgetPass'>
//                             Forgot Password?
//                         </Link>
//                         <Link className='float-right text-sm text-secondary hover:text-neutral' href='/auth/login'>
//                             I already have an account
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export { RegisterForm };
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
            console.log('Registration successful:', response.data);
        } catch (error) {
            // Handle registration error (e.g., display error message)
            setError('Registration failed. Please try again.');
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
