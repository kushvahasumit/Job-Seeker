import Hero from './components/Hero';
import Nav from './components/Nav';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import Companies from './components/Companies';
import { Routes, Route} from "react-router-dom";
import JobPage from './components/JobPage';
import Thanku from './components/Thanku';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';


function App() {
  return (
   
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
