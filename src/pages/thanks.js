import React from 'react'
import { Link } from "gatsby"
import Logo from "../components/Logo" 
import Footer from "../components/Footer" 

const buttonStyles = {
    backgroundColor: "#4057A3",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontSize: "30px",
    cursor: "pointer",
    textDecoration: "none",
}

const pageStyles = {
    color: "#fff",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

export default () => (
    <>
        <main>
            <Logo />
            <h1 style={pageStyles}>Thank you!</h1>
            <p>We will get back to you as soon as possible.</p>
            <Link style={buttonStyles} to="/">Go back home</Link>
        </main>
        <Footer />
    </>
    

)