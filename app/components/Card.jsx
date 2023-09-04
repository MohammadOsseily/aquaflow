
import styles from "/styles/Card.module.css"
import Image from "next/image";
import CartButton from "@/app/components/CartButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PiArrowUpRightBold } from 'react-icons/pi';
import { BsSend } from 'react-icons/bs';



function Card(props){

    return(
        <>

                <div className={`${props.theme} neumorphism ${styles.container}`}>
                    <div className={props.textstyle}>{props.text}</div>
                    {props.sentIcon? <a href="/contactUs" className={styles.sendLink}><BsSend size={25} style={{ backgroundColor: "transparent"}}/></a> :null}
                    <div className={props.smtext}> {props.secondtext}</div>
                    <Image className={props.image} src={props.src} alt={props.alt} height={props.height} width={props.width}/>
                    { props.use? <CartButton/>:null }
                    {props.arrowIcon?<a href="/about" className={styles.arrowLink}>
                        <PiArrowUpRightBold size={35} style={{ backgroundColor: "transparent", marginLeft:"40px", marginTop: "70px"}}/>
                    </a>:null}

                </div>


        </>
    )

}
export default Card;