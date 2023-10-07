import Link from 'next/link';

function Chechkout() {
    return (
        <div className='mt-10 flex flex-row'>
            <div className='flex w-1/2  flex-col'>
                <div className='pb-10'>
                    <div className='pb-10 text-3xl'>Customer</div>
                    <div>
                        <input
                            className='mb-6 w-3/5 rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                            placeholder='Email'
                            type='email'
                            name='Email'
                        />
                        <button className='hover: ml-2 w-1/3 rounded-full bg-secondary py-3 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                            Continue
                        </button>
                        <div className='flex w-full flex-row items-center'>
                            <input type='checkbox' id='horns' name='horns' />
                            <div className='ml-2 text-sm'>Subscribe to our newsletter.</div>
                        </div>
                        <div className='pb-10 pt-4 text-sm'>
                            Already have an account?{' '}
                            <Link href={'/auth/login'} className='text-info'>
                                Sign in now
                            </Link>
                        </div>
                        <hr className='h-[2px] bg-neutral' />
                    </div>
                </div>
                <div>
                    <div className='pb-5 text-3xl'>Shipping</div>
                    <div className='pb-2 text-sm'>Shipping Addres</div>
                    <input
                        className='mb-6 w-full rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='Full Name'
                        type='text'
                        name='Full Name'
                    />

                    <input
                        className='mb-6 w-full  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='Phone Number'
                        type='number'
                        name='Phone Number'
                    />
                    <input
                        className='mb-6 w-full  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='Country'
                        type='text'
                        name='Country'
                    />
                    <input
                        className='mb-6 w-[49%]  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='State/Province'
                        type='text'
                        name='State/Province'
                    />
                    <input
                        className='mb-6 ml-1 w-1/2 rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='City'
                        type='text'
                        name='City'
                    />
                    <input
                        className='mb-6 w-full  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='Address'
                        type='text'
                        name='Address'
                    />
                    <input
                        className='mb-6 w-full  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='Apartment/Suite/Building'
                        type='text'
                        name='Apartment/Suite/Building'
                    />
                    <input
                        className='mb-6 w-full  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='Floor'
                        type='text'
                        name='Floor'
                    />
                    <input
                        className='mb-6 w-full  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='District (المنطقة)'
                        type='text'
                        name='District'
                    />
                    <input
                        className='mb-6 w-full  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                        placeholder='Postal Code'
                        type='text'
                        name='Postal Code'
                    />
                    <div className='text-sm'>Payment Currency</div>
                    <div className='flex flex-col justify-center  py-2'>
                        <div className='flex  pb-2'>
                            <input type='radio' name='radio-7' className='radio-info radio' />
                            <div className='pl-1 text-sm'>USD</div>
                        </div>
                        <div className='flex text-sm'>
                            <input type='radio' name='radio-7' className='radio-info radio' />
                            <div className='pl-1'>LBP</div>
                        </div>
                        <div className='flex w-full items-center pb-5 pl-1 pt-2'>
                            <input type='checkbox' id='horns' name='horns' />
                            <div className='ml-2 text-sm '>My billing address is the same as my shipping address.</div>
                        </div>
                    </div>
                    <div>
                        <div className='pb-2 text-sm'>Shipping Method</div>
                        <div className='mb-10 flex h-40 flex-col rounded-xl border-2 bg-white'>
                            <div className='mb-4 flex h-1/2 flex-row items-center'>
                                <input
                                    id='default-radio-1'
                                    type='radio'
                                    value=''
                                    name='default-radio'
                                    className='ml-4 h-6 w-6   '
                                />
                                <label
                                    htmlFor='default-radio-1'
                                    className='ml-4 text-lg font-medium text-gray-900 dark:text-gray-300'>
                                    Pickup In Store
                                </label>
                            </div>
                            <div className='mb-4 flex h-1/2 flex-row items-center border-t-2'>
                                <input
                                    id='default-radio-2'
                                    type='radio'
                                    value=''
                                    name='default-radio'
                                    className='ml-4 h-6 w-6 '
                                />
                                <label
                                    htmlFor='default-radio-2'
                                    className='ml-4 text-lg font-medium text-gray-900 dark:text-gray-300'>
                                    Free Shipping
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Additional Notes</div>
                        <div className='pb-10'>
                            <input
                                className='mb-6 w-full  rounded-xl  border-[1px] border-secondary p-2 text-secondary outline-none focus:bg-neutral'
                                type='text'
                                name='AdditionalNotes'
                            />
                            <button className='hover:  w-1/3 rounded-full bg-secondary py-3 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                <div className='pb-10'>
                    <div className='pb-4 text-3xl'>Paymnet</div>

                    <div className='mb-3 flex h-20 flex-row items-center rounded-xl border-2 bg-white'>
                        <input
                            id='cashOnDelevery'
                            type='radio'
                            value=''
                            name='cashOnDelevery'
                            className='ml-4 h-6 w-6   '
                        />
                        <label
                            htmlFor='cashOnDelevery'
                            className='ml-4 text-lg font-medium text-gray-900 dark:text-gray-300'>
                            Cash on Delivery
                        </label>
                    </div>
                    <button className='  w-full rounded-xl bg-secondary py-4 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                        Place Order
                    </button>
                </div>
            </div>
            <div className='flex w-1/2 flex-col'>nothing...</div>
        </div>
    );
}
export default Chechkout;
