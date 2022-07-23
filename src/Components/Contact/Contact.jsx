import React from 'react'
import Footer from '../Footer/Footer'
import NavbarSmall from '../Navbar/NavbarSmall'
import "./Contact.css"
function Contact() {
    return (
        <div>
            <NavbarSmall />
            <div id='H'>
                <h1>We’d love to hear from you</h1>
                <p>Whether you’re curious about features, a free trial, or even press—we’re ready to answer any and all questions.</p>
            </div>
            <div id='Box'>
                <div id='D1'><h1>Sales</h1>
                    <p>Wondering if Unbounce is the right tool for your business? Chat with our team to see if there’s a fit.</p>
                    <button>Let's Chat</button></div>
                <div id='D2'><h1>Support</h1>
                    <p>Need a hand using Unbounce or managing your account? Chat with a real, live human or self-serve using our Help Center.</p>
                    <button>Get Support</button></div>
                <div id='D3'>
                    <h1>Media</h1>
                    <p>We love working with journalists to share compelling stories. Send us a note and our PR and Communications Manager will be in touch.</p>
                    <button>Get In Touch</button>
                </div>
                <div id='D4'>
                    <h1>Partnership</h1>
                    <p>We’re into co-marketing with awesome brands. Fill out the form here, and our Partnerships Manager will circle back.</p>
                    <button>Let's Chat</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact