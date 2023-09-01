import styles from "/styles/CartButton.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { PiShoppingCartThin } from 'react-icons/pi';


function CartButton(){

    return(

        <button className={`${styles.btn} rounded-pill  d-flex bd-highlight`}>
            <div className="w-100">
                <div>
                    Shop
                </div>
                <div>
                    All Products
                </div>
            </div>
            <div className={`w-25 ${styles.border}  `}>
                <PiShoppingCartThin size={35} style={{transform : "scaleX(-1)", marginLeft:"5px", height : "100%"}}/>
            </div>
        </button>
    )
}
export default CartButton;