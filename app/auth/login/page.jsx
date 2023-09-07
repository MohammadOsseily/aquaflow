import styles from "/styles/Login.module.css"

function Login(){
    return(
        <form className={` neumorphism ${styles.login}`} style={{marginTop : "100px"}}>
            <h2>Welcome, User!</h2>
            <p>Please log in</p>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log In" />
            <div className={`${styles.links}`}>
                <a href="#">Forgot password</a>
                <a href="#">Register</a>
            </div>
        </form>

    )
}
export default Login;