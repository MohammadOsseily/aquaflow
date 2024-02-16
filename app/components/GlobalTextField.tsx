import { GlobaltextFieldType } from '../../types/globalTextField';

type props = {
    globalTextField: GlobaltextFieldType;
};
function GlobalTextField({ globalTextField }: props) {
    return (
        <input
            className='mb-6 w-full rounded-xl border  border-secondary bg-white p-2 text-secondary outline-none focus:bg-primary'
            placeholder={globalTextField.inputPlaceholder}
            type={globalTextField.inputType}
            name={globalTextField.inputName}
            autoComplete={globalTextField.inputAutoComplete}
        />
    );
}
export default GlobalTextField;
