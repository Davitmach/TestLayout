'use client';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './mail.scss';

export const Mail = () => {
  const name = useRef(null);
  const rule = useRef(null);
  const number = useRef(null);
  const mail = useRef(null);
  const checkbox = useRef(null);
  const [submit, setSubmit] = useState(false);
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePhoneNumber = (value) => {
    // Убираем все нецифровые символы, оставляем только цифры
    const cleaned = value.replace(/\D/g, '');

    // Проверка: номер должен состоять из цифр (минимум 10 цифр после кода страны)
    const phoneRegex = /^\d{1,15}$/;

    return phoneRegex.test(cleaned);
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!name.current.value.trim()) newErrors.name = 'Введите имя';
    if (!rule.current.value.trim()) newErrors.rule = 'Введите должность';
    if (!number.current.value.trim() || number.current.value.length < 10 || !validatePhoneNumber(number.current.value)) newErrors.number = 'Введите корректный номер';
    if (!mail.current.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.current.value)) newErrors.mail = 'Введите корректную почту';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const HandleSubmit = async () => {
    if (!validateInputs()) return;
    const data = {
      name: name.current.value,
      position: rule.current.value,
      phone: number.current.value,
      email: mail.current.value
    };
    
    if (checkbox.current.checked) {
      try {
        const response = await fetch("https://itperfomance.ru/api/sheets/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        setActive(true);
        if (!response.ok) {
          throw new Error("Error: " + response.statusText);
        }
      } catch (error) {
        console.error("Request failed", error);
      }
    } else {
      setSubmit(true);
      setTimeout(() => setSubmit(false), 2000);
    }
  };

  useEffect(() => {
    if (active) {
      setTimeout(() => setActive(false), 3000);
    }
  }, [active]);

  const formatPhoneNumber = (value) => {
    // Убираем все нецифровые символы и пробелы
    const cleaned = value.replace(/\D/g, '');

    // Если строка пустая, возвращаем пустое значение
    if (cleaned.length === 0) return '';

    // Форматируем номер в международный вид без скобок и дефисов
    let formatted = '+' + cleaned.charAt(0);
    if (cleaned.length > 1) formatted += cleaned.substring(1, 4);
    if (cleaned.length >= 4) formatted += cleaned.substring(4, 7);
    if (cleaned.length >= 7) formatted += cleaned.substring(7, 9);
    if (cleaned.length >= 9) formatted += cleaned.substring(9, 11);

    return formatted;
  };

  return (
    <div id='Mail' className='Mail_container'>
      <div>
        <div className='Info_box'>
          <div>
            <h1>Вы дошли сюда?</h1>
            <h2>Тогда оставьте заявку</h2>
          </div>
          <p>Свяжитесь с нами по почте или оставьте заявку в форме</p>
        </div>
        <div className='Form_box'>
          <form>
            <div className='Inputs'>
              <input ref={name} type="text" placeholder='Имя' className={errors.name ? 'error' : ''} />
              <span>{errors.name}</span>
              <input ref={rule} type="text" placeholder='Должность' className={errors.rule ? 'error' : ''} />
              <span>{errors.rule}</span>
              <input ref={number} type="text" placeholder='+7 000 000 00 00' className={errors.number ? 'error' : ''}
                maxLength={16} // Ограничиваем количество символов
                onInput={(e) => {
                  // Форматируем номер на лету
                  e.target.value = formatPhoneNumber(e.target.value);
                }} />
              <span>{errors.number}</span>
              <input ref={mail} type="email" placeholder='Почта' className={errors.mail ? 'error' : ''} />
              <span>{errors.mail}</span>
            </div>
            <div className='Btn_box'>
              <div onClick={HandleSubmit} className='Btn'>{'<Отправить/>'}</div>
              <div className='checkbox'>
                <label className="custom-checkbox">
                  <input ref={checkbox} type="checkbox" />
                  <span className={submit ? 'Active' : ''}>
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5.79289 9.79289C6.18342 10.1834 6.81658 10.1834 7.20711 9.79289L16.5 0.5" stroke="#06050F" strokeOpacity="0.3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </label>
                <p>Я согласен с <span><Link to={'/politika'}>политикой конфиденциальности</Link></span></p>
              </div>
            </div>
          </form>
        </div>
        <div className={`Push ${active == true ?'Push_Active' : 'Push_Disable'}  `} >
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10.5 20.625C16.0919 20.625 20.625 16.0919 20.625 10.5C20.625 4.90812 16.0919 0.375 10.5 0.375C4.90812 0.375 0.375 4.90812 0.375 10.5C0.375 16.0919 4.90812 20.625 10.5 20.625ZM15.7682 7.76518C16.1218 7.34091 16.0645 6.71034 15.6402 6.35678C15.2159 6.00321 14.5853 6.06054 14.2318 6.48482L10.0088 11.5524C9.66211 11.9684 9.46719 12.1988 9.31158 12.3403L9.30563 12.3457L9.29922 12.3409C9.13143 12.214 8.91646 12.0022 8.5335 11.6193L6.70711 9.79289C6.31658 9.40237 5.68342 9.40237 5.29289 9.79289C4.90237 10.1834 4.90237 10.8166 5.29289 11.2071L7.11928 13.0335L7.16012 13.0743L7.16014 13.0744C7.48663 13.401 7.80071 13.7152 8.09294 13.9361C8.4203 14.1837 8.84902 14.4165 9.39843 14.3915C9.94784 14.3666 10.3537 14.096 10.6573 13.8198C10.9284 13.5733 11.2127 13.2319 11.5083 12.8771L11.5453 12.8327L15.7682 7.76518Z" fill="#0C2200"/>
</svg>
<h1>Ваша заявка успешно отправлена</h1>

</div>
      </div>
    </div>
  );
};
