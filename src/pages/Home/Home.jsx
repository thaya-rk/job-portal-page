import React from 'react'
import Header from '../../global/Header/Header'
import Section1 from '../Section/Section1'
import '../../css/section-1.css'
import '../../css/Home.css'
import Section2 from '../Section/Section2'
import Footer from '../../global/Footer/footer'
import Section8 from '../Section/Section8'
import Section7 from '../Section/Section7'
import Section6 from '../Section/Section6'
import Subheader from '../../global/Header/Subheader'

const Home = () => {
  return (
      <>
      <Header/>
      <div className="NavbarTop">
      <Subheader/>
      </div>
      <Section1/>
      <Section2/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
    </>
  )
}

export default Home