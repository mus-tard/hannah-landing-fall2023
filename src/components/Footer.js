import * as React from 'react'
import {
    container
} from "./footer.module.css"

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={container}>
            <aside>{`Copyright © ${year} - Ryan Hannah`}</aside>
        </footer>
    )
}

export default Footer