import Image from 'next/image'
import  NavBar from "./components/navBar"
import { Nunito } from 'next/font/google'
import NavBarMobile from "./components/navBarMobile"
import Card from "./components/Card";
import theme from "/styles/Card.module.css"

const nunito = Nunito({
    weight: '500',
    subsets: ['latin'],
})

export default function Home() {
  return (
        <main className={` ${nunito.className}  mx-auto`} style={{backgroundColor: "lightblue", width: "65%"} }>
      <div className="row  " >
          <div className="col">
              <Card
                  use={true}
                  src={"/images/black-bottle.png"}
                  alt={"black-bottle"}
                  height ={700}
                  width = {1000}
                  text={"The Simple Bottle Water"}
                  theme={theme.first_card}
                  textstyle={theme.text_style1}
                  secondtext={"MORE OFFERS"}
                  smtext={theme.sm_text1}
                  image={theme.first_image}
              />
          </div>
          <div className="col ">
              <Card
                  arrowIcon={true}
                  src={"/images/greyball.png"}
                  alt={"grey-ball"}
                  height ={255}
                  width = {255}
                  text={"See our blog"}
                  theme={theme.second_card}
                  image={theme.second_image}
                  textstyle={theme.text_style2}

              />
              <Card
                  sentIcon={true}
                  theme={theme.third_card}
                  text={"Contact Us"}
                  secondtext={"Have Some Questions?"}
                  textstyle={theme.text_style3}
                  smtext={theme.sm_text3}

              />
          </div>




      </div>
    </main>
  )
}
