import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Logos from './components/Logos';
import FirstContact from './components/FirstContact';
import FieldEngineer from './components/FieldEngineer';
import CaseStudy from './components/CaseStudy';
import Work from './components/Work';
import Products from './components/Products';
import Approach from './components/Approach';
import About from './components/About';
import Recommendations from './components/Recommendations';
import Pricing from './components/Pricing';
import Seo from './components/Seo';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Logos />
        <FirstContact />
        <FieldEngineer />
        <CaseStudy />
        <Work />
        <Products />
        <Approach />
        <About />
        <Recommendations />
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
