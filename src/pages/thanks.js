import React from 'react'
import { Link } from "gatsby"
import Logo from "../components/Logo" 

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
    maxWidth: "500px",
    marginTop: 64,
    
}

const headingStyles = {
    color: "#fff",
    fontSize: "96px",
    fontFamily: "Microgramma",
    marginBottom: 64,
    marginTop: 64,
    textAlign: "center"
  }

const pageStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh"
}

function Thanks () {
    return (
        <main style={pageStyles}>
            <Logo />
            <h1 style={headingStyles}>Thank you!</h1>
            <p>We will get back to you as soon as possible.</p>
            <Link style={buttonStyles} to="/">Go back home</Link>
        </main>
    )
    

}

export default Thanks