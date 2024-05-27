import GlobalTextField from '../components/GlobalTextField';
// import InternationalPhoneNumber from '../components/InternationalPhoneNumber';

function Chechkout() {
    return (
        <div className='mt-10 flex flex-row'>
            <div className=' mx-auto flex w-[95%] flex-col  md:grid md:w-full md:grid-cols-2 md:gap-4'>
                <div className='neumorphism mb-5  bg-white pl-1'>
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
                        {/* <InternationalPhoneNumber /> */}

                        <GlobalTextField
                            globalTextField={{
                                inputAutoComplete: 'fName',
                                inputName: 'fName',
                                inputPlaceholder: 'Full Name',
                                inputType: 'text',
                            }}
                        />

                        <GlobalTextField
                            globalTextField={{
                                inputAutoComplete: 'country',
                                inputName: 'country',
                                inputPlaceholder: 'Country',
                                inputType: 'text',
                            }}
                        />

                        <GlobalTextField
                            globalTextField={{
                                inputAutoComplete: 'state',
                                inputName: 'state',
                                inputPlaceholder: 'State/Province',
                                inputType: 'text',
                            }}
                        />

                        <GlobalTextField
                            globalTextField={{
                                inputAutoComplete: 'city',
                                inputName: 'city',
                                inputPlaceholder: 'City',
                                inputType: 'text',
                            }}
                        />

                        <GlobalTextField
                            globalTextField={{
                                inputAutoComplete: 'apartment',
                                inputName: 'apartment',
                                inputPlaceholder: 'Apartment/Suite/Building',
                                inputType: 'text',
                            }}
                        />

                        <GlobalTextField
                            globalTextField={{
                                inputAutoComplete: 'Floor',
                                inputName: 'Floor',
                                inputPlaceholder: 'Floor',
                                inputType: 'text',
                            }}
                        />
                    </div>
                </div>

                <div className='neumorphism h-1/2 bg-white'>
                    <div className='mx-4 pb-5 pt-4 text-3xl'>Complete</div>

                    <div>
                        <div className='mx-4 pb-10'>
                            <input
                                className='mb-6 w-full  rounded-xl border border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
                                type='text'
                                placeholder='Additional Notes'
                                name='AdditionalNotes'
                            />
                            <div className='flex justify-center'>
                                <button className=' flex w-1/2  justify-center rounded-full bg-secondary py-4 text-sm font-semibold uppercase text-white hover:bg-gray-500 '>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chechkout;
