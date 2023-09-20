'use client'
import styles from "/styles/Checkout.module.css";
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import Link from "next/link";

function Checkout(){
    const [phone, setPhone] = useState('');
    return(
        <div className={`mx-auto`} style={{width : "65%"}}>
            <div className={`row`}>
                <div className={`col-8`}>
                    <div style={{borderBottom : "1px solid grey"}}>
                        <div className={` `} style={{fontSize : "30px"}}> Customer</div>
                        <div className={` ${styles.checkout} d-flex justify-content-start align-items-center`}>
                            <input type="text" placeholder="Email" />
                            <input className="rounded-pill" type="submit" value="Continue" />
                        </div>
                        <div className={` d-flex justify-content-start align-items-center`}>
                            <input className={`form-check-input`} style={{padding : "10px 10px" , margin : "0px"}}  type="checkbox" id="html" name="fav_language" value="HTML"/>
                            <label className={`form-check-label`} style={{paddingLeft : "10px" , fontSize : "15px"}} htmlFor="html">Subscribe to our newsletter.</label>
                        </div>
                        <div style={{marginTop : "15px" , fontSize : "15px", marginBottom : "4rem"}}>Already have an account?<Link style={{textDecoration: "none"}} href={"/login"}> Sign in now</Link></div>


                    </div>
                    <div>
                         <div style={{fontSize : "30px", marginTop : "20px"}}>Shipping</div>
                        <div className={`${styles.shipping}`}>
                            <input type="text" placeholder="Full Name" />
                            <div style={{width : "100%"}}>
                                <PhoneInput
                                    // inputStyle={{width : "100%", backgroundColor : "transparent"}}
                                    inputClassName={styles.inputCustom}
                                    style={{width : "100%"}}
                                    defaultCountry="ua"
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                />
                            </div>
                            <input type="text" placeholder="Country" />
                            <div className={"d-flex justify-content-start"}>
                                <input style={{width : "49%"}} type="text" placeholder="State" />
                                <input style={{width : "49%" , marginLeft : "15px"}} type="text" placeholder="City" />
                            </div>
                            <input type="text" placeholder="Address" />
                            <input type="text" placeholder="Apartment/Suite/Building " />
                            <input type="text" placeholder="Floor" />

                        </div>



                    </div>
                </div>
                <div className={`col-4`}>
                    CART
                </div>
            </div>
        </div>
    )

}
export default Checkout;