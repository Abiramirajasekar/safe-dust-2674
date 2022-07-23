import React from 'react'
import Footer from '../Footer/Footer'
import NavbarSmall from '../Navbar/NavbarSmall'
import "./Pricing.css"

function Pricing() {
    return (

        <div>
            <NavbarSmall />
            <h1 id='head'>Grow your business with Unbounce
                —free for 14 days</h1>
            <p id='sub'>Everything you need to start marketing with Unbounce Conversion Intelligence™. Create pre-optimized landing pages with Smart Builder, automatically increase your conversions with Smart Traffic, and much more. (Includes Classic Builder and A/B testing.)</p>
            <h1 id='cas'>
                Your favorite tools—now available in Smart Builder
            </h1>
            <div id='icon'>
                <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Mask-Group-1.png.webp" alt="" />
                <img src='https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Mask-Group.png.webp' alt='' />
            </div>
            <div>
                <img id='ex' src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Frame-5.png.webp" alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Pricing