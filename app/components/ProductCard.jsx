'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "/styles/ProductCard.module.css"
import Image from "next/image";
import { BiSolidCart } from 'react-icons/bi';
import Button from "./Button"
import themes from "@/styles/Button.module.css"
import Link from "next/link";




function ProductCard(props){

    return(
        <>
            <div className={" p-2 col-xs-6 col-md-6 col-lg-4 col-xl-3 "}>
                <div className={`${styles.card}  neumorphism g-1 `} style={{height : "350px"}}>

                    <div className={`card d-flex flex-column bd-highlight mb-3`} style={{ backgroundColor: "transparent", paddingTop: "10px", border: "0px" ,positon:"relative"}}>

                        <Link href="/productDetailes"><Image className={` ${styles.img} mx-auto  bd-highlight`} fill src={props.img}/></Link>
                        <div className="card-content bg-transparent   bd-highlight">
                            <div className={`${styles.text} bg-transparent d-flex justify-content-center bd-highlight my-4  `}>{props.productName}</div>
                            <div className={` bg-transparent d-flex justify-content-center`} >
                                <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism`} style={{width:"70%", height:"100%"}} >
                                    <Button title={props.price} theme={themes.btn_productw}/>
                                    <Button title={<BiSolidCart size="1.5em" style={{transform : "scaleX(-1)", marginLeft:"5px", height : "100%", backgroundColor: "transparent"}}/>} theme={themes.btn_productb}/>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>



        </>
    )

}
export default ProductCard;