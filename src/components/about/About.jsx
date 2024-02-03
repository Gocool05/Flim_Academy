import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import PriceCard from "../pricing/PriceCard"
import Hprice from "../home/Hprice"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutCard />
      <div className="AboutSpace"></div>
      <Hprice/>
    </>
  )
}

export default About
