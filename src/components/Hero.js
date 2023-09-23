import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
    overlay,
    heroText,
    heroButton,
    heroContainer,
    heroTextnButton,
    heroButtonContainer,
    
} from "./hero.module.css"

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

  function Hero() {

    const [dimensions, setDimensions] = React.useState({ 
        height: 1,
        width: 1
      })

    React.useEffect(() => {
    
        const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
        })
        }, 50)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    const staticImageStyle = {
        gridArea: "1/1",
        
    }

    let viewportHeight = dimensions.height;
    let viewportWidth = dimensions.width;


    const logoHeightMobile = viewportWidth < 744 ? 100 : 149
    const textHeightMobile = viewportWidth < 1512 ? 180 : 0
    const buttonHeightMobile = 75
    const verticalPadding = 16
    const buffer = viewportWidth < 1024  ? 64 : 128 

    const totalDiff = logoHeightMobile + textHeightMobile + buttonHeightMobile + verticalPadding + buffer

    const heroImageHeight = viewportHeight - totalDiff

    return (
        <div className={heroContainer}>
            <div 
                style={{ 
                    display: "grid",
                    height: heroImageHeight,
                
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
                    <button className={heroButton}>
                        Request a quote
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Hero