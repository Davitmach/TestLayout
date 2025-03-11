import './mail.scss';
export const Mail = ()=> {
    return(
        <div className='Mail_container'>
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
    <input type="text" placeholder='Имя' />
    <input type="text" placeholder='Должность' />
    <input type="text" placeholder='+7 (000) 000 00-00' />
    <input type="mail" placeholder='Почта'/>
  </div>
  <div className='Btn_box'>
    <div className='Btn'>{'<Отправить/>'}</div>
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
  </div>
</form>
</div>
</div>
        </div>
    )
}