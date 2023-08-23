import Image from 'next/image'
import  NavBar from "./components/navBar"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <div >
          <div class ="Mobile">
              <NavBar/>
          </div>
          <div class= "Desktop">
              <NavBar/>

          </div>

      </div>
    </main>
  )
}
