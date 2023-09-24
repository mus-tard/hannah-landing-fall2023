import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../components/Logo"
import {
    
    overlay,
    heroText,
    gridImage,
    heroButton,
    heroContainer,
    headerContainer,
    heroTextnButton,
    heroButtonContainer,
    
} from "./hero.module.css"


  function Hero() {


    const staticImageStyle = {
        gridArea: "1/1",
        
    }


    return (
        <header 
            className={headerContainer}
        >
            <Logo />
            <div className={heroContainer}>
                <div 
                    className={gridImage}
                    style={{ 
                        display: "grid",
                        // height: heroImageHeight || "50%",
                        // minHeight: "50px",
                    }}
                    
                >
                    <StaticImage

                        alt="A cottage with a beautiful wrap around deck."
                        src={
                            "../images/hero.jpg"
                        }
                        style={staticImageStyle}
                    />
                    <div 
                        className={overlay}
                    >
                    </div>
                </div>
                <div className={heroTextnButton}>
                    <div 
                        className={heroText}
                    >
                        
                        Make your dream a reality today!
                    </div>
                    <div className={heroButtonContainer}>
                        <a href="#quote" className={heroButton}>
                            Request a quote
                        </a>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Hero