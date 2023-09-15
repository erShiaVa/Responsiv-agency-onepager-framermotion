import Boost from './components/Boost/Boost';
import Customer from './components/Customer/Customer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ServiceSection from './components/ServiceSection/ServiceSection';
import Tutorial from './components/Tutorial/Tutorial';
import Video from './components/VideoSection/Video';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <ServiceSection/>
      <Boost/>
      <Video/>
      <Customer/>
      <Tutorial/>
      <Footer/>
    </div>
  );
}

export default App;
