import React from 'react'
import "./Navbar.css"
function NavbarSmall() {
    return (
        <div>
            <div id='Navbar'>
                <img id='img' src='https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1' alt='logo' />
                <h4><a id='a' href='/'>  Products</a></h4>
                <h4>Solutions</h4>
                <h4><a id='a' href='/pricing'>  Pricings </a></h4>
                <h4>Learn</h4>
                <h4><a id='a' href='/contact'> Contact</a></h4>
                <button id='btn1'><a id='a' href="/login">Login</a></button>
                <button id='btn2'>Start My Free Trail</button>
            </div >

        </div>
    )
}

export default NavbarSmall