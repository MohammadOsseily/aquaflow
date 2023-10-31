import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BiLogoTiktok } from 'react-icons/bi';
import GlobalTextField from './GlobalTextField';
function Footer() {
    return (
        <div className='pb-7'>
            <hr />
            <div className='flex justify-between pt-7 '>
                <div className='ml-2'>
                    <div className='pb-4 text-lg font-bold  text-secondary'>Information</div>
                    <div className='hover:text-gray-5000 pb-4 text-secondary'>
                        <Link href={'/about'}>About Us</Link>
                    </div>
                    <div className='pb-4 text-secondary hover:text-gray-500'>
                        <Link href={'/contactUs'}>Contact Us</Link>
                    </div>
                    <div className='pb-4 text-secondary hover:text-gray-500'>
                        <Link href={'/about'}>terms Of Service</Link>
                    </div>
                    <div className='text-secondary hover:text-gray-500 '>
                        <Link href={'/about'}>Refund Policy</Link>
                    </div>
                </div>
                <div className=''>
                    <div className='pb-2  text-lg font-bold'>NewsTeller</div>
                    <div className='pb-4 text-gray-500'>
                        Subscribe to get notified about product launches,
                        <br /> special offers and news
                    </div>
                    <GlobalTextField
                        globalTextField={{
                            inputAutoComplete: 'email',
                            inputName: 'email',
                            inputPlaceholder: 'Email',
                            inputType: 'email',
                        }}
                    />
                    <button className=' flex w-1/2  justify-center rounded-full bg-secondary py-4 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                        Subscribe
                    </button>
                </div>
                <div className='flex flex-col justify-end '>
                    <div className='pb-2 text-gray-500'>Follow Us</div>
                    <div className='flex justify-between'>
                        <div className='mr-1 text-3xl hover:text-base-200'>
                            <AiOutlineInstagram />
                        </div>
                        <div className='mr-1 text-3xl hover:text-base-300'>
                            <BiLogoFacebookCircle />
                        </div>
                        <div className='text-3xl hover:text-red-400'>
                            <BiLogoTiktok />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
