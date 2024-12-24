import { useState, useEffect } from 'react';
import './header.scss';
import useStore from '../../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faXmark,faCaretRight} from '@fortawesome/free-solid-svg-icons'; 


export default function Header() {
    const [headerActive, setHeader] = useState(false);
    const { activeSection, setActiveSection } = useStore();
const [menuActive,setMenuActive] = useState(false);
   
    const handleActive = (section) => {
        if(menuActive == true) setMenuActive(false)
        setActiveSection(section); 
        
    };

const HandleScroll = (page)=> {
document.querySelector(page).scrollIntoView({
    behavior:'smooth',
    block: 'start',
})

console.log(page);

}
    useEffect(() => {
        const handleScroll = () => {
            
            if (window.scrollY > 209) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
useEffect(()=> {
if(menuActive == true) {
document.body.style.overflow = 'hidden' 

}
else {
    document.body.style.overflow = 'auto' 

}
},[menuActive])
    return (
        <header className={headerActive && menuActive == false ? 'HeaderActive' : ''}>
            <div className="Logo_box" style={{animation:'fadeInLogo .4s ease-in-out forwards'}}><h1>Айти Перфоманс</h1></div>
            <div className={`Menu_box ${menuActive ? 'Menu_active' : 'Menu_disable'}`}>
                <div style={{animation:'shakeMenu .4s ease-in-out forwards'}}
                    className={activeSection === 1 ? 'Active' : ''} 
                    onClick={() => {handleActive(1)
                        HandleScroll('#About')}
                    }
                >
                    <div><h1>О команде</h1></div>
                    <div><h2>кто мы?</h2></div>
                    {menuActive && <FontAwesomeIcon icon={faCaretRight}/>}
                </div>
                <div style={{animation:'shakeMenu .4s .1s ease-in-out forwards'}}
                    className={activeSection === 2 ? 'Active' : ''} 
                    onClick={() => {handleActive(2) 
                        HandleScroll('#Service')}}
                >
                    <div><h1>Услуги</h1></div>
                    <div><h2>что умеем?</h2></div>  {menuActive && <FontAwesomeIcon icon={faCaretRight}/>}
                </div>
                <div style={{animation:'shakeMenu .4s .2s ease-in-out forwards'}}
                    className={activeSection === 3 ? 'Active' : ''} 
                    onClick={() => {handleActive(3)
                        HandleScroll('#Contact')

                    }}
                >
                    <div><h1>Контакты</h1></div>
                    <div><h2>поговорим?</h2></div>
                    {menuActive && <FontAwesomeIcon icon={faCaretRight} />}
                  
                </div>
            </div>
            <FontAwesomeIcon  className={menuActive ? 'Btn_active Btn' :'Btn '} onClick={()=> {
                setMenuActive(!menuActive)
            }} icon={menuActive ? faXmark : faBars}/>
        </header>
    );
}
