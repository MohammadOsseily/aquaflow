import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "/styles/ProductCard.module.css"
import Image from "next/image";
import { PiShoppingCartThin } from 'react-icons/pi';
import Button from "./Button"
import themes from "@/styles/Button.module.css"



function ProductCard(props){

    return(
        <>

            <div className={`${styles.card} neumorphism w-25 card-deck `} style={{height : "350px"}}>

                <div className={`card d-flex flex-column bd-highlight mb-3`} style={{width: "18rem", backgroundColor: "transparent", paddingTop: "10px", border: "0px"}}>

                    <Image className={` ${styles.img} bd-highlight`} width={200} height={200} src={"/images/black-bottle.png"} styles={{backgroundColor: "transparent", marginLeft:"30px"}} />
                        <div className="bg-transparent  bd-highlight">
                            <div className={`${styles.text} bg-transparent d-flex justify-content-center bd-highlight my-4  mx-suto h-100`}>black bottle</div>
                            <div className={` bg-transparent d-flex justify-content-center`}>
                                <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism`} >
                                    <Button title="45$" theme={themes.btn_white}/>
                                    <Button title={<PiShoppingCartThin size={30} style={{transform : "scaleX(-1)", marginLeft:"5px", height : "100%", backgroundColor: "transparent"}}/>} theme={themes.btn_black}/>
                                </div>

                            </div>


                        </div>
                </div>

            </div>


        </>
    )

}
export default ProductCard;