import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuSend } from 'react-icons/lu';
import { FiShoppingCart } from 'react-icons/fi';
import 'react-icons';
import Link from 'next/link';
import Carsoule from './components/Carsoule';
import ListOfProducts from './components/ListOfProducts';

export default function Home() {
    return (
        <main className='h-full'>
            <div className=' mb-4 mt-10 flex h-full flex-col gap-4 md:flex-row'>
                <div className='relative mx-auto flex h-[300px] w-4/5 overflow-hidden  rounded-3xl bg-secondary md:h-[600px] md:w-3/5 md:flex-col'>
                    <div className='flex flex-col p-5 md:p-10'>
                        <div className='block w-3/4  text-4xl text-primary md:text-7xl'>The Simple Bottle Water</div>
                        <div className='block w-full text-xs text-primary  md:pt-3 md:text-sm'>MORE OFFERS</div>
                    </div>

                    <Image
                        className=' absolute right-3 top-[80px] h-[250px] w-[100px] md:right-[90px] md:h-[600px] md:w-[150px] '
                        src={'/static/images/black-bottle.png'}
                        alt='bottle'
                        width={400}
                        height={400}
                    />
                    <div className='absolute bottom-3 ml-5 flex h-[60px] w-[150px] rounded-xl bg-neutral md:bottom-20 md:ml-10 md:h-fit md:w-fit'>
                        <div className='   border-r-2 border-gray-300 bg-transparent pl-4 pr-4 pt-3'>
                            <div className=' text-[10px] md:text-xs'>Shop</div>
                            <div className='pb-4 pt-3 text-[12px] md:text-sm'>
                                <Link href='/products'>All Product</Link>
                            </div>
                        </div>
                        <div className='bg-transparen flex scale-x-[-1] items-center pl-4 pr-4'>
                            <Link href={'/cart'}>
                                <FiShoppingCart size={25} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className=' mx-auto  h-full w-4/5   gap-2 md:w-2/5 md:flex-col'>
                    <div className='relative col-span-3 row-span-2 h-[250px] rounded-3xl bg-neutral md:h-[330px]'>
                        <div className='absolute left-10 top-10 w-3/5  text-4xl text-secondary md:text-6xl'>
                            See Our Blog
                        </div>
                        <Image
                            src={'/static/images/greyball.png'}
                            className=' absolute  bottom-0 right-[-20px] h-[200px] w-[200px] md:right-0 md:h-[250px] md:w-[250px]'
                            alt='greuball '
                            width={300}
                            height={300}
                        />
                        <div className='absolute bottom-[40px] left-10'>
                            <FiArrowUpRight size={50} />
                        </div>
                    </div>
                    <div className='relative mt-5 flex h-[200px] rounded-3xl  bg-accent  md:h-[250px] md:flex-col'>
                        <div className='absolute left-10 top-10 w-2/6 md:w-1/5'>Have Some Questions?</div>
                        <div className='absolute bottom-[50px] left-10 w-full  text-4xl text-secondary md:text-6xl '>
                            Contact Us
                        </div>
                        <div className='absolute right-10 top-10 text-sm'>
                            <Link href={'/contactUs'}>
                                <LuSend size={40} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='  flex flex-col'>
                <Carsoule />
            </div>
            <ListOfProducts />
        </main>
    );
}
