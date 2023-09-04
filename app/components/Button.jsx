
import styles from "@/styles/Button.module.css"
import Image from "next/image";
function Button(props){
    return(
        <button className={` rounded-pill   ${props.theme}`}>{props.title}</button>

    )
}
export default Button