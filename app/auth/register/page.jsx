import styles from "/styles/Register.module.css"

function Register(){
    return(
        <form className={` neumorphism ${styles.register}`} style={{marginTop : "100px"}}>
            <h2>Welcome, User!</h2>
            <p>Please log in</p>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log In" />
            <div className={`${styles.links}`}>
                <a href="/auth/forgetPass">Forgot password</a>
                <a href="/auth/register">Register</a>
            </div>
        </form>
    )
}
export default Register;