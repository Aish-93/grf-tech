import logo from './logo.svg';
import { ParallaxProvider } from "react-scroll-parallax";
import './App.css';
import Header from './component/Header';
import Features from './component/Feature';
import Blogs from './component/Blogs';
import Pricing from './component/Pricing';
import Stats from './component/Stats';
import Courses from './component/Courses';
import Drawer from './component/Drawer';
import Footer from './component/Footer';
import Card from './component/Card';
import Hcards from './component/Hcards';
import Stack from './component/Stack';
import { AdvancedBannerTop } from './component/AdvancedBannerTop';
import Faqs from './component/Faqs';


function App() {
  return (
    <ParallaxProvider>
    <div className="App">
      <Header/>
      <AdvancedBannerTop/>
      <Features/>
      {/* <Drawer/> */}
      {/* <Courses/> */}
      <Stats/>
      <Hcards/>
      <Pricing/>
      {/* <Stack/> */}
      <Card/>
      <Blogs/>
      <Faqs/>
      <Footer/>
    </div>
    </ParallaxProvider>
  );
}

export default App;
