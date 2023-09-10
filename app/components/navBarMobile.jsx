'use client'
import styles from "styles/navBarMobile.module.css"
import Image from "next/image";
function navBarMobile(){

    return(
        <>

            <nav className={"d-flex justify-content-between"} role="navigation">

                <div id={styles.menuToggle}>

                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>


                    <ul id={styles.menu}>
                        <a href="/products"><li>Products</li></a>
                        <a href="/about"><li>About</li></a>
                        <a href="/contactUs"><li>Contact us</li></a>


                    </ul>
                </div>
                <a href="/"><Image className={"m-"} style={{margin: "35px"}} width={80} height={60} src={"/images/logo.png"} alt={"logo"}></Image></a>
            </nav>

        </>
    )
}
export default navBarMobile;