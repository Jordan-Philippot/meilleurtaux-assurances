import React from 'react'

// ----- 
// Images 
// ----- 
import Logo from "../images/lecomparateurassurance.svg"

export default function Header() {

    return (
        <header>
            <img
                src={Logo}
                alt="comparateur assurance"
                id="logo"
            />
        </header>
    )
}
