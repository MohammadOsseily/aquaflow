import AccountBar from '../components/AccountBar';
import GlobalTextField from '../components/GlobalTextField';

function Account() {
    return (
        <div className=''>
            <div className='mx-auto w-4/5 pb-7 pt-7 text-4xl '>Profile</div>
            <AccountBar />
            <div className='mx-auto w-4/5 pt-5'>
                <div className=''>
                    <GlobalTextField
                        globalTextField={{
                            inputAutoComplete: 'firstname',
                            inputName: 'fName',
                            inputPlaceholder: 'First Name',
                            inputType: 'text',
                        }}
                    />
                    <GlobalTextField
                        globalTextField={{
                            inputAutoComplete: 'lastname',
                            inputName: 'lName',
                            inputPlaceholder: 'Last Name',
                            inputType: 'text',
                        }}
                    />
                    <GlobalTextField
                        globalTextField={{
                            inputAutoComplete: 'displayName',
                            inputName: 'displayName',
                            inputPlaceholder: 'Display Name',
                            inputType: 'text',
                        }}
                    />
                    <GlobalTextField
                        globalTextField={{
                            inputAutoComplete: 'email',
                            inputName: 'email',
                            inputPlaceholder: 'Email',
                            inputType: 'email',
                        }}
                    />
                    <div className='pb-4 text-2xl'>Password Change</div>
                    <GlobalTextField
                        globalTextField={{
                            inputAutoComplete: 'currentPassword',
                            inputName: 'currentPassword',
                            inputPlaceholder: 'Current password',
                            inputType: 'password',
                        }}
                    />
                    <GlobalTextField
                        globalTextField={{
                            inputAutoComplete: 'newPassword',
                            inputName: 'newPassword',
                            inputPlaceholder: 'New password',
                            inputType: 'password',
                        }}
                    />
                    <GlobalTextField
                        globalTextField={{
                            inputAutoComplete: 'confirmPassword',
                            inputName: 'confirmPassword',
                            inputPlaceholder: 'Confirm new password',
                            inputType: 'password',
                        }}
                    />
                    <div className='flex justify-center'>
                        <button className=' w-1/2  rounded-full bg-secondary py-3 text-sm font-semibold uppercase text-white hover:bg-gray-600 '>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Account;
