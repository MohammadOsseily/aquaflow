import styles from "@/styles/Button.module.css"
function Button(props){
    return(
        <button className={` rounded-pill   ${props.theme}`}>{props.title}</button>
    )
}
export default Button