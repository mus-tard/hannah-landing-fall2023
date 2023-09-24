import * as React from "react"
import { Link } from "gatsby"



const pageStyles = {
  color: "#fff",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "80px",
  fontFamily: "Microgramma"
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

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



const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>You're in the wrong spot, friend.</h1>
      <p style={paragraphStyles}>
        Sorry 😔, there's nothing at this location.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link style={buttonStyles} to="/">Go back home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
