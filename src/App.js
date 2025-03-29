
import './App.scss';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './page/home/page';
import Footer from './components/shared/footer/footer';
import Header from './components/shared/header/header';
import { Politika } from './page/politika/page';
import { Case } from './page/case/page';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return null;
};
function App() {
 
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <ScrollToHashElement/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politika" element={<Politika />} />
            <Route path="/case" element={<Case/>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
