import React from 'react';
import Latestproduct from './components/latestproduct';
import TopBar from './components/navbar';
import Services from './components/services';
import HeroSection from './components/hero';
import Header from './components/header';
import Trendingproduct from './components/trendingproduct';
import Trending from './components/trending';
import Discountitem from './components/discountitem';
import Category from './components/category';
import Blog from './components/blog';
import Features from './components/category';

function page() {
  return (
    <div>
  
  <TopBar/>
     <Header/> 
     <HeroSection/>
     <Features/>
     <Latestproduct/>
     <Services/>
     <Trendingproduct/>
     <Trending/>
   
     <Discountitem/>
     <Category/>
     <Blog/>
    </div>
  )
}

export default page