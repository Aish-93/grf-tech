import logo from './logo.svg';
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


function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      {/* <Drawer/> */}
      <Courses/>
      <Stats/>
      <Hcards/>
      <Pricing/>
      {/* <Stack/> */}
      <Card/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
