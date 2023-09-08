import styles from  "/styles/Forget.module.css"

function Forget(){
    return(

    <form className={` neumorphism ${styles.forgetPass}`} style={{marginTop : "100px"}}>
        <h2>Welcome, User!</h2>
        <p>Please enter your email</p>
        <input type="text" placeholder="Enter your Email" />
        <input type="submit" value="Log In" />
        <div className={`${styles.links}`}>
            <a href="/auth/register">Register</a>
            <a href="/auth/login"> log in </a>
        </div>
    </form>
    )
}
export default Forget;