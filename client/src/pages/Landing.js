import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt="EasyJOBS" className='logo' />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>A Lorem ipsum, as you probably already know, is a text commonly used in design and layout, which allows you to check that the spaces are well distributed and the fonts work correctly. It is a Latin passage extracted from a text by Cicero, De finibus bonorum et malorum.</p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </main>
  )
}

export default Landing
