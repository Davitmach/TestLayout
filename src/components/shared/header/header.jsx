import { useState, useEffect } from 'react';
import './header.scss';
import useStore from '../../../store';


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
setMenuActive(false)
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
          
            <div className="Logo_box" style={{animation:'fadeInLogo .4s ease-in-out forwards'}}><h1>IT Performance</h1></div>
            <div className={`Menu_box ${menuActive ? 'Menu_active' : 'Menu_disable'}`}>
        <div><h1>Стать клиентом</h1></div>
        <div onClick={()=> HandleScroll('#Comand')}><h2>О команде</h2><span>кто мы?</span></div>
        <div onClick={()=> HandleScroll('#Service')}><h2>Услуги</h2><span>что умеем?</span></div>
        <div onClick={()=> HandleScroll('#Contact')}><h2>Контакты</h2><span>поговорим?</span></div>
            </div>

            <div className='to_be_client'><h1>Стать клиентом</h1></div>
            <svg className={menuActive ? 'Btn_active Btn' :'Btn '} onClick={()=> {
                setMenuActive(!menuActive)
            }} width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 1.5H0V0.5H30V1.5Z" fill="#021800"/>
<path d="M30 9.5L10 9.5V8.5L30 8.5V9.5Z" fill="#021800"/>
<path d="M5 17.5H30V16.5H5V17.5Z" fill="#021800"/>
</svg>

        
        </header>
    );
}
