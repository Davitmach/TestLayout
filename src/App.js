
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './page/home/page';
import Footer from './components/shared/footer/footer';
import Header from './components/shared/header/header';
import { Politika } from './page/politika/page';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politika" element={<Politika />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
