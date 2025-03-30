import { useState, useEffect } from 'react';
import './header.scss';
import useStore from '../../../store';
import {Link,useLocation, useNavigate} from 'react-router-dom'

export default function Header() {
    const path = useLocation();
    const [headerActive, setHeader] = useState(false);
    const [active,setActive] = useState(false)
    const { activeSection, setActiveSection } = useStore();
const [menuActive,setMenuActive] = useState(false);
   const nav = useNavigate();
   const HandleScroll = (page) => {
    if (path.pathname === '/') {
      const targetElement = document.querySelector(page);
      const header = document.querySelector('header'); // Получаем элемент header
      if (targetElement && header) {
        // Получаем высоту header
        const headerHeight = header.offsetHeight;
  
        // Получаем позицию элемента
        const position = targetElement.getBoundingClientRect();
  
        // Прокручиваем страницу с учётом высоты header
        window.scrollTo({
          top: position.top + window.pageYOffset - headerHeight, // Учитываем высоту header
          left: 0,
          behavior: 'smooth',
        });
        setMenuActive(false);
      }
    } else {
      // Переход на другую страницу
      nav(`/`);
      setTimeout(() => {
        const targetElement = document.querySelector(page);
        const header = document.querySelector('header');
        if (targetElement && header) {
          // Получаем высоту header
          const headerHeight = header.offsetHeight;
  
          // Получаем позицию элемента
          const position = targetElement.getBoundingClientRect();
  
          // Прокручиваем страницу с учётом высоты header
          window.scrollTo({
            top: position.top + window.pageYOffset - headerHeight,
            left: 0,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  };



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
useEffect(()=> {
if(path.pathname.includes('case')) {
    setActive(true)
}
else {
    setActive(false)
}
},[path])
    return (
        <>
        <header style={{background:active ? '#FFFFFF':'#E8FE74'}} className={headerActive && menuActive == false ? 'HeaderActive' : ''}>
          
            <div className="Logo_box"
            //  style={{animation:'fadeInLogo .4s ease-in-out forwards'}}
             ><h1><Link to={'/'}> IT Performance</Link></h1></div>
            <div className={`Menu_box ${menuActive ? 'Menu_active' : 'Menu_disable'}`}>
        <div onClick={()=> HandleScroll('#Mail')}  >Стать клиентом</div>
        <div  onClick={()=> HandleScroll('#Service')}><h2>О команде</h2><span>кто мы?</span></div>
        <div  onClick={()=> HandleScroll('#Comand')}><h2>Кейсы</h2><span>Наш опыт</span></div>
        <div  onClick={()=> HandleScroll('#Service')}><h2>Услуги</h2><span>что умеем?</span></div>
        <div  onClick={()=> HandleScroll('#Contact')}><h2>Контакты</h2><span>поговорим?</span></div>
        <div><svg  onClick={() => window.open("https://t.me/itperfomanceru", "_blank")}   style={{ cursor: "pointer" }} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2894_1221)">
<path fillRule="evenodd" clipRule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM24.8601 17.7179C22.5257 18.6888 17.8603 20.6984 10.8638 23.7466C9.72766 24.1984 9.13251 24.6404 9.07834 25.0726C8.98677 25.803 9.90142 26.0906 11.1469 26.4822C11.3164 26.5355 11.4919 26.5907 11.6719 26.6492C12.8973 27.0475 14.5457 27.5135 15.4026 27.5321C16.1799 27.5489 17.0475 27.2284 18.0053 26.5707C24.5423 22.158 27.9168 19.9276 28.1286 19.8795C28.2781 19.8456 28.4852 19.803 28.6255 19.9277C28.7659 20.0524 28.7521 20.2886 28.7372 20.352C28.6466 20.7383 25.0562 24.0762 23.1982 25.8036C22.619 26.3421 22.2081 26.724 22.1242 26.8113C21.936 27.0067 21.7443 27.1915 21.56 27.3692C20.4215 28.4667 19.5678 29.2896 21.6072 30.6336C22.5873 31.2794 23.3715 31.8135 24.1539 32.3463C25.0084 32.9282 25.8606 33.5085 26.9632 34.2313C27.2442 34.4155 27.5125 34.6068 27.7738 34.7931C28.7681 35.5019 29.6615 36.1388 30.7652 36.0373C31.4065 35.9782 32.0689 35.3752 32.4053 33.5767C33.2004 29.3263 34.7633 20.1169 35.1244 16.3219C35.1561 15.9895 35.1163 15.5639 35.0843 15.3771C35.0523 15.1904 34.9855 14.9242 34.7427 14.7272C34.4552 14.4939 34.0113 14.4447 33.8127 14.4482C32.91 14.4641 31.5251 14.9456 24.8601 17.7179Z" fill="#162C00"/>
</g>
<defs>
<clipPath id="clip0_2894_1221">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>


</div>

<svg   onClick={() => setMenuActive(!menuActive)}   className='Btn_close' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L31 31M31 1L1 31" stroke="#021800"/>
</svg>
            </div>

            <div className='to_be_client'>
                <div className='Client' onClick={()=>HandleScroll('#Mail')} >Стать клиентом</div>
                <div className='Case'  onClick={()=>HandleScroll('#Comand')} >Кейсы</div>
                <div className='Service'  onClick={()=>HandleScroll('#Service')}>Услуги</div>
                </div>
            
            {menuActive ==false &&<svg 
  onClick={() => setMenuActive(!menuActive)} 
  className="Btn" 
  width={ "30"} 
  height={"18"} 
  viewBox={"0 0 30 18"} 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"    
>

      <path d="M30 1.5H0V0.5H30V1.5Z" fill="#021800"/>
      <path d="M30 9.5L10 9.5V8.5L30 8.5V9.5Z" fill="#021800"/>
      <path d="M5 17.5H30V16.5H5V17.5Z" fill="#021800"/>
     
</svg>}


        
        </header>
       {menuActive  &&  <div className="bg"></div>}
        </>
    );
}
