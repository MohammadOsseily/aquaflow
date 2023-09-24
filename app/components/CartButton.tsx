'use client';

import { PiShoppingCartThin } from 'react-icons/pi';


function CartButton() {
    return (
        <>
            <div>
                <button>
                    <div>
                        <div>Shop</div>
                        <div>
                            <a href='/products'>All Products</a>
                        </div>
                    </div>
                    <div>
                        <PiShoppingCartThin
                            size={35}


                            style={{
                                transform: 'scaleX(-1)',
                                marginLeft: '5px',
                                height: '100%',
                                backgroundColor: 'transparent',
                            }}
                        />
                    </div>
                </button>
            </div>
        </>
    );
}
export default CartButton;
