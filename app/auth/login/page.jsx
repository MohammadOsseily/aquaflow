import styles from "/styles/Login.module.css"

function Login(){
    return(
        <form className={` neumorphism ${styles.login}`} style={{marginTop : "100px"}}>
            <h2>Welcome, User!</h2>
            <p>Please log in</p>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input className="rounded-pill" type="submit" value="Log In" />
            <div className={`${styles.links}`}>
                <a href="/auth/forgetPass">Forgot password</a>
                <a href="/auth/register">Register</a>
            </div>
        </form>

    )
}
export default Login;