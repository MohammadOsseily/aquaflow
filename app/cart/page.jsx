import styles from "/styles/Cart.module.css"
import Image from "next/image";
import Button from "../components/Button"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TiDelete } from 'react-icons/ti';

function Cart(){

    return(
        <div className={`mx-auto`} style={{width : "65%"}}>

        <div className={`row`}>
            <div className={`row align-items-center`}>
                <div className={`col-2  `} style={{fontSize : "27px"}}> Shopping Cart</div>
                <div className={`col-2 d-flex justify-content-center `} style={{fontSize : "18px" , color : "#99A7B4"}} > Label</div>
                <div className={`col-2 d-flex justify-content-center`} style={{fontSize : "18px" , color : "#99A7B4"}} >Unit Price</div>
                <div className={`col-2 d-flex justify-content-center`} style={{fontSize : "18px" , color : "#99A7B4"}} > Quantity</div>
                <div className={`col-2 d-flex justify-content-end`} style={{fontSize : "18px" , color : "#99A7B4"}} > Remove</div>
                <div className={`col-2 d-flex justify-content-end`} style={{fontSize : "18px" , color : "#99A7B4"}} > Price</div>

            </div>

            <div className={`row`}>
                <div className={`col-2`}>
                    <Image src={"/images/black-bottle.png"} width={200} height={200} alt={"bottle"}/>


                </div>
                <div className={`col-2 d-flex`}>
                    <div className={`d-flex align-items-center justify-content-end`} style={{width : "400px" , height : "200px"}}>
                        <div >Dingo Dog Bones</div>
                    </div>


                </div>
                <div className={`col-2 d-flex justify-content-center`}>
                    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>

                </div>
                <div className={`col-2 d-flex justify-content-center`}>
                    <div style={{height : "200px"}} className={`d-flex align-items-center`}>
                        <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism `} >
                            <Button theme={styles.btn_white} title="-" />
                            <div style={{backgroundColor : "transparent"}}>1</div>
                            <Button theme={styles.btn_black} title="+" />
                        </div>
                    </div>

                </div>
                <div className={`col-2 d-flex justify-content-end`}>
                    <div style={{height : "200px"}}  className={` d-flex align-items-center`}  >
                        <TiDelete style={{marginRight : "15px"}} size={30}/>
                    </div>

                </div>
                <div className={`col-2 d-flex justify-content-end`}>
                    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>

                </div>


            </div>
            <hr/>
            <div className={`d-flex justify-content-end`}>
                <div className={`row w-50`}>
                    <div className={`row pb-1`}>
                        <div style={{fontSize : "18px" , color : "#99A7B4"}} className={`col-6 d-flex justify-content-end `}>Subtotal</div>
                        <div style={{fontSize : "18px"}} className={`col-6 d-flex justify-content-end`}>71$</div>

                    </div>
                    <div className={`row pb-1`}>
                        <div style={{fontSize : "18px" , color : "#99A7B4"}} className={`col-6 d-flex justify-content-end`}>Tax (5%)</div>
                        <div style={{fontSize : "18px" }} className={`col-6 d-flex justify-content-end`}>3.60%</div>

                    </div>
                    <div className={`row pb-1`}>
                        <div style={{fontSize : "18px" , color : "#99A7B4"}} className={`col-6 d-flex justify-content-end`}>Shipping</div>
                        <div style={{fontSize : "18px" }} className={`col-6 d-flex justify-content-end`}>15$</div>

                    </div>
                    <div className={`row pb-3`}>
                        <div style={{fontSize : "18px" , color : "#99A7B4"}} className={`col-6 d-flex justify-content-end`}>Total</div>
                        <div style={{fontSize : "18px" }} className={`col-6 d-flex justify-content-end`}>90$</div>

                    </div>
                    <div className={`row `}>
                        <div className={`d-flex justify-content-end`}>
                            <Link href={"/checkout"}> <button className={` ${styles.checkOut} neumorphism rounded-pill`}>CHECK OUT</button> </Link>
                            </div>

                    </div>

                </div>
            </div>




        </div>

        </div>
    )
}

export default Cart;