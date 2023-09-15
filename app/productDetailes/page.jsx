import Image from "next/image";
import styles from "/styles/ProductDetailes.module.css"
import Link from "next/link";
import Button from "../components/Button"




function ProductDetailes(){
    return(
        <div className={`${styles.container}  mt-4 mx-auto`}>
            <Image className={`${styles.productImg} neumorphism`} src="/images/black-bottle.png" width={550} height={550} alt="bottle"/>
            <div className={`${styles.productDetails} neumorphism`}>
                <div className={` ${styles.productText} bg-transperant`}>Lorem Ipsum is simply dummy</div>
                <Link className={` ${styles.companyName}`} href="#">sony</Link>
                <hr />
                <div className={`${styles.product} d-flex justify-content-between bg-transperant`}>
                    <div className={` ${styles.smText}`}>Price:</div>
                    <div className={`${styles.productPrice} bg-transperant`}> 70$</div>
                </div>


                <div className={`${styles.product}  d-flex justify-content-between bg-transperant mt-4 mb-4`}>
                    <div className={` ${styles.smText} mt-3`}>Quantity:</div>
                    <div className={`d-flex align-items-center rounded-pill ${styles.div_button} neumorphism `} style={{marginRight: "30%"}} >
                        <Button theme={styles.btn_white} title="-" />
                        <div style={{backgroundColor : "transparent"}}>1</div>
                        <Button theme={styles.btn_black} title="+" />
                    </div>
                </div>


            </div>
            <div className={`${styles.productDescription} neumorphism `}>
                <div className={` ${styles.desc}`}>Description</div>
                <div className={`${styles.descText}`}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.

                </div>
            </div>

        </div>

    )
};

export default ProductDetailes;