import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
// import Wrapper from '../assets/wrappers/Testing'


const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>A Lorem ipsum, as you probably already know, is a text commonly used in design and layout, which allows you to check that the spaces are well distributed and the fonts work correctly. It is a Latin passage extracted from a text by Cicero, De finibus bonorum et malorum.</p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </Wrapper>
  )
}


//Imported as a component from Testing.js present in Wrappers
// const Wrapper = styled.main`
// nav{
//   width: var(--fluid-width);
//   max-width: var(--max-fluid);
//   margin: 0 auto;
//   height: var(--nav-height);
//   display: flex;
//   align-items: center;
// }

// .page{
//   min-height: calc(100vh - var(--nav-height));
//   display: grid;
//   align-items: center;
//   margin-top: -3rem;
// }

// h1{
//   font-weight: 700;
//   span {
//     color: var(--primary-500);
//   }
// }

// p {
//   color: var(--grey-600);
// }

// .main-img {
//   display: none;
// }

// @media (min-width: 992px) {
//   .page {
//     grid-template-columns: 1fr 1fr;
//     column-gap: 3rem;
//   }
//   .main-img {
//     display: block;
//   }
// }
// `

export default Landing
