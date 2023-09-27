import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { 
    logo,
    slogan,
    logoText,
    companyName,
    logoGraphic,
 
 } from "./logo.module.css"

function Logo() {
    return (
        <div className={logo}>
            <StaticImage
                alt="The company logo, the letter V with a brick pattern. Coloured as a diagonal gradient from white to gray."
                src="../images/logo.svg"
                placeholder="blurred"
                quality="90"
                loading="eager"
                objectFit="contain"
                className={logoGraphic}
            />
            <div className={logoText}>
                <h1 className={companyName}>VANTA <br /> CONSTRUCTION <br /> LIMITED</h1>
                <div className={slogan}>Quality Comes Standard</div>
            </div>
        </div>
    )
}

export default Logo