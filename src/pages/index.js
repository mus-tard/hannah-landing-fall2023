import * as React from "react" 
import { Fade } from "react-awesome-reveal"
import Hero from "../components/Hero"
import Services from "../components/Services"
import InstaFeed from "../components/InstaFeed"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer" 
import Seo from "../components/Seo"


const IndexPage = () => {
  return (

    <>
    <Hero />
    <main className="main">
      
      
      <Services />
      <Fade
        duration="2000"
        fraction=".25"
        triggerOnce="true"

      ><InstaFeed /></Fade> 
      <Fade
        duration="2000"
        fraction=".25"
        triggerOnce="true"

      ><ContactForm /></Fade>
      
    </main>
    <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <Seo />
    <title>Free Quote - Vanta Construction</title>
    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
  </>
)
