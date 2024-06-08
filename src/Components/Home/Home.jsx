import React from 'react'
import FashionDisplay from '../FashionDisplay/FashionDisplay'
import Trending from '../Trending/Trending'
import Collection from '../Collection/Collection'
import Fashion from '../Fashion/Fashion'
import OtherCollection from '../OtherCollection/OtherCollection'
import SummerCollection from '../SummerCollection/SummerCollection'
import FashionBlog from '../FahionBlog/FashionBlog'
import Newsletter from '../Newsletter/Newsletter'
import Review from '../Review/Review'



const Home = () => {
  return (
    
    <div>
    <FashionDisplay/>
    <Trending/>
    <Collection/>
    <Fashion/>
    <Review/>
    <OtherCollection/>
    <SummerCollection/>
    <FashionBlog/>
    <Newsletter/>
     
    </div>
  )
}

export default Home