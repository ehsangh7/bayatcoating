import React from "react"
// import { Button } from "../ButtonElements"
import "./HeroSection.css"
import logo from '../../images/Logo33.svg'

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={logo} alt=""/>
      <h1>Bayat Coating</h1>
      <p>Plan your next trip today</p>
      <div className="hero-btns">
        {/* <Button fontBig big primary>
          Get Started
        </Button> */}
      </div>
    </div>
  )
}

export default HeroSection