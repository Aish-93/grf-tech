import React from 'react';
import Header from '../Header';
import { AdvancedBannerTop } from '../AdvancedBannerTop';
import Features from '../Feature';
import Stats from '../Stats';
import Hcards from '../Hcards';
import Course from '../Course';
import Card from '../Card';
import Team from '../Team/Team';
import Blogs from '../Blogs';
import Faqs from '../Faqs';
import Footer from '../Footer';
import Carousel from '../Carousel';


const HomePage = () => {
  return (
    <div>
      <Header />
      
      <AdvancedBannerTop />
      <Features />
      <Stats />
      <Hcards />
      <Course />
      <Carousel/>
      {/* <Card /> */}
      <Blogs />
      <Faqs />
      <Team />
      
      <Footer />
    </div>
  );
};

export default HomePage;
