import About from '../../components/shared/about/about';
import Banner from '../../components/shared/banner/banner';
import Contact from '../../components/shared/contact/contact';
import { Mail } from '../../components/shared/mail/mail';
import Projects from '../../components/shared/projects/projects';
import Service from '../../components/shared/service/service';
export const Home = ()=> {
    return(
         < >
        
         <Banner/>
         <Projects/>
         <Service/>
        
         <Contact/>
         <Mail/>
         </>
    )
}