import React from 'react'
import ShoppingSection from '../AboutSection/ShoppingSection/ShoppingSection'
import CustomerCare from '../AboutSection/CustomerCare/CustomerCare'
import OurStory from '../AboutSection/OurStory/OurStory'
import AboutReview from '../AboutSection/AboutReview/AboutReview'
 
const About = () => {
  return (
    <div className='w-full h-full bg-pink-50 py-20'>
  <ShoppingSection/>
  <CustomerCare/>
  <OurStory/>
  <AboutReview/>
    </div>
  )
}

export default About