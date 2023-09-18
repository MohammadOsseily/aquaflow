import styles from "/styles/Cart.module.css"
import Image from "next/image";
import Button from "../components/Button"

function Cart(){

    return(
        <div className={`mx-auto`} style={{width : "65%"}}>
            {/*<div className={`d-flex justify-content-between`}>*/}
            {/*    */}
            {/*    <div className={`d-flex flex-column`}>*/}
            {/*        <div style={{fontSize : "30px"}}> Shopping Cart</div>*/}
            {/*        <Image src={"/images/black-bottle.png"} width={200} height={200} alt={"bottle"}/>*/}
            {/*        <Image src={"/images/black-bottle.png"} width={200} height={200} alt={"bottle"}/>*/}
            {/*    </div>*/}
            {/*    */}
            {/*    <div className={`d-flex flex-column`}>*/}
            {/*        <div style={{fontSize : "20px"}} > Product</div>*/}
            {/*        <div className={`d-flex align-items-center`} style={{width : "400px" , height : "200px"}}>*/}
            {/*            <div >Dingo Dog Bones</div>*/}
            {/*        </div>*/}
            {/*        <div className={`d-flex align-items-center`} style={{width : "400px" , height : "200px"}}>*/}
            {/*            <div >Dingo Dog Bones</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    */}

                {/*<div className={`d-flex flex-column`}>*/}
                {/*    <div style={{fontSize : "20px"}} > Price</div>*/}
                {/*    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>*/}
                {/*    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>*/}
                {/*</div>*/}

            {/*    */}
            {/*    <div className={`d-flex flex-column`}>*/}
            {/*        <div className={`d-flex align-items-center`} style={{fontSize : "20px"}} > Quantity</div>*/}
            {/*        <div style={{height : "200px"}} className={`d-flex align-items-center`}>*/}
            {/*            <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism `} >*/}
            {/*                <Button theme={styles.btn_white} title="-" />*/}
            {/*                <div style={{backgroundColor : "transparent"}}>1</div>*/}
            {/*                <Button theme={styles.btn_black} title="+" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div style={{height : "200px"}} className={`d-flex align-items-center`}>*/}
            {/*            <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism `} >*/}
            {/*                <Button theme={styles.btn_white} title="-" />*/}
            {/*                <div style={{backgroundColor : "transparent"}}>1</div>*/}
            {/*                <Button theme={styles.btn_black} title="+" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

                {/*<div className={`d-flex flex-column `}>*/}
                {/*    <div style={{fontSize : "20px"}} > Remove</div>*/}
                {/*    <div style={{height : "200px"}}  className={` d-flex align-items-center`}  >*/}
                {/*        <button     className={` ${styles.removeProduct}   neumorphism d-flex`}>*/}
                {/*            Remove*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div style={{height : "200px"}}  className={` d-flex align-items-center`}  >*/}
                {/*        <button     className={` ${styles.removeProduct}   neumorphism d-flex`}>*/}
                {/*            Remove*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={`d-flex flex-column`}>*/}
                {/*    <div style={{fontSize : "20px"}} > Total</div>*/}
                {/*    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>*/}
                {/*    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            <div className={`row`}>
                <div className={`col-xl-3 col-m-2 col-sm-0`}>
                    <div style={{fontSize : "30px"}}> Shopping Cart</div>
                    <Image src={"/images/black-bottle.png"} width={200} height={200} alt={"bottle"}/>
                    <Image src={"/images/black-bottle.png"} width={200} height={200} alt={"bottle"}/>
                </div>
                <div className={`col-xl-2 col-m-1 col-sm-0`}>
                    <div style={{fontSize : "18px", marginTop : "10px" , color : "#99A7B4"}} > Product</div>
                    <div className={`d-flex align-items-center`} style={{width : "400px" , height : "200px"}}>
                        <div >Dingo Dog Bones</div>
                    </div>
                    <div className={`d-flex align-items-center`} style={{width : "400px" , height : "200px"}}>
                        <div >Dingo Dog Bones</div>
                    </div>
                </div>
                <div className={`col-xl-2 col-m-1 col-sm-0`}>
                    <div style={{fontSize : "18px", marginTop : "10px" , color : "#99A7B4"}} >Price</div>
                    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>
                    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>
                </div>
                <div className={`col-xl-2 col-m-1`}>
                    <div className={`d-flex align-items-center`} style={{fontSize : "18px" , marginTop : "10px" , color : "#99A7B4"}} > Quantity</div>
                    <div style={{height : "200px"}} className={`d-flex align-items-center`}>
                        <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism `} >
                            <Button theme={styles.btn_white} title="-" />
                            <div style={{backgroundColor : "transparent"}}>1</div>
                            <Button theme={styles.btn_black} title="+" />
                        </div>
                    </div>
                    <div style={{height : "200px"}} className={`d-flex align-items-center`}>
                        <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism `} >
                            <Button theme={styles.btn_white} title="-" />
                            <div style={{backgroundColor : "transparent"}}>1</div>
                            <Button theme={styles.btn_black} title="+" />
                        </div>
                    </div>
                </div>
                <div className={`col-xl-2 col-m-1 col-sm-0`}>
                    <div style={{fontSize : "18px" , marginTop : "10px" , color : "#99A7B4"}} > Remove</div>
                    <div style={{height : "200px"}}  className={` d-flex align-items-center`}  >
                        <button     className={` ${styles.removeProduct}   neumorphism d-flex`}>
                            Remove
                        </button>
                    </div>
                    <div style={{height : "200px"}}  className={` d-flex align-items-center`}  >
                        <button     className={` ${styles.removeProduct}   neumorphism d-flex`}>
                            Remove
                        </button>
                    </div>
                </div>
                <div className={`col-xl-1 col-m-1 col-sm-0`}>
                    <div style={{fontSize : "18px", marginTop : "10px" , color : "#99A7B4"}} > Total</div>
                    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>
                    <div style={{height : "200px"}} className={` d-flex align-items-center`}>12$</div>
                </div>



            </div>

        </div>
    )
}

export default Cart;