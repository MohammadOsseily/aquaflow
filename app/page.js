import Image from 'next/image'
import  NavBar from "./components/navBar"

export default function Home() {
  return (
    <main >
      <div >
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
