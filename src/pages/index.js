import * as React from "react" 
import Logo from "../components/Logo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import InstaFeed from "../components/InstaFeed"


const IndexPage = () => {
  return (
    <main>
      <Logo />
      <Hero />
      <Services /> 
      <InstaFeed /> 
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
