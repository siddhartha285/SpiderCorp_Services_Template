import React from 'react'
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

export default function Header() {
  return (
    <nav>
        <h1>Spider Corp.</h1>
        <main>
            <HashLink to={"/"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}
