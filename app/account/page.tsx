import AccountBar from '../components/AccountBar';
import GlobalTextField from '../components/GlobalTextField';

function Account() {
    return (
        <div className=''>
            <div className='ml-2 pt-7 text-4xl md:ml-0'>Profile</div>
            <div className='grid grid-cols-2 gap-4 pt-5'>
                <AccountBar />
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
                    <button className='w-full rounded-full bg-secondary py-3 text-sm font-semibold uppercase text-white hover:bg-gray-600 '>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Account;
