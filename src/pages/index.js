import * as React from "react" 

import Hero from "../components/Hero"
import Services from "../components/Services"
import InstaFeed from "../components/InstaFeed"
import ContactForm from "../components/ContactForm"


const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Services /> 
      <InstaFeed /> 
      <ContactForm />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
