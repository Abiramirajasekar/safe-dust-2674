import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <div>
            <div id='Navbar'>
                <img id='img' src='https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1' alt='logo' />
                <h4>Products</h4>
                <h4>Solutions</h4>
                <h4>Pricing</h4>
                <h4>Learn</h4>
                <h4>Contact</h4>
                <button id='btn1'>Login</button>
                <button id='btn2'>Start My Free Trail</button>
            </div >
            <div id='land1'>
                <div id='text'>
                    <h1 id='heading'>Smart marketing tools to grow your business</h1><br />
                    <p id='para'>Turn more of your visitors into customers. Unbounce is the AI-powered landing page builder with smart features that let you create beautiful, high-performing marketing campaigns in just a few minutes.</p>
                    <button id='btn3'>Build landing pages</button>
                    <button id='btn4'>Write with AI</button>
                </div>
                <div id='image'>
                    <img id='banner' src="https://unbounce.com/photos/New-banner_2x_cropped_top.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Navbar