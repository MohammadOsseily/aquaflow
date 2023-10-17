import GlobalTextField from '../components/GlobalTextField';
import Paymnetinput from './PaymentInput';

function Chechkout() {
    return (
        <div className='mt-10 flex flex-row'>
            <div className=' flex w-1/2  flex-col'>
                <div className=''>
                    <div className='neumorphism mb-5 bg-white pl-1'>
                        <div className='mx-4 pb-5 pt-4 text-3xl'>Shipping</div>

                        <div className='mx-4'>
                            <GlobalTextField
                                globalTextField={{
                                    inputAutoComplete: 'email',
                                    inputName: 'email',
                                    inputPlaceholder: 'Email',
                                    inputType: 'email',
                                }}
                            />

                            <input
                                className='mb-6 w-full rounded-xl border  border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                placeholder='Full Name'
                                type='text'
                                name='fName'
                            />

                            <input
                                className='mb-6 w-full  rounded-xl border  border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                placeholder='Phone Number'
                                type='number'
                                name='phone'
                            />
                            <input
                                className='mb-6 w-full  rounded-xl  border border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                placeholder='Country'
                                type='text'
                                name='country'
                            />
                            <input
                                className='mb-6 w-[49%]  rounded-xl border  border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                placeholder='State/Province'
                                type='text'
                                name='state'
                            />
                            <input
                                className='mb-6 ml-1 w-1/2 rounded-xl border  border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                placeholder='City'
                                type='text'
                                name='city'
                            />

                            <input
                                className='mb-6 w-full rounded-xl  border  border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                placeholder='Apartment/Suite/Building'
                                type='text'
                                name='apartment'
                            />
                            <input
                                className='mb-6 w-full rounded-xl  border  border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                placeholder='Floor'
                                type='text'
                                name='floor'
                            />
                            <input
                                className='mb-6 w-full rounded-xl  border  border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                placeholder='District (المنطقة)'
                                type='text'
                                name='District'
                            />
                        </div>
                        <Paymnetinput
                            items={[
                                { id: 0, label: 'Pickup In Store', slug: 'Pickup In Store' },
                                { id: 1, label: 'Free Delevery', slug: 'Free Delevery' },
                            ]}
                        />
                    </div>

                    <div className='neumorphism bg-white'>
                        <div className='mx-4 pb-5 pt-4 text-3xl'>Shipping Method</div>

                        <div>
                            <div className='mx-4 pb-2'>Additional Notes</div>
                            <div className='mx-4 pb-10'>
                                <input
                                    className='mb-6 w-full  rounded-xl border border-secondary bg-primary p-2 text-secondary outline-none focus:bg-neutral'
                                    type='text'
                                    name='AdditionalNotes'
                                />
                                <div className='flex justify-center'>
                                    <button className=' flex w-1/4  justify-center rounded-full bg-secondary py-4 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chechkout;
