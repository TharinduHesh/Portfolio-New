import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <LoadingScreen />
        <ScrollProgress />
        <div className="relative">
          <Navbar />
          <main>
            <PageTransition>
              <Home />
              <About />
              <Projects />
              <Contact />
            </PageTransition>
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
