import React from 'react'
import Logo from "../../assets/QTify-Logo.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over Thousand Podcast episodes</h1>
        </div>
        <div>
            <img className="Hero_img" src={Logo} width={212} alt="Logo"/>
        </div>
    </div>
  )
}

export default Hero;
