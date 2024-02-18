import React from 'react'
import Hero from '../Pages/Hero'
import Slider  from '../Pages/Slider'
import Aboutus from '../Pages/Aboutus'
import Pricing from '../Pages/Pricing'
import Loader from '../Pages/Loader'
import BlogEntries from '../Pages/BlogEntries'

function Home() {
  return (
    <div className=' bg-[#000080]'>
        <Hero/>
        <Slider/>
        <Aboutus/>

<Pricing/>
<Loader/>

  <BlogEntries/>
      
    </div>
  )
}

export default Home