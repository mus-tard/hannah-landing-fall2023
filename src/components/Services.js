import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Fade } from "react-awesome-reveal";
import { 
    row,
    brick,
    spacerBrick,
    sectionIntro,
    servicesContainer,
    brickLayoutMobile,
    brickLayoutDeskTab,
 } from "./services.module.css"

function Services() {

    const overlayStyle = {
        gridArea: "1/1",
        position: "relative",
        opacity: "50%",
        backgroundColor: "black",
        borderRadius: "10px",
    }

    const textStyle = {
        gridArea: "1/1",
        position: "relative",
        placeItems: "center",
        display: "grid",
    }

    const staticImageStyle = {
        gridArea: "1/1",
        borderRadius: "10px",
    }

    return (
        <section className={servicesContainer}>
           
                <div className={sectionIntro}>
                <h2>Our Services</h2>
                <p>Residential and commercial interior/exterior general contracting of any size.</p>
            </div>
            
            
            <div className={brickLayoutMobile}>
                <Fade
                    duration="250"
                    fraction=".25"
                    triggerOnce="true"
                    cascade="true"
                > 
                    <div className={row}>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                src={
                                    "../images/services/Fencing.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Fencing
                            </div>
                        </div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                objectPosition='bottom'
                                src={
                                    "../images/services/Decks.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Decks
                            </div>
                        </div>
                        
                        <div className={spacerBrick}></div>
                    </div>
                    <div className={row}>
                        <div className={spacerBrick}></div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                objectPosition='bottom'
                                alt=""
                                src={
                                    "../images/services/Concrete.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Concrete
                            </div>
                        </div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                src={
                                    "../images/services/Interlock.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Interlock
                            </div>
                        </div>
                    </div>
                    <div className={row}>
                    <div style={{ display: "grid" }}>
                        <StaticImage
                            style={staticImageStyle}
                            alt=""
                            objectPosition='100% 80%'
                            src={
                                "../images/services/Renovations.jpg"
                            }
                        />
                        <div 
                            className={brick}
                            style={overlayStyle}
                        >
                            
                        </div>
                        <div 
                            className={brick}
                            style={textStyle}
                        >
                            Renovations
                        </div>
                    </div>
                        <div className={spacerBrick}></div>
                    </div>
                    <div className={row}>
                        <div className={spacerBrick}></div>
                            <div style={{ display: "grid" }}>
                                <StaticImage
                                    style={staticImageStyle}
                                    alt=""
                                    objectPosition='top'
                                    src={
                                        "../images/services/Framing.jpg"
                                    }
                                />
                                <div 
                                    className={brick}
                                    style={overlayStyle}
                                >
                                    
                                </div>
                                <div 
                                    className={brick}
                                    style={textStyle}
                                >
                                    Framing
                                </div>
                            </div>
                            <div style={{ display: "grid" }}>
                                <StaticImage
                                    style={staticImageStyle}
                                    alt=""
                                    objectPosition='bottom right'
                                    src={
                                        "../images/services/Drywall.jpg"
                                    }
                                />
                                <div 
                                    className={brick}
                                    style={overlayStyle}
                                >
                                    
                                </div>
                                <div 
                                    className={brick}
                                    style={textStyle}
                                >
                                    Drywall
                                </div>
                            </div>
                        </div>
                    <div className={row}>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                src={
                                    "../images/services/Painting.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Painting
                            </div>
                        </div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                objectPosition='100% 80%'
                                src={
                                    "../images/services/Flooring.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Flooring
                            </div>
                        </div>
                        <div className={spacerBrick}></div>
                    </div>
                </Fade>
            </div>
            

            <div className={brickLayoutDeskTab}>
                <Fade
                    duration="250"
                    fraction=".25"
                    triggerOnce="true"
                    cascade="true"
                > 
                    <div className={row}>
                        <div className={spacerBrick}></div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                src={
                                    "../images/services/Fencing.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Fencing
                            </div>
                        </div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                objectPosition='bottom'
                                src={
                                    "../images/services/Decks.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Decks
                            </div>
                        </div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                objectPosition='bottom'
                                alt=""
                                src={
                                    "../images/services/Concrete.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Concrete
                            </div>
                        </div>
                        
                    </div>
                    <div className={row}>
                        
                        
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                src={
                                    "../images/services/Interlock.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Interlock
                            </div>
                        </div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                objectPosition='100% 80%'
                                src={
                                    "../images/services/Renovations.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Renovations
                            </div>
                        </div>
                        
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                objectPosition='top'
                                src={
                                    "../images/services/Framing.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Framing
                            </div>
                        </div>
                        <div className={spacerBrick}></div>
                    </div>
                    
                    <div className={row}>
                        <div className={spacerBrick}></div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                objectPosition='right'
                                src={
                                    "../images/services/Drywall.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Drywall
                            </div>
                        </div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                src={
                                    "../images/services/Painting.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Painting
                            </div>
                        </div>
                        <div style={{ display: "grid" }}>
                            <StaticImage
                                style={staticImageStyle}
                                alt=""
                                objectPosition='100% 80%'
                                src={
                                    "../images/services/Flooring.jpg"
                                }
                            />
                            <div 
                                className={brick}
                                style={overlayStyle}
                            >
                                
                            </div>
                            <div 
                                className={brick}
                                style={textStyle}
                            >
                                Flooring
                            </div>
                        </div>
                    
                    </div>
                </Fade> 
            </div>
        </section>
    )
}

export default Services