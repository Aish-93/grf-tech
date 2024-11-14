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
import ReachOut from '../ReachOut/ReachOut';
import Banner from '../Banner/Banner';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <AdvancedBannerTop /> */}
      <Features />
      <Stats />
      <Hcards />
      <Course />
      <Carousel />
      {/* <Card /> */}
      <Blogs />
      <Faqs />
      <Team />
      <ReachOut />
      <Footer />
    </div>
  );
};

export default HomePage;
