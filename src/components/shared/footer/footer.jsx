import { useEffect, useState } from 'react';
import './footer.scss';
import {Link, useLocation, useNavigate} from 'react-router-dom'
export default function Footer() {
    const path = useLocation();
    const [active,setActive] = useState(false);
    const nav = useNavigate()
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
          
          }
        } else {
          // Переход на другую страницу
          nav(`/`)
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
          }, 100);;
        }
      };
    useEffect(()=> {
if(path.pathname.includes('case')) {
    setActive(true)
    
}
else {
    setActive(false)
}
    },[path])
    if(active == false) {
    return(
       <footer>
   <div>
    <div className='Logo'><Link to={'/'}>IT Performance</Link></div>
    <div className='C'>©IT Performance 2025</div>
   </div>
   <div>
    <div>
        <ul>
            <li onClick={()=> HandleScroll('#Service')}>О команде</li>
            <li onClick={()=> HandleScroll('#Comand')}>Кейсы</li>
            <li onClick={()=> HandleScroll('#Service')}>Услуги</li>
            <li onClick={()=> HandleScroll('#Contact')}>Контакты</li>
        </ul>
    </div>
    <div className='Politika'><Link to={'/politika'}>Политика конфиденциальности</Link></div>
    <div className='C_Low_res'>©IT Performance 2025</div>
   </div>
       </footer>
    )
}
else {
    return(
        <></>
    )
}
}