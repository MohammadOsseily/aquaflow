import Vendors from '../../components/Vendor';

type Props = {
    params: { id: string };
};

function Vendor(props: Props) {
    return (
        <div>
            <div className='pb-10 pt-10 text-center text-4xl'>Vendor {props.params.id}</div>
            <Vendors />
        </div>
    );
}
export default Vendor;
