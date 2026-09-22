import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Logos from './components/Logos';
import Recommendations from './components/Recommendations';
import CaseStudy from './components/CaseStudy';
import Work from './components/Work';
import Products from './components/Products';
import About from './components/About';
import HireStrip from './components/HireStrip';
import Location from './components/Location';
import Pricing from './components/Pricing';
import Seo from './components/Seo';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';
import ChapterNav from './components/ChapterNav';

function App() {
  return (
    <div className="App">
      <Header />
      <ChapterNav />
      <main>
        <Hero />
        <Trust />
        <Logos />
        <Recommendations />
        <CaseStudy />
        <Work />
        <Products />
        <About />
        <Location />
        <HireStrip />
        <Pricing />
        <Seo />
      </main>
      <Footer />
      <StickyCta />
      <Analytics />
    </div>
  );
}

export default App;
