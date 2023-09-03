'use client'
import styles from "/styles/CartButton.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { PiShoppingCartThin } from 'react-icons/pi';


function CartButton(){

    return(

        <button className={`${styles.btn}   d-flex bd-highlight align-items-center`}>
            <div className="w-100 bg-transparent">
                <div className={`bg-transparent  w-100 bd-highlight ${styles.smText} `}>
                    Shop
                </div>
                <div className={`bg-transparent ${styles.mainText}`}>
                    <a href="#" >All Products</a>
                </div>
            </div>
            <div className={`w-25 ${styles.border}  flex-shrink-1 bd-highlight bg-transparent`}>
                <PiShoppingCartThin size={35} style={{transform : "scaleX(-1)", marginLeft:"5px", height : "100%", backgroundColor: "transparent"}}/>
            </div>
        </button>
    )
}
export default CartButton;