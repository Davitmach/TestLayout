import { useEffect, useState } from 'react';
import './footer.scss';
import {Link, useLocation} from 'react-router-dom'
export default function Footer() {
    const path = useLocation();
    const [active,setActive] = useState(false);
    const HandleScroll = (page)=> {
        if(path.pathname == '/') {
        document.querySelector(page).scrollIntoView({
            behavior:'smooth',
            block: 'start',
        })
     
        }
    }
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
            <li onClick={()=> HandleScroll('#Comand')}>О команде</li>
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