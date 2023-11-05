import Image from 'next/image';
import Link from 'next/link';

function Carsoule() {
    return (
        <>
            <div className='carousel mx-auto w-4/5 md:w-full'>
                <div id='item1' className='carousel-item h-[500px] w-full '>
                    <Image
                        src='/static/images/first.jpg'
                        width={1000}
                        height={1000}
                        className=' w-full rounded-3xl'
                        alt='first slide'
                    />
                </div>
                <div id='item2' className='carousel-item h-[500px] w-full '>
                    <Image
                        src='/static/images/first.jpg'
                        width={1000}
                        height={1000}
                        className=' w-full rounded-3xl'
                        alt='second slide'
                    />
                </div>
            </div>
            <div className='flex w-full justify-center gap-2 py-2'>
                <Link href='#item1' className='btn btn-xs border-0 bg-neutral'>
                    1
                </Link>
                <Link href='#item2' className='btn btn-xs border-0 bg-neutral'>
                    2
                </Link>
            </div>
        </>
    );
}

export default Carsoule;
