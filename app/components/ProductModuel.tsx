import Image from 'next/image';
import { Product } from '../../types/product';

type props = {
    products: Product;
};

function ProductModuel({ products }: props) {
    return (
        <div className=' absolute top-2/4 z-10 w-3/4'>
            <div className=' bg-white'>
                <div>
                    <Image
                        src={'/static/images/' + products.image}
                        width={100}
                        height={100}
                        alt={products.productName}
                    />
                </div>

                <div>
                    <div>{products.productName}</div>
                    <div>{products.price}</div>
                    <div>{products.description}</div>
                </div>
            </div>
        </div>
    );
}
export default ProductModuel;
