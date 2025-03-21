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
        <div>
        <div className="Options_box">
            <div className="Title_box">
                <h2>Как мы работаем? </h2>
                <h1>Несколько шагов до начала проекта</h1>
            </div>
            <div className="Options">
                <div style={{display:'flex'}} className={active == '1'?'Active' :''} onClick={()=> HandleActive('1')}>
                    <div >   <div className="Title">1. Обсуждаем проект, определяем подходим ли мы друг другу. </div>
                   {active == '1' && <div className="Info_box">
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Если сайт или приложение выглядит устаревшим, неудобным или перегруженным, пользователь закроет его, так и не разобравшись, что вы предлагаете</div>
                    </div>}</div>
                    <div><svg style={active == '1' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                 
                </div>
                <div className={active == '2'?'Active' :''} onClick={()=> HandleActive('2')}>
                    <div> <div className="Title">2. Детализируем ваши хотелки в проекте</div>
                   {active == '2' &&<div className="Info_box">
                        <div className="White">
                       </div>
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Если сайт или приложение выглядит устаревшим, неудобным или перегруженным, пользователь закроет его, так и не разобравшись, что вы предлагаете 
</div>
                    </div> } 
                    </div>
                    <div><svg style={active == '2' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
                <div className={active == '3'?'Active' :''} onClick={()=> HandleActive('3')}>
                    <div> <div className="Title">4. Определяем сроки и бюджет. </div>
                   {active == '3' &&<div className="Info_box">
                        <div className="White">
                       </div>
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Если сайт или приложение выглядит устаревшим, неудобным или перегруженным, пользователь закроет его, так и не разобравшись, что вы предлагаете 
</div>
                    </div> } 
                    </div>
                    <div><svg style={active == '3' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
                <div className={active == '4'?'Active' :''} onClick={()=> HandleActive('4')}>
                    <div> <div className="Title">4. Решаем формальности и приступаем к работе.</div>
                   {active == '4' &&<div className="Info_box">
                        <div className="White">
                       </div>
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Если сайт или приложение выглядит устаревшим, неудобным или перегруженным, пользователь закроет его, так и не разобравшись, что вы предлагаете 
</div>
                    </div> } 
                    </div>
                    <div><svg style={active == '4' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
            </div>
            <div className="Btn"><a href="mailto:hello@itperfomance.ru">{'<Написать нам на почту/>'}</a></div>
 
        </div>
       
      </div></div>
    )
}