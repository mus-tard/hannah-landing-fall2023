import * as React from 'react'
import useExternalScripts from "../hooks/useExternalScripts"
import {
    componentContainer,
    sectionIntro,
} from "./instafeed.module.css"

const InstaFeed = () => {
    
    return (
        <div>
            <div className={sectionIntro}>
                <h2>Follow us!</h2>
                <p>Join our ever-growing community of home renovation enthusists on Instagram and Facebook!</p>
            </div>
        <div 
            className={`taggbox ${componentContainer}`}
            
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