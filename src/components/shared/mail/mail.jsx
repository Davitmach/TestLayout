'use client';
import { useRef,useEffect,useState } from 'react';

import './mail.scss';

export const Mail = ()=> {
  const name = useRef(null);
  const rule = useRef(null);
  const number = useRef(null);
  const mail = useRef(null);
const checkbox = useRef(null);
const [submit,setSubmit] = useState(false);
 
  const HandleSubmit = async () => {
    const data = {
      name: name.current.value ?name.current.value :'' ,
      position: rule.current.value ? rule.current.value : '',
      phone: number.current.value ? number.current.value :'',
      email: mail.current.value ? mail.current.value :''
    };
    
  console.log(checkbox.current.checked);
  if(checkbox.current) {
    if(checkbox.current.checked == true) { 
    try {
      const response = await fetch("https://itperfomance.ru/api/sheets/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }
  
    
    } catch (error) {
      console.error("Request failed", error);
    }
  }
  else {
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false)
    }, 2000);
  }
  }
  };
  

  


  useEffect(() => {
    if (checkbox.current) {
      console.log(checkbox.current.checked);
    }
  }, [checkbox]);

    return(
        <div id='Mail' className='Mail_container'>
<div>
<div className='Info_box'>
  <div>
    <div><h1>Вы дошли сюда?</h1></div>
    <div><h2>Тогда оставьте заявку</h2></div>
  </div>
  <div><p>Свяжитесь с нами по почте или оставьте заявку в форме </p></div>
</div>
<div className='Form_box'>
<form action="">
  <div className='Inputs'>
    <input ref={name} type="text" placeholder='Имя' />
    <input ref={rule} type="text" placeholder='Должность' />
    <input ref={number} type="text" placeholder='+7 (000) 000 00-00' />
    <input ref={mail} type="mail" placeholder='Почта'/>
  </div>
  <div className='Btn_box'>
    <div onClick={()=> { 
HandleSubmit()
    }} className='Btn'>{'<Отправить/>'}</div>
 <div className='checkbox'>
    <div>
    <label className="custom-checkbox">
  <input ref={checkbox} type="checkbox"/>
  <span className={submit == true ? 'Active' :''}>
  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5L5.79289 9.79289C6.18342 10.1834 6.81658 10.1834 7.20711 9.79289L16.5 0.5" stroke="#06050F" strokeOpacity="0.3" strokeLinecap="round"/>
</svg>

  </span>
</label>
    </div>
    <div><p>Я согласен с <span>политикой конфиденциальности</span></p></div>
</div>
  </div>
</form>
</div>
</div>
        </div>
    )
}