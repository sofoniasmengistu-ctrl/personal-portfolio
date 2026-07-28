import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Logos from './components/Logos';
import FieldEngineer from './components/FieldEngineer';
import CaseStudy from './components/CaseStudy';
import Work from './components/Work';
import Products from './components/Products';
import Approach from './components/Approach';
import About from './components/About';
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
        <FieldEngineer />
        <CaseStudy />
        <Work />
        <Products />
        <Approach />
        <About />
        <Seo />
      </main>
      <Footer />
      <StickyCta />
      <Analytics />
    </div>
  );
}

export default App;
