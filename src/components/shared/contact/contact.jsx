import { useState ,useEffect} from 'react';
import './contact.scss';
import useStore from '../../../store';

import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.5,  
      });
    
      const { activeSection, setActiveSection } = useStore();
    
      useEffect(() => {
        
        
        if (inView) {
          setActiveSection(3);  
        }
      }, [inView]);  
    const [active,setActive] = useState('');
    const HandleActive = (payload) => {
        if(payload == active) {
            setActive('')
        }

        else {
        setActive(payload);
        }
    }

    return(
      <div id='Contact' className='Contact_box' ref={ref}>
        <div className="Options_box">
            <div className="Title_box">
                <h2>Как мы работаем? </h2>
                <h1>Несколько шагов до начала проекта</h1>
            </div>
            <div className="Options">
                <div style={{display:'flex'}} className={active == '1'?'Active' :''} onClick={()=> HandleActive('1')}>
                    <div >   <div className="Title">1. Обсуждаем проект, определяем подходим ли мы друг другу 
                    это кто-то из вашей команды и наш проектный менеджер.</div>
                   {active == '1' && <div className="Info_box">
                        <div className="Purple">это кто-то из вашей команды и наш проектный менеджер.</div>
                    </div>}</div>
                    <div><svg style={active == '1' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#CDA5D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                 
                </div>
                <div className={active == '2'?'Active' :''} onClick={()=> HandleActive('2')}>
                    <div> <div className="Title">2. Детализируем ваши хотелки в проекте</div>
                   {active == '2' &&<div className="Info_box">
                        <div className="White">
                        Составляем Техническое задание проекта (ТЗ) - что должно быть реализовано. </div>
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#CDA5D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#CDA5D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Разделы. Наполнение. Функции. Дизайн.    
</div>
                    </div> } 
                    </div>
                    <div><svg style={active == '2' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#CDA5D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
                <div className={active == '3'?'Active' :''} onClick={()=> HandleActive('3')}>
                    <div> <div className='Title'>3. Определяем сроки и бюджет. </div></div>
                    <div><svg style={active == '3' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#CDA5D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
                <div className={active == '4'?'Active' :''} onClick={()=> HandleActive('4')}>
                    <div> <div className='Title'>4. Решаем формальности и приступаем к работе. </div></div>
                    <div><svg style={active == '4' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#CDA5D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
            </div>
            <div className="Mail"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10.5L20 15.5L15 20.5" stroke="rgba(6, 5, 15, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4.5V11.5C4 12.5609 4.42143 13.5783 5.17157 14.3284C5.92172 15.0786 6.93913 15.5 8 15.5H20" stroke="rgba(6, 5, 15, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg><span>Наша почта для связи <b>it.perfonace@gmail.com</b></span>
</div>
        </div>
        <div className="Mail_box">
            <div className='Info_box'>
                <div className="Title_box">
                    <h1>Вы дошли сюда?</h1>
                    <span>тогда оставьте заявку</span>
                </div>
                <div className="Description_box"><p>свяжитесь с нами по почте или оставьте заявку в форме </p></div>
            </div>
            <div className='Form_box'>
                <form action="">
                    <input type="text" placeholder='Ваше имя' />
                    <input type="text" placeholder='Должность' />
                    <input type="text" placeholder='Номер телефона'  />
                    <input type="email" placeholder='почта' />
                    <button type='submit' onClick={(e)=>{e.preventDefault()
            
                    }
                    }><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 10L20.5 15L15.5 20" stroke="#06050F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 4V11C4.5 12.0609 4.92143 13.0783 5.67157 13.8284C6.42172 14.5786 7.43913 15 8.5 15H20.5" stroke="#06050F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
Отправить</button>
<div className='checkbox'>
    <div>
    <label className="custom-checkbox">
  <input type="checkbox"/>
  <span>
  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5L5.79289 9.79289C6.18342 10.1834 6.81658 10.1834 7.20711 9.79289L16.5 0.5" stroke="#06050F" strokeOpacity="0.3" strokeLinecap="round"/>
</svg>

  </span>
</label>
    </div>
    <div><p>Я согласен с <span>политикой конфиденциальности</span></p></div>
</div>
                </form>
            </div>
        </div>
      </div>
    )
}