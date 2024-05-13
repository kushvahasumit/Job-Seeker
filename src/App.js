
import Float from './components/Float';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Search from './components/Search';
import Jobs from './components/Jobs';
import Card from './components/Card';
import Footer from './components/Footer';
import Companies from './components/Companies';
import Feature from './components/Feature';
import { Routes, Route, Navigate } from "react-router-dom";
import JobPage from './components/JobPage';
import Thanku from './components/Thanku';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';


function App() {
  return (
    // <div className="">
    //   <Nav />
    //   <Hero />
    //   {/* <Card />
    //   <Float />
    //   <Search />
    //   <Jobs />
    //   <Feature />
    //   <Testimony />
    //   <Footer /> */}

    // </div >
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/thankyou" element={<Thanku />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
