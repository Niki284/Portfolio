import React from 'react'
import AboutHome from '../Component/AboutHome';
import { Cards } from '../Component/Cards/Cards'
import '../Component/About.css'
import { Footer } from '../Component/Footer/Footer';
const Home = () => {
  return (
    <div className='main'>
      <AboutHome/>
      <h1 className='contact--title'>Projecten</h1>
      <Cards />
      <Footer/>
     
    </div>
  )
}
export {Home}