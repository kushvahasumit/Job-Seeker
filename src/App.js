
import Float from './components/Float';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Search from './components/Search';
import Jobs from './components/Jobs';
import Card from './components/Card';
import Footer from './components/Footer';
import Testimony from './components/Testimony';
import Feature from './components/Feature';
import { Routes, Route, Navigate } from "react-router-dom";


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
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </>
  );
}

export default App;
