import React from 'react'
import Abouts from '../Component/Abouts';
import { Footer } from '../Component/Footer/Footer';
import Tech  from '../Component/Tech';
const About = () => {
  return (
    <div className='main'>
      <Abouts />
      <h1 className='contact--title'>Technologie</h1>
      <Tech />
      <Footer/>
    </div>
  )
}
export {About}