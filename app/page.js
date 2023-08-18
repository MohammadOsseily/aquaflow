import Image from 'next/image'
import styles from './page.module.css'
import  NavBar from "./components/navBar"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

          <div class ="Mobile">
              <h1>Mobile</h1>
          </div>
          <div class= "Desktop">
              <NavBar/>

          </div>

      </div>
    </main>
  )
}
