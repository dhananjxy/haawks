import './App.css';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Missionvision from './components/Missionvision';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Dex from './components/Dex';
import Marketplace from './components/Marketplace';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Ctatext from './components/Ctatext';
import Ctawimage from './components/Ctawimage';
//import Htimeline from './components/Htimeline';
//import Community from './components/Community';
import Blog from './components/Blog';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Missionvision/>
      <Dex />
      <Marketplace />
      <Ctatext />
      <Tokenomics />
      <Roadmap />
      {/* <Htimeline /> */}
      <Team />
      {/* <Community /> */}
      <Blog />
      <Ctawimage />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
