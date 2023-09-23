'use client';

import Image from 'next/image';
import Link from 'next/link';

type props = {
    image: string;
    price: number;
    productName: string;
};

function ProductCard({ image, price, productName }: props) {
    return (
        <Link href='/productDetailes'>
            {price}
            <Image alt={productName} fill src={image} />
        </Link>
    );
}
export default ProductCard;
