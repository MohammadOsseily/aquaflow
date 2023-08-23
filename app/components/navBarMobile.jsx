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
                        <a href="#"><li>Products</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Contact us</li></a>
                        <a href="#"><li>FAQ</li></a>

                    </ul>
                </div>
                <Image className={"m-"} style={{margin: "35px"}} width={80} height={60} src={"/images/logo.png"} alt={"logo"}></Image>
            </nav>

        </>
    )
}
export default navBarMobile;