'use client';
import { useState } from 'react';

function Paymnetinput() {
    const [selected, setSeleceted] = useState(false);

    return (
        <div>
            <div className='mx-4 flex w-full pb-4'>
                <label htmlFor='default-radio-1' className='w-[44%] text-lg font-medium text-secondary '>
                    <div
                        className={`card rounded-box flex h-20   flex-wrap  content-center justify-center  ${
                            selected ? 'bg-accent' : 'bg-primary'
                        }`}>
                        Pickup In store
                        <div className={` mb-4 flex h-1/2 flex-row items-center`}>
                            <input
                                id='default-radio-1'
                                type='radio'
                                value=''
                                name='default-radio'
                                className={`ml-4 hidden h-6 w-6 `}
                                onChange={() => setSeleceted(!selected)}
                            />
                        </div>
                    </div>
                </label>

                <div className='divider divider-horizontal'></div>

                <label htmlFor='default-radio-2' className='w-[44%] text-lg font-medium text-secondary '>
                    <div
                        className={`card rounded-box flex h-20   flex-wrap  content-center justify-center  ${
                            !selected ? 'bg-accent' : 'bg-primary'
                        }`}>
                        Free Shipping
                        <div className={` mb-4 flex h-1/2 flex-row items-center`}>
                            <input
                                id='default-radio-2'
                                type='radio'
                                value=''
                                name='default-radio'
                                className={`ml-4 hidden h-6 w-6 `}
                                onChange={() => setSeleceted(!selected)}
                            />
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}
export default Paymnetinput;
