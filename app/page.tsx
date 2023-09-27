import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuSend } from 'react-icons/lu';
import 'react-icons';

export default function Home() {
    return (
        <main className='h-screen min-h-screen'>
            <div className=' mt-10 flex h-4/5 flex-row gap-4'>
                <div className='relative flex h-[90%] w-3/5 flex-col overflow-hidden rounded-3xl bg-primary'>
                    <div className='absolute left-10 top-10  w-3/5 text-7xl text-white'>The Simple Bottle Water</div>
                    <div className='absolute left-10 top-[350px] text-sm  text-white'>MORE OFFERS</div>
                    <Image
                        className=' absolute right-[90px] top-[105px] h-[600px] w-[200px]  '
                        src={'/static/images/black-bottle.png'}
                        alt='bottle'
                        width={400}
                        height={400}
                    />
                </div>

                <div className='   w-2/5 flex-col gap-2'>
                    <div className='relative col-span-3 row-span-2 h-[50%] rounded-3xl bg-secondary'>
                        <div className='absolute left-10 top-10  w-3/5 text-6xl text-neutral'>See Our Blog</div>
                        <Image
                            src={'/static/images/greyball.png'}
                            className=' absolute bottom-0 right-0'
                            alt='greuball '
                            width={300}
                            height={300}
                        />
                        <div className='absolute left-10 top-[300px]'>
                            <FiArrowUpRight size={50} />
                        </div>
                    </div>
                    <div className='relative mt-5 flex h-[37%] flex-col  rounded-3xl bg-accent'>
                        <div className='absolute left-10 top-10 w-1/5'>Have Some Questions?</div>
                        <div className='absolute left-10 top-[150px]  w-full text-6xl text-neutral '>Contact Us</div>
                        <div className='absolute right-10 top-10'>
                            <LuSend size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
