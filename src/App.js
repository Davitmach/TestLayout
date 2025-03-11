
import './App.scss';
import About from './components/shared/about/about';
import Banner from './components/shared/banner/banner';
import Contact from './components/shared/contact/contact';
import Footer from './components/shared/footer/footer';
import Header from './components/shared/header/header';
import { Mail } from './components/shared/mail/mail';
import Projects from './components/shared/projects/projects';
import Service from './components/shared/service/service';

function App() {
  return (
 <main >
 <Header/>
 <Banner/>
 <Projects/>
 <Service/>

 <Contact/>
 <Mail/>
 </main>
  );
}

export default App;
