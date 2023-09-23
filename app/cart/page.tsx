import Image from 'next/image';
import Link from 'next/link';
import { TiDelete } from 'react-icons/ti';

function Cart() {
    return (
        <div>
            <div>
                <div>
                    <div>Shopping Cart</div>
                    <div>Label</div>
                    <div>Unit Price</div>
                    <div>Quantity</div>
                    <div>Remove</div>
                    <div>Price</div>
                </div>

                <div>
                    <div>
                        <Image src={'/images/black-bottle.png'} width={200} height={200} alt={'bottle'} />
                    </div>
                    <div>
                        <div>
                            <div>Dingo Dog Bones</div>
                        </div>
                    </div>
                    <div>
                        <div>12$</div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <button>test</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <TiDelete style={{ marginRight: '15px' }} size={30} />
                        </div>
                    </div>
                    <div>
                        <div style={{ height: '200px' }}>12$</div>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <div>
                            <div>Subtotal</div>
                            <div>71$</div>
                        </div>
                        <div>
                            <div>Tax (5%)</div>
                            <div>3.60%</div>
                        </div>
                        <div>
                            <div>Shipping</div>
                            <div>15$</div>
                        </div>
                        <div>
                            <div>Total</div>
                            <div>90$</div>
                        </div>
                        <div>
                            <div>
                                <Link href={'/checkout'}>
                                    <button>CHECK OUT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
