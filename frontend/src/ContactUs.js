import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function ContactUs() {
  return (
    <div>
        <Header val={true}/>
        <p className='text-center text-6xl'> This is Contact Us Page. </p>
        <Footer />
    </div>
  )
}

export default ContactUs