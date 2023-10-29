'use client';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';

import 'react-phone-input-2/lib/style.css';

function InternationalPhoneNumber() {
    const [value, setValue] = useState('');
    return (
        <PhoneInput
            placeholder='Enter phone number'
            value={value}
            onChange={(newValue) => setValue(newValue)}
            containerClass={
                'mb-6 w-full flex items-center rounded-xl border h-11 border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
            }
            inputClass={'bg-black'}
            inputStyle={{ backgroundColor: 'transparent', border: '0px', width: '100%' }}
            buttonStyle={{ border: '0px', backgroundColor: 'transparent' }}
        />
    );
}
export default InternationalPhoneNumber;
