import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Products from './components/Products';
import Engineering from './components/Engineering';
import ClientWork from './components/ClientWork';
import Presence from './components/Presence';
import Proof from './components/Proof';
import About from './components/About';
import Skills from './components/Skills';
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
        <Engineering />
        <ClientWork />
        <Presence />
        <Proof />
        <About />
        <Skills />
      </main>
      <Footer />
      <StickyCta />
      <Analytics />
    </div>
  );
}

export default App;
