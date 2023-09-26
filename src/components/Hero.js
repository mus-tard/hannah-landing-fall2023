import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Logo from "./Logo"
import TypedText from "./TypedText"
import {
    field,
    overlay,
    heroText,
    gridImage,
    heroTextnField,
    fieldContainer,
    highlight,
    heroButton,
    heroContainer,
    headerContainer,
    heroContent,
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
                <div className={heroContent}>
                    <div className={heroTextnField}>
                        <div 
                            className={heroText}
                        >
                            
                            Make it <span className={highlight}>real</span>
                        </div>
                        <div className={fieldContainer}>
                            <TypedText className={field}>How much for my dream kitchen?</TypedText> 
                        </div>
                    
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