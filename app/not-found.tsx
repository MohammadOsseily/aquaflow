import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex  w-full  flex-col items-center pt-60'>
            <div className='text-2xl text-secondary md:text-5xl'>There was a problem...</div>
            <div className='pt-6 text-base text-secondary md:text-xl '>
                We could not find the page you are looking for.
            </div>
            <div className=' pt-6 '>
                <Link href={'/'}>
                    <button className='w-20 rounded-full bg-secondary py-3 text-sm font-semibold text-white hover:bg-gray-500  md:w-40 md:text-xl '>
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
}
