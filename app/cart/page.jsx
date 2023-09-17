import styles from "/styles/Cart.module.css"
import Image from "next/image";


function Cart(){

    return(<div className={`mx-auto`} style={{width : "65%"}}>
        <h1 style={{marginBottom : "90px"}}>Shopping Cart</h1>

        <div className={`${styles.shoppingcart}`}>

            <div className="column-labels">
                <label className={`${styles.productimage}`}>Image</label>
                <label className={`${styles.productdetails}`}>Product</label>
                <label className={`${styles.productprice}`}>Price</label>
                <label className={`${styles.productquantity}`}>Quantity</label>
                <label className={`${styles.productremoval}`}>Remove</label>
                <label className={`${styles.productlineprice}`}>Total</label>
            </div>

            <div className={`${styles.product}`}>
                <div className={`${styles.productimage}`}>
                    <Image  src="/images/black-bottle.png" width={200} height={200} alt="bottle"/>
                </div>
                <div className={`${styles.productdetails}`}>
                    <div className={`${styles.producttitle}`}>Dingo Dog Bones</div>
                    <p className={`${styles.productdescription}`}>The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
                </div>
                <div className={`${styles.productprice}`}>12.99</div>
                <div className={`${styles.productquantity}`}>
                    <input style={{width : "40px"}} type="number" value="2" min="1"/>
                </div>
                <div className={`${styles.productremoval}`}>
                    <button className={`${styles.removeproduct}`}>
                        Remove
                    </button>
                </div>
                <div className={`${styles.productlineprice}`}>25.98</div>
            </div>

            <div className={`${styles.product}`}>
                <div className={`${styles.productimage}`}>
                    <Image  src="/images/black-bottle.png" width={200} height={200} alt="bottle"/>
                </div>
                <div className={`${styles.productdetails}`}>
                    <div className={`${styles.producttitle}`}>Nutro™ Adult Lamb and Rice Dog Food</div>
                    <p className={`${styles.productdescription}`}>Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p>
                </div>
                <div className={`${styles.productprice}`}>45.99</div>
                <div className={`${styles.productquantity}`}>
                    <input style={{width : "40px"}} type="number" value="1" min="1"/>
                </div>
                <div className={`${styles.productremoval}`}>
                    <button className={`${styles.removeproduct}`}>
                        Remove
                    </button>
                </div>
                <div className={`${styles.productlineprice}`}>45.99</div>
            </div>

            <div className={`${styles.totals}`}>
                <div className={`${styles.totalsitem}`}>
                    <label style={{float: "left", clear : "both", width: "79%", textAlign: "right"}}>Subtotal</label>
                    <div class={`${styles.totalsvalue}`} id={`${styles.cartsubtotal}`}>71.97</div>
                </div>
                <div class={`${styles.totalsitem}`}>
                    <label style={{float: "left", clear : "both", width: "79%", textAlign: "right"}}>Tax (5%)</label>
                    <div class={`${styles.totalsvalue}`} id={`${styles.carttax}`}>3.60</div>
                </div>
                <div class={`${styles.totalsitem}`}>
                    <label style={{float: "left", clear : "both", width: "79%", textAlign: "right"}}>Shipping</label>
                    <div class={`${styles.totalsvalue}`} id={`${styles.cartshipping}`}>15.00</div>
                </div>
                <div class={`${styles.totalsitem} ${styles.totalsitemtotal}`}>
                    <label style={{float: "left", clear : "both", width: "79%", textAlign: "right"}}>Grand Total</label>
                    <div class={`${styles.totalsvalue}`} id={`${styles.carttotal}`}>90.57</div>
                </div>
            </div>

            <button class={`${styles.checkout}`}>Checkout</button>

        </div>
    </div>
    )
}

export default Cart;