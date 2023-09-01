import styles from "/styles/Card.module.css"
import Image from "next/image";
import CartButton from "@/app/components/CartButton";


function Crad(props){
    return(
        <>

                <div className={`${props.theme} neumorphism ${styles.container} `}>
                    <div className={props.textstyle}>{props.text}</div>
                    <div className={props.smtext}> {props.secondtext}</div>
                    <Image className={props.image} src={props.src} alt={props.alt} height={props.height} width={props.width}/>
                    <CartButton/>
                </div>


        </>
    )

}
export default Crad;