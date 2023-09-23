import * as React from 'react'
import useExternalScripts from "../hooks/useExternalScripts"
import { StaticImage } from "gatsby-plugin-image"
import {
    social,
    socialIcons,
    sectionIntro,
    feedContainer,
    instaFeedContainer,
    
    
} from "./instafeed.module.css"

const InstaFeed = () => {
    
    return (
        <div className={instaFeedContainer}>
            
            <div className={sectionIntro}>
                <h2>Follow us!</h2>
                <p>Join our ever-growing community of home renovation enthusists on Instagram and Facebook!</p>
                <div className={socialIcons}>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cuttingedgegeneralcontracting/">
                        <StaticImage
                            alt="The Instagram logo."
                            src="../images/Instagram_Glyph_White.svg"
                            placeholder="blurred"
                            className={social}

                        />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100085907546394">
                        <StaticImage
                            alt="The Facebook logo."
                            src="../images/f_logo_RGB-White_512.png"
                            placeholder="blurred"
                            className={social}
                        />
                    </a>
                    
                </div>
            </div>
        <div 
            className={`taggbox ${feedContainer}`}
            
            style={{
                width:"100%",
                height: "100%"
            }}
            data-widget-id="140972"
            data-tags="false"
        >
            
        </div>
        {useExternalScripts({url:"https://widget.taggbox.com/embed-lite.min.js"})}
        </div>
        
         
    )

}


   

   

   


export default InstaFeed