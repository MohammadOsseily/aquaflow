import Image from "next/image";
import styles from "/styles/ProductDetailes.module.css"
import Link from "next/link";


function ProductDetailes(){
    return(
        <div className={`${styles.container} mx-auto`}>
            <Image className={`${styles.productImg}`} src="/images/black-bottle.png" width={550} height={550} alt="bottle"/>
            <div className={`${styles.productDetails}`}>
                <div className={` ${styles.productText} bg-transperant`}>Lorem Ipsum is simply dummy</div>
                <Link className={` ${styles.companyName}`} href="#">sony</Link>
                <hr />
                <div className={styles.smText}>Price:</div>
                <div className={styles.smText}>Quantity:</div>
                <div>

                </div>

            </div>

        </div>

    )
};

export default ProductDetailes;