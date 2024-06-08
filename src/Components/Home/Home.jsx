import React from 'react'
import FashionDisplay from '../FashionDisplay/FashionDisplay'
import Trending from '../Trending/Trending'
import Collection from '../Collection/Collection'
import Fashion from '../Fashion/Fashion'
import OtherCollection from '../OtherCollection/OtherCollection'
import SummerCollection from '../SummerCollection/SummerCollection'
import FashionBlog from '../FahionBlog/FashionBlog'
import Newsletter from '../Newsletter/Newsletter'



const Home = () => {
  return (
    
    <div>
    <FashionDisplay/>
    <Trending/>
    <Collection/>
    <Fashion/>
    <OtherCollection/>
    <SummerCollection/>
    <FashionBlog/>
    <Newsletter/>
     
    </div>
  )
}

export default Home