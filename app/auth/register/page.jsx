import styles from "/styles/Register.module.css"

function Register(){
    return(
        <form className={` neumorphism ${styles.register}`} style={{marginTop : "100px"}}>
            <h2>Welcome, User!</h2>
            <p>Please sign up</p>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input className={` rounded-pill`} type="submit" value="Log In" />
            <div className={`${styles.links}`}>
                <a href="/auth/forgetPass">Forgot password</a>
                <a href="/auth/register">Register</a>
            </div>
        </form>
    )
}
export default Register;