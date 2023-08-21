import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";
import img from "/home/mhmd/geekgalaxy/public/images/logo.png"
import styles from "@/styles/navBar.module.css"
import Link from "next/link";
import Button from "./Button"
import themes from "@/styles/Button.module.css"

function navBar(){
    return(
        <>

            <div className= {` ${styles.border} d-flex justify-content-between w-75 mx-auto`}>


                    <div className="pt-2 d-flex">
                        <Image width={80} height={60} src={"/images/logo.png"} alt={"logo"}></Image>
                    </div>

                    <div className="d-flex">
                        <div className={` ${styles.menulinks} p-4`}><Link className={` ${styles.menulinks}`} href="#">Products</Link></div>
                        <div className={` ${styles.menulinks} p-4`}><Link className={` ${styles.menulinks}`} href="#">About</Link></div>
                        <div className={` ${styles.menulinks} p-4`}><Link className={` ${styles.menulinks}`} href="#">Contact us</Link></div>
                        <div className={` ${styles.menulinks} p-4`}><Link className={` ${styles.menulinks}`} href="#">FAQ</Link></div>
                    </div>

                    <div className={`d-flex align-items-center rounded-pill ${styles.div_button} ${themes.neumorphism}`} >
                        <Button title="Login" theme={themes.btn_white}/>
                        <Button title="Sign Up" theme={themes.btn_black}/>
                    </div>



            </div>

        </>

)
}


export default navBar;