import React from 'react'
import Navbar from '../Components/Navbar'
import Createtodo from './../Components/Createtodo'
import Footer from './../Components/Footer'

const Home = () => {
  return (
    <div >
        <Navbar />
        <Createtodo/>
        <Footer/>
    </div>
  )
}

export default Home