'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import InternationalPhoneNumber from '../components/InternationalPhoneNumber';

function Chechkout() {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [conutry, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [apartment, setApartment] = useState('');
    const [floor, setFloor] = useState('');
    const [additional_notes, setAditinalnotes] = useState('');

    const router = useRouter();
    const password = localStorage.getItem('password');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/order/create', {
                email,
                password,
                fname,
                conutry,
                state,
                city,
                apartment,
                floor,
                additional_notes,
            });
            const token = localStorage.getItem('token');

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            alert('order succefully done ');
            router.push('/');
        } catch (err) {
            alert('error in the checkout');
        }
    };

    return (
        <div className='mt-10 flex flex-row'>
            <form
                method='POST'
                onSubmit={handleSubmit}
                className=' mx-auto flex w-[95%] flex-col  md:grid md:w-full md:grid-cols-2 md:gap-4'>
                <div className='neumorphism mb-5  bg-white pl-1'>
                    <div className='mx-4 pb-5 pt-4 text-3xl'>Shipping</div>

                    <div className='mx-4'>
                        <input
                            className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            placeholder='email'
                        />
                        {/* <InternationalPhoneNumber /> */}

                        <input
                            className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                            type='text'
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            name='fname'
                            placeholder='fname'
                        />

                        <input
                            className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                            type='text'
                            value={conutry}
                            onChange={(e) => setCountry(e.target.value)}
                            name='country'
                            placeholder='country'
                        />
                        <input
                            className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                            type='text'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            name='state'
                            placeholder='state'
                        />

                        <input
                            className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            name='city'
                            placeholder='city'
                        />

                        <input
                            className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                            type='text'
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                            name='apartment'
                            placeholder='apartment'
                        />

                        <input
                            className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                            type='text'
                            value={floor}
                            onChange={(e) => setFloor(e.target.value)}
                            name='floor'
                            placeholder='floor'
                        />
                    </div>
                </div>

                <div className='neumorphism h-1/2 bg-white'>
                    <div className='mx-4 pb-5 pt-4 text-3xl'>Complete</div>

                    <div>
                        <div className='mx-4 pb-10'>
                            <input
                                className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                                type='text'
                                value={additional_notes}
                                onChange={(e) => setAditinalnotes(e.target.value)}
                                name='additinalnotes'
                                placeholder='Additional Notes'
                            />
                            <div className='flex justify-center'>
                                <button
                                    type='submit'
                                    className=' flex w-1/2  justify-center rounded-full bg-secondary py-4 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Chechkout;
