
import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";
import styles from "@/styles/navBar.module.css"
import Link from "next/link";
import Button from "./Button"
import themes from "@/styles/Button.module.css"

function navBar(){
    return(
        <>

            <div className= {` d-flex align-items-center justify-content-between  mx-auto my-3`} style={{width: "65%"}}>


                    <div className="pt-2 d-flex">
                        <a href="/"><Image width={80} height={60} src={"/images/logo.png"} alt={"logo"}></Image></a>
                        <div className={` ${styles.menulinks} p-4`}><Link className={` ${styles.menulinks}`} href="/products">Products</Link></div>
                        <div className={` ${styles.menulinks} p-4`}><Link className={` ${styles.menulinks}`} href="/about">About Us</Link></div>
                        <div className={` ${styles.menulinks} p-4`}><Link className={` ${styles.menulinks}`} href="/contactUs">Contact us</Link></div>

                    </div>

                    <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism`} >
                        <Button title="Login" theme={themes.btn_white}/>
                        <Button title="Sign Up" theme={themes.btn_black}/>
                    </div>


            </div>
            <hr className=" mx-auto " style={{width: "65%"}}/>
        </>

)
}


export default navBar;