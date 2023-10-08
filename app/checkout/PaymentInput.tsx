'use client';
import { useState } from 'react';
type props = {
    items: {
        id: number;
        label: string;
        slug: string;
    }[];
};

function PaymnetInput({ items }: props) {
    const [selected, setSeleceted] = useState(0);

    return (
        <>
            <div className='flex w-full px-3 pb-4'>
                {items.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className=' flex w-full cursor-pointer flex-row text-lg font-medium text-secondary'>
                            <label
                                htmlFor={`${item.label}-${item.id}`}
                                className='w-full cursor-pointer text-lg font-medium text-secondary '>
                                <div
                                    className={`card rounded-box flex h-20 w-full   flex-wrap  content-center justify-center  ${
                                        selected == item.id ? 'bg-accent' : 'bg-neutral'
                                    }`}>
                                    {item.label}
                                    <div className={` mb-4 flex h-1/2 flex-row items-center`}>
                                        <input
                                            id={`${item.slug}-${item.id}`}
                                            type='radio'
                                            name='default-radio'
                                            className='hidden'
                                            onChange={(e) => (e.target.checked == true ? setSeleceted(item.id) : null)}
                                        />
                                    </div>
                                </div>
                            </label>
                            {index == 0 ? <div className='divider divider-horizontal w-fit'></div> : null}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default PaymnetInput;
