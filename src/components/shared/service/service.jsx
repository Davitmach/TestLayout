import { useRef ,useState,useEffect} from "react";
import "./service.scss";

export default function Service() {
  const [active,setActive] = useState('сайт');
  const HandleChange = (state)=> {
    setActive(state)
  }
 
  


  return (
    <>
      <div id="Service" className="Service_box" >
     <div>
<div className="Info_box">
  <div><h1>Наши услуги за ваши деньги</h1></div>
  <div><h2>И деньги, кстати, небольшие</h2></div>
</div>
<div className="About">
<div className="Types">
            <div onClick={()=>HandleChange('сайт')} className={active == 'сайт' && 'Active'}>Создание сайтов</div>
            <div onClick={()=>HandleChange('раз')} className={active == 'раз' && 'Active'}>Разработка ботов</div>
            <div onClick={()=>HandleChange('веб')} className={active == 'веб' && 'Active'}>Веб-дизайн</div>
            <div onClick={()=>HandleChange('ии')} className={active == 'ии' && 'Active'}>Интеграция ИИ</div>
            <div onClick={()=>HandleChange('моб')} className={active == 'моб' && 'Active'}>Мобильные приложения</div>
          </div>
  <div className="Right_box">
    <div><p>Мы — профессиональная студия, специализирующаяся на создании современных, функциональных и стильных сайтов. Наша команда дизайнеров, разработчиков и маркетологов готова воплотить ваши идеи в жизнь, создав уникальный цифровой продукт, который будет привлекать клиентов и решать бизнес-задачи.</p></div>
    <div className="Predlagat">
      <div><h1>Что мы предлагаем:</h1></div>
      <div>
        <div>Индивидуальный дизайн</div>
        <div>Разработка сайтов под ключ</div>
        <div>Адаптивность и кроссбраузерность</div>
        <div>SEO-оптимизация</div>
        <div>Техническая поддержка</div>
      </div>
    </div>
    <div className="Process">
      <div><h1>Процесс создания:</h1></div>
      <div>
        <div>
          <div>
            <div><span>01</span></div>
            <div>Индивидуальный дизайн</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>02</span></div>
            <div>Прототипирование и дизайн</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>03</span></div>
            <div>Верстка и программирование</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>03</span></div>
            <div>Верстка и программирование</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>04</span></div>
            <div>Запуск и поддержка</div>
          </div>
        </div>
      </div>
    </div>
    <div className="Btn">{'<Заказать/>'}</div>
  </div>
</div>
     </div> 
      </div>
    </>
  );

}
