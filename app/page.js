import Image from 'next/image'
import  NavBar from "./components/navBar"
import { Roboto } from 'next/font/google'
import NavBarMobile from "./components/navBarMobile"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <div >
          <div class ="Mobile">
              <NavBarMobile/>
          </div>
          <div class= "Desktop">
              <NavBar/>

          </div>

      </div>
    </main>
  )
}
