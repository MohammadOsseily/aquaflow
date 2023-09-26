import Image from 'next/image';

export default function Home() {
    return (
        <main className='h-screen min-h-screen'>
            <div className='  flex h-4/5 flex-row gap-4'>
                <div className='relative flex h-full w-3/5 flex-col overflow-hidden rounded-xl bg-primary'>
                    <div className='absolute top-3 text-5xl text-white'>The Simple Bottle Water</div>
                    <div className='absolute text-xs'>MORE OFFERS</div>
                    <Image
                        className=' absolute h-[700px] w-[500px] '
                        src={'/static/images/black-bottle.png'}
                        alt='bottle'
                        width={500}
                        height={500}
                    />
                </div>

                <div className='  w-2/5 flex-col gap-2'>
                    <div className='col-span-3 row-span-2 h-[57%] rounded-xl bg-secondary'>
                        <div>See Our Blog</div>
                        <Image src={'/static/images/greyball.png'} alt='greuball' width={200} height={200} />
                    </div>
                    <div className='mt-5 flex h-2/5 flex-col  rounded-xl bg-accent'> dsd</div>
                </div>
            </div>
        </main>
    );
}
