import Link from 'next/link';

function Chechkout() {
    return (
        <div className='mt-10 flex flex-row'>
            <div className='flex w-1/2 flex-col'>
                <div className='gap-4'>
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
                    <div></div>
                </div>
            </div>
            <div className='flex w-1/2 flex-col'>nothing...</div>
        </div>
    );
}
export default Chechkout;
