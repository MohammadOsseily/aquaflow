'use client'
import styles from "/styles/Checkout.module.css";
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
                            <input className={`form-check-input`} style={{padding : "6px 6px" , margin : "0px"}}  type="checkbox" id="html" name="fav_language" value="HTML"/>
                            <label className={`form-check-label`} style={{paddingLeft : "10px" , fontSize : "15px"}} htmlFor="html">Subscribe to our newsletter.</label>
                        </div>
                        <div style={{marginTop : "15px" , fontSize : "15px", marginBottom : "4rem"}}>Already have an account?<Link style={{textDecoration: "none"}} href={"/login"}> Sign in now</Link></div>


                    </div>
                    <div style={{borderBottom : "1px solid grey"}}>
                         <div style={{fontSize : "30px", marginTop : "20px"}}>Shipping</div>
                        <div className={`${styles.shipping}`}>
                            <input type="text" placeholder="Full Name" />
                            <div style={{width : "100%"}}>
                                <PhoneInput
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true
                                    }}
                                    buttonStyle={{borderRadius : "12px"}}
                                    inputStyle={{width : "100%" , backgroundColor : "transparent", borderRadius : "12px" , height : "100%"}}
                                    buttonStyle={{borderRadius : "12px", backgroundColor : "transparent", marginLeft : "5px" }}
                                    dropdownStyle={{marginLeft : "5px"}}
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
                        <div style={{fontSize : "15px", padding : "5px 0px"}}>Payment Currency</div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label style={{ fontSize : "13px"}} className="form-check-label" htmlFor="flexRadioDefault1">
                                    USD
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label style={{ fontSize : "13px"}} class="form-check-label" for="flexRadioDefault2">
                                    LBP
                                </label>
                        </div>
                        <div className={`  d-flex justify-content-start align-items-center`}>
                            <input className={`form-check-input`} style={{padding : "5px 5px" , margin : "0px"}}  type="checkbox" id="html" name="fav_language" value="HTML"/>
                            <label className={`form-check-label`} style={{paddingLeft : "10px" , fontSize : "13px"}} htmlFor="html">My billing address is the same as my shipping address.</label>
                        </div>
                        <div  style={{fontSize : "15px", padding : "10px 0px"}}>Shipping Method</div>

                        <div  style={{border : "1px solid #c0c0c0", borderRadius : "12px" ,height : "100%" }}>
                            <div className={` form-check d-flex align-items-center`} style={{width : "90%", height : "50px",marginTop : "15px" , marginLeft : "15px"}}>
                                <input style={{padding : "15px 15px" , margin : "0px"}} className={`form-check-input`}type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label style={{ fontSize : "17px" , marginLeft : "10px"}} className="form-check-label" htmlFor="flexRadioDefault2">
                                    Pickup In Store
                                </label>
                            </div>
                            <hr />
                            <div className="form-check d-flex align-items-center" style={{width : "90%", height : "50px" ,marginBottom : "15px" ,marginLeft : "15px"}}>
                                <input style={{padding : "15px 15px" , margin : "0px"}} className={`form-check-input`}type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label style={{ fontSize : "17px" , marginLeft : "10px" }} className={`form-check-label`} htmlFor="flexRadioDefault2">
                                    Dilivery
                                </label>
                            </div>


                        </div>
                        <div style={{fontSize : "15px", margin : "10px 0px"}}  >Additional Notes</div>
                        <div style={{ marginBottom : "4rem"}} className={`${styles.shipping}`}>
                            <input  type="text"/>
                        </div>


                    </div>
                    <div className={` mb-5`}>
                        <div className={` `} style={{fontSize : "30px", marginTop : "20px"}}> Customer</div>
                        <div  style={{border : "1px solid #c0c0c0", borderRadius : "12px" ,height : "100%" }}>
                            <div className={` form-check d-flex align-items-center`} style={{width : "90%", height : "50px",marginTop : "15px" , marginLeft : "15px"}}>
                                <input style={{padding : "15px 15px" , margin : "0px"}} className={`form-check-input`}type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label style={{ fontSize : "17px" , marginLeft : "10px"}} className="form-check-label" htmlFor="flexRadioDefault2">
                                    Cash on Delivery
                                </label>
                            </div>
                            <hr />
                            <div className="form-check d-flex align-items-center" style={{width : "90%", height : "50px" ,marginBottom : "15px" ,marginLeft : "15px"}}>
                                <input style={{padding : "15px 15px" , margin : "0px"}} className={`form-check-input`}type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label style={{ fontSize : "17px" , marginLeft : "10px" }} className={`form-check-label`} htmlFor="flexRadioDefault2">
                                    Via VIS
                                </label>
                            </div>


                        </div>
                        <div className={`${styles.buttonHover}`}>
                            <input className={` ${styles.orderButton} rounded-pill`} type="submit" value="Place Order" />
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