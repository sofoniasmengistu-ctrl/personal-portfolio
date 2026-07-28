import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Products from './components/Products';
import Work from './components/Work';
import Approach from './components/Approach';
import About from './components/About';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Products />
        <Work />
        <Approach />
        <About />
      </main>
      <Footer />
      <StickyCta />
      <Analytics />
    </div>
  );
}

export default App;
