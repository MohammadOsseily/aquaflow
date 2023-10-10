import Image from 'next/image';
import { ProductDetail } from '../../types/productDetails';

type props = {
    productDetails: ProductDetail;
};

function ProductModuel({ productDetails }: props) {
    return (
        <div>
            <div>
                <Image src={'/static/images/' + productDetails.image} alt={productDetails.productName} />
            </div>

            <div>
                <div>{productDetails.productName}</div>
                <div>{productDetails.price}</div>
                <div>{productDetails.description}</div>
            </div>
        </div>
    );
}
export default ProductModuel;
